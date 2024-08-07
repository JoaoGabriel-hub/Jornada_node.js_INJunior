const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello, World, Node.Js!');
})

app.listen(3333, ()=>{
    console.log("Nosso servidor está rodando");
})