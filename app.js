const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const app = express();

//require dotenv
require('dotenv').config({path:__dirname+'/.env'});

//mongo db connect
const config = require('./config/database');
mongoose.connect(config.url,{useNewUrlParser:true})
.then(connection=>{
    console.log('Connected Mongo DB');
})
.catch(err=>{
    console.log(err);
})

//middleware for morgan package
app.use(logger('dev'));

//setting view engine
app.set('views',path.join(__dirname+'/views'));
app.set('view engine','ejs');

//bodyParser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//cookieParser middleware
app.use(cookieParser());

//serving static files
app.use(express.static(path.join(__dirname,'public')));


//index route
app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.set('etag', 'strong');

//router file
const books = require('./routes/bookRoutes');
app.use('/books',books);


app.listen(port,()=>{
    console.log(`Server listening on port : ${port}`);
});





