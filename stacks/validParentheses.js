/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const complements = new Map();
  complements.set(")", "(");
  complements.set("}", "{");
  complements.set("]", "[");

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const last = stack[stack.length - 1];

    if (typeof last !== "undefined" && complements.has(char)) {
      if (last === complements.get(char)) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid("(}"));
console.log(isValid("([{}])"));
