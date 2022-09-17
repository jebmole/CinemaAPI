const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../configuration/config');

const signToken = (user)=>{

    const sign = jwt.sign(
        {
        _id: user.id,
        _name: user.name
    }, 
    JWT_SECRET, 
    {
        expiresIn: "2h"
    });

    return sign;
}

const verifyToken = async (token)=>{
    try {
        return jwt.verify(token,JWT_SECRET);
    } catch (err) {
        
    }
}

module.exports = {
    signToken,
    verifyToken
}