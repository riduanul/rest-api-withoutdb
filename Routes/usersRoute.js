const express = require('express');
const { deleteUser } = require('../Controllers/usersController');
const { updateUser } = require('../Controllers/usersController');
const { createUser, getAllUsers } = require('../Controllers/usersController');
const router = express.Router();

router.get('/', getAllUsers)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;