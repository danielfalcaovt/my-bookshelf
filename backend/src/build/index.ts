import express from "express";
import ejs from "ejs";
import env from "dotenv";
import cors from "cors";
import pg from "pg";
import axios from "axios";
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

app.get("/", async (req, res) => {
    const data = await db.query("SELECT * FROM books");
    const books = data.rows;
    res.render("index.ejs", {
        data: books,
    });
});

app.get("/getData", async (req, res) => {
    const data = await db.query("SELECT * FROM books");
    const books = data.rows;
    console.log(req.body);
    res.json({ data: books });
});

app.post("/", async (req, res) => {
    const userSearched:string = req.body.search.trim();
    try {
        console.log("HERE");
        const searched = await db.query(
            `SELECT * FROM books WHERE LOWER(bookname) LIKE '${userSearched.toLowerCase()}%'`
        );
        const result = searched.rows;
        console.log(result);
        res.render("index.ejs", {
            data: result,
        });
    } catch (err) {
        console.log(err);
        res.redirect("/");
    }
});
app.post("/getData",async(req,res)=>{
    const userSearched:string = req.body.search.trim();
    try {
        const searched = await db.query(
            `SELECT * FROM books WHERE LOWER(bookname) LIKE '${userSearched.toLowerCase()}%'`
        );
        const result = searched.rows;
            res.json({data:result})
    } catch (err) {
        console.log(err);
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Server is running in ${port} port.`);
});
