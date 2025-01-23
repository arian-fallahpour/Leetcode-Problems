/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let currentNode = head;
  let length = 1;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    length++;
  }

  let i = 0;
  let k = length - n;
  currentNode = head;
  previousNode = null;
  while (i < k) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    i++;
  }

  if (previousNode === null) {
    head = head.next;
  } else {
    previousNode.next = currentNode.next;
  }

  return head;
}

const linkedList1 = convertArrayToLinkedList([1, 2]);
console.log(removeNthFromEnd(linkedList1, 2));

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
