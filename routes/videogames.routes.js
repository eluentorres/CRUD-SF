import express from "express";
import * as controller from "../controllers/videogames.controller.js";
import { validateVideogame } from "../middlewares/validateVideogame.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, controller.getVideogames);

router.get("/:id", controller.getVideogame);

router.post("/", validateVideogame, controller.createVideogame);

router.put("/:id", controller.updateVideogame);

router.delete("/:id", controller.deleteVideogame);

export default router;