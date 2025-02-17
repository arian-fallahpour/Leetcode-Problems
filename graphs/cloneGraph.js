/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

/**
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(node) {
  if (node === null) {
    return null;
  }

  const visited = new Map();

  function recursive(currentNode) {
    if (visited.has(currentNode.val)) {
      return visited.get(currentNode.val);
    }

    if (currentNode === null) {
      return null;
    }

    const copiedNode = new Node(currentNode.val);
    visited.set(copiedNode.val, copiedNode);

    for (let i = 0; i < currentNode.neighbors.length; i++) {
      copiedNode.neighbors.push(recursive(currentNode.neighbors[i]));
    }

    return copiedNode;
  }

  return recursive(node);
}
