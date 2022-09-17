const express = require('express')
const config = require('./configuration/config')
const jwtMiddleware = require('./middleware/jwt.middleware')
const peliculasRoute = require('./routes/pelicula.route')
const tokenRoute = require('./routes/token.route')
const swaggerUI = require('swagger-ui-express')
const swaggerSetup = require('./docs/swagger')
const app = express()

//Middlewares
app.use(express.json()) // Se utiliza para poder interpretar JSON

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSetup))
app.use('/api/token',  tokenRoute)
app.use('/api/peliculas', jwtMiddleware,  peliculasRoute)

app.listen(config.PORT, ()=>{
    console.log(`API corriendo por el puerto : ${config.PORT}`)
})