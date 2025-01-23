/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (numbers[l] + numbers[r] !== target) {
    if (numbers[l] + numbers[r] > target) {
      r--;
    } else if (numbers[l] + numbers[r] < target) {
      l++;
    }
  }

  return [l + 1, r + 1];
}

console.log(twoSum([-10, -8, -2, 1, 2, 5, 6], 0));
console.log(twoSum([-10, -8, -2, 1, 2, 5, 6], 11));
console.log(twoSum([-1, 0], -1));
