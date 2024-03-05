import express, {Request,Response,Error} from "express";
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



app.get("/getData", async (req:Request, res:Response) => {
    try{
        const booksJSON = await db.query("SELECT * FROM books");
        const books = booksJSON.rows;
        res.json({ data: books });
    }catch(err:Error) {
        console.log(err.message);
    }
});

app.post("/getData", async (req:Request, res:Response) => {
    try {
    const userSearched: string = req.body.searching;
        const searched = await db.query(
            `SELECT * FROM books WHERE LOWER(bookname) LIKE '${userSearched.toLowerCase()}%'`
        );
        const result = searched.rows;
        res.json({ data: result });
    } catch (err:Error) {
        console.log(err.message);
        res.json({ error: "Data not found." });
    }
});

app.listen(port, () => {
    console.log(`Server is running in ${port} port.`);
});
