const jwt = require('jsonwebtoken');

module.exports = function auth(req,res,next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied');
    console.log(token);
    try {
        let verified = jwt.verify(token, '1234', function(err, decoded) {
            console.log(decoded.id) // bar
          });
        req.user = verified;
        next();
    } catch(err) {
        res.status(400).send('Invalid Token');
    }
}