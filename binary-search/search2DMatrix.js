/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let l = 0;
  let r = rows * cols - 1;
  let i = Math.floor((r - l) / 2);

  while (l < r) {
    const currentCoords = getCoords(i);
    const currentValue = matrix[currentCoords[0]][currentCoords[1]];
    if (currentValue < target) {
      l = i + 1;
      i = l + Math.floor((r - l) / 2);
    } else if (currentValue > target) {
      r = i;
      i = l + Math.floor((r - l) / 2);
    } else {
      return true;
    }
  }

  function getCoords(n) {
    return [Math.floor(n / cols), n % cols];
  }

  const currentCoords = getCoords(i);
  const currentValue = matrix[currentCoords[0]][currentCoords[1]];
  if (currentValue === target) {
    return true;
  } else {
    return false;
  }
}

console.log(searchMatrix([[1]], 1));
