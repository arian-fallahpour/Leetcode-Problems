/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (digits.length === 0) return [];

  const letters = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const result = [];

  function backtrack(i, str) {
    if (i >= digits.length) {
      result.push(str);
      return;
    }

    const number = JSON.parse(digits[i]);
    for (let j = 0; j < letters[number - 2].length; j++) {
      backtrack(i + 1, str + letters[number - 2][j]);
    }
  }

  backtrack(0, "");
  return result;
}
