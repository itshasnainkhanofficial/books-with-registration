const routes = require("express").Router();
const registermodel = require("../model/RegisterModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("../routes/verifyToken");

// get all registered users

routes.get("/register" ,verify , async (req , res ) =>{


    try {
        const getusers = await registermodel.find();
        res.json(getusers);
    } catch (error) {
        res.send(error);
    }
    
    
});



// register users 
routes.post("/register" , async (req , res ) => {
    // checking user email id in database 
    const emailExist = await registermodel.findOne({
        email : req.body.email
    });
    
    if(emailExist) {
        return  res.send("email already exist")
    };
    
    // password hashing 
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password , salt);

    
    const registration = new registermodel({
  
        username: req.body.username,
        email : req.body.email,
        password:hashedPassword,
        // password:req.body.password,
        user_role: req.body.user_role,
        gender:req.body.gender
        // isActive : req.body.isActive,
        // createdOn : req.body.createdOn
        
    });
  
    
    try {

        const savedRegisteration = await registration.save();
        res.send(savedRegisteration);
        
        
        
    } catch (error) {
      
        if (error.name === 'MongoError' && error.code === 11000) {
            return res.send('duplicate emails not allowed');
            
          } 
          else if (error.message)
          {
            return res.send(error.message);
          }
          else{
              console.log(error);
            return res.send(error.code);

          }

        
    }
    
  });

// routes.post("/" , async (req , res ) => {
//    await registermodel.create(req.body, (error, data) => {
//       if (error) {

//         if (error.name === 'MongoError' && error.code === 11000) {
//                 res.send('duplicate emails not allowed');
                
//                 } 
//                 else if (error.message)
//                 {
//                 res.send(error.message);
//                 }
//                 else{
//                 res.send(error);
    
//                 }

//       } else {
//         res.json(data)
//       }
//     })
//   });

// get single user
routes.get("/:userId" , async (req , res ) =>{

    
    try {
        const getOneUser = await registermodel.findById(req.params.userId);
        if(getOneUser){

            res.json(getOneUser);
        }
        else{
            res.json("user not found");
        }
    } catch (error) {
        res.send(error);
    }
    
    
});





// update user 
routes.put("/:updateUserId" , async (req , res ) =>{
    // password hashing 
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password , salt);
    try {
        const registration = {
  
            username: req.body.username,
            email : req.body.email,
            password:hashedPassword,
            gender:req.body.gender,
            user_role: req.body.user_role,
            isActive : req.body.isActive,
            createdOn : req.body.createdOn
            
        };

        const updatedUser =  await RegisterModel.findByIdAndUpdate({_id : req.params.updateUserId} , registration);

        res.json(updatedUser);

    } catch (error) {
        if(error.codeName == "DuplicateKey"){
            res.send("your cant't update a email to already present email");
        }
        else if (error.message)
          {
            res.send(error.message);
          }
        else{
            res.send(error);

        }
    }
    
    
});
// routes.put("/:updateUserId" , async (req , res , next) =>{
//     RegisterModel.findByIdAndUpdate(req.params.updateUserId, {
//       $set: req.body
//     }, (error, data) => {
//       if (error) {
//         return next(error);
        
//       } else {
//         res.json(data)
//         console.log('Data updated successfully')
//       }
//     })
//   })


// delete user
routes.delete("/:deleteUserId" , async (req , res ) =>{

    
    try {
        const deltedUser = await registermodel.findByIdAndDelete(req.params.deleteUserId);
        res.json(deltedUser);
    } catch (error) {
        res.send(error);
    }
    
    
});



// login
routes.post("/login", async (req , res ) => {

    const user = await registermodel.findOne({

        email: req.body.email
    });

    if(!user){

        return res.send("email not registered");
    }
    

   else{

    const validatePassword = await bcryptjs.compare(req.body.password , user.password);

    if(!validatePassword){

        return res.send("password did not matched");
    }

    else{
        const token = jwt.sign({_id: user._id} , process.env.MENQBTAUN);
        res.header("auth-token" , token).send({token : token});
    }
   }
})

// exporting routes
module.exports = routes ;