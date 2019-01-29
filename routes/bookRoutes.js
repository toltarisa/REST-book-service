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

    if(!req.body.author || !req.body.title) {
        return res.status(400).send({
            message: "Book title or author can not be empty"
        });
    }

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
	});
});


//get books by id
router.get('/:id',(req,res)=>{
    let query = {_id : req.params.id};
    Book.findById(query)
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        console.log(err);
    });
});

module.exports = router;