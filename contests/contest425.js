// /**
//  * @param {string} s
//  * @param {string} t
//  * @param {number} k
//  * @return {boolean}
//  */
// function isPossibleToRearrange(s, t, k) {
//   const substringCounts = new Map();
//   const substringLength = s.length / k;

//   for (let i = 0; i < s.length; i += substringLength) {
//     const substring = s.slice(i, i + substringLength);
//     substringCounts.set(
//       substring,
//       typeof substringCounts.get(substring) === "undefined" ? 1 : substringCounts.get(substring) + 1
//     );
//   }

//   for (let i = 0; i < t.length; i += substringLength) {
//     const substring = t.slice(i, i + substringLength);

//     if (substringCounts.has(substring)) {
//       const count = substringCounts.get(substring);
//       if (count - 1 === 0) {
//         substringCounts.delete(substring);
//       } else {
//         substringCounts.set(substring, count - 1);
//       }
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPossibleToRearrange("hnmnmhnmh", "nmhnmhnmh", 3));

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} op1
 * @param {number} op2
 * @return {number}
 */
function minArraySum(nums, k, op1, op2) {
  const op1Used = new Set();
  const op2Used = new Set();
  const mUsed = new Set();

  console.log(nums);
  while (op1 + op2 > 0) {
    let m;
    for (let i = 0; i < nums.length; i++) {
      if (!mUsed.has(i) && (!m || nums[i] > nums[m])) {
        m = i;
      }
    }

    if (!m) {
      break;
    }

    console.log(op1, op2);

    if (!op1Used.has(m) && !op2Used.has(m)) {
      if (op1 > 0 && (remove1(nums[m]) > remove2(nums[m], k) || op2 === 0)) {
        nums[m] = nums[m] - remove1(nums[m]);
        op1--;
        console.log("op1 1", nums);
      } else if (op2 > 0 && nums[m] >= k) {
        nums[m] = nums[m] - remove2(nums[m], k);
        op2--;
        console.log("op2 1", nums);
      } else {
        mUsed.add(m);
      }
    } else {
      if (!op1Used.has(m) && op1 > 0) {
        nums[m] = nums[m] - remove1(nums[m]);
        op1--;
        console.log("op1 2", nums);
      } else if (!op2Used.has(m) && op2 > 0 && nums[m] >= k) {
        nums[m] = nums[m] - remove2(nums[m], k);
        op2--;
        console.log("op2 2", nums);
      }
      mUsed.add(m);
    }

    console.log(mUsed);
  }

  return nums.reduce((a, b) => b + a, 0);
}

function remove1(num) {
  return num - Math.ceil(num / 2);
}

function remove2(num, k) {
  return num - (num - k);
}

console.log(minArraySum([2, 4, 3], 3, 2, 1));
// console.log(minArraySum([2, 8, 3, 19, 3], 3, 1, 1));
// console.log(minArraySum([1, 1, 1, 2], 3, 3, 0));
// console.log(minArraySum([10], 3, 1, 1));
