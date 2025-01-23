/**
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
  const result = [];
  const partition = [];

  function backtrack(i) {
    if (i >= s.length) {
      return result.push(Array.from(partition));
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        partition.push(s.slice(i, j + 1));
        backtrack(j + 1);
        partition.pop();
      }
    }
  }

  backtrack(0);
}

function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
