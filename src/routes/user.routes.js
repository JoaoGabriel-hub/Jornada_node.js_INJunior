const express = require('express');

const userRoutes = express.Router();

//Inclusão dos middlewares
const checkUserExists = require('../middlewares/checkUserExistsMiddleware');
const findUser = require('../middlewares/findUserMiddleware');

// Criar usuário
userRoutes.post('/', checkUserExists, (req, res) => {
    const { username } = req.body;
    const id = uuidv4();

    usersBase.push({
        id,
        username,
        isAdmin: false
    });

    return res.status(201).json(usersBase);
});


//Listar usuários
userRoutes.get('/', (req, res)=>{
    return res.status(200).json(usersBase);
});


//Buscar user pelo id (route params)
userRoutes.get('/:id', findUser, (req, res)=> {
    const user = req.user;
    return res.status(200).json(user);
});


//Atualizar usuário
userRoutes.patch('/:id', findUser, (req, res)=>{
    const user = req.user;

    const { username} = req.body;
    user.username = username;

    res.status(200).json(user);
});


//Tornar um usuário admin
userRoutes.patch('/admin/:id', findUser, (req, res)=>{
    const user = req.user;

    if(user.isAdmin === true){
        return res.status(400).json({error: "User is already a admin!"});
    }

    user.isAdmin = true;
    return res.status(200).json(user);
})


//Deletar usuário
userRoutes.delete('/:id', findUser, (req, res)=>{
    const user = req.user;

    const index = usersBase.indexOf(user);

    if (index === -1){
        return res.status(404).json({error: "User not found!"});
    }

    usersBase.splice(index, 1);
    return res.status(204).send();
})

module.exports = userRoutes;