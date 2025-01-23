// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// function checkInclusion(s1, s2) {
//   const s1Count = new Map();
//   for (let i = 0; i < s1.length; i++) {
//     if (!s1Count.get(s1[i])) {
//       s1Count.set(s1[i], 0);
//     }
//     s1Count.set(s1[i], s1Count.get(s1[i]) + 1);
//   }

//   for (let i = 0; i < s2.length - s1.length + 1; i++) {
//     const s2Count = new Map();
//     for (let j = 0; j < s1.length; j++) {
//       if (!s2Count.get(s2[i + j])) {
//         s2Count.set(s2[i + j], 0);
//       }
//       s2Count.set(s2[i + j], s2Count.get(s2[i + j]) + 1);
//     }

//     let differences = false;
//     for (const [key, val] of s1Count) {
//       if (s1Count.get(key) !== s2Count.get(key)) {
//         differences = true;
//       }
//     }
//     if (!differences) return true;
//   }

//   return false;
// }

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// function checkInclusion(s1, s2) {
//   const s1Count = new Map();
//   const s2Count = new Map();
//   for (let i = 0; i < s1.length; i++) {
//     if (!s1Count.get(s1[i])) s1Count.set(s1[i], 0);
//     if (!s2Count.get(s2[i])) s2Count.set(s2[i], 0);
//     s1Count.set(s1[i], s1Count.get(s1[i]) + 1);
//     s2Count.set(s2[i], s2Count.get(s2[i]) + 1);
//   }

//   for (let i = 0; i < s2.length - s1.length + 1; i++) {
//     let differences = false;
//     for (const [key, val] of s1Count) {
//       if (s1Count.get(key) !== s2Count.get(key)) {
//         differences = true;
//       }
//     }
//     if (!differences) return true;

//     if (s2Count.get(s2[i]) - 1 === 0) {
//       s2Count.delete(s2[i]);
//     } else {
//       s2Count.set(s2[i], s2Count.get(s2[i]) - 1);
//     }
//     s2Count.set(s2[i + s1.length], s2Count.get(s2[i + s1.length]) ? s2Count.get(s2[i + s1.length]) + 1 : 1);
//   }

//   return false;
// }

/**
 * Solution 2 optimizes solution 1 because instead of creating a new
 * s2Count map, it edits the current one and therefore reduces operations
 */

console.log(checkInclusion("adc", "dcda"));
