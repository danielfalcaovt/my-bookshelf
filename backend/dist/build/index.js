/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import env from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { createClient } from "../../node_modules/redis/dist/index";
import pg from "pg";
env.config();
const { Pool } = pg;
const client = createClient({
    password: process.env.REDIS_PASSWORD || '',
    socket: {
        host: "redis-15162.c308.sa-east-1-1.ec2.redns.redis-cloud.com",
        port: 15162,
    },
});
const db = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    port: Number(process.env.PG_PORT),
    password: process.env.PG_PASSWORD
});
const app = express();
const port = 5500;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get('/redis', async (req, res) => {
    const sentKey = await client.set('chave_random', 'anything');
    console.log(sentKey);
    const key = await client.get('chave_random');
    res.json({ key });
});
app.get("/getData", async (req, res) => {
    try {
        const booksJSON = await db.query("SELECT * FROM books");
        const books = booksJSON.rows;
        res.json({ data: books });
    }
    catch (err) {
        console.log(err.message);
    }
});
app.post("/getData", async (req, res) => {
    try {
        const userSearched = req.body.searching;
        const searched = await db.query(`SELECT * FROM books WHERE LOWER(bookname) LIKE '${userSearched.toLowerCase()}%'` // sql injection
        );
        const result = searched.rows;
        res.json({ data: result });
    }
    catch (err) {
        console.log(err.message);
        res.json({ error: "Data not found." });
    }
});
app.listen(port, () => {
    console.log(`Server is running in ${port} port.`);
});
//# sourceMappingURL=index.js.map