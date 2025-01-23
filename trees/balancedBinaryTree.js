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
 * @return {boolean}
 */
function isBalanced(root) {
  let isBalanced = true;

  function maxDepth(root) {
    if (root === null || !isBalanced) {
      return 0;
    }

    const maxLeftDepth = maxDepth(root.left) + 1;
    const maxRightDepth = maxDepth(root.right) + 1;

    console.log(maxLeftDepth, maxRightDepth);

    if (Math.abs(maxLeftDepth - maxRightDepth) > 1) {
      isBalanced = false;
    }

    return Math.max(maxLeftDepth, maxRightDepth);
  }

  maxDepth(root);

  return isBalanced;
}
