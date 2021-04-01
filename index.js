const express = require('express')
const app = express()
require('dotenv').config()
const router = require('./routers')
const clientMongoose=require('./database/client')


app.use(express.json()) //To make data transfer with json format
app.use(router)
clientMongoose()



app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on :', process.env.PORT)
})