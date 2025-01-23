/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  let dummyNode = new ListNode(0, head);
  let prevGroupNode = dummyNode;

  while (true) {
    let kthNode = prevGroupNode;
    let j = 0;
    while (j < k && kthNode !== null) {
      kthNode = kthNode.next;
      j++;
    }

    if (kthNode === null) {
      return dummyNode.next;
    }

    let currentNode = prevGroupNode.next;
    let previousNode = kthNode.next;
    for (let i = 0; i < k; i++) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    const nextNode = prevGroupNode.next;
    prevGroupNode.next = kthNode;
    prevGroupNode = nextNode;
  }
}

// function reverseKGroup(head, k) {
//   let dummyNode = new ListNode(0, head);
//   let prevGroupNode = dummyNode;
//   while (true) {
//     let kthNode = prevGroupNode;
//     let j = 0;
//     while (j < k && kthNode !== null) {
//       kthNode = kthNode.next;
//       j++;
//     }

//     if (kthNode === null) {
//       break;
//     }

//     let previousNode = kthNode.next;
//     let currentNode = prevGroupNode.next;
//     for (let i = 0; i < k; i++) {
//       const nextNode = currentNode.next;
//       currentNode.next = previousNode;
//       previousNode = currentNode;
//       currentNode = nextNode;
//     }

//     const nextNode = prevGroupNode.next;
//     prevGroupNode.next = kthNode;
//     prevGroupNode = nextNode;
//   }

//   return dummyNode.next;
// }
