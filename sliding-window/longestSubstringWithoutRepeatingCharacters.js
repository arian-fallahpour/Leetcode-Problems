// /**
//  * @param {string} s
//  * @return {number}
//  */
// function lengthOfLongestSubstring(s) {
//   let maxLength = 0;

//   for (let i = 0; i < s.length; i++) {
//     const set = new Set();

//     let j = i;
//     while (!set.has(s[j]) && j < s.length) {
//       set.add(s[j]);
//       j++;
//     }

//     maxLength = Math.max(maxLength, set.size);
//   }

//   return maxLength;
// }

// /**
//  * @param {string} s
//  * @return {number}
//  */
// function lengthOfLongestSubstring(s) {
//   let l = 0;
//   let r = 0;
//   let maxLength = 0;
//   let set = new Set();

//   while (r < s.length) {
//     if (set.has(s[r])) {
//       set.delete(s[l]);
//       l++;
//     } else {
//       set.add(s[r]);
//       r++;
//       maxLength = Math.max(maxLength, set.size);
//     }
//   }

//   return maxLength;
// }

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let l = 0;
  let r = 0;
  let maxLength = 0;
  let set = new Set();

  while (r < s.length) {
    if (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    } else {
      set.add(s[r]);
      r++;
      maxLength = Math.max(maxLength, set.size);
    }
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabce"));
console.log(lengthOfLongestSubstring("wkkwke"));
