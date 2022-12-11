const jwt = require('jsonwebtoken'),
    secret = require('../config/env.config.js').jwt_secret,
    crypto = require('crypto');
    const config = require('../config/env.config.js');
    const { TokenExpiredError } = jwt;

exports.verifyRefreshBodyField = (req, res, next) => {
    if (req.body && req.body.refresh_token) {
        return next();
    } else {
        return res.status(400).send({error: 'need to pass refresh_token field'});
    }
};

exports.validRefreshNeeded = (req, res, next) => {
    let b = Buffer.from(req.body.refresh_token, 'base64');
    let refresh_token = b.toString();
    let hash = crypto.createHmac('sha512', req.jwt.refreshKey).update(req.jwt.userId + secret).digest("base64");
    if (hash === refresh_token) {
        req.body = req.jwt;
        return next();
    } else {
        return res.status(400).send({error: 'Invalid refresh token'});
    }
};

exports.validJWTNeeded = (req, res, next) => {
    if (req.headers['authorization']) {
        try {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                req.jwt = jwt.verify(authorization[1], secret);
                return next();
            }

        } catch (err) {
            return res.status(403).send("Tehlike");
        }
    } else {
        return res.status(401).send();
    }
};



const catchError = (err, res) => {
    console.log("jwt valis :"+err);
  if (err instanceof TokenExpiredError) {
   
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }

  return res.sendStatus(401).send({ message: "Unauthorized!" });
}

exports.validToken = (req, res, next) => {
    
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