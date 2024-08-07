const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.send('Hello, World, Node.Js!');
})

app.listen(port, ()=>{
    console.log("Nosso servidor está rodando na porta", port);
})