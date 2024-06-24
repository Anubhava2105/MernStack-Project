const Game = require("../models/gameModel.js");
const mongoose = require("mongoose");

//get all games' info
const getGame = async (req, res) => {
  try {
    const games = await Game.find().sort({ name: 1 });
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch games" });
  }
};

//get a single game's info
const getSingleGame = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such game" });
  }
  const singleGame = await Game.findById(id);
  if (!singleGame) {
    return res.status(404).json({ error: "No such game" });
  }
  res.status(200).json(singleGame);
};

//add new game info
const createGame = async (req, res) => {
  const { name, price, release, publisher, genre, rating, info } = req.body;
  let emptyFields = [];
  if (!name) {
    emptyFields.push("name");
  }
  if (!price) {
    emptyFields.push("price");
  }
  if (!release) {
    emptyFields.push("release");
  }
  if (!publisher) {
    emptyFields.push("publisher");
  }
  if (!genre) {
    emptyFields.push("genre");
  }
  if (!rating) {
    emptyFields.push("rating");
  }
  if (!info) {
    emptyFields.push("info");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in the following fields: " + emptyFields });
  }
  try {
    const game = await Game.create({
      name,
      price,
      release,
      publisher,
      genre,
      rating,
      info,
    });
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//delete game info
const deleteGame = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such game" });
  }
  const deleteGame = await Game.findByIdAndDelete(id);
  if (!deleteGame) {
    return res.status(400).json({ error: "Couldn't delete" });
  }
  res.status(200).json(deleteGame);
};
//update game info
const updateGame = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such game" });
  }
  const updateGame = await Game.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!updateGame) {
    return res.status(400).json({ error: "Couldn't update" });
  }
  res.status(200).json(updateGame);
};

module.exports = { createGame, getGame, getSingleGame, deleteGame, updateGame };
