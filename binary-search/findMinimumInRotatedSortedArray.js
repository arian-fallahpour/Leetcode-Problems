/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  const firstNumber = nums[0];

  let l = 0;
  let r = nums.length - 1;
  let c = Math.ceil((r - l) / 2);
  while (l < r) {
    if (nums[c] < firstNumber) {
      r = c;
    } else {
      l = c + 1;
    }
    c = l + Math.floor((r - l) / 2);
  }

  if (nums[c] > firstNumber) {
    return firstNumber;
  } else {
    return nums[c];
  }
}

// console.log(findMin([3, 4, 5, 1, 2]));
// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
// console.log(findMin([11, 13, 15, 17]));
console.log(findMin([2, 1]));
