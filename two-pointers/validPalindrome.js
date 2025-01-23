// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// function isPalindrome(s) {
//   const set = new Set("0123456789abcdefghijklmnopqrstuvwxyz".split(""));

//   let str = "";
//   for (let i = 0; i < s.length; i++) {
//     if (set.has(s[i].toLowerCase())) {
//       str += s[i].toLowerCase();
//     }
//   }

//   const end = Math.floor(s.length / 2);
//   for (let i = 0; i < end; i++) {
//     console.log(str[i], str[str.length - 1 - i]);
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const set = new Set("0123456789abcdefghijklmnopqrstuvwxyz".split(""));

  let i = 0;
  let j = s.length - 1;

  while (j - i > 0) {
    const left = s[i].toLowerCase();
    const right = s[j].toLowerCase();

    if (!set.has(left)) {
      i++;
      continue;
    }

    if (!set.has(right)) {
      j--;
      continue;
    }

    if (left !== right) {
      return false;
    }

    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome("a;as aa"));
