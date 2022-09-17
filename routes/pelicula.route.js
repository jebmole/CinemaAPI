const { Router } = require("express");
const {
  obtenerPeliculas,
  obtenerPeliculaPorId,
  insertarPelicula,
  actualizarPelicula,
  eliminarPelicula,
} = require("../controllers/pelicula.controller");
const { crearPeliculaValidation } = require("../validators/pelicula.validator");

const routes = Router();

/**
 * Obtener Peliculas
 * @openapi
 * /api/peliculas:
 *    get:
 *      tags:
 *        - Peliculas
 *      summary: "Consultar Peliculas"
 *      description: Este endpoint es para listar las peliculas
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/pelicula"
 *        '401':
 *          description: No Autorizado.
 */
routes.get("/", obtenerPeliculas);
routes.get("/:id", obtenerPeliculaPorId);
routes.post("/", crearPeliculaValidation, insertarPelicula);
routes.put("/:id", actualizarPelicula);
routes.delete("/:id", eliminarPelicula);

module.exports = routes;
