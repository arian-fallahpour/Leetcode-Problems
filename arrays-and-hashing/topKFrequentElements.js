/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const count = {};
  const answer = [];
  const exists = {};

  for (let i = 0; i < nums.length; i++) {
    if (typeof count[nums[i]] === "undefined") {
      count[nums[i]] = 0;
    }
    count[nums[i]]++;

    for (let j = 0; j < k; j++) {
      // If empty and not in answer, insert
      if (typeof answer[j] === "undefined" && !exists[nums[i]]) {
        exists[nums[i]] = true;
        answer[j] = nums[i];
      }

      // If not in answer and more frequent than current, insert and remove previous
      else if (!exists[nums[i]] && count[nums[i]] > count[answer[j]]) {
        exists[answer[j]] = false;
        exists[nums[i]] = true;
        answer[j] = nums[i];
      }
    }
  }

  return answer;
}

/**
 * Notes
 * - need to watch out when I  substitute a value in some place, then use that place to delete something else
 * - O(nk) answers use a heap (type of tree), which is the same thing used in a heap sort, so no need to go that far
 */
