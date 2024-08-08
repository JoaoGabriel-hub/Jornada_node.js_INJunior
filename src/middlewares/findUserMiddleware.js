//Inclusão dos controllers
const userController = require('../controllers/userController');

function findUser(req, res, next){
    //Find user
    const { id } = req.params;
    const user = userController.usersBase.find((user)=>user.id === id);

    if(!user){
        return res.status(404).json({error: "User not found!"});
    }

    req.user = user;

    return next();
}

module.exports = findUser;