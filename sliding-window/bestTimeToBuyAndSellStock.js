/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let l = 0;
  let r = 1;
  let maxProfit = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
    } else {
      l = r;
    }
    r++;
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
