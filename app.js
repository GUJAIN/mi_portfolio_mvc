const express = require("express");
const app = express();
const path = require("path")
const port = 3000 ;

const router = require("./routers/main")

app.use(express.static(path.join(__dirname,"public")));


app.get("/",router )

app.listen(port, ()=>{
    console.log(`Servidor funcionando en http://localhost:${port}`);
});