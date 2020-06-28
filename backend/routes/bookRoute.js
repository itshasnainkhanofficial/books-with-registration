const routes = require("express").Router();
const bookModel = require("../model/BooksModel");
const verify = require("../routes/verifyToken");


// get all books
routes.get("/" , async (req , res ) =>{


    try {
        const getBooks = await bookModel.find();
        res.json(getBooks);
    } catch (error) {
        res.send(error);
    }
    
  
});



// register book 
routes.post("/"    , async (req , res ) => {
    // checking user email id in database 
    const bookExists = await bookModel.findOne({
        bookName : req.body.bookName,
        
    });
    const authorExists = await bookModel.findOne({
        
        author : req.body.author
    });
    
    if(bookExists && authorExists) {
        return  res.send("this book from same author already exists");
    };
    
    const addingBook = new bookModel({
  
        bookName: req.body.bookName,
        category : req.body.category,
        author:req.body.author,
        // publish_date:req.body.publish_date,
        book_qty: req.body.book_qty
    });
    
    try {

        const bookSaved = await addingBook.save();
        res.send(bookSaved);
        
    } catch (error) {
          if (error.message)
          {
            return res.send(error.message);
          }
          else{
            return res.send(error);

          }

        
    }
    
  });


// get single book
routes.get("/:bookId"  , async (req , res ) =>{

    
    try {
        const getOneBook = await bookModel.findById(req.params.bookId);

        if(getOneBook){

            res.json(getOneBook);
        }
        else{
            res.json("book not found");
        }
    } catch (error) {
        res.send(error);
    }
    
    
});





// update user , verify
routes.put("/:updateBookId"  , async (req , res ) =>{
    // password hashing 
    
    try {
        const bookupdating = {
  
            bookName: req.body.bookName,
            category : req.body.category,
            author:req.body.author,
            publish_date:req.body.publish_date,
            book_qty: req.body.book_qty
            
        };

        const updatedBook =  await bookModel.findByIdAndUpdate({_id : req.params.updateBookId} , bookupdating);

        res.json(updatedBook);

    } catch (error) {
        
        if (error.message)
          {
            res.send(error.message);
          }
        else{
            res.send(error);

        }
    }
    
    
});


// delete book
routes.delete("/:deleteBookId" ,verify, async (req , res ) =>{

    
    try {
        const deltedBook = await bookModel.findByIdAndDelete(req.params.deleteBookId);
        res.json(deltedBook);
    } catch (error) {
        res.send(error);
    }
    
    
});



// exporting routes
module.exports = routes ;