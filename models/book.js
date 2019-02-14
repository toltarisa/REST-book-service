const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{
        type: String,
        required: true
    } ,
    author:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    language:{
        type: String,
        required: true
    },
    publishDate:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('book',BookSchema);