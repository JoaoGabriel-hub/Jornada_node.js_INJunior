const User = require('../models/user');

const usersBase = [];

//Criar um usuário
async function createUser(request, response){
    try {
        const { username } = request.body;

        const user = User.create({
            username
        })
    
        return response.status(201).json(usersBase.toJson());

    } catch (error) {
        return response.status(400).json({error: "Não foi possível criar o usuário."});
    }
};

//Listar usuários
function listUsers(request, response){
    return response.status(200).json(usersBase.toJson());
}

//Buscar usuário pelo id
function getUser(request, response){
    const user = request.user;
    return response.status(200).json(user.toJson());
}

//Atualizar usuário
async function updateUser(request, response){
    try {
        const user = request.user;

        const { username} = request.body;
        const userUpdated = await user.update({ username });

        response.status(200).json(userUpdated.toJson());
        
    } catch (error) {
        return response.status(500).json({ error: "Erro ao atualizar o usuário!" });
    }
    
}

//Tornar usuário admin
async function makeUserAdmin(request, response){
    try {
        const user = request.user;

        if(user.isAdmin === true){
            return response.status(400).json({error: "User is already a admin!"});
        }

        const userUpdated = await user.update({ isAdmin: true });
        return response.status(200).json(userUpdated.toJson());
        
    } catch (error) {
        return response.status(500).json({ error: "Erro ao tornar usuário Admin!" })
    }
    
}

//Deletar usuário
async function deleteUser(request, response){
    try {
        const user = request.user;

        await user.destroy();

        return response.status(204).send();
    } catch (error) {
        return response.status(500).json({ error: "Erro ao deletar usuário!" })
    }
    
}

module.exports = {
    createUser,
    listUsers,
    getUser,
    updateUser,
    makeUserAdmin,
    deleteUser,
    usersBase
}
