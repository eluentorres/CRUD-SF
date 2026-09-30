import express from "express";
import videogamesRoutes from "./routes/videogames.routes.js";
import authRouter from "./routes/auth.routes.js";
import { logger } from "./middlewares/logger.middleware.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

const app = express();

app.use(express.json());

app.use(logger);

// Rutas
app.use("/videogames", videogamesRoutes);
app.use("/api/auth", authRouter);

// El manejador de errores siempre al final
app.use(errorHandler);

export default app;