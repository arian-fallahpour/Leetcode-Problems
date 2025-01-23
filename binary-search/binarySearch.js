// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// function search(nums, target) {
//   let l = 0;
//   let r = nums.length - 1;
//   while (l < r && nums[i] !== target) {
//     const c = Math.floor((r - l) / 2);
//     if (nums[i] < target) {
//       l = i + 1;
//       i = l + Math.floor((r - l) / 2);
//     } else if (nums[i] > target) {
//       r = i;
//       i = l + Math.floor((r - l) / 2);
//     }
//   }

//   if (nums[i] === target) {
//     return i;
//   } else {
//     return -1;
//   }
// }

// This one's the cleaner one, because there is no need for if/else at the end
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const c = Math.ceil((l + r) / 2);

    if (nums[c] < target) {
      l = c + 1;
    } else if (nums[c] > target) {
      r = c - 1;
    } else {
      return c;
    }
  }

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12, 37], 9));
