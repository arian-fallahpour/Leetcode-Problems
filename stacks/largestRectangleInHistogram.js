/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  let maxArea = 0;
  const stack = []; // pair: [index, height]

  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    let start = i;

    while (stack.length > 0 && stack[stack.length - 1][1] > height) {
      const top = stack.pop();
      maxArea = Math.max(maxArea, top[1] * (i - top[0]));
      start = top[0];
    }
    stack.push([start, heights[i]]);
  }

  for (let i = 0; i < stack.length; i++) {
    maxArea = Math.max(maxArea, stack[i][1] * (heights.length - stack[i][0]));
  }

  return maxArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
