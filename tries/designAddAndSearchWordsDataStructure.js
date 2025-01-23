class TrieNode {
  constructor(value, complete = false) {
    this.value = value;
    this.complete = complete;
    this.children = [];
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode(null);
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let nextNode = null;
      for (let j = 0; j < currentNode.children.length; j++) {
        if (currentNode.children[j].value === word[i]) {
          nextNode = currentNode.children[j];
          break;
        }
      }

      if (nextNode === null) {
        nextNode = new TrieNode(word[i]);
        currentNode.children.push(nextNode);
      }

      if (!nextNode.complete) {
        nextNode.complete = i === word.length - 1;
      }

      currentNode = nextNode;
    }
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    function backtrack(i, currentNode) {
      if (i === word.length) {
        return currentNode.complete;
      }

      if (currentNode.children.length === 0) {
        return false;
      }

      if (word[i] === ".") {
        for (let j = 0; j < currentNode.children.length; j++) {
          if (backtrack(i + 1, currentNode.children[j])) {
            return true;
          }
        }

        return false;
      } else {
        let nextNode = null;
        for (let j = 0; j < currentNode.children.length; j++) {
          if (currentNode.children[j].value === word[i]) {
            nextNode = currentNode.children[j];
            break;
          }
        }

        if (nextNode === null) {
          return false;
        }

        return backtrack(i + 1, nextNode);
      }
    }

    return backtrack(0, this.root);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDictionary = new WordDictionary();
wordDictionary.addWord("a");
wordDictionary.addWord("ab");
console.dir(wordDictionary, { depth: null });
// console.log(wordDictionary.search("."));
console.log(wordDictionary.search(".a"));
