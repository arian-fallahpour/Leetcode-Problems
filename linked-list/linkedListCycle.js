// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
//
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// function hasCycle(head) {
//   const nodeSet = new Set();

//   let currentNode = head;
//   while (currentNode !== null) {
//     if (nodeSet.has(currentNode)) {
//       return true;
//     } else {
//       nodeSet.add(currentNode);
//     }
//     currentNode = currentNode.next;
//   }

//   return false;
// }

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  if (head === null || head.next === null) {
    return false;
  }

  let slow = head;
  let fast = head.next;
  while (slow !== null && fast !== null && fast.next !== null) {
    if (slow === fast) {
      return true;
    } else {
      slow = slow.next;
      fast = fast.next.next;
    }
  }

  return false;
}
