/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
  if (!root) {
    return root;
  }

  let parentNode = null;
  let currentNode = root;
  while (currentNode !== null) {
    // Find node
    if (key < currentNode.val) {
      parentNode = currentNode;
      currentNode = currentNode.left;
      continue;
    } else if (key > currentNode.val) {
      parentNode = currentNode;
      currentNode = currentNode.right;
      continue;
    }

    // REMOVE CASE 1: No right child
    if (!currentNode.right) {
      if (!parentNode) {
        root = currentNode.left;
      } else if (key < parentNode.val) {
        parentNode.left = currentNode.left;
      } else {
        parentNode.right = currentNode.left;
      }

      return root;
    }

    // REMOVE CASE 2: Right child with no left child
    else if (!currentNode.right.left) {
      currentNode.right.left = currentNode.left;

      if (!parentNode) {
        root = currentNode.right;
      } else if (key < parentNode.val) {
        parentNode.left = currentNode.right;
      } else {
        parentNode.right = currentNode.right;
      }

      return root;
    }

    // REMOVE CASE 3: Right child with left child(s)
    else {
      let leftMostParent = currentNode.right;
      let leftMost = currentNode.right.left;
      while (leftMost.left !== null) {
        leftMostParent = leftMost;
        leftMost = leftMost.left;
      }
      leftMostParent.left = leftMost.right;
      leftMost.left = currentNode.left;
      leftMost.right = currentNode.right;

      if (!parentNode) {
        root = leftMost;
      } else if (key < parentNode.val) {
        parentNode.left = leftMost;
      } else {
        parentNode.right = leftMost;
      }

      return root;
    }
  }

  return root;
}

// Recursive version
function deleteNode(root, key) {
  if (!root) return root;

  // If key is less than current root's value
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  }

  // If key is greater than current root's value
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  }

  if (!root.left) return root.right; // null if node is a leaf
  if (!root.right) return root.left; // null if node is a leaf

  let leftMost = root.right;
  while (leftMost.left) {
    leftMost = leftMost.left;
  }
  root.val = leftMost.val;
  root.right = deleteNode(root.right, leftMost.val);
  return root;
}

/**
 * Notes
 * - The way we traverse through nodes, is by setting the
 *   node that we are going to equal to the result of
 *   running the function with the next node
 * -
 */
