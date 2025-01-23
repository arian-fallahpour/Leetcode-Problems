class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// /**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */
// function mergeKLists(lists) {
//   if (lists.length === 0) {
//     return null;
//   }

//   let mergedList = null;
//   let currentNode = null;

//   while (true) {
//     // Find smallestNode
//     let smallestIndex = 0;
//     let smallestNode = lists[0];
//     let i = 1;
//     while (i < lists.length) {
//       if (smallestNode === null || (lists[i] !== null && lists[i].val < smallestNode.val)) {
//         smallestNode = lists[i];
//         smallestIndex = i;
//       }
//       i++;
//     }

//     // If all nodes are null, exist loop
//     if (smallestNode === null) {
//       break;
//     }

//     // Remove smallestNode from curresponding list
//     lists[smallestIndex] = smallestNode.next;

//     // Push smallestNode to mergedList
//     smallestNode = new ListNode(smallestNode.val, null);
//     if (mergedList === null) {
//       mergedList = smallestNode;
//       currentNode = mergedList;
//     } else {
//       currentNode.next = smallestNode;
//       currentNode = currentNode.next;
//     }
//   }

//   return mergedList;
// }

// /**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */
// function mergeKLists(lists) {
//   if (lists.length === 0) {
//     return null;
//   }

//   let smallestNode = null;
//   let smallestIndex = null;
//   for (let i = 0; i < lists.length; i++) {
//     if (lists[i] === null) {
//       lists.slice(i, 1);
//     } else if (smallestNode === null || lists[i].val < smallestNode.val) {
//       smallestNode = lists[i];
//       smallestIndex = i;
//     }
//   }

//   if (smallestNode === null) {
//     return null;
//   }

//   lists[smallestIndex] = smallestNode.next;

//   return new ListNode(smallestNode.val, mergeKLists(lists));
// }

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  if (lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    const mergedLists = [];

    for (let i = 0; i < lists.length; i += 2) {
      const list1 = lists[i];
      const list2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeLists(list1, list2));
    }

    lists = mergedLists;
  }

  return lists[0];
}

function mergeLists(list1, list2) {
  if (list1 !== null && list2 !== null) {
    let smallerNode;
    let nextNode;
    if (list1.val < list2.val) {
      smallerNode = list1;
      nextNode = mergeLists(list1.next, list2);
    } else {
      smallerNode = list2;
      nextNode = mergeLists(list1, list2.next);
    }
    smallerNode.next = nextNode;
    return smallerNode;
  } else {
    let currentNode, nextNode;
    if (list1 !== null) {
      currentNode = list1;
      nextNode = mergeLists(list1.next, list2);
    } else if (list2 !== null) {
      currentNode = list2;
      nextNode = mergeLists(list1, list2.next);
    } else {
      return null;
    }
    currentNode.next = nextNode;
    return currentNode;
  }
}

function createLinkedList(values) {
  if (values.length === 0) return null;
  const [firstValue, ...rest] = values;
  return new ListNode(firstValue, createLinkedList(rest));
}

function logLinkedList(head) {
  if (head === null) {
    return;
  }
  console.log(head.val);
  logLinkedList(head.next);
}

// logLinkedList(mergeLists(createLinkedList([1, 3, 4]), createLinkedList([2, 3, 5])));
logLinkedList(mergeKLists([createLinkedList([1, 4, 5]), createLinkedList([1, 3, 4])]));
