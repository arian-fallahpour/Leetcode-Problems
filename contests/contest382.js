/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumLength = function (nums) {
  const indices = {};
  const largestSet = {
    val: 0,
    set: [],
  };

  for (let i = 0; i < nums.length; i++) {
    if (!indices[nums[i]]) {
      indices[nums[i]] = [i];
      continue;
    }

    indices[nums[i]].push(i);
  }

  const keys = Object.keys(indices);
  for (let i = keys.length - 1; i >= 0; i--) {
    const num = +keys[i];

    if (largestSet.val === 0 || indices[Math.sqrt(num)]) {
      if (Math.sqrt(num) === 1) continue;

      largestSet.val = num;
      largestSet.set = [num];
      continue;
    }

    if (Math.sqrt(largestSet.val) === num && indices[num].length === 2) {
      largestSet.val = num;
      largestSet.set = [num, ...largestSet.set, num];
    }
  }

  return largestSet.set;
};

console.log(maximumLength([5, 4, 1, 2, 2]));
