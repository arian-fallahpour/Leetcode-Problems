/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
  nums = nums.sort((a, b) => a - b);

  const results = [];

  function backtrack(i, current) {
    if (i >= nums.length) {
      results.push(Array.from(current));
      return;
    }

    current.push(nums[i]);
    backtrack(i + 1, current);

    current.pop();
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
    backtrack(i + 1, current);
  }

  backtrack(0, []);

  return results;
}
