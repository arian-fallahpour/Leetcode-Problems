// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// function dailyTemperatures(temperatures) {
//   const res = [];
//   for (let i = 0; i < temperatures.length; i++) {
//     let count = 0;

//     let added = false;
//     for (let j = i + 1; j < temperatures.length; j++) {
//       if (temperatures[j] > temperatures[i]) {
//         count++;
//         res.push(count);
//         added = true;
//         break;
//       } else {
//         count++;
//       }
//     }

//     if (!added) {
//       res.push(0);
//     }
//   }
//   return res;
// }

// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// function dailyTemperatures(temperatures) {
//   const res = [];
//   const stack = [];

//   for (let i = 0; i < temperatures.length; i++) {
//     let top = stack.length - 1;
//     while (typeof stack[top] !== "undefined" && temperatures[i] > temperatures[stack[top]]) {
//       res[stack[top]] = i - stack[top];
//       stack.pop();
//       top--;
//     }
//     stack.push(i);
//   }

//   while (stack.length > 0) {
//     res[stack[stack.length - 1]] = 0;
//     stack.pop();
//   }

//   return res;
// }

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  const res = [];
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    let topIndex = stack.length - 1;
    while (typeof stack[topIndex] !== "undefined" && temperatures[i] > temperatures[stack[topIndex]]) {
      res[stack[topIndex]] = i - stack[topIndex];
      stack.pop();
      topIndex--;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    res[stack[stack.length - 1]] = 0;
    stack.pop();
  }

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
