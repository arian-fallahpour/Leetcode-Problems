// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function (list1, list2) {
//   let currentNode1 = list1;
//   let currentNode2 = list2;

//   let headNode = null;
//   let currentNode = null;

//   while (currentNode1 !== null || currentNode2 !== null) {
//     let smallerNode;

//     // Both nodes exist
//     if (currentNode1 !== null && currentNode2 !== null) {
//       if (currentNode1.val < currentNode2.val) {
//         smallerNode = currentNode1;
//         currentNode1 = currentNode1.next;
//       } else {
//         smallerNode = currentNode2;
//         currentNode2 = currentNode2.next;
//       }
//     }

//     // Only currentNode1 exists
//     else if (currentNode1 !== null) {
//       smallerNode = currentNode1;
//       currentNode1 = currentNode1.next;
//     }

//     // Only currentNode2 exists
//     else {
//       smallerNode = currentNode2;
//       currentNode2 = currentNode2.next;
//     }

//     if (currentNode === null) {
//       currentNode = smallerNode;
//     } else {
//       currentNode.next = smallerNode;
//       currentNode = currentNode.next;
//     }

//     if (headNode === null) {
//       headNode = currentNode;
//     }
//   }

//   return headNode;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) {
    return null;
  }

  // Both are not null
  if (list1 !== null && list2 !== null) {
    let smallerNode;
    let nextNode;
    if (list1.val < list2.val) {
      smallerNode = list1;
      nextNode = mergeTwoLists(list1.next, list2);
    } else {
      smallerNode = list2;
      nextNode = mergeTwoLists(list1, list2.next);
    }
    smallerNode.next = nextNode;
    return smallerNode;
  }

  // One is null
  else {
    let currentNode, nextNode;
    if (list1 !== null) {
      currentNode = list1;
      nextNode = mergeTwoLists(list1.next, list2);
    } else {
      currentNode = list2;
      nextNode = mergeTwoLists(list1, list2.next);
    }
    currentNode.next = nextNode;
    return currentNode;
  }
};
