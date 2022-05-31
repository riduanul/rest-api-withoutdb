let users = require('../models/usersModel');
const {  v4: uuidv4} = require('uuid')

// get all users
getAllUsers = (req, res) => {
    res.status(200).json({
        success: true,
        users,
    })
}


// create user
createUser = (req, res) => {
     
const newUser = {
    id: uuidv4(),
    username : req.body.username,
    email : req.body.email
    }
    users.push(newUser);
    res.status(201).json({
        success: true,
        users,
    })
}

// update user
updateUser = (req, res) => {
    const userId = req.params.id;
    const {username, email} = req.body;
    users.filter((user) => user.id === userId).map((selectedUser) => {
        selectedUser.username = username;
        selectedUser.email = email;
    })
    res.status(200).json({
        success: true,
        users,
    })
}
// delete user
deleteUser = (req, res) => {
    const userId = req.params.id;
   
    users = users.filter((user) => user.id !== userId)
    res.status(200).json({
        success: true,
        users,
    })
}


module.exports = {getAllUsers, createUser, updateUser, deleteUser}