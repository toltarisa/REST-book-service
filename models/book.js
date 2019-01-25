const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author:String,
    category:String,
    language:String,
    publishDate:{
        type:Date,
        default:Date.now
    }
});

module.exports= mongoose.model('book',BookSchema);