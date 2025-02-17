/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  const result = [];

  let l = 0,
    r = matrix[0].length;
  let t = 0,
    b = matrix.length;
  while (l < r && t < b) {
    for (let i = l; i < r; i++) result.push(matrix[t][i]);
    t++;

    for (let i = t; i < b; i++) result.push(matrix[i][r - 1]);
    r--;

    if (l >= r || t >= b) break;

    for (let i = r - 1; i >= l; i--) result.push(matrix[b - 1][i]);
    b--;

    for (let i = b - 1; i >= t; i--) result.push(matrix[i][l]);
    l++;
  }

  return result;
}
