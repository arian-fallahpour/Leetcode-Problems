// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isSubstringPresent = function (s) {
//   const m = {};
//   let ret = false;

//   for (let i = 0; i < s.length - 1; i++) {
//     const w = s.slice(i, i + 2);
//     const r = w.split("").reverse().join("");
//     m[w] = 1;

//     if (m[r]) ret = true;
//   }

//   return ret;
// };

// isSubstringPresent("leetcode");

// /**
//  * @param {string} s
//  * @param {character} c
//  * @return {number}
//  */
// var countSubstrings = function (s, c) {
//   let count = 0;
//   const indices = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === c) indices.push(i);
//   }

//   for (let i = 0; i < indices.length; i++) {
//     count += indices.length - i;
//   }

//   return count;
// };

// countSubstrings("zzz", "z");

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function (word, k) {
  const freqs = {};

  for (let i = 0; i < word.length; i++) {
    const l = word[i];

    if (freqs[l]) {
      freqs[l].push(i);
    } else {
      freqs[l] = [i];
    }
  }

  let deletes = 0;
  let flag = false;

  console.log(freqs);
  while (!flag) {
    flag = true;
    const letters = Object.keys(freqs);

    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        if (i === j) continue;
        console.log(freqs, letters[i], letters[j]);

        let bletter, sletter;
        if (freqs[letters[i]].length > freqs[letters[j]].length) {
          bletter = letters[i];
          sletter = letters[j];
        } else {
          bletter = letters[j];
          sletter = letters[i];
        }
        if (!freqs[bletter].length || !freqs[sletter].length) continue;

        const diff = freqs[bletter].length - freqs[sletter].length;
        if (diff > k) {
          flag = false;

          // even
          if (diff % 2) {
            freqs[bletter].pop();
          }

          //odd
          else {
            freqs[sletter].pop();
          }

          deletes += 1;
        }
      }
    }
  }

  console.log(freqs);

  console.log(deletes);

  return deletes;
};

minimumDeletions("aabcaba", 0);
