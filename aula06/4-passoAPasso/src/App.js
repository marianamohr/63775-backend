const express = require("express");

const app = express()

app.get("/", (request,response)=>{
    response.status(200).json({message: "Hello Amigos Backenders!"})
});

module.exports = app;