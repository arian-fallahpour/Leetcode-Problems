/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const result = [];
  function recursive(i, current, total) {
    if (i > candidates.length - 1 || total > target) {
      return;
    }

    if (total === target) {
      result.push(Array.from(current));
      return;
    }

    current.push(candidates[i]);
    recursive(i, current, total + candidates[i]);

    current.pop();
    recursive(i + 1, current, total);
  }

  recursive(0, [], 0);

  return result;
}
