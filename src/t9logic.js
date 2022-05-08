const keyPhone = [
  "",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

const wordCombinations = (numProvided, currentIndex = 0) => {
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
};

exports.wordCombinations = wordCombinations;
