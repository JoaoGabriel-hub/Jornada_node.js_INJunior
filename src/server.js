const express = require('express');
const { v4:uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

const usersBase = [];

app.post('/users', (req, res) => {
    const { username } = req.body;
    const id = uuidv4();

    usersBase.push({
        id,
        username,
        isAdmin: false
    });

    return res.status(201).json(usersBase);

});

app.listen(3333, ()=>{
    console.log("Nosso servidor está rodando.");
});