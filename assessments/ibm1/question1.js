"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'countDuplicate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function countDuplicate(numbers) {
  // Write your code here
  const map = new Map();
  let duplicates = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (!map.has(numbers[i])) {
      map.set(numbers[i], 0);
    }
    map.set(numbers[i], map.get(numbers[i]) || 0 + 1);

    if (map.get(numbers[i]) > 1) {
      duplicates++;
    }
  }

  return duplicates;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const numbersCount = parseInt(readLine().trim(), 10);

  let numbers = [];

  for (let i = 0; i < numbersCount; i++) {
    const numbersItem = parseInt(readLine().trim(), 10);
    numbers.push(numbersItem);
  }

  const result = countDuplicate(numbers);

  ws.write(result + "\n");

  ws.end();
}
