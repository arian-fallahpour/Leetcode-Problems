class TrieNode {
  constructor(value, complete = false) {
    this.value = value;
    this.complete = complete;
    this.children = [];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }
  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
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
        return false;
      }

      currentNode = nextNode;
    }

    return currentNode.complete;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let currentNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let nextNode = null;
      for (let j = 0; j < currentNode.children.length; j++) {
        if (currentNode.children[j].value === prefix[i]) {
          nextNode = currentNode.children[j];
          break;
        }
      }

      if (nextNode === null) {
        return false;
      }

      currentNode = nextNode;
    }

    return currentNode !== null;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// Used array implementation because max number of letters in 26

const obj = new Trie();
obj.insert("app");
obj.insert("apple");
// obj.insert("beer");
// obj.insert("add");
// obj.insert("jam");
// obj.insert("rental");
console.dir(obj, { depth: null });
console.log(obj.search("apps"), obj.search("app"));
