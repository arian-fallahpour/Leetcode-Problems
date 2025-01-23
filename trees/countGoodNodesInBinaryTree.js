class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function goodNodes(root) {
  let count = 0;

  function findGoodNodes(root, max) {
    if (root === null) return;

    if (root.val >= max) {
      count++;
      max = root.val;
    }

    if (root.left !== null) findGoodNodes(root.left, max);
    if (root.right !== null) findGoodNodes(root.right, max);
  }

  findGoodNodes(root, -Infinity);

  return count;
}
