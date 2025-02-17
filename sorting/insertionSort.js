function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    const temp = nums[i];
    let j = i - 1;
    while (j >= 0 && temp < nums[j]) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = temp;
  }
}

const array = [4, 1, 8, 9, 3, 2, 6, 7];
insertionSort(array);
console.log(array);
