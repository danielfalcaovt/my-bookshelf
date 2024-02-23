var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import env from "dotenv";
import cors from "cors";
import pg from "pg";
import bodyParser from "body-parser";
env.config();
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
db.connect();
const app = express();
const port = 5500;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield db.query("SELECT * FROM books");
    const books = data.rows;
    res.render("index.ejs", {
        data: books,
    });
}));
app.get("/getData", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield db.query("SELECT * FROM books");
    const books = data.rows;
    res.json({ data: books });
}));
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userSearched = req.body.search.trim();
    try {
        console.log("HERE");
        const searched = yield db.query(`SELECT * FROM books WHERE LOWER(bookname) LIKE '${userSearched.toLowerCase()}%'`);
        const result = searched.rows;
        console.log(result);
        res.render("index.ejs", {
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.redirect("/");
    }
}));
app.post("/getData", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const userSearched = req.body.searching;
    try {
        const searched = yield db.query(`SELECT * FROM books WHERE LOWER(bookname) LIKE '${userSearched.toLowerCase()}%'`);
        const result = searched.rows;
        res.json({ data: result });
    }
    catch (err) {
        console.log(err);
        res.json({ error: "Data not found." });
    }
}));
app.listen(port, () => {
    console.log(`Server is running in ${port} port.`);
});
