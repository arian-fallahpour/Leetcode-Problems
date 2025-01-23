/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const result = [];

  function backtrack(current, set) {
    if (current.length === nums.length) {
      result.push(Array.from(current));
      return;
    }

    if (set.length === nums.length) {
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!set.has(nums[i])) {
        set.add(nums[i]);
        current.push(nums[i]);
        backtrack(current, set);

        set.delete(nums[i]);
        current.pop();
      }
    }
  }

  backtrack([], new Set());

  return result;
}
