// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// function trap(height) {
//   const maxLeftHeights = [];
//   const maxRightHeights = [];
//   let l = 0;
//   let r = height.length - 1;
//   let leftMax = 0;
//   let rightMax = 0;
//   while (l < height.length) {
//     leftMax = Math.max(height[l], leftMax);
//     maxLeftHeights[l] = leftMax;

//     rightMax = Math.max(height[r], rightMax);
//     maxRightHeights[r] = rightMax;

//     l++;
//     r--;
//   }

//   let trappedWater = 0;
//   for (let i = 0; i < height.length; i++) {
//     trappedWater += Math.min(maxLeftHeights[i], maxRightHeights[i]) - height[i];
//   }

//   return trappedWater;
// }

// I DO NOT UNDERSTAND THIS SOLLUTION YET
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let trappedWater = 0;
  let l = 0;
  let r = height.length - 1;
  let leftMax = height[l];
  let rightMax = height[r];
  while (l < r) {
    if (leftMax < rightMax) {
      l++;
      leftMax = Math.max(height[l], leftMax);
      trappedWater += leftMax - height[l];
    } else {
      r--;
      rightMax = Math.max(height[r], rightMax);
      trappedWater += rightMax - height[r];
    }
  }

  return trappedWater;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
