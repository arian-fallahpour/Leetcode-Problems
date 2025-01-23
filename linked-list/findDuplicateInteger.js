/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  let s1 = 0;
  let f = 0;
  while (true) {
    s1 = nums[s1];
    f = nums[nums[f]];
    if (s1 === f) {
      break;
    }
  }

  let s2 = 0;
  while (s1 !== s2) {
    s1 = nums[s1];
    s2 = nums[s2];

    if (s1 === s2) {
      return s1;
    }
  }
}

console.log(findDuplicate([4, 3, 1, 4, 2]));
