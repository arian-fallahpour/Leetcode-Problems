/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  const stack = [];

  let i = 0;
  while (i < s.length) {
    if (s[i] === " ") {
      i++;
      continue;
    }

    if (s[i] === "(") {
      let j = i + 1;
      while (s[j] !== ")") {
        j++;
      }
      const substring = s.slice(i, j + 1);
      const value = calculate(substring);
      stack.push(value.toString());
      i = j + 1;
    }

    if (s[i] === "-") {
      let j = i + 1;

      while (j + 1 < s.length || s[j] !== ")") {
        j++;
      }

      const substring = s.slice(i, j + 1);
      const value = calculate(substring) * -1;
      stack.push(value.toString());
      i = j + 1;
    }
  }
}

console.log(calculate("1 + 1"));
console.log(calculate(" 2-1 + 2 "));
console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
