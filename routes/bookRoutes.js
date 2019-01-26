const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//books Model
const Books = require('../models/book');

//home route
router.get('/',(req,res)=>{
    res.json({message: {type:'String'}});
});

//add book route
router.get('/add',(req,res)=>{
    res.render('add');
});



module.exports = router;