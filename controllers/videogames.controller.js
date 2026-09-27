import * as service from "../services/videogames.service.js";

// GET - obtener todos
export const getVideogames = (req, res) => {
  const videogames = service.getAllVideogames();

  res.json({
    ok: true,
    data: videogames
  });
};

// GET - obtener uno por ID
export const getVideogame = (req, res) => {
  const videogame = service.getVideogameById(req.params.id);

  if (!videogame) {
    return res.status(404).json({
      ok: false,
      error: "Videogame not found"
    });
  }

  res.json({
    ok: true,
    data: videogame
  });
};

// POST - crea
export const createVideogame = (req, res) => {
  const videogame = service.createVideogame(req.body);

  res.status(201).json({
    ok: true,
    data: videogame
  });
};

// PUT - actualiza
export const updateVideogame = (req, res) => {
  const videogame = service.updateVideogame(
    req.params.id,
    req.body
  );

  if (!videogame) {
    return res.status(404).json({
      ok: false,
      error: "Videogame not found"
    });
  }

  res.json({
    ok: true,
    data: videogame
  });
};

// DELETE 
export const deleteVideogame = (req, res) => {
  const videogame = service.deleteVideogame(req.params.id);

  if (!videogame) {
    return res.status(404).json({
      ok: false,
      error: "Videogame not found"
    });
  }

  res.json({
    ok: true,
    data: videogame
  });
};