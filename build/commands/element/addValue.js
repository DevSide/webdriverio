"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addValue;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Add a value to an object found by given selector. You can also use unicode
 * characters like Left arrow or Back space. WebdriverIO will take care of
 * translating them into unicode characters. You’ll find all supported characters
 * [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
 * To do that, the value has to correspond to a key from the table.
 *
 * <example>
    :addValue.js
    it('should demonstrate the addValue command', () => {
        let input = $('.input')
        input.addValue('test')
        input.addValue(123)

        value = input.getValue()
        assert(value === 'test123') // true
    })
 * </example>
 *
 * @alias element.addValue
 * @param {string | number | boolean | object | Array<any>}      value     value to be added
 * @uses protocol/elements, protocol/elementIdValue
 * @type action
 *
 */
function addValue(value) {
  if (!this.isW3C) {
    return this.elementSendKeys(this.elementId, (0, _utils.transformToCharString)(value));
  } // Workaround https://github.com/appium/appium/issues/12085


  if (this.isMobile) {
    return this.elementSendKeys(this.elementId, (0, _utils.transformToCharString)(value).join(''), (0, _utils.transformToCharString)(value));
  }

  return this.elementSendKeys(this.elementId, (0, _utils.transformToCharString)(value).join(''));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2FkZFZhbHVlLmpzIl0sIm5hbWVzIjpbImFkZFZhbHVlIiwidmFsdWUiLCJpc1czQyIsImVsZW1lbnRTZW5kS2V5cyIsImVsZW1lbnRJZCIsImlzTW9iaWxlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBMkJBOztBQTNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QmUsU0FBU0EsUUFBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDckMsTUFBSSxDQUFDLEtBQUtDLEtBQVYsRUFBaUI7QUFDYixXQUFPLEtBQUtDLGVBQUwsQ0FBcUIsS0FBS0MsU0FBMUIsRUFBcUMsa0NBQXNCSCxLQUF0QixDQUFyQyxDQUFQO0FBQ0gsR0FIb0MsQ0FLckM7OztBQUNBLE1BQUksS0FBS0ksUUFBVCxFQUFtQjtBQUNmLFdBQU8sS0FBS0YsZUFBTCxDQUFxQixLQUFLQyxTQUExQixFQUFxQyxrQ0FBc0JILEtBQXRCLEVBQTZCSyxJQUE3QixDQUFrQyxFQUFsQyxDQUFyQyxFQUE0RSxrQ0FBc0JMLEtBQXRCLENBQTVFLENBQVA7QUFDSDs7QUFFRCxTQUFPLEtBQUtFLGVBQUwsQ0FBcUIsS0FBS0MsU0FBMUIsRUFBcUMsa0NBQXNCSCxLQUF0QixFQUE2QkssSUFBN0IsQ0FBa0MsRUFBbEMsQ0FBckMsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogQWRkIGEgdmFsdWUgdG8gYW4gb2JqZWN0IGZvdW5kIGJ5IGdpdmVuIHNlbGVjdG9yLiBZb3UgY2FuIGFsc28gdXNlIHVuaWNvZGVcbiAqIGNoYXJhY3RlcnMgbGlrZSBMZWZ0IGFycm93IG9yIEJhY2sgc3BhY2UuIFdlYmRyaXZlcklPIHdpbGwgdGFrZSBjYXJlIG9mXG4gKiB0cmFuc2xhdGluZyB0aGVtIGludG8gdW5pY29kZSBjaGFyYWN0ZXJzLiBZb3XigJlsbCBmaW5kIGFsbCBzdXBwb3J0ZWQgY2hhcmFjdGVyc1xuICogW2hlcmVdKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJkcml2ZXIvd2ViZHJpdmVyLXNwZWMuaHRtbCNrZXlib2FyZC1hY3Rpb25zKS5cbiAqIFRvIGRvIHRoYXQsIHRoZSB2YWx1ZSBoYXMgdG8gY29ycmVzcG9uZCB0byBhIGtleSBmcm9tIHRoZSB0YWJsZS5cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6YWRkVmFsdWUuanNcbiAgICBpdCgnc2hvdWxkIGRlbW9uc3RyYXRlIHRoZSBhZGRWYWx1ZSBjb21tYW5kJywgKCkgPT4ge1xuICAgICAgICBsZXQgaW5wdXQgPSAkKCcuaW5wdXQnKVxuICAgICAgICBpbnB1dC5hZGRWYWx1ZSgndGVzdCcpXG4gICAgICAgIGlucHV0LmFkZFZhbHVlKDEyMylcblxuICAgICAgICB2YWx1ZSA9IGlucHV0LmdldFZhbHVlKClcbiAgICAgICAgYXNzZXJ0KHZhbHVlID09PSAndGVzdDEyMycpIC8vIHRydWVcbiAgICB9KVxuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBlbGVtZW50LmFkZFZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBvYmplY3QgfCBBcnJheTxhbnk+fSAgICAgIHZhbHVlICAgICB2YWx1ZSB0byBiZSBhZGRlZFxuICogQHVzZXMgcHJvdG9jb2wvZWxlbWVudHMsIHByb3RvY29sL2VsZW1lbnRJZFZhbHVlXG4gKiBAdHlwZSBhY3Rpb25cbiAqXG4gKi9cblxuaW1wb3J0IHsgdHJhbnNmb3JtVG9DaGFyU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFZhbHVlICh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5pc1czQykge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50U2VuZEtleXModGhpcy5lbGVtZW50SWQsIHRyYW5zZm9ybVRvQ2hhclN0cmluZyh2YWx1ZSkpXG4gICAgfVxuXG4gICAgLy8gV29ya2Fyb3VuZCBodHRwczovL2dpdGh1Yi5jb20vYXBwaXVtL2FwcGl1bS9pc3N1ZXMvMTIwODVcbiAgICBpZiAodGhpcy5pc01vYmlsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50U2VuZEtleXModGhpcy5lbGVtZW50SWQsIHRyYW5zZm9ybVRvQ2hhclN0cmluZyh2YWx1ZSkuam9pbignJyksIHRyYW5zZm9ybVRvQ2hhclN0cmluZyh2YWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFNlbmRLZXlzKHRoaXMuZWxlbWVudElkLCB0cmFuc2Zvcm1Ub0NoYXJTdHJpbmcodmFsdWUpLmpvaW4oJycpKVxufVxuIl19