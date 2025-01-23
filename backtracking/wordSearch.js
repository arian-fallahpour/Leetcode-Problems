/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  function backtrack(r, c, i, path) {
    if (i === word.length) return true;
    if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return false;
    if (board[r][c] !== word[i]) return false;
    if (path.has(`${c},${r}`)) return false;

    path.add(`${c},${r}`);
    const result =
      backtrack(r + 1, c, i + 1, path) ||
      backtrack(r - 1, c, i + 1, path) ||
      backtrack(r, c + 1, i + 1, path) ||
      backtrack(r, c - 1, i + 1, path);
    path.delete(`${c},${r}`);
    return result;
  }

  // NOTE: This part is not necessary, but it helps to speed up process with large set of repetitive numbers
  const count = {};
  for (const c of word) count[c] = (count[c] || 0) + 1;
  if (count[word[0]] > count[word[word.length - 1]]) {
    word = word.split("").reverse().join("");
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] !== word[0]) continue;
      if (backtrack(r, c, 0, new Set())) {
        return true;
      }
    }
  }

  return false;
}
