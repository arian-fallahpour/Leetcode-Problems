/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const head = {};

  let newNode = head;
  let currentNode1 = l1;
  let currentNode2 = l2;
  let carryOut = 0;
  while (currentNode1 !== null || currentNode2 !== null || carryOut === 1) {
    let sum = carryOut;
    carryOut = 0;

    if (currentNode1 !== null) {
      sum += currentNode1.val;
      currentNode1 = currentNode1.next;
    }
    if (currentNode2 !== null) {
      sum += currentNode2.val;
      currentNode2 = currentNode2.next;
    }

    if (sum >= 10) {
      sum -= 10;
      carryOut = 1;
    }

    newNode.val = sum;
    if (currentNode1 !== null || currentNode2 !== null || carryOut === 1) {
      newNode.next = {};
    } else {
      newNode.next = null;
    }
    newNode = newNode.next;
  }

  return head;
};
