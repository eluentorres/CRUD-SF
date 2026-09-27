import express from "express";
import videogamesRoutes from "./routes/videogames.routes.js";

const app = express();

//  lee JSON enviado en POST y PUT
app.use(express.json());

app.use("/videogames", videogamesRoutes);

export default app;