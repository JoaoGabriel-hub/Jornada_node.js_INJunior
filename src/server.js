const express = require('express');
const { v4:uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

const usersBase = [];


// Criar usuário e checar se ele já existe
app.post('/users', (req, res) => {
    const { username } = req.body;
    const id = uuidv4();

    const userAlreadyExists = usersBase.some((user)=>user.username === username);

    if (userAlreadyExists) {
        return res.status(400).json({error: "User already exists!"});
    }

    usersBase.push({
        id,
        username,
        isAdmin: false
    });

    return res.status(201).json(usersBase);

});

//Listar usuários
app.get('/users', (req, res)=>{
    return res.status(200).json(usersBase);
});

//Buscar user pelo id (route params)
app.get('/users/:id', (req, res)=> {
    const { id } = req.params;

    const user = usersBase.find((user)=>user.id === id);

    if (user){
        return res.status(200).json(user);
    }
});

app.listen(3333, ()=>{
    console.log("Nosso servidor está rodando.");
});