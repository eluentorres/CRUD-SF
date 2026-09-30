import express from "express";
import * as controller from "../controllers/videogames.controller.js";
import { validateVideogame } from "../middlewares/validateVideogame.middleware.js";

const router = express.Router();

// READ - Obtener todos los videojuegos
router.get("/", controller.getVideogames);

// READ - Obtener un videojuego por ID
router.get("/:id", controller.getVideogame);

// CREATE - Crear un videojuego
router.post("/", validateVideogame, controller.createVideogame);

// UPDATE - Actualizar un videojuego por ID
router.put("/:id", controller.updateVideogame);

// DELETE - Eliminar un videojuego por ID
router.delete("/:id", controller.deleteVideogame);

export default router;