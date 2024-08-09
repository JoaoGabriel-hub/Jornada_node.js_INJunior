const User = require("../models/user");

async function checkUserExists(req, res, next){
    try {
        const { username } = req.body;
    
        const userAlreadyExists = await User.findAll({
            where: {
                username,
            }
        })

        if (userAlreadyExists) {
            return res.status(400).json({error: "User already exists!"});
        }

        return next();
        
    } catch(error) {
        return response(500).json({error: "Erro ao checar se o usuário existe."});
    }
}

module.exports = checkUserExists;