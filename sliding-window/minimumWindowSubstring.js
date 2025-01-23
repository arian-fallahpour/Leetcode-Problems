/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  const windowMap = new Map();
  const tMap = new Map();
  for (let i = 0; i < t.length; i++) increment(tMap, t[i]);

  let resLength, resL, resR;
  let l = 0;
  let r = 0;
  while (l < s.length) {
    const hasAllChars = doesHaveAllChars();

    // console.log(l, r, hasAllChars, windowMap);

    if (hasAllChars) {
      //   console.log(s.slice(l, r));
      if (!resLength || r - l + 1 < resLength) {
        resLength = r - l + 1;
        resL = l;
        resR = r;
      }

      decrement(windowMap, s[l]);
      l++;
    } else {
      if (r < s.length) {
        increment(windowMap, s[r]);
        r++;
      } else {
        break;
      }
    }
  }

  function increment(m, k) {
    m.set(k, m.get(k) ? m.get(k) + 1 : 1);
  }

  function decrement(m, k) {
    if (m.get(k) == 1) {
      m.delete(k);
    } else {
      m.set(k, m.get(k) - 1);
    }
  }

  function doesHaveAllChars() {
    let hasAllChars = true;
    for (key of tMap.keys()) {
      if (!windowMap.has(key) || windowMap.get(key) < tMap.get(key)) {
        hasAllChars = false;
        break;
      }
    }
    return hasAllChars;
  }

  if (!resLength) {
    return "";
  } else {
    return s.slice(resL, resR);
  }
}

// Optimized the process of checking if we have all the values in the current substring
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  const windowMap = new Map();
  const tMap = new Map();
  for (let i = 0; i < t.length; i++) {
    windowMap.set(t[i], 0);
    tMap.set(t[i], tMap.get(t[i]) ? tMap.get(t[i]) + 1 : 1);
  }

  let have = 0;
  const need = tMap.size;
  let minLength, minL, minR;
  let l = 0;
  let r = 0;
  while (r <= s.length) {
    if (have !== need) {
      if (tMap.has(s[r])) {
        windowMap.set(s[r], windowMap.get(s[r]) + 1);
        if (windowMap.get(s[r]) === tMap.get(s[r])) {
          have++;
        }
      }

      r++;
    } else {
      if (!minLength || r - l < minLength) {
        minLength = r - l;
        minL = l;
        minR = r - 1;
      }

      if (tMap.has(s[l])) {
        windowMap.set(s[l], windowMap.get(s[l]) - 1);
        if (windowMap.get(s[l]) < tMap.get(s[l])) {
          have--;
        }
      }

      l++;
    }
  }

  if (!minLength) {
    return "";
  } else {
    return s.slice(minL, minR + 1);
  }
}

console.log(minWindow("aa", "aa"));
// console.log(minWindow("ab", "a"));
// console.log(minWindow("abc", "b"));
// console.log(minWindow("ADOBECODEBANC", "ABC"));
