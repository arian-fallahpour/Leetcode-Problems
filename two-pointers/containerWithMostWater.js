/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    maxArea = Math.max(maxArea, Math.min(height[l], height[r]) * (r - l));

    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }

  return maxArea;
}

console.log(maxArea([1, 22, 4, 3, 2, 22]));
