class TimeMap {
  data = new Map();

  constructor() {}

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    if (typeof this.data.get(key) === "undefined") {
      this.data.set(key, []);
    }
    this.data.get(key).push([value, timestamp]);
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    if (!this.data.has(key)) {
      return "";
    }

    const values = this.data.get(key);
    let result = "";
    let l = 0;
    let r = values.length - 1;
    while (l <= r) {
      const c = Math.ceil((l + r) / 2);
      if (values[c][1] <= timestamp) {
        result = values[c][0];
        l = c + 1;
      } else {
        r = c - 1;
      }
    }

    return result;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * const obj = new TimeMap()
 * obj.set(key, value, timestamp)
 * const param_2 = obj.get(key, timestamp)
 */

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1));
console.log(timeMap.get("foo", 3));
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4));
console.log(timeMap.get("foo", 5));
