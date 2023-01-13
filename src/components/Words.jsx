import wordBank from "../wordle-bank.txt";

export const boardDefault = [
  ["", "", "", "", " "],
  ["", "", "", "", " "],
  ["", "", "", "", " "],
  ["", "", "", "", " "],
  ["", "", "", "", " "],
  ["", "", "", "", " "],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const resultArray = result.replace(/\r/g, "").split(/\n/);
      todaysWord = resultArray[Math.floor(Math.random() * resultArray.length)];
      wordSet = new Set(resultArray);
    });

  return { wordSet, todaysWord };
};
