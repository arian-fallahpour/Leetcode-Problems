class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
let head = null;
let currentNode = null;

const values = [3, 1, 5, 7, 2, 3, 8];

for (let i = 0; i < values.length; i++) {
  if (head === null) {
    head = new LinkedListNode(values[i]);
    currentNode = head;
  } else {
    currentNode.next = new LinkedListNode(values[i]);
    currentNode = currentNode.next;
    list.tail = currentNode.next;
  }
}
list.head = head;

function split(head) {
  let fast = head;
  let slow = head;

  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  const right = slow.next;
  slow.next = null;
  return right;
}

function merge(left, right) {
  if (left === null) return right;
  if (right === null) return left;

  const merged = new LinkedListNode(null);

  let currentNode = merged;
  while (left !== null || right !== null) {
    if (left !== null && right !== null) {
      if (left.value < right.value) {
        currentNode.next = left;
        left = left.next;
      } else {
        currentNode.next = right;
        right = right.next;
      }
    } else if (left !== null) {
      currentNode.next = left;
      break;
    } else {
      currentNode.next = right;
      break;
    }
    currentNode = currentNode.next;
  }

  return merged.next;
}

function mergeSort(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const right = split(head);
  const left = head;

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

console.dir(list.head, { depth: null });
console.dir(mergeSort(list.head), { depth: null });
