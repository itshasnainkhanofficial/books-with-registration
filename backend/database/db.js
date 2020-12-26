const mongoose = require("mongoose");


mongoose.set('useCreateIndex', true);
mongoose.set('runValidators', true);

mongoose.connect(
process.env.DB_CONNECT ,
{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
},
() => {
    console.log("database connected");
}
);


// .then(console.log("connection stablished")).catch(console.log("connection failed"))



// for error handling 

// mongoose.Promise = global.Promise;

// mongoose.connect(process.env.DB_URL , {
    
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology:true

//   }).then(() => {
//       console.log('Database connected sucessfully ')
//     },
//     error => {
//       console.log('Could not connected to database : ' + error)
//     }
//   )