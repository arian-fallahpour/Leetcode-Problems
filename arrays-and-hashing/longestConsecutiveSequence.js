/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    }
  }

  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i] - 1]) {
      let length = 1;

      while (map[nums[i] + length]) {
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
