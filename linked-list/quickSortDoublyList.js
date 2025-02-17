class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

class DoublyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const nums = [4, 6, 1, 3, 7, 9, 2];
const doublyLinkedList = new DoublyLinkedList();
let currentNode = doublyLinkedList.head;
for (const num of nums) {
  if (currentNode === null) {
    doublyLinkedList.head = new DoublyLinkedListNode(num);
    currentNode = doublyLinkedList.head;
  } else {
    currentNode.next = new DoublyLinkedListNode(num);
    currentNode.next.prev = currentNode;
    currentNode = currentNode.next;
  }
}
doublyLinkedList.tail = currentNode;

function listToArray(list) {
  const array = [];
  let currentNode = list.head;
  while (currentNode) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return array;
}

function quickSortList(leftNode, rightNode) {
  if (leftNode === null || rightNode === null) {
    return;
  }

  const middleNode = partition(leftNode, rightNode);

  quickSortList(leftNode, middleNode.prev);
  quickSortList(middleNode.next, rightNode);
}

function partition(leftNode, rightNode) {
  const middleNode = leftNode;
  let currentLeftNode = leftNode.next;
  let currentRightNode = rightNode;
  let crossover = false;

  while (true) {
    while (currentLeftNode.value <= middleNode.value) {
      currentLeftNode = currentLeftNode.next;
      if (currentLeftNode === currentRightNode) crossover = true;
      if (currentLeftNode === rightNode) break;
    }
    while (currentRightNode.value >= middleNode.value) {
      currentRightNode = currentRightNode.prev;
      if (currentRightNode === currentLeftNode) crossover = true;
      if (currentRightNode === leftNode) break;
    }

    if (crossover) break;
    const temp = currentLeftNode.value;
    currentLeftNode.value = currentRightNode.value;
    currentRightNode.value = temp;
  }

  const temp = leftNode.value;
  leftNode.value = currentRightNode.value;
  currentRightNode.value = temp;

  return currentRightNode;
}

quickSortList(doublyLinkedList.head, doublyLinkedList.tail);
