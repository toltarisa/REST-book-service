const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//books Model
require('../models/book');
const Book = mongoose.model('book');


//add book route
router.get('/add',(req,res)=>{
    res.render('add');
});

router.post('/add',(req,res)=>{
    let newBook = new Book();
    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.category = req.body.category;
    newBook.language = req.body.language;


    newBook.save(err=>{
        if(err)
            throw err;
        res.redirect('/books/add');
        
    })
});

//showing books info
router.get('/',(req,res)=>{
    Book.find({},(err,books)=>{
        if(err){
            throw err;
        }
        console.log(books);
    });
})

module.exports = router;