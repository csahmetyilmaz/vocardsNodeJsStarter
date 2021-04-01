const express = require('express')
const v1Router = express.Router();
const {catchErrors} = require('../middleware/catchError')
const {getAllUsers, getOneUser, addOneUser, updateOneUser, deleteOneUser} = require('../controllers/usersController')

v1Router.get('/:id', catchErrors(getOneUser));
v1Router.get('/', catchErrors(getAllUsers));
v1Router.post('/', catchErrors(addOneUser));
v1Router.patch('/:id', catchErrors(updateOneUser));
v1Router.delete('/:id', catchErrors(deleteOneUser));

module.exports = v1Router