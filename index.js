import express from "express";
import ejs from "ejs";
import pg from "pg";
import axios from "axios";
import bodyParser from "body-parser";

const db = new pg.Client({
     user: "postgres",
     host: "localhost",
     database: "my-bookshelf",
     password: "brbr109br",
     port : 5432   
})

db.connect();
 

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))


app.get("/", async(req,res)=>{
    const data = await db.query("SELECT * FROM books")
    const books = data.rows
    res.render("index.ejs",{
       data:books,
    })
})

app.listen(port,()=>{
    console.log(`Server is running in ${port} port.`);
})