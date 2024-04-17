const express=require("express");
const app=express();
//listen server
app.listen(8080,()=>{
    console.log("server is listening on the port 8080");
})

app.set("view engine","ejs");

app.get("/dice",(req,res)=>{

    let randNum=Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceNum:randNum})
})



