//import express module
const express = require("express");
//create the rest object

const app= express();

//create the get request
app.get("/demo1",(req,res)=>{
    res.send({"message":"Welcome to Demo1 Request"})
});
//assign the port no
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started successfully !!!");
});
