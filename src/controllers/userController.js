const User = require('../models/user');

//Criar um usuário
async function createUser(request, response){
    try {
        const { username } = request.body;

        const user = User.create({
            username,
        })
    
        return response.status(201).json(user);
        
    } catch (error) {
        return response.status(400).json({error: "Não foi possível criar o usuário."});
    }
};

//Listar usuários
async function listUsers(request, response){
    try {
        const users = await User.findAll(); 
        return response.status(200).json(users);
    } catch (error) {
        return response.status(500).json({ error: "Erro ao listar os usuários!" });
    }
}


//Buscar usuário pelo id
function getUser(request, response){
    const user = request.user;
    return response.status(200).json(user);
}

//Atualizar usuário
async function updateUser(request, response){
    try {
        const { username } = request.body;
        const { user } = request;

        const userUpdated = await user.update({ username });

        return response.status(200).json(userUpdated);
        
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
        return response.status(200).json(userUpdated);
        
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
    deleteUser
}
