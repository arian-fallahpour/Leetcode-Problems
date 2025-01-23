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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
  if (root === null && !isSameTree(root, subRoot)) {
    return false;
  }

  if (isSameTree(root, subRoot)) {
    return true;
  } else {
    if (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)) {
      return true;
    } else {
      return false;
    }
  }
}

function isSameTree(p, q) {
  if (p === null && q === null) return true;
  if (p === null && q !== null) return false;
  if (p !== null && q === null) return false;

  if (!isSameTree(p.left, q.left) || !isSameTree(p.right, q.right)) {
    return false;
  }

  if (p.val === q.val) {
    return true;
  } else {
    return false;
  }
}
