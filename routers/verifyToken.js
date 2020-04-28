const jwt = require('jsonwebtoken');

module.exports = function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null){
        return res.status(401).send("Token missing. Access Denied")
    }
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) return res.status(403).send("Invalid Token. Access Denied")

            //{req.user.id}
            req.user = user
            next()
        })
    } catch(err) {
        return res.status(403).send('Invalid Token. Access Denied')
    }
}