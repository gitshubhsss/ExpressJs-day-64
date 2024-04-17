const express=require("express");
const app=express();

app.listen(8080,()=>{
    console.log(`app is listening on the post 8080`);
})

//setting the view engine
const path=require("path")
app.set("views",path.join(__dirname,"/views"))//to run the folder outside of the directory
app.set("view engine","ejs")


//require data.json
const instaDB=require("./data.json");

app.use(express.static(path.join(__dirname,"public/CSS")))
app.use(express.static(path.join(__dirname,"public/JS")))


app.get("/instagram/:username",(req,res)=>{
    const {username}=req.params;
    const Igdata=instaDB[username]
    if(Igdata){
        res.render("instagram.ejs",{username,Igdata})
    }
    else{
        res.render("error.ejs")
    }
})
