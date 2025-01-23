// /**
//  * // Definition for a _Node.
//  * function _Node(val, next, random) {
//  *    this.val = val;
//  *    this.next = next;
//  *    this.random = random;
//  * };
//  */
// /**
//  * @param {_Node} head
//  * @return {_Node}
//  */
// function copyRandomList(head) {
//   if (head === null) {
//     return null;
//   }

//   const headNode = {
//     val: head.val,
//     next: null,
//     random: null,
//   };
//   const nodes = [headNode];

//   let length = 1;
//   let copiedNode = headNode;
//   let copyingNode = head.next;
//   while (copyingNode !== null) {
//     copiedNode.next = {
//       val: copyingNode.val,
//       next: null,
//       random: null,
//     };
//     nodes.push(copiedNode.next);
//     copiedNode = copiedNode.next;
//     copyingNode = copyingNode.next;
//     length++;
//   }

//   let currentNode = head;
//   let i = 0;
//   while (currentNode !== null) {
//     const randomNode = currentNode.random;

//     if (currentNode.random === null) {
//       nodes[i].random = null;
//     } else {
//       let randomIndex = length;
//       let currentRandomNode = randomNode;
//       while (currentRandomNode !== null) {
//         currentRandomNode = currentRandomNode.next;
//         randomIndex--;
//       }
//       nodes[i].random = nodes[randomIndex];
//     }

//     currentNode = currentNode.next;
//     i++;
//   }

//   return headNode;
// }

// /**
//  * // Definition for a _Node.
//  * function _Node(val, next, random) {
//  *    this.val = val;
//  *    this.next = next;
//  *    this.random = random;
//  * };
//  */
// /**
//  * @param {_Node} head
//  * @return {_Node}
//  */
// function copyRandomList(head) {
//   if (head === null) {
//     return null;
//   }

//   const oldToNew = new Map();
//   oldToNew.set(head, {
//     val: head.val,
//     next: null,
//     random: null,
//   });

//   let newNode = oldToNew.get(head);
//   let oldNode = head.next;
//   while (oldNode !== null) {
//     newNode.next = {
//       val: oldNode.val,
//       next: null,
//       random: null,
//     };
//     oldToNew.set(oldNode, newNode.next);
//     newNode = newNode.next;
//     oldNode = oldNode.next;
//   }

//   newNode = oldToNew.get(head);
//   oldNode = head;
//   while (oldNode !== null) {
//     newNode.random = oldToNew.get(oldNode.random);
//     newNode = newNode.next;
//     oldNode = oldNode.next;
//   }

//   return oldToNew.get(head);
// }
