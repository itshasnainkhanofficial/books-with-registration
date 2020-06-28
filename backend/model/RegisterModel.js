// init code
const mongoose = require('mongoose');


// register user schema 
const registerSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        minlength:  [3 , "minimum leangth error"],
        maxlength: [15 , "maximum leangth error"],
        lowercase: true, 
        trim: true
      },
     
      email : {
        type : String,
        required: [true, 'email is required bro'],
        trim: true,
        unique : [true , "email should be unique"]
      },

      password : {
        type : String,
        required : true
      },
      gender : {
        type : Number,
        required: true
      }, 
      user_role : {
          type : Number,
          required : true
      }

      // user_permissions : {
      //     type : [String],
      //     required: true
      // } ,

      // isActive : {
      //   type : Boolean,
      //   default : true
      // },
      // createdOn : {
      //   type : Date,
      //   default : Date.now()
      // }

});



// module exports
module.exports = mongoose.model("registerSchema" , registerSchema);






















// username : {
    //     type : String,
    //     required : true,
    //     minlength: 3,
    //     maxlength: 15,
    //     lowercase: true, 
    //     trim: true
    //   },
      // email : {
      //   type : String,
      //   required : true,
      //   unique : true
      // },
      
      // password : {
      //   type : String,
      //   required : true
      // },
      // gender : {
      //   type : Number,
      //   required: true
      // }, 
      // user_role : {
      //     type : Number,
      //     required : true
      // }

      // user_permissions : {
      //     type : [String],
      //     required: true
      // } ,

      // isActive : {
      //   type : Boolean,
      //   default : true
      // },
      // createdOn : {
      //   type : Date,
      //   default : Date.now()
      // }