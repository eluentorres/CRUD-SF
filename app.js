import express from "express";
import videogamesRoutes from "./routes/videogames.routes.js";
import { logger } from "./middlewares/logger.middleware.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

const app = express();

app.use(express.json());

// Logger global
app.use(logger);

// Rutas
app.use("/videogames", videogamesRoutes);

// Manejador global de errores - SIEMPRE al final
app.use(errorHandler);

export default app;