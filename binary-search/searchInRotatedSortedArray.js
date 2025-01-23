// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// function search(nums, target) {
//   const firstNumber = nums[0];
//   let l = 0;
//   let r = nums.length - 1;
//   let c = Math.ceil((r - l) / 2);
//   while (l < r) {
//     if (nums[c] < firstNumber) {
//       r = c;
//     } else {
//       l = c + 1;
//     }
//     c = l + Math.floor((r - l) / 2);
//   }

//   let inflectionIndex;
//   if (nums[c] > firstNumber) {
//     inflectionIndex = 0;
//   } else {
//     inflectionIndex = c;
//   }

//   const rotation = nums.length - inflectionIndex;

//   l = -rotation;
//   r = mod(-rotation - 1);
//   c = Math.ceil((r + l) / 2);
//   while (l < r) {
//     if (nums.at(c) > target) {
//       r = c;
//     } else if (nums.at(c) < target) {
//       l = c + 1;
//     } else {
//       break;
//     }
//     c = Math.floor((r + l) / 2);
//   }

//   function mod(n) {
//     return ((n % nums.length) + nums.length) % nums.length;
//   }

//   if (nums.at(c) === target) {
//     return mod(c);
//   } else {
//     return -1;
//   }
// }

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  const firstNumber = nums[0];

  let l = 0;
  let r = nums.length - 1;
  let c = Math.ceil((r + l) / 2);
  while (l < r) {
    if (target > firstNumber) {
      if (nums[c] < firstNumber) {
        r = c;
        c = l + Math.floor((r - l) / 2);
      } else {
        if (nums[c] > target) {
          r = c;
        } else if (nums[c] < target) {
          l = c + 1;
        } else {
          return c;
        }
        c = l + Math.floor((r - l) / 2);
      }
    } else if (target < firstNumber) {
      if (nums[c] > firstNumber) {
        l = c + 1;
        c = l + Math.floor((r - l) / 2);
      } else {
        if (nums[c] > target) {
          r = c;
        } else if (nums[c] < target) {
          l = c + 1;
        } else {
          return c;
        }
        c = l + Math.floor((r - l) / 2);
      }
    } else {
      return 0;
    }
  }

  if (nums[c] === target) {
    return c;
  } else {
    return -1;
  }
}

// console.log(search([4, 5, 6, 7, 0, 1, 2], 5));
console.log(search([1], 1));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
