function solution1(S) {
  let V = 0;
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === "1") {
      V += 2 ** (S.length - 1 - i);
    }
  }

  let operationsCount = 0;
  while (V > 0) {
    const isOdd = V % 2 === 1;
    if (isOdd) {
      V -= 1;
    } else {
      V /= 2;
    }
    operationsCount++;
  }

  return operationsCount;
}

function solution2(S) {
  let onesCount = 0;
  let noTrailingZerosLength = 0;

  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === "1") {
      noTrailingZerosLength = S.length - i;
      onesCount++;
    }
  }

  return noTrailingZerosLength - 1 + onesCount;
}

let s = "";
for (let i = 0; i < 10000000; i++) {
  s += "1";
}

const t1 = performance.now();
console.log(solution2("011100"));
console.log(solution2("111"));
console.log(solution2(s));
console.log(performance.now() - t1);
