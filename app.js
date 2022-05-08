const express = require("express");
const app = express();
const cors = require("cors");
const t9 = require("./t9logic");

app.use(cors());
app.use(express.json());

app.get("/t9/:number", (req, res) => {
  const { number } = req.params;
  return res.json(t9.wordCombinations(number));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.status(404).send();
});

module.exports = app;
