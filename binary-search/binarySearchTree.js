class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = node;
          return this;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right !== null) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = node;
          return this;
        }
      } else {
        return this;
      }
    }
  }

  lookup(value) {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }

    return null;
  }

  remove(value) {
    if (this.root === null) {
      return null;
    }

    let parentNode = null;
    let currentNode = this.root;
    while (currentNode !== null) {
      // Find node
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        continue;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        continue;
      }

      // Handle deletion

      // CASE 1: No right child
      if (currentNode.right === null) {
        if (value < parentNode.value) {
          parentNode.left = currentNode.left;
        } else {
          parentNode.right = currentNode.left;
        }

        return this;
      }

      // CASE 2: Right child without left child
      if (currentNode.right.left === null) {
        currentNode.right.left = currentNode.left;

        if (value < parentNode.value) {
          parentNode.left = currentNode.right;
        } else {
          parentNode.right = currentNode.right;
        }

        return this;
      }

      // CASE 3: Right child with left child(s)
      let leftMostParent = currentNode.right;
      let leftMost = currentNode.right.left;
      while (leftMost.left !== null) {
        leftMostParent = leftMost;
        leftMost = leftMost.left;
      }
      leftMostParent.left = leftMost.right;
      leftMost.left = currentNode.left;
      leftMost.right = currentNode.right;

      if (parentNode === null) {
        this.root = currentNode;
      } else if (value < parentNode.value) {
        parentNode.left = leftMost;
      } else {
        parentNode.right = leftMost;
      }

      return this;
    }
  }
}

const myBinarySearchTree = new BinarySearchTree();
