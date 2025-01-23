// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// function findMedianSortedArrays(nums1, nums2) {
//   let A = nums1;
//   let B = nums2;
//   const totalLength = nums1.length + nums2.length;
//   const halfLength = Math.floor(totalLength / 2);

//   // Make A the smaller array
//   if (A.length > B.length) {
//     A = nums2;
//     B = nums1;
//   }

//   let l = 0;
//   let r = A.length - 1;

//   while (true) {
//     const i = Math.floor((l + r) / 2); // For A
//     const j = halfLength - i - 2; // For B

//     const Aleft = i >= 0 ? A[i] : -Infinity;
//     const Aright = i + 1 < A.length ? A[i + 1] : Infinity;
//     const Bleft = j >= 0 ? B[j] : -Infinity;
//     const Bright = j + 1 < B.length ? B[j + 1] : Infinity;

//     if (Aleft <= Bright && Bleft <= Aright) {
//       const isOdd = totalLength % 2 === 1;
//       if (isOdd) {
//         return Math.min(Aright, Bright);
//       } else {
//         return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
//       }
//     } else if (Aleft > Bright) {
//       r = i - 1;
//     } else {
//       l = i + 1;
//     }
//   }
// }

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  let A = nums1;
  let B = nums2;

  if (A.length > B.length) {
    A = nums2;
    B = nums1;
  }

  let l = 0;
  let r = A.length - 1;

  const totalLength = nums1.length + nums2.length;
  const halfLength = Math.floor(totalLength / 2);

  while (true) {
    const i = Math.floor((l + r) / 2);
    const j = halfLength - i - 2;

    const Aleft = i >= 0 ? A[i] : -Infinity;
    const Aright = i < A.length - 1 ? A[i + 1] : Infinity;
    const Bleft = j >= 0 ? B[j] : -Infinity;
    const Bright = j < B.length - 1 ? B[j + 1] : Infinity;

    if (Aleft <= Bright && Bleft <= Aright) {
      if (totalLength % 2 === 1) {
        return Math.min(Aright, Bright);
      } else {
        return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
      }
    } else if (Aleft > Bright) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
}

console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));
