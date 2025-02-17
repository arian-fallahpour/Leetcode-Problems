function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let m = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[m] > nums[j]) {
        m = j;
      }
    }
    const temp = nums[m];
    nums[m] = nums[i];
    nums[i] = temp;
  }
}

const array = [4, 1, 8, 9, 3, 2, 6, 7];
selectionSort(array);
console.log(array);
