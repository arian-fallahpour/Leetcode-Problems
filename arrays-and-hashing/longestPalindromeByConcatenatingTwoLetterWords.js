/**
 * @param {string[]} words
 * @return {number}
 */
function longestPalindrome(words) {
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    if (!map.has(words[i])) {
      map.set(words[i], 0);
    }
    map.set(words[i], map.get(words[i]) + 1);
  }

  let usedOne = false;
  let result = 0;
  const keys = Array.from(map.keys());
  for (let i = 0; i < keys.length; i++) {
    const word = keys[i];
    const reversed = word.split("").reverse().join("");

    if (word === reversed) {
      if (map.get(word) % 2 === 1) {
        result += (map.get(word) - 1) * 2;
        if (!usedOne) {
          usedOne = true;
          result += 2;
        }
      } else {
        result += map.get(word) * 2;
      }
    } else {
      result += Math.min(map.get(word) || 0, map.get(reversed) || 0) * 4;
      map.delete(word);
      map.delete(reversed);
    }
  }

  return result;
}
