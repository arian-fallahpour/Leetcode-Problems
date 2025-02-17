// function mergeSort(nums) {
//   const aux = [];

//   function sort(a, l, r) {
//     if (r <= l) {
//       return;
//     }

//     let m = Math.floor((r + l) / 2);
//     sort(a, l, m);
//     sort(a, m + 1, r);
//     merge(a, l, m, r);
//   }

//   function merge(a, l, m, r) {
//     let i = l,
//       j = m + 1;

//     for (let k = l; k <= r; k++) {
//       aux[k] = a[k];
//     }

//     for (let k = l; k <= r; k++) {
//       if (i > m) {
//         a[k] = aux[j];
//         j++;
//       } else if (j > r) {
//         a[k] = aux[i];
//         i++;
//       } else if (aux[j] < aux[i]) {
//         a[k] = aux[j];
//         j++;
//       } else {
//         a[k] = aux[i];
//         i++;
//       }
//     }
//   }

//   sort(nums, 0, nums.length - 1);
// }

const array = [4, 1, 8, 9, 3, 2, 6, 7];
mergeSort(array);
console.log(array);
