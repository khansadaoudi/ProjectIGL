const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
      titre : String,
      contenu : String,
      Date : {
          type : String,
          default : Date.now()
      }
      
});

//Model
const BlogPost = mongoose.model('Blogpost',BlogSchema);


module.exports = BlogPost;