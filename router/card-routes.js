const express = require("express");
const router = express.Router();

const {
  getCards,
  addCard,
  deleteCard,
  sortCards,
} = require("../controllers/CardController");

router.get("/api/cards", getCards);
router.post("/api/add-card", addCard);
router.post("/api/delete-card", deleteCard);
router.get("/api/sortCards", sortCards);

module.exports = router;
