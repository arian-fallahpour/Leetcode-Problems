// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestMonotonicSubarray = function (nums) {
//   let longest = 0;

//   // dec
//   for (let i = 0; i < nums.length; i++) {
//     let prev = nums[i];
//     let length = 1;

//     for (let j = i; j < nums.length - 1; j++) {
//       if (nums[j + 1] > prev) {
//         length += 1;
//         prev = nums[j + 1];
//       } else {
//         break;
//       }
//     }

//     if (length > longest) {
//       longest = length;
//     }
//   }

//   // dec
//   for (let i = 0; i < nums.length; i++) {
//     let prev = nums[i];
//     let length = 1;

//     for (let j = i; j < nums.length - 1; j++) {
//       if (nums[j + 1] < prev) {
//         length += 1;
//         prev = nums[j + 1];
//       } else {
//         break;
//       }
//     }

//     if (length > longest) {
//       longest = length;
//     }
//   }

//   console.log(longest);
//   return longest;
// };

// longestMonotonicSubarray([1, 4, 3, 3, 2]);

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (s, k) {
  if (k === 0) return s;

  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let t = s;
  while (distance(s, t) !== k) {}
};

function distance(s1, s2) {
  const pos = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let distance = 0;
  for (let i = 0; i < s1.length; i++) {
    distance += Math.min(
      Math.abs(pos[s1[i]] - pos[s2[i]]),
      25 - Math.abs(pos[s1[i]] - pos[s2[i]])
    );
  }

  return distance;
}

getSmallestString("zbbz", 3);
