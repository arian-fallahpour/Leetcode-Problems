class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

class DoublyLinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

const list = new DoublyLinkedList();
let currentNode = null;
for (let i = 1; i <= 0; i++) {
  if (currentNode === null) {
    currentNode = new DoublyLinkedNode(i);
    list.head = currentNode;
  } else {
    currentNode.next = new DoublyLinkedNode(i);
    currentNode.next.previous = currentNode;
    currentNode = currentNode.next;
  }
}
list.tail = currentNode;

function swapNodes(a, b) {
  if (a === null || b === null) return;
  if (list.head === null || list.tail === null) return;
  if (a.previous === b.previous && a.next === b.next) return;

  const aNext = a.next;
  const aPrevious = a.previous;

  a.next = b.next;
  a.previous = b.previous;
  if (b.next !== null) b.next.previous = a;
  else list.tail = a;
  if (b.previous !== null) b.previous.next = a;
  else list.head = a;

  b.next = aNext;
  b.previous = aPrevious;
  if (aNext !== null) aNext.previous = b;
  else list.tail = b;
  if (aPrevious !== null) aPrevious.next = b;
  else list.head = b;
}

swapNodes(list.head, list.head);

console.dir(list.head, { depth: null });
