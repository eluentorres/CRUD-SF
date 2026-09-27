import express from "express";
import * as controller from "../controllers/videogames.controller.js";

const router = express.Router();

// READ - todos
router.get("/", controller.getVideogames);

// READ - obtener uno por ID
router.get("/:id", controller.getVideogame);

// CREATE
router.post("/", controller.createVideogame);

// UPDATE 
router.put("/:id", controller.updateVideogame);

// DELETE 
router.delete("/:id", controller.deleteVideogame);

export default router;