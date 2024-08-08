const express = require('express');

const userRoutes = express.Router();

//Inclusão dos middlewares
const checkUserExists = require('../middlewares/checkUserExistsMiddleware');
const findUser = require('../middlewares/findUserMiddleware');


//Inclusão dos controllers
const userController = require('../controllers/userController');


// Criar usuário
userRoutes.post('/', checkUserExists, (req, res) => userController.createUser(req, res));


//Listar usuários
userRoutes.get('/', (req, res) => userController.listUsers(req, res));


//Buscar user pelo id (route params)
userRoutes.get('/:id', findUser, (req, res) => userController.getUser(req, res));


//Atualizar usuário
userRoutes.patch('/:id', findUser, (req, res) => userController.updateUser(req, res));


//Tornar um usuário admin
userRoutes.patch('/admin/:id', findUser, (req, res) => userController.makeUserAdmin(req, res));


//Deletar usuário
userRoutes.delete('/:id', findUser, (req, res) => userController.deleteUser(req, res));


module.exports = userRoutes;