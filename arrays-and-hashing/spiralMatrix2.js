/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
  const matrix = [];
  for (let r = 0; r < n; r++) {
    matrix.push([]);
  }

  let l = 0,
    r = n;
  let t = 0,
    b = n;
  let k = 1;
  while (l < r && t < b) {
    for (let i = l; i < r; i++) matrix[t][i] = k++;
    t++;

    for (let i = t; i < b; i++) matrix[i][r - 1] = k++;
    r--;

    if (l >= r || t >= b) break;

    for (let i = r - 1; i >= l; i--) matrix[b - 1][i] = k++;
    b--;

    for (let i = b - 1; i >= t; i--) matrix[i][l] = k++;
    l++;
  }

  return matrix;
}
