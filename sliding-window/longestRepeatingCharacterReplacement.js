// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {number}
//  */
// function characterReplacement(s, k) {
//   let l = 0;
//   let r = 0;
//   let longest = 0;
//   let replacements = k;

//   while (l < s.length) {
//     if (s[r] !== s[l]) {
//       if (r === s.length - 1) {
//         longest = Math.max(longest, Math.min(s.length, r - l + replacements));
//         l++;
//         r = l;
//         replacements = k;
//       } else {
//         if (replacements > 0) {
//           longest = Math.max(longest, r + 1 - l);
//           r++;
//           replacements--;
//         } else {
//           longest = Math.max(longest, r - l);
//           l++;
//           r = l;
//           replacements = k;
//         }
//       }
//     } else {
//       if (r === s.length - 1) {
//         longest = Math.max(longest, Math.min(s.length, r + 1 - l + replacements));
//         l++;
//         r = l;
//         replacements = k;
//       } else {
//         r++;
//         longest = Math.max(longest, r - l);
//       }
//     }
//   }

//   return longest;
// }

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  const count = new Map();
  let l = 0;
  let r = 0;
  let longest = 0;

  while (r < s.length) {
    count.set(s[r], count.get(s[r]) ? count.get(s[r]) + 1 : 1);

    while (r - l + 1 - Math.max(...count.values()) > k) {
      count.set(s[l], count.get(s[l]) - 1);
      l++;
    }

    longest = Math.max(longest, r - l + 1);
    r++;
  }

  return longest;
}

console.log(characterReplacement("ABABBA", 2));
