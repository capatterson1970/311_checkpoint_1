const express = require('express');
const router = express.Router();
const usersController = (require('../controllers/users.js'));

//get all users
router.get('/', usersController.listUsers);

//get one user with id
router.get('/:id', usersController.showUser);

//create user
router.post('/', usersController.createUser)

//update user with id
router.put('/:id', usersController.updateUser);

//delete user with id
router.delete('/:id', usersController.deleteUser);


module.exports = router;