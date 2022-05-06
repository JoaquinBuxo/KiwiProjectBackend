const express = require('express');

const app = express();

app.use(express.json());

const keyPhone = [
  " ",
  ".,",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz"
];

function wordCombinations(numProvided, currentIndex = 0) {
  const currentKey = numProvided[currentIndex];
  const possibleCharactersForKey = keyPhone[currentKey];

  if (currentIndex === numProvided.length - 1) {
    return possibleCharactersForKey.split("");
  }

  const currentIteration = [];

  for (let i = 0; i < possibleCharactersForKey.length; i++) {
    const thisRound = wordCombinations(numProvided, currentIndex + 1);
    thisRound.forEach((char) => {
      currentIteration.push(`${possibleCharactersForKey[i]}${char}`);
    });
  }

  return currentIteration;
}

app.get('/t9/:number', (req, res) => {
  const {number} = req.params;
  return res.json(wordCombinations(number));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return res.status(404).send();
});

module.exports = app;
