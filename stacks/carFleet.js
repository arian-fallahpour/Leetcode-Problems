/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
function carFleet(target, position, speed) {
  const pairs = [];
  const stack = [];

  for (let i = 0; i < position.length; i++) {
    pairs.push([position[i], speed[i]]);
  }

  pairs.sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < pairs.length; i++) {
    const pos = pairs[i][0];
    const speed = pairs[i][1];
    const time = (target - pos) / speed;
    stack.push(time);
    if (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) {
      stack.pop();
    }
  }

  return stack.length;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));

/**
 * 10 + 2 = 12
 * 8 + 4 = 12
 */
