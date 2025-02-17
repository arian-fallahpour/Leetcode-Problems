function quickSort(nums) {
  function recursive(array, l, r) {
    if (l >= r) {
      return;
    }

    const pivot = partition(array, l, r);
    recursive(array, l, pivot - 1);
    recursive(array, pivot + 1, r);
  }

  function partition(array, l, r) {
    let i = l + 1;
    let j = r;

    while (true) {
      while (array[i] <= array[l]) {
        i++;
        if (i === r) break;
      }
      while (array[j] >= array[l]) {
        j--;
        if (j === l) break;
      }

      if (i >= j) break;
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }

    const temp = array[l];
    array[l] = array[j];
    array[j] = temp;

    return j;
  }

  recursive(nums, 0, nums.length - 1);
}

const array = [4, 1, 8, 9, 3, 2, 6];
quickSort(array);
console.log(array);
