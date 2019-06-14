"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keys;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Send a sequence of key strokes to the active element. You can also use characters like
 * "Left arrow" or "Back space". WebdriverIO will take care of translating them into unicode
 * characters. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
 * To do that, the value has to correspond to a key from the table.
 *
 * Modifier like Ctrl, Shift, Alt and Meta will stay pressed so you need to trigger them again to release them.
 *
 * <example>
    :keys.js
    it('copies text out of active element', () => {
        // copies text from an input element
        const input = $('#username')
        input.setValue('anonymous')

        browser.keys(['Meta', 'a'])
        browser.keys(['Meta', 'c'])
    });
 * </example>
 *
 * @param {String|String[]} value  The sequence of keys to type. An array or string must be provided.
 * @see https://w3c.github.io/webdriver/#dispatching-actions
 *
 */
function keys(value) {
  let keySequence = [];
  /**
   * replace key with corresponding unicode character
   */

  if (typeof value === 'string') {
    keySequence = (0, _utils.checkUnicode)(value);
  } else if (value instanceof Array) {
    for (const charSet of value) {
      keySequence = keySequence.concat((0, _utils.checkUnicode)(charSet));
    }
  } else {
    throw new Error('"keys" command requires a string or array of strings as parameter');
  }
  /**
   * JsonWireProtocol action
   */


  if (!this.isW3C) {
    return this.sendKeys(keySequence);
  }
  /**
   * W3C way of handle it key actions
   */


  const keyDownActions = keySequence.map(value => ({
    type: 'keyDown',
    value
  }));
  const keyUpActions = keySequence.map(value => ({
    type: 'keyUp',
    value
  }));
  return this.performActions([{
    type: 'key',
    id: 'keyboard',
    actions: [...keyDownActions, ...keyUpActions]
  }]).then(() => this.releaseActions());
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL2tleXMuanMiXSwibmFtZXMiOlsia2V5cyIsInZhbHVlIiwia2V5U2VxdWVuY2UiLCJBcnJheSIsImNoYXJTZXQiLCJjb25jYXQiLCJFcnJvciIsImlzVzNDIiwic2VuZEtleXMiLCJrZXlEb3duQWN0aW9ucyIsIm1hcCIsInR5cGUiLCJrZXlVcEFjdGlvbnMiLCJwZXJmb3JtQWN0aW9ucyIsImlkIiwiYWN0aW9ucyIsInRoZW4iLCJyZWxlYXNlQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBMEJBOztBQTFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCZSxTQUFTQSxJQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDakMsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBRUE7Ozs7QUFHQSxNQUFJLE9BQU9ELEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDM0JDLElBQUFBLFdBQVcsR0FBRyx5QkFBYUQsS0FBYixDQUFkO0FBQ0gsR0FGRCxNQUVPLElBQUlBLEtBQUssWUFBWUUsS0FBckIsRUFBNEI7QUFDL0IsU0FBSyxNQUFNQyxPQUFYLElBQXNCSCxLQUF0QixFQUE2QjtBQUN6QkMsTUFBQUEsV0FBVyxHQUFHQSxXQUFXLENBQUNHLE1BQVosQ0FBbUIseUJBQWFELE9BQWIsQ0FBbkIsQ0FBZDtBQUNIO0FBQ0osR0FKTSxNQUlBO0FBQ0gsVUFBTSxJQUFJRSxLQUFKLENBQVUsbUVBQVYsQ0FBTjtBQUNIO0FBRUQ7Ozs7O0FBR0EsTUFBSSxDQUFDLEtBQUtDLEtBQVYsRUFBaUI7QUFDYixXQUFPLEtBQUtDLFFBQUwsQ0FBY04sV0FBZCxDQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHQSxRQUFNTyxjQUFjLEdBQUdQLFdBQVcsQ0FBQ1EsR0FBWixDQUFpQlQsS0FBRCxLQUFZO0FBQUVVLElBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CVixJQUFBQTtBQUFuQixHQUFaLENBQWhCLENBQXZCO0FBQ0EsUUFBTVcsWUFBWSxHQUFHVixXQUFXLENBQUNRLEdBQVosQ0FBaUJULEtBQUQsS0FBWTtBQUFFVSxJQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQlYsSUFBQUE7QUFBakIsR0FBWixDQUFoQixDQUFyQjtBQUVBLFNBQU8sS0FBS1ksY0FBTCxDQUFvQixDQUFDO0FBQ3hCRixJQUFBQSxJQUFJLEVBQUUsS0FEa0I7QUFFeEJHLElBQUFBLEVBQUUsRUFBRSxVQUZvQjtBQUd4QkMsSUFBQUEsT0FBTyxFQUFFLENBQUMsR0FBR04sY0FBSixFQUFvQixHQUFHRyxZQUF2QjtBQUhlLEdBQUQsQ0FBcEIsRUFJSEksSUFKRyxDQUlFLE1BQU0sS0FBS0MsY0FBTCxFQUpSLENBQVA7QUFLSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFNlbmQgYSBzZXF1ZW5jZSBvZiBrZXkgc3Ryb2tlcyB0byB0aGUgYWN0aXZlIGVsZW1lbnQuIFlvdSBjYW4gYWxzbyB1c2UgY2hhcmFjdGVycyBsaWtlXG4gKiBcIkxlZnQgYXJyb3dcIiBvciBcIkJhY2sgc3BhY2VcIi4gV2ViZHJpdmVySU8gd2lsbCB0YWtlIGNhcmUgb2YgdHJhbnNsYXRpbmcgdGhlbSBpbnRvIHVuaWNvZGVcbiAqIGNoYXJhY3RlcnMuIFlvdeKAmWxsIGZpbmQgYWxsIHN1cHBvcnRlZCBjaGFyYWN0ZXJzIFtoZXJlXShodHRwczovL3czYy5naXRodWIuaW8vd2ViZHJpdmVyL3dlYmRyaXZlci1zcGVjLmh0bWwja2V5Ym9hcmQtYWN0aW9ucykuXG4gKiBUbyBkbyB0aGF0LCB0aGUgdmFsdWUgaGFzIHRvIGNvcnJlc3BvbmQgdG8gYSBrZXkgZnJvbSB0aGUgdGFibGUuXG4gKlxuICogTW9kaWZpZXIgbGlrZSBDdHJsLCBTaGlmdCwgQWx0IGFuZCBNZXRhIHdpbGwgc3RheSBwcmVzc2VkIHNvIHlvdSBuZWVkIHRvIHRyaWdnZXIgdGhlbSBhZ2FpbiB0byByZWxlYXNlIHRoZW0uXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmtleXMuanNcbiAgICBpdCgnY29waWVzIHRleHQgb3V0IG9mIGFjdGl2ZSBlbGVtZW50JywgKCkgPT4ge1xuICAgICAgICAvLyBjb3BpZXMgdGV4dCBmcm9tIGFuIGlucHV0IGVsZW1lbnRcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKCcjdXNlcm5hbWUnKVxuICAgICAgICBpbnB1dC5zZXRWYWx1ZSgnYW5vbnltb3VzJylcblxuICAgICAgICBicm93c2VyLmtleXMoWydNZXRhJywgJ2EnXSlcbiAgICAgICAgYnJvd3Nlci5rZXlzKFsnTWV0YScsICdjJ10pXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3RyaW5nW119IHZhbHVlICBUaGUgc2VxdWVuY2Ugb2Yga2V5cyB0byB0eXBlLiBBbiBhcnJheSBvciBzdHJpbmcgbXVzdCBiZSBwcm92aWRlZC5cbiAqIEBzZWUgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmRyaXZlci8jZGlzcGF0Y2hpbmctYWN0aW9uc1xuICpcbiAqL1xuXG5pbXBvcnQgeyBjaGVja1VuaWNvZGUgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga2V5cyAodmFsdWUpIHtcbiAgICBsZXQga2V5U2VxdWVuY2UgPSBbXVxuXG4gICAgLyoqXG4gICAgICogcmVwbGFjZSBrZXkgd2l0aCBjb3JyZXNwb25kaW5nIHVuaWNvZGUgY2hhcmFjdGVyXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAga2V5U2VxdWVuY2UgPSBjaGVja1VuaWNvZGUodmFsdWUpXG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hhclNldCBvZiB2YWx1ZSkge1xuICAgICAgICAgICAga2V5U2VxdWVuY2UgPSBrZXlTZXF1ZW5jZS5jb25jYXQoY2hlY2tVbmljb2RlKGNoYXJTZXQpKVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImtleXNcIiBjb21tYW5kIHJlcXVpcmVzIGEgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3MgYXMgcGFyYW1ldGVyJylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBKc29uV2lyZVByb3RvY29sIGFjdGlvblxuICAgICAqL1xuICAgIGlmICghdGhpcy5pc1czQykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kS2V5cyhrZXlTZXF1ZW5jZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXM0Mgd2F5IG9mIGhhbmRsZSBpdCBrZXkgYWN0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0IGtleURvd25BY3Rpb25zID0ga2V5U2VxdWVuY2UubWFwKCh2YWx1ZSkgPT4gKHsgdHlwZTogJ2tleURvd24nLCB2YWx1ZSB9KSlcbiAgICBjb25zdCBrZXlVcEFjdGlvbnMgPSBrZXlTZXF1ZW5jZS5tYXAoKHZhbHVlKSA9PiAoeyB0eXBlOiAna2V5VXAnLCB2YWx1ZSB9KSlcblxuICAgIHJldHVybiB0aGlzLnBlcmZvcm1BY3Rpb25zKFt7XG4gICAgICAgIHR5cGU6ICdrZXknLFxuICAgICAgICBpZDogJ2tleWJvYXJkJyxcbiAgICAgICAgYWN0aW9uczogWy4uLmtleURvd25BY3Rpb25zLCAuLi5rZXlVcEFjdGlvbnNdXG4gICAgfV0pLnRoZW4oKCkgPT4gdGhpcy5yZWxlYXNlQWN0aW9ucygpKVxufVxuIl19