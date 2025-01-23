/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const res = [];

  prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }

  return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));
