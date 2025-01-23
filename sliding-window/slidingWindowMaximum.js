// TIME LIMIT EXCEEDED
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// function maxSlidingWindow(nums, k) {
//   let head = null;
//   let size = 0;
//   const res = [];

//   for (let i = 0; i < nums.length - k + 1; i++) {
//     for (let j = i; j < i + k; j++) {
//       if (head === null) {
//         head = {
//           val: nums[j],
//           prev: null,
//         };
//         size = 1;
//       } else {
//         while (head && nums[j] >= head.val) {
//           head = head.prev;
//           size--;
//         }

//         if (head === null) {
//           head = {
//             val: nums[j],
//             prev: null,
//           };
//         } else {
//           let current = head;
//           while (current.prev !== null) {
//             current = current.prev;
//           }
//           current.prev = {
//             val: nums[j],
//             prev: null,
//           };
//         }
//         size++;

//         while (size > k) {
//           head = head.prev;
//           size--;
//         }
//       }
//     }
//     res.push(head.val);
//   }

//   return res;
// }

// GOOD SOLUTION, BUT UNREADABLE
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  let head = null;
  let tail = null;
  let size = 0;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (tail === null) {
      tail = {
        val: nums[i],
        index: i,
        next: null,
        prev: null,
      };
      head = tail;
      size++;
    } else {
      while (tail !== null && tail.index < i - k + 1) {
        tail = tail.next;
        if (tail !== null) {
          tail.prev = null;
        } else {
          head = null;
        }
        size--;
      }

      if (head !== null) {
        while (head !== null && head.val < nums[i]) {
          head = head.prev;
          if (head !== null) {
            head.next = null;
          } else {
            tail = null;
          }
          size--;
        }

        if (head !== null) {
          head.next = {
            val: nums[i],
            index: i,
            next: null,
            prev: head,
          };
          head = head.next;
          size++;
        } else {
          head = {
            val: nums[i],
            index: i,
            next: null,
            prev: null,
          };
          tail = head;
          size++;
        }
      } else {
        head = {
          val: nums[i],
          index: i,
          next: null,
          prev: null,
        };
        tail = head;
        size++;
      }
    }

    if (i + 1 >= k) {
      res.push(tail.val);
    }
  }

  return res;
}

// console.log(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5));
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1, -1], 1));
