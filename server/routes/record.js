const express = require("express");
const {
  createGame,
  getGame,
  getSingleGame,
  deleteGame,
  updateGame,
} = require("../controller/gameController.js");
const requireAuth = require("../middleware/requireAuth.js");
const router = express.Router();
//require auth for all game routes
router.use(requireAuth);
//get all games 
router.get("/", getGame);
//get single game
router.get("/:id", getSingleGame);
//post about new game
router.post("/", createGame);
//delete
router.delete("/:id", deleteGame);
//update
router.patch("/:id", updateGame);

module.exports = router;
