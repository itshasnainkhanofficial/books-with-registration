const jwt = require("jsonwebtoken");





// module.exports.verify = verify;
// module.exports = (req , res , next) => {

//     const token = req.header("auth-token");
//     if(!token) return res.status(401).send("access denied");

//     try {

//         const verified = jwt.verify(token , process.env.MENQBTAUN);
//         req.user = verified; //could not understand user
//         next();

//     } catch (error) {
//         res.status(400).send("Invalid Token");
//     }
// }

module.exports = (req , res , next) => {

    if(!req.headers.authorization){
        return res.status(401).send("unauthorized request");
      }
      
      let token = req.headers.authorization.split(" ")[1];
      if(token === "null"){
        return res.status(401).send("unauthorized request");
        
      }
      let payload = jwt.verify(token , process.env.MENQBTAUN);
      
      if(!payload){
        return res.status(401).send("unauthorized request");
    
      }
    

    try {
        req.userId = payload.subject;
        next();
        
    } catch (error) {
        res.status(400).send("Invalid Token");
    }
}