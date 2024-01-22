let users = require('../models/users.model');

const { v4: uuidv4 } = require('uuid');

//get users
const getAllUser = (req,res)=>{
    res.status(200).json({users})
};

//create users
const createUser = (req,res)=>{
    const user={
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    };
    users.push(user);
    res.status(201).json({users})

};

//update user
const updateUser = (req,res) =>{
    const updateId = req.params.id;
    const {username,email} = req.body;

    users.filter((user)=> user.id === updateId)
    .map((selectedUser)=>{
        selectedUser.username = username;
        selectedUser.email = email;

    });

    res.status(200).json(users);
}


//delete user
const deleteUser = (req,res) =>{
    const deleteId = req.params.id; 
    users = users.filter((user)=> user.id !== deleteId);
    
    res.status(200).json(users);
}
module.exports = {getAllUser ,createUser, updateUser,deleteUser};