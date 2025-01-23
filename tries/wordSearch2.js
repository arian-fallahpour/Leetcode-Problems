class TrieNode {
  constructor(complete = false) {
    this.complete = complete;
    this.children = {};
  }

  insert(word) {
    let currentNode = this;
    for (const c of word) {
      if (!currentNode.children[c]) {
        currentNode.children[c] = new TrieNode();
      }
      currentNode = currentNode.children[c];
    }
    currentNode.complete = true;
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(board, words) {
  const root = new TrieNode();
  for (const word of words) {
    root.insert(word);
  }

  const ROWS = board.length,
    COLS = board[0].length;
  const res = new Set(),
    visit = new Set();

  const dfs = (r, c, node, word) => {
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || visit.has(`${r},${c}`) || !(board[r][c] in node.children)) {
      return;
    }

    visit.add(`${r},${c}`);
    node = node.children[board[r][c]];
    word += board[r][c];
    if (node.complete) {
      res.add(word);
    }

    dfs(r + 1, c, node, word);
    dfs(r - 1, c, node, word);
    dfs(r, c + 1, node, word);
    dfs(r, c - 1, node, word);

    visit.delete(`${r},${c}`);
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      dfs(r, c, root, "");
    }
  }

  return Array.from(res);
}
