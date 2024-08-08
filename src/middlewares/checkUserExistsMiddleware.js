function checkUserExists(req, res, next){
    const { username } = req.body;
    
    const userAlreadyExists = usersBase.some((user)=>user.username === username);

    if (userAlreadyExists) {
        return res.status(400).json({error: "User already exists!"});
    }

    return next();
}

module.exports = checkUserExists;