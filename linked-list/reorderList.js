// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {void} Do not return anything, modify head in-place instead.
//  */
// var reorderList = function (head) {
//   let currentNode = head;
//   let nextNode = currentNode.next;

//   while (nextNode !== null && nextNode.next !== null) {
//     let secondLastNode = currentNode;
//     let lastNode = secondLastNode.next;
//     while (lastNode.next !== null) {
//       secondLastNode = secondLastNode.next;
//       lastNode = secondLastNode.next;
//     }

//     secondLastNode.next = lastNode.next;
//     currentNode.next = lastNode;
//     currentNode.next.next = nextNode;

//     currentNode = nextNode;
//     nextNode = currentNode.next;
//   }
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {void} Do not return anything, modify head in-place instead.
//  */
// function reorderList(head) {
//   // Find half of list
//   let slow = head;
//   let fast = slow.next;
//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   // Reverse second half
//   let secondNode = slow.next;
//   let previousNode = null;
//   slow.next = null;
//   while (secondNode !== null) {
//     let tempNode = secondNode.next;
//     secondNode.next = previousNode;
//     previousNode = secondNode;
//     secondNode = tempNode;
//   }

//   // Merge both lists
//   let firstNode = head;
//   secondNode = previousNode;
//   while (secondNode !== null) {
//     let tempNode1 = firstNode.next;
//     let tempNode2 = secondNode.next;
//     firstNode.next = secondNode;
//     secondNode.next = tempNode1;
//     firstNode = tempNode1;
//     secondNode = tempNode2;
//   }
// }

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
  let slow = head;
  let fast = slow.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let currentNode = slow.next;
  let previousNode = null;
  slow.next = null;
  while (currentNode !== null) {
    const tempNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = tempNode;
  }

  // Merge both lists
  let firstNode = head;
  let secondNode = previousNode;
  while (secondNode !== null) {
    let tempNode1 = firstNode.next;
    let tempNode2 = secondNode.next;
    secondNode.next = tempNode1;
    firstNode.next = secondNode;
    firstNode = tempNode1;
    secondNode = tempNode2;
  }
}

const linkedList1 = convertArrayToLinkedList([1, 2, 3, 4, 5]);
reorderList(linkedList1);
console.log(linkedListEntries(linkedList1));

function convertArrayToLinkedList(arr) {
  let head = {
    val: arr[0],
    next: null,
  };

  for (let i = 1; i < arr.length; i++) {
    let currentNode = head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = {
      val: arr[i],
      next: null,
    };
  }

  return head;
}

function linkedListEntries(head) {
  if (head.next === null) {
    return [head.val];
  }
  return [head.val, ...linkedListEntries(head.next)];
}
