/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
  let largest;
  for (let i = 0; i < piles.length; i++) {
    if (typeof largest === "undefined" || piles[i] > largest) {
      largest = piles[i];
    }
  }

  let minSpeed = largest;
  if (h === piles.length) {
    return minSpeed;
  }

  let l = 0;
  let r = largest;
  let c = Math.ceil((r - l) / 2);
  while (l < r) {
    let currentHours = 0;
    for (let i = 0; i < piles.length; i++) {
      currentHours += Math.ceil(piles[i] / c);
    }

    if (currentHours > h) {
      l = c + 1;
      c = l + Math.floor((r - l) / 2);
    } else {
      minSpeed = Math.min(minSpeed, c);
      r = c;
      c = l + Math.floor((r - l) / 2);
    }
  }

  return minSpeed;
}

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([312884470], 312884469));
