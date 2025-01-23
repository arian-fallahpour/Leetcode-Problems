// QUESTION 1

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// const isPossibleToSplit = function (nums) {
//   let isSplitable = true;
//   const count = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (!count[nums[i]]) {
//       count[nums[i]] = 1;
//     } else {
//       count[nums[i]] += 1;
//     }
//     if (count[nums[i]] > 2) {
//       isSplitable = false;
//     }
//   }
//   return isSplitable;
// };

// console.log(isPossibleToSplit([1, 1, 1, 1]));

// QUESTION 2
/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
const largestSquareArea = function (bottomLeft, topRight) {
  let largestArea = 0;

  for (let i = 0; i < bottomLeft.length; i++) {
    for (let j = 0; j < bottomLeft.length; j++) {
      if (j < i || i === j) continue;

      const topRightRect =
        topRight[j][0] > topRight[i][0] || topRight[j][1] > topRight[i][1]
          ? j
          : i;
      const bottomLeftRect = topRightRect === i ? j : i;

      const isIntersecting =
        topRight[bottomLeftRect][0] > bottomLeft[topRightRect][0] &&
        topRight[bottomLeftRect][1] > bottomLeft[bottomLeftRect][1];
      console.log(isIntersecting);

      if (isIntersecting) {
        let w =
          topRight[bottomLeftRect][0] -
          Math.max(bottomLeft[topRightRect][0], bottomLeft[bottomLeftRect][0]);
        let h =
          topRight[bottomLeftRect][1] -
          Math.max(bottomLeft[topRightRect][1], bottomLeft[bottomLeftRect][1]);

        if (h > w) h = w;
        if (w > h) w = h;

        console.log(bottomLeftRect, topRightRect, w, h);
        const a = w * h;
        if (w > 0 && h > 0 && w == h && a > largestArea) {
          largestArea = a;
        }
      }
    }
  }

  return largestArea;
};

console.log(
  largestSquareArea(
    [
      [3, 3],
      [1, 1],
    ],
    [
      [4, 4],
      [5, 3],
    ]
  )
);
