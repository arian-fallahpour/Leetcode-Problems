/*
 * Complete the 'distributeRanges' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY ranges as parameter.
 */

const factorial = (n) => (n > 0 ? n * factorial(n - 1) : 1);

function distributeRanges(ranges) {
  ranges = ranges.sort((a, b) => a[0] - b[0]);
  console.log(ranges);

  let result = [];
  result.push(ranges[0]);
  for (let range of ranges) {
    if (result[result.length - 1][1] >= range[1]) {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], range[1]);
    } else {
      result.push(range);
    }
  }

  const n = result.length;
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum = (sum * 2) % (Math.pow(10, 9) + 7);
  }

  return factorial(result);
}
