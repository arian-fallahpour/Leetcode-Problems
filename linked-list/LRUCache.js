class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.left = null; // LRU
    this.right = null; // MRU
    this.cache = new Map();
    this.length = 0;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const node = this.cache.get(key);
    if (typeof node === "undefined") {
      return -1;
    }

    this.remove(node);
    this.insert(node.key, node.val);

    return node.val;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    const existingNode = this.cache.get(key);
    if (typeof existingNode !== "undefined") {
      this.remove(existingNode);
    }

    this.insert(key, value);

    if (this.length > this.capacity) {
      this.remove(this.left);
    }
  }

  remove(node) {
    this.cache.delete(node.key);
    this.length--;
    this.cache.size;

    // Middle of list
    if (node.prev !== null && node.next !== null) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }

    // Left of list
    else if (node.prev === null && node.next !== null) {
      this.left = node.next;
      node.next.prev = null;
    }

    // Right of list
    else if (node.prev !== null && node.next === null) {
      this.right = node.prev;
      node.prev.next = null;
    }

    // Only 1 node
    else {
      this.left = null;
      this.right = null;
    }
  }

  insert(key, val) {
    const node = new Node(key, val);
    this.cache.set(key, node);
    this.length++;

    if (this.right !== null) {
      this.right.next = node;
      node.prev = this.right;
      this.right = node;
    } else {
      this.left = node;
      this.right = node;
    }

    return node;
  }

  logList() {
    const output = [];
    console.log(this.left);
    let currentNode = this.left;
    while (currentNode !== null) {
      output.push([currentNode.key, currentNode.val]);
      currentNode = currentNode.next;
    }
    console.log(output);
  }

  logCache() {
    const output = [];
    this.cache.forEach((currentNode) => {
      output.push([currentNode.key, currentNode.val]);
    });
    console.log(output);
  }
}

const lruCache = new LRUCache(2);

// const node1 = lruCache.insert(1, 1);
// const node2 = lruCache.insert(2, 2);
// const node3 = lruCache.insert(3, 3);
// lruCache.logList();
// lruCache.remove(node1);
// lruCache.logList();

lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1));
lruCache.put(3, 3);
console.log(lruCache.get(2));
lruCache.put(4, 4);
console.log(lruCache.get(1));
console.log(lruCache.get(3));
console.log(lruCache.get(4));

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
