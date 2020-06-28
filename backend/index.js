const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const database = require('./database/db');
const port = process.env.PORT;
const bodyParser = require("body-parser");





// importing routes
const RegisterationRoute = require("./routes/registrationRoute");
const BookRoute = require("./routes/bookRoute");



//route middleweare
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//using routes
app.use("/api/user" , RegisterationRoute)
app.use("/api/book" , BookRoute)





// error handlings
// if route is GET http://localhost:3000/ then throw error
// routes.get('/', (req, res) => {
//     res.send("incomplete path");
//   });
  

//   // if route is other then specified route then
//   routes.get('*', (req, res) => {
//     res.send("invalid route");
// });

// running server

app.listen(port , () =>{
    console.log('app connected');
});

