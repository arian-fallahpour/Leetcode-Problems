class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }

  const rootValue = preorder[0];
  const m = inorder.findIndex(rootValue);
  const leftPreorder = preorder.slice(1, 1 + m);
  const rightPreorder = preorder.slice(1 + m);
  const leftInorder = inorder.slice(0, m);
  const rightInorder = inorder.slice(m + 1);

  const root = new TreeNode(rootValue, buildTree(leftPreorder, leftInorder), buildTree(rightPreorder, rightInorder));

  return root;
}
