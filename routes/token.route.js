const { Router } = require("express");
const { signToken } = require("../utils/handleJwt");
const routes = Router();

routes.post("/", (req, res)=>{

    const token = signToken({ id: 1, name: 'Jonathan'});
    res.send({
        token
    });
});

module.exports = routes;
