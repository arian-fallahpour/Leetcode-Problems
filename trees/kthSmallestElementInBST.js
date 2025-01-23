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
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
  const smallest = [];

  function recursive(root) {
    if (root === null) {
      return;
    }

    recursive(root.left);
    smallest.push(root.val);

    if (smallest.length === k) {
      return;
    }

    recursive(root.right);
  }

  recursive(root);

  return smallest[k - 1];
}
