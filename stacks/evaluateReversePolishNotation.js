/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token === "+") {
      const newToken = stack[stack.length - 2] + stack[stack.length - 1];
      stack.pop();
      stack.pop();
      stack.push(newToken);
    } else if (token === "-") {
      const newToken = stack[stack.length - 2] - stack[stack.length - 1];
      stack.pop();
      stack.pop();
      stack.push(newToken);
    } else if (token === "*") {
      const newToken = stack[stack.length - 2] * stack[stack.length - 1];
      stack.pop();
      stack.pop();
      stack.push(newToken);
    } else if (token === "/") {
      let newToken = stack[stack.length - 2] / stack[stack.length - 1];
      newToken = newToken > 0 ? Math.floor(newToken) : Math.ceil(newToken);
      stack.pop();
      stack.pop();
      stack.push(newToken);
    } else {
      stack.push(JSON.parse(token));
    }
  }

  return stack[0];
}

// console.log(evalRPN(["2", "1", "+", "3", "*"]));
// console.log(evalRPN(["4", "13", "5", "/", "+"]));
// console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
