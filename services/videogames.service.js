import { videogames } from "../data/videogames.data.js";

// READ 
export const getAllVideogames = () => {
  return videogames;
};

// READ 
export const getVideogameById = (id) => {
  return videogames.find(game => game.id === Number(id));
};

// CREATE 
export const createVideogame = (data) => {
  const newVideogame = {
    id: videogames.length + 1,
    ...data
  };

  videogames.push(newVideogame);

  return newVideogame;
};

// UPDATE 
export const updateVideogame = (id, data) => {
  const index = videogames.findIndex(
    game => game.id === Number(id)
  );

  if (index === -1) return null;

  videogames[index] = {
    ...videogames[index],
    ...data
  };

  return videogames[index];
};

// DELETE
export const deleteVideogame = (id) => {
  const index = videogames.findIndex(
    game => game.id === Number(id)
  );

  if (index === -1) return null;

  return videogames.splice(index, 1)[0];
};