// /**
//  * @param {number} x
//  * @return {number}
//  */
// var sumOfTheDigitsOfHarshadNumber = function (x) {
//   const str = JSON.stringify(x);
//   let sum = 0;

//   for (let i = 0; i < str.length; i++) {
//     sum += JSON.parse(str[i]);
//   }

//   if (x % sum === 0) {
//     return sum;
//   } else {
//     return -1;
//   }
// };

// sumOfTheDigitsOfHarshadNumber(18);

// /**
//  * @param {number} numBottles
//  * @param {number} numExchange
//  * @return {number}
//  */
// var maxBottlesDrunk = function (numBottles, numExchange) {
//   let emptyBottles = 0;
//   let drunkBottles = 0;

//   while (numBottles >= numExchange) {
//     // Drink numExchange
//     numBottles -= numExchange;
//     emptyBottles += numExchange;
//     drunkBottles += numExchange;

//     if (emptyBottles >= numExchange) {
//       emptyBottles -= numExchange;
//       numBottles += 1;
//       numExchange += 1;
//     }
//   }

//   // Drink remaining bottles
//   drunkBottles += numBottles;
//   emptyBottles += numBottles;
//   numBottles = 0;

//   return drunkBottles;
// };

// maxBottlesDrunk(10, 3);

/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function (nums) {
  let count = 1;
  let lastSame = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      count += i + 1 - lastSame;
    } else {
      count += 1;
      lastSame = i;
    }
  }

  return count;
};

countAlternatingSubarrays([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1]);

var countAlternatingSubarrays2 = function (nums) {
  let count = 0;
  let lastSame = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const sub = nums.slice(i, j + 1);
      let same = false;

      for (let k = 1; k < sub.length; k++) {
        if (sub[k] !== undefined && sub[k - 1] === sub[k]) {
          same = true;
        }
      }

      if (!same) count += 1;
    }
  }

  //   console.log(count);
};

countAlternatingSubarrays2([1, 0, 1, 0, 1, 0, 0, 1, 0]);
