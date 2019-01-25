const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
//require dotenv
require('dotenv').config({path:__dirname+'/.env'});

//mongo db connect
//const config = require('./config/database');
mongoose.connect(process.env.url,{useNewUrlParser:true})
.then(connection=>{
    console.log('Connected Mongo DB');
})
.catch(err=>{
    console.log(err);
})

//middleware for motgan package
app.use(logger('dev'));


//index route
app.get('/',(req,res)=>{
    res.json('hello');
});

//router file
const books = require('./routes/bookRoutes');
app.use('books',books);


app.listen(port,()=>{
    console.log(`Server listening on port : ${port}`);
})




