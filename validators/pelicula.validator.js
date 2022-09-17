const { check, validationResult } = require('express-validator');

const crearPeliculaValidation = [
    check('nombre')
    .exists()
        .withMessage('Debe especificar el campo nombre')
    .notEmpty()
        .withMessage('El campo nombre no puede estar vacio')
    .isLength({ min: 5, max: 10 })
        .withMessage('El campo nombre debe tener una longitud entre 5 y 10 caracteres'),
    check('sipnosis')
    .exists()
    .notEmpty(),
    check('genero')
    .exists()
    .notEmpty(),
    check('duracion')
    .exists()
    .notEmpty()
    .isNumeric(),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (err) {
            res.status(400);
            res.send({ errors: err.array() });
        }
    }
]

module.exports = {
    crearPeliculaValidation
}