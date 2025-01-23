/**
 * @param {number} N
 * @param {number} F
 * @param {number[]} P
 * @return {number}
 */
function getSecondsRequired(N, F, P) {
  let min = P[0];
  for (let i = 1; i < F; i++) {
    if (P[i] < min) {
      min = P[i];
    }
  }

  const spacesCount = N - min - F;
  return spacesCount + F;
}

// - - - 4 - - - 8 9 - 11
// - 2 - 4 5

console.log(getSecondsRequired(6, 3, [2, 4, 5]));
console.log(getSecondsRequired(8, 3, [2, 4, 5]));
console.log(getSecondsRequired(9, 3, [2, 4, 5, 8]));
