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
     Book.find({})
    .then((data) => {
		res.json(data);
	}).catch((err) => {
		res.json(err);
    });
    
    
});


// //get books by id
// router.get('/:id',(req,res)=>{
//     const query = {_id : req.params.id};
//     Book.findById(query)
//     .then(data=>{
//         res.status(200).json(data);
//     })
//     .catch(err=>{
//         res.status(500).json({err:'Kitaplar alınırken hata olustu'});
//     });
// });

//get books by title
router.get('/title/:title',(req,res)=>{

    let query = {title: req.params.title};
    Book.find(query,(err,response)=>{
        if(err){
           return res.render(err);
        }
        res.status(200).json(response);
    });
});


//get books by author
router.get('/author/:author',(req,res)=>{
    let query = {author: req.params.author};
    Book.find(query,(err,response)=>{
        if(err){
            return res.render(err);
        }
        res.status(200).json(response);
    });
    
});

//get books by category

router.get('/category/:category',(req,res)=>{

    let query = {category: req.params.category};
    Book.find(query,(err,response)=>{
        if(err){
           return res.render(err);
        }
        res.status(200).json(response);
    });
});

//get books by language
router.get('/language/:language',(req,res)=>{

    let query = {language: req.params.language};
    Book.find(query,(err,response)=>{
        if(err){
           return res.render(err);
        }
        res.status(200).json(response);
    });
});
module.exports = router;