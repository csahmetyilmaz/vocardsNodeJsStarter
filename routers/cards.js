const express=require('express')
const v1Router=express.Router();
const {catchErrors} = require('../middleware/catchError')
const {getAllCards,getOneCard,addOneCard,updateOneCard,deleteOneCard} = require('../controllers/cardsController')

v1Router.get('/' , catchErrors(getAllCards));
v1Router.get('/:id',catchErrors(getOneCard));
v1Router.post('/',catchErrors(addOneCard));
v1Router.patch('/:id',catchErrors(updateOneCard));
v1Router.delete('/:id',catchErrors(deleteOneCard));

module.exports = v1Router