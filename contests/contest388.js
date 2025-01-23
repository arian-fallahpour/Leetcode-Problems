// /**
//  * @param {number[]} apple
//  * @param {number[]} capacity
//  * @return {number}
//  */
// var minimumBoxes = function (apple, capacity) {
//   const boxes = capacity.sort((a, b) => b - a);
//   let total = apple.reduce((p, c) => p + c, 0);
//   let count = 0;

//   while (total > 0) {
//     total -= boxes[count];
//     count += 1;
//   }

//   console.log(count);
//   return count;
// };

// minimumBoxes([5, 5, 5], [2, 4, 2, 7]);

// /**
//  * @param {number[]} happiness
//  * @param {number} k
//  * @return {number}
//  */
// var maximumHappinessSum = function (happiness, k) {
//   happiness = happiness.sort((a, b) => a - b);
//   //   console.log(happiness);
//   let total = 0;
//   let turn = 0;
//   let i = 0;

//   while (turn < k && happiness.length - 1 - i >= 0) {
//     const h = happiness[happiness.length - 1 - i] - turn;

//     if (h > 0) {
//       total += h;
//       i++;
//       turn++;
//     } else {
//       i++;
//     }
//   }

//   //   console.log(total);
//   return total;
// };

// maximumHappinessSum([2, 98, 45], 1);

/**
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function (arr) {
  let answer = arr.map(() => []);

  const substr_map = {};

  for (let i = 0; i < arr.length; i++) {
    for (let p = 0; p < arr[i].length; p++) {
      for (let l = 1; l <= arr[i].length - p; l++) {
        const substr = arr[i].substring(p, p + l);

        if (!substr_map[substr]) {
          substr_map[substr] = [i];
        } else {
          substr_map[substr].push(i);
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let p = 0; p < arr[i].length; p++) {
      for (let l = 1; l <= arr[i].length - p; l++) {
        const substr = arr[i].substring(p, p + l);

        if (
          !substr_map[substr] ||
          (substr_map[substr] &&
            substr_map[substr].filter((v) => v === i).length ===
              substr_map[substr].length)
        ) {
          answer[i].push(substr);
        }
      }
    }
  }

  console.log(substr_map);
  console.log("BEFORE", answer);

  answer = answer.map((v) => v.sort((a, b) => a > b)[0] || "");

  console.log("AFTER", answer);
  return answer;
};

shortestSubstrings(["gfnt", "xn", "mdz", "yfmr", "fi", "wwncn", "hkdy"]);
