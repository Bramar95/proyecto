const express= require("express");
const app= express();
const path=require("path");

const staticFiles= express.static(path.join(__dirname, ("public")));
app.use(staticFiles);

app.listen(5000, ()=> console.log("Corriendo en el servidor 5000"));

app.get("/", (req, res)=>{
    let pathIndex= path.join(__dirname, "/views/index.html");
    res.sendFile(pathIndex);
});


