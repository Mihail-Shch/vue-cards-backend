const Card = require("../models/card");

const getCards = (req, res) => {
  Card.find()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => console.log(error));
};

const addCard = (req, res) => {
  const post = new Card(req.body);

  post
    .save()
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

const deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.body.id)
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

const sortCards = (req, res) => {
  switch (req.query.q) {
    case "byDefault":
      getCards(req, res);
      break;
    case "byPriceMinToMax":
      Card.find()
        .sort({ price: 1 })
        .then((cards) => res.status(200).send(cards))
        .catch((error) => console.log(error));
      break;
    case "byPriceMaxToMin":
      Card.find()
        .sort({ price: -1 })
        .then((cards) => res.status(200).send(cards))
        .catch((error) => console.log(error));
      break;
    case "byTitle":
      Card.find()
        .sort({ title: 1 })
        .then((cards) => res.status(200).send(cards))
        .catch((error) => console.log(error));
      break;
  }
};

module.exports = { getCards, addCard, deleteCard, sortCards };
