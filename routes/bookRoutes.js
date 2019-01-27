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

//showing all books info
router.get('/',(req,res)=>{
     Book.find({ })
    .then((data) => {
		res.json(data);
	}).catch((err) => {
		res.json(err);
	})
})

module.exports = router;