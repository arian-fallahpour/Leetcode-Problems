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
 * @return {number}
 */
function maxPathSum(root) {
  let maxSum = -Infinity;

  function recursive(root) {
    if (root === null) {
      return 0;
    }

    const maxLeft = recursive(root.left);
    const maxRight = recursive(root.right);

    const maxValue = Math.max(root.val, root.val + maxLeft, root.val + maxRight);
    maxSum = Math.max(maxSum, root.val + maxLeft + maxRight, maxValue);
    return maxValue;
  }

  recursive(root);

  return maxSum;
}
