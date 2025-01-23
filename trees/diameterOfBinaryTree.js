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
function diameterOfBinaryTree(root) {
  let maxDiameter = 0;

  function maximumDepth(root) {
    if (root === null) {
      return 0;
    }
    const maxLeftDepth = maximumDepth(root.left);
    const maxRightDepth = maximumDepth(root.right);

    maxDiameter = Math.max(maxDiameter, maxLeftDepth + maxRightDepth + 2);

    return Math.max(maxLeftDepth, maxRightDepth) + 1;
  }

  maximumDepth(root);

  return maxDiameter;
}
