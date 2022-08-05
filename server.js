//dependencies
const express = require('express')

//configuration 
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//routes
app.get('/',(req,res)=>{
    res.send('Welcome to an awesome app about Breads!')
})

//listen 
app.listen(PORT,(req,res)=>{
    console.log(`listening on ${PORT}`)
})

//breads 
const breadsController = require('./controllers/breads_controllers.js');
app.use('/breads', breadsController)