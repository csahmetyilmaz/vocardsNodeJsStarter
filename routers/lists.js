const express = require('express')
const v1Router = express.Router();
const {catchErrors} = require('../middleware/catchError')
const {getAllLists, getOneList, addOneList, updateOneList, deleteOneList} = require('../controllers/listsController')


v1Router.get('/', catchErrors(getAllLists));
v1Router.get('/:id', catchErrors(getOneList));
v1Router.post('/', catchErrors(addOneList));
v1Router.patch('/:id', catchErrors(updateOneList));
v1Router.delete('/:id', catchErrors(deleteOneList));

module.exports = v1Router