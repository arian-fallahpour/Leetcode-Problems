/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
function largestOverlap(img1, img2) {
  const rows = img1.length;
  const cols = img1[0].length;

  const img1Ones = [];
  const img2Ones = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (img1[r][c] === 1) img1Ones.push([r, c]);
      if (img2[r][c] === 1) img2Ones.push([r, c]);
    }
  }

  const counts = new Map();
  let result = 0;
  for (const [r1, c1] of img1Ones) {
    for (const [r2, c2] of img2Ones) {
      const d = [r2 - r1, c2 - c1];
      counts.set(`${d[0]},${d[1]}`, (counts.get(`${d[0]},${d[1]}`) || 0) + 1);
      result = Math.max(result, counts.get(`${d[0]},${d[1]}`));
    }
  }

  return result;
}
