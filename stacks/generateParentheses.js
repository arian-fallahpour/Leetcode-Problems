/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const res = [];

  function recursive(str, stack, k) {
    if (k === 1) {
      while (str.length < 2 * n) {
        str += ")";
      }
      res.push(str);
    } else {
      if (stack[stack.length - 1] === "(") {
        const stack2 = JSON.parse(JSON.stringify(stack));
        stack2.pop();

        recursive(str + "(", [...stack, "("], k - 1);
        recursive(str + ")", stack2, k);
      } else {
        recursive(str + "(", [...stack, "("], k - 1);
      }
    }
  }

  recursive("(", ["("], n);

  return res;
}

console.log(generateParenthesis(3));
