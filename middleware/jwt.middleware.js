const { verifyToken } = require("../utils/handleJwt");

const jwtMiddleware = async (req, res, next) => {

    try {
        if(!req.headers.authorization)
        {
            throw new Error()
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);
        if(!dataToken._id){
            throw new Error()
        }

        next();
    } catch (error) {
        res.status(401);
        res.send({ error: "Invalid Token" });
    }
}

module.exports = jwtMiddleware;