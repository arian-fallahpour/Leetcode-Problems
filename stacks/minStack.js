function MinStack() {
  this.items = [];
  this.minItems = [];
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.items.push(val);

  if (this.minItems.length === 0) {
    this.minItems.push(val);
  } else if (val < this.minItems[this.minItems.length - 1]) {
    this.minItems.push(val);
  } else {
    this.minItems.push(this.minItems[this.minItems.length - 1]);
  }

  return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.items.pop();
  this.minItems.pop();
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minItems[this.minItems.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
