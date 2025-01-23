class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  if (root === null) {
    return "";
  }

  const data = [];

  function recursive(root) {
    if (root === null) {
      data.push("null");
      return;
    }

    data.push(root.val);

    recursive(root.left);
    recursive(root.right);
  }

  recursive(root);

  return data.join(",");
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
  if (data.length === 0) {
    return null;
  }
  data = data.split(",");

  if (data[0] === "null") {
    return null;
  }

  let i = 0;
  function recursive(val) {
    if (val === "null" || i >= data.length) {
      return null;
    }

    const node = new TreeNode(data[i] !== "null" ? JSON.parse(data[i]) : null);
    node.left = recursive(data[++i]);
    node.right = recursive(data[++i]);

    return node;
  }

  return recursive(data[i]);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
