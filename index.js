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

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))


app.get("/", async (req,res)=>{
    const data = await db.query("SELECT * FROM books")
    const books = data.rows
    res.render("index.ejs",{
       data:books
    })
})
app.post("/", async (req,res)=>{
    let userSearched = req.body.search.trim()
    try{
        console.log("HERE");
        const searched = await db.query(`SELECT * FROM books WHERE LOWER(bookname) LIKE '${userSearched.toLowerCase()}%'`)
        const result = searched.rows
        console.log(result);
        res.render("index.ejs",{
            data:result
        })}
    catch(err){
        console.log(err);
        res.redirect("/")
    }
})

app.listen(port,()=>{
    console.log(`Server is running in ${port} port.`);
})