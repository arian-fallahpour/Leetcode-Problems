/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
  if (nums.length === 1) {
    return nums;
  }

  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, nums.length);

  return merge(sortArray(left), sortArray(right));
}

function merge(left, right) {
  const merged = [];

  let i = 0;
  let j = 0;
  while (i + j < left.length + right.length) {
    if (typeof left[i] === "undefined") {
      merged.push(right[j]);
      j++;
    } else if (typeof right[j] === "undefined") {
      merged.push(left[i]);
      i++;
    } else if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  return merged;
}

console.log(sortArray([3, 51, 7, 9, 3, 4, 8, 1]));
