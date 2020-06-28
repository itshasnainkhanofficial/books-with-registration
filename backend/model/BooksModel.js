// init code
const mongoose = require('mongoose');


// register user schema 
const booksSchema = new mongoose.Schema({
   
    
    bookName : {
        type : String,
        required : true,
        minlength:  [3 , "minimum leangth error"],
        maxlength: [15 , "maximum leangth error"],
        lowercase: true, 
        trim: true
      },
     
      category : {
        type : String,
        required: [true, 'category is required'],
        trim: true,
        lowercase: true
        
      },

      author : {
        type : String,
        required : true,
        trim: true,
        lowercase: true, 
        minlength:  [3 , "minimum leangth error"],
        maxlength: [15 , "maximum leangth error"]
      
      },

    //   publish_date : {
    //     type : Date,
    //     required: true
    //   }, 
    // $currentDate:{publish_date : true}
    
      book_qty : {
          type : Number,
          required : true
      }

});



// module exports
module.exports = mongoose.model("booksSchema" , booksSchema);




















