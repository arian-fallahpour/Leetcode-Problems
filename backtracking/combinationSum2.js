// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// function combinationSum2(candidates, target) {
//   candidates = candidates.sort((a, b) => a - b);
//   console.log(candidates);

//   const result = [];

//   function recursive(i, current, total) {
//     if (total === target) {
//       result.push(Array.from(current));
//       return;
//     }

//     if (i >= candidates.length || total > target) {
//       return;
//     }

//     console.log(candidates[i], current);

//     current.push(candidates[i]);
//     recursive(i + 1, current, total + candidates[i]);

//     current.pop();
//     while (candidates[i] === candidates[i + 1]) i++;
//     recursive(i + 1, current, total);
//   }

//   recursive(0, [], 0);

//   return result;
// }

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  const result = [];

  function recursive(i, current, total, set) {
    if (total === target) {
      result.push(Array.from(current));
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    console.log(current);

    if (!set.has(candidates[i])) {
      current.push(candidates[i]);
      recursive(i + 1, current, total + candidates[i], set);
      current.pop();
    }

    set.add(candidates[i]);
    recursive(i + 1, current, total, set);
  }

  recursive(0, [], 0, new Set());

  return result;
}
