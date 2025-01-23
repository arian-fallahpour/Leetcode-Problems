/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const subsets = [];

  const subset = [];
  function recursive(i) {
    if (i > nums.length - 1) {
      subsets.push(Array.from(subset));
      return;
    }

    subset.push(nums[i]);
    recursive(i + 1);

    subset.pop();
    recursive(i + 1);
  }

  recursive(0);

  return subsets;
}
