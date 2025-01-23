// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// function threeSum(nums) {
//   const set = new Set();

//   const res = [];
//   for (let i = 0; i < nums.length; i++) {
//     const target = nums[i];

//     for (let j = 0; j < nums.length; j++) {
//       if (j === i) continue;
//       const third = -(target + nums[j]);

//       for (let k = 0; k < nums.length; k++) {
//         if (k === i || k === j) continue;
//         if (nums[k] === third) {
//           const vals = [target, nums[j], nums[k]].sort((a, b) => a - b); // O(1)
//           const key = vals.join("");

//           if (!set.has(key)) {
//             set.add(key);
//             res.push(vals);
//           }
//         }
//       }
//     }
//   }

//   return res;
// }

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums = nums.sort((a, b) => a - b); // O(nlogn)

  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);

        // Continue searching the rest of array
        l++;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return res;
}

console.log(threeSum([-2, -1, 0, 1, 2, 2, 3]));
