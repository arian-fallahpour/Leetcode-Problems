// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// function groupAnagrams(strs) {
//   const map = {};

//   // O(m)
//   for (let str of strs) {
//     const sorted = str.split("").sort().join(""); // O(nlogn)
//     if (!map[sorted]) {
//       map[sorted] = [];
//     }
//     map[sorted].push(str);
//   }

//   return Object.values(map);
// } // O(M*NlogN)

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const map = {};

  // O(m)
  for (let str of strs) {
    let count = new Array(26).fill(0);

    for (let char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    count = count.join("_");

    if (!map[count]) {
      map[count] = [];
    }
    map[count].push(str);
  }

  return Object.values(map);
} // O(M*N)

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
