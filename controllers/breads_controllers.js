const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//Index
breads.get('/',(req,res)=>{
   // res.send('This is the index at /breads')
   res.render('index',
   {
    breads: Bread
   }
   )
})

//SHOW
breads.get('/:arrayIndex',(req,res)=>{
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads

