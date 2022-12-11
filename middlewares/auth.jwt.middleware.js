const jwt = require("jsonwebtoken");
const config = require('../config/env.config.js');

const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
    console.log("jwt valis :"+err);
  if (err instanceof TokenExpiredError) {
   
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }

  return res.sendStatus(401).send({ message: "Unauthorized!" });
}

const verifyToken = (req, res, next) => {
    
   if(req.headers['authorization']) 
   {
    let authorization = req.headers['authorization'].split(' ');

    if (authorization[0] !== 'Bearer') {        
      return res.status(403).send({ message: "No token provided!" });
    }   
    console.log(authorization[1]+config.secret);
       
    jwt.verify(authorization[1], config.jwt_secret, (err, decoded) => {
      if (err) {
        
        return catchError(err, res);
      }
     
      req.userId = decoded.id;
      next();
    });
    }
    else
     {
        return res.status(401).send();
     }
  };



const authJwt = {
  verifyToken,
 
};
module.exports = authJwt;