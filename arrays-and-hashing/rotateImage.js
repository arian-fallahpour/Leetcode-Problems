/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  let l = 0,
    r = matrix[0].length - 1;
  let t = 0,
    b = matrix.length - 1;

  while (l < r && t < b) {
    for (let i = 0; i < r - l; i++) {
      const temp = matrix[t][l + i];
      matrix[t][l + i] = matrix[b - i][l];
      matrix[b - i][l] = matrix[b][r - i];
      matrix[b][r - i] = matrix[t + i][r];
      matrix[t + i][r] = temp;
    }
    l++;
    r--;
    t++;
    b--;
  }
}
