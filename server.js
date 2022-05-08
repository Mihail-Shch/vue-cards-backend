const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const cardRoutes = require("./router/card-routes");

const app = express();
const PORT = 3000;
const db =
  "mongodb+srv://Skandal:Solo1488@cluster0.6sspf.mongodb.net/posts?retryWrites=true&w=majority";

mongoose
  .connect(db)
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cardRoutes);

app.listen(PORT, () => {
  console.log("We are up");
});

app.get("/", (req, res) => res.send("Server is up"));
