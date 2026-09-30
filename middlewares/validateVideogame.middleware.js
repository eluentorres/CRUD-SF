export const validateVideogame = (req, res, next) => {
  const { name, year, genre } = req.body;

  if (!name || !year || !genre) {
    return res.status(400).json({
      ok: false,
      error: "name, year y genre son obligatorios"
    });
  }

  next();
};