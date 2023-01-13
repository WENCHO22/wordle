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
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const resultArray = result.replace(/\r/g, "").split(/\n/);
      wordSet = new Set(resultArray);
    });

  return { wordSet };
};
