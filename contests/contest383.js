// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const returnToBoundaryCount = function (nums) {
//   let sum = 0;
//   let hitBoundary = 0;

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];

//     if (sum === 0) hitBoundary++;
//   }

//   return hitBoundary;
// };

// console.log(returnToBoundaryCount([3, 2, -3, -4]));

// WORKS!
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function (word, k) {
  let timePassed = 0;
  let index = 0;

  const split = word.match(new RegExp(".{1," + k + "}", "g"));

  while (split.join("") !== word || timePassed === 0) {
    split.shift();
    let added = false;

    for (let i = 0; i < split.length; i++) {
      const matching_split = Array.from(split);
      const concatted = matching_split.slice(i, matching_split.length).join("");

      if (concatted === word.slice(0, concatted.length)) {
        const next_k = word.slice(concatted.length, concatted.length + k);
        split.push(next_k);
        timePassed += 1;
        added = true;
        break;
      }
    }

    if (!added) {
      const next_k = word.slice(index, index + k);
      timePassed += 1;
      split.push(next_k);
    }

    index += 1;
  }

  return timePassed;
};
