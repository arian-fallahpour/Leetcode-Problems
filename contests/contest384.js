// /**
//  * @param {number[][]} matrix
//  * @return {number[][]}
//  */
// const modifiedMatrix = function (matrix) {
//   const rows = matrix.length;
//   const cols = matrix[0].length;

//   const highests = [];

//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       if (!highests[i]) {
//         highests[i] = 0;
//       }

//       if (matrix[j][i] > highests[i]) {
//         highests[i] = matrix[j][i];
//       }
//     }
//   }

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (matrix[i][j] == -1) {
//         matrix[i][j] = highests[j];
//       }
//     }
//   }

//   return matrix;
// };

// console.log(
//   modifiedMatrix([
//     [1, 1, 0, -1],
//     [-1, 1, -1, 0],
//     [1, -1, 0, 0],
//     [-1, -1, 1, 0],
//     [1, 0, 0, -1],
//     [-1, 1, -1, -1],
//     [-1, -1, 0, -1],
//     [-1, -1, 0, 0],
//     [-1, 0, -1, -1],
//   ])
// );

// /**
//  * @param {number[]} nums
//  * @param {number[]} pattern
//  * @return {number}
//  */
// const countMatchingSubarrays = function (nums, pattern) {
//   const l = pattern.length + 1;
//   const matches = [];

//   for (let i = 0; i < nums.length - l + 1; i++) {
//     const match = [];
//     let matchesPattern = true;

//     for (let j = 0; j < l; j++) {
//       if (j === 0) {
//         match[j] = nums[i];
//       } else {
//         const action = pattern[j - 1];

//         if (action === 1 && nums[i + j] > nums[i + j - 1]) {
//           match[j] = nums[i + j];
//         } else if (action === 0 && nums[i + j] === nums[i + j - 1]) {
//           match[j] = nums[i + j];
//         } else if (action === -1 && nums[i + j] < nums[i + j - 1]) {
//           match[j] = nums[i + j];
//         } else {
//           matchesPattern = false;
//         }
//       }
//     }

//     if (matchesPattern) {
//       matches.push(match);
//     }
//   }

//   return matches.length;
// };

// console.log(countMatchingSubarrays([1, 2, 3, 4, 5, 6], [1, 1]));

/**
 * @param {string[]} words
 * @return {number}
 */
var maxPalindromesAfterOperations = function (words) {
  const counts = {};
  const spaces = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      const c = words[i][j];
      if (!counts[c]) counts[c] = 1;
      else counts[c] += 1;
    }
    spaces[i] = words[i].length;
  }

  Object.keys;

  console.log(counts, spaces);
};

console.log(maxPalindromesAfterOperations(["abc", "ab", "abbc"]));
