const express = require('express')
const v1Router = express.Router()

const users = require('./users');
const lists = require('./lists');
const cards = require('./cards');

const {errorHandler} = require("../middleware/customErrorHandler");

v1Router.use('/users', users);
v1Router.use('/cards', cards);
v1Router.use('/lists', lists);
v1Router.use(errorHandler);
module.exports = v1Router
