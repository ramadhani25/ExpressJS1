require('dotenv').config()
var jwt = require('jsonwebtoken');

const middlewareAuth = (req, res, next) => {
    const {username} = req.query;
    
    if (!req.get("Authorization")){
        res.send('No Access')
        return
    }
    const token = req.get("Authorization").split(' ')[1]
    console.log(token)
    if (token) {
        return jwt.verify(token, process.env.SALT, function(err, decoded) {
            if (decoded.username === username){
                next();
                return
            }
            res.send('no access')
            return
          });
        
    }
    res.send('invalid token')
    
}

module.exports = middlewareAuth;