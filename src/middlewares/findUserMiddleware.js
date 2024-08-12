//Inclusão dos controllers
const User = require('../models/user');

async function findUser(req, res, next){
    try {
    //Find user
    const { id } = req.params;

    const user = await User.findByPk(userId);

    if(!user){
        return res.status(404).json({error: "User not found!"});
    }

    req.user = user;

    return next();
        
    } catch (error) {
        return response.status(500).json({ error: "Erro ao achar o usuário!" });
    }
}

module.exports = findUser;