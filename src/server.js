const express = require('express');
const { v4:uuidv4 } = require('uuid');
const app = express();

const router = require('./routes/index');

app.use(express.json());

app.use(router);

const usersBase = [];

app.listen(3333, ()=>{
    console.log("Nosso servidor está rodando.");
});