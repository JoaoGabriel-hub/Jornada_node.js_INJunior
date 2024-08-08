const { v4:uuidv4 } = require('uuid');

const usersBase = [];

//Criar um usuário
function createUser(request, response){
    const { username } = request.body;
    const id = uuidv4();

    usersBase.push({
        id,
        username,
        isAdmin: false
    });

    return response.status(201).json(usersBase);
};

//Listar usuários
function listUsers(request, response){
    return response.status(200).json(usersBase);
}

//Buscar usuário pelo id
function getUser(request, response){
    const user = request.user;
    return response.status(200).json(user);
}

//Atualizar usuário
function updateUser(request, response){
    const user = request.user;

    const { username} = request.body;
    user.username = username;

    response.status(200).json(user);
}

//Tornar usuário admin
function makeUserAdmin(request, response){
    const user = request.user;

    if(user.isAdmin === true){
        return response.status(400).json({error: "User is already a admin!"});
    }

    user.isAdmin = true;
    return response.status(200).json(user);
}

//Deletar usuário
function deleteUser(request, response){
    const user = request.user;

    const index = usersBase.indexOf(user);

    if (index === -1){
        return response.status(404).json({error: "User not found!"});
    }

    usersBase.splice(index, 1);
    return response.status(204).send();
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
