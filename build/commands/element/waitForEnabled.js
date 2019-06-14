"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = waitForEnabled;

require("source-map-support/register");

/**
 *
 * Wait for an element (selected by css selector) for the provided amount of
 * milliseconds to be (dis/en)abled. If multiple elements get queried by given
 * selector, it returns true if at least one element is (dis/en)abled.
 *
 * <example>
    :index.html
    <input type="text" id="username" value="foobar" disabled="disabled"></input>
    <script type="text/javascript">
        setTimeout(() => {
            document.getElementById('username').disabled = false
        }, 2000);
    </script>
    :waitForEnabledExample.js
    it('should detect when element is enabled', () => {
        $('#username').waitForEnabled(3000);
    });

    it('should detect when element is disabled', () => {
        elem = $('#username');
        elem.waitForEnabled(3000, true)
    });
 * </example>
 *
 * @alias element.waitForEnabled
 * @param {Number=}  ms       time in ms (default: 500)
 * @param {Boolean=} reverse  if true it waits for the opposite (default: false)
 * @param {String=}  error    if exists it overrides the default error message
 * @return {Boolean} true     if element is (dis/en)abled
 * @uses utility/waitUntil, state/isEnabled
 * @type utility
 *
 */
async function waitForEnabled(ms, reverse = false, error) {
  // If the element doesn't already exist, wait for it to exist
  if (!this.elementId && !reverse) {
    await this.waitForExist(ms, false, error);
  }

  if (typeof ms !== 'number') {
    ms = this.options.waitforTimeout;
  }

  const isReversed = reverse ? '' : 'not ';
  const errorMessage = typeof error === 'string' ? error : `element ("${this.selector}") still ${isReversed}enabled after ${ms}ms`;
  return this.waitUntil(async () => {
    const isEnabled = await this.isEnabled();
    return isEnabled !== reverse;
  }, ms, errorMessage);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3dhaXRGb3JFbmFibGVkLmpzIl0sIm5hbWVzIjpbIndhaXRGb3JFbmFibGVkIiwibXMiLCJyZXZlcnNlIiwiZXJyb3IiLCJlbGVtZW50SWQiLCJ3YWl0Rm9yRXhpc3QiLCJvcHRpb25zIiwid2FpdGZvclRpbWVvdXQiLCJpc1JldmVyc2VkIiwiZXJyb3JNZXNzYWdlIiwic2VsZWN0b3IiLCJ3YWl0VW50aWwiLCJpc0VuYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNlLGVBQWVBLGNBQWYsQ0FBOEJDLEVBQTlCLEVBQWtDQyxPQUFPLEdBQUcsS0FBNUMsRUFBbURDLEtBQW5ELEVBQTBEO0FBQ3JFO0FBQ0EsTUFBSSxDQUFDLEtBQUtDLFNBQU4sSUFBbUIsQ0FBQ0YsT0FBeEIsRUFBaUM7QUFDN0IsVUFBTSxLQUFLRyxZQUFMLENBQWtCSixFQUFsQixFQUFzQixLQUF0QixFQUE2QkUsS0FBN0IsQ0FBTjtBQUNIOztBQUVELE1BQUksT0FBT0YsRUFBUCxLQUFjLFFBQWxCLEVBQTRCO0FBQ3hCQSxJQUFBQSxFQUFFLEdBQUcsS0FBS0ssT0FBTCxDQUFhQyxjQUFsQjtBQUNIOztBQUVELFFBQU1DLFVBQVUsR0FBR04sT0FBTyxHQUFHLEVBQUgsR0FBUSxNQUFsQztBQUNBLFFBQU1PLFlBQVksR0FBRyxPQUFPTixLQUFQLEtBQWlCLFFBQWpCLEdBQTRCQSxLQUE1QixHQUFxQyxhQUFZLEtBQUtPLFFBQVMsWUFBV0YsVUFBVyxpQkFBZ0JQLEVBQUcsSUFBN0g7QUFFQSxTQUFPLEtBQUtVLFNBQUwsQ0FBZSxZQUFZO0FBQzlCLFVBQU1DLFNBQVMsR0FBRyxNQUFNLEtBQUtBLFNBQUwsRUFBeEI7QUFFQSxXQUFPQSxTQUFTLEtBQUtWLE9BQXJCO0FBQ0gsR0FKTSxFQUlKRCxFQUpJLEVBSUFRLFlBSkEsQ0FBUDtBQUtIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogV2FpdCBmb3IgYW4gZWxlbWVudCAoc2VsZWN0ZWQgYnkgY3NzIHNlbGVjdG9yKSBmb3IgdGhlIHByb3ZpZGVkIGFtb3VudCBvZlxuICogbWlsbGlzZWNvbmRzIHRvIGJlIChkaXMvZW4pYWJsZWQuIElmIG11bHRpcGxlIGVsZW1lbnRzIGdldCBxdWVyaWVkIGJ5IGdpdmVuXG4gKiBzZWxlY3RvciwgaXQgcmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGlzIChkaXMvZW4pYWJsZWQuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmluZGV4Lmh0bWxcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgdmFsdWU9XCJmb29iYXJcIiBkaXNhYmxlZD1cImRpc2FibGVkXCI+PC9pbnB1dD5cbiAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKS5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgIH0sIDIwMDApO1xuICAgIDwvc2NyaXB0PlxuICAgIDp3YWl0Rm9yRW5hYmxlZEV4YW1wbGUuanNcbiAgICBpdCgnc2hvdWxkIGRldGVjdCB3aGVuIGVsZW1lbnQgaXMgZW5hYmxlZCcsICgpID0+IHtcbiAgICAgICAgJCgnI3VzZXJuYW1lJykud2FpdEZvckVuYWJsZWQoMzAwMCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGRldGVjdCB3aGVuIGVsZW1lbnQgaXMgZGlzYWJsZWQnLCAoKSA9PiB7XG4gICAgICAgIGVsZW0gPSAkKCcjdXNlcm5hbWUnKTtcbiAgICAgICAgZWxlbS53YWl0Rm9yRW5hYmxlZCgzMDAwLCB0cnVlKVxuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBlbGVtZW50LndhaXRGb3JFbmFibGVkXG4gKiBAcGFyYW0ge051bWJlcj19ICBtcyAgICAgICB0aW1lIGluIG1zIChkZWZhdWx0OiA1MDApXG4gKiBAcGFyYW0ge0Jvb2xlYW49fSByZXZlcnNlICBpZiB0cnVlIGl0IHdhaXRzIGZvciB0aGUgb3Bwb3NpdGUgKGRlZmF1bHQ6IGZhbHNlKVxuICogQHBhcmFtIHtTdHJpbmc9fSAgZXJyb3IgICAgaWYgZXhpc3RzIGl0IG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBlcnJvciBtZXNzYWdlXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlICAgICBpZiBlbGVtZW50IGlzIChkaXMvZW4pYWJsZWRcbiAqIEB1c2VzIHV0aWxpdHkvd2FpdFVudGlsLCBzdGF0ZS9pc0VuYWJsZWRcbiAqIEB0eXBlIHV0aWxpdHlcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gd2FpdEZvckVuYWJsZWQobXMsIHJldmVyc2UgPSBmYWxzZSwgZXJyb3IpIHtcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBkb2Vzbid0IGFscmVhZHkgZXhpc3QsIHdhaXQgZm9yIGl0IHRvIGV4aXN0XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRJZCAmJiAhcmV2ZXJzZSkge1xuICAgICAgICBhd2FpdCB0aGlzLndhaXRGb3JFeGlzdChtcywgZmFsc2UsIGVycm9yKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbXMgIT09ICdudW1iZXInKSB7XG4gICAgICAgIG1zID0gdGhpcy5vcHRpb25zLndhaXRmb3JUaW1lb3V0XG4gICAgfVxuXG4gICAgY29uc3QgaXNSZXZlcnNlZCA9IHJldmVyc2UgPyAnJyA6ICdub3QgJ1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6IGBlbGVtZW50IChcIiR7dGhpcy5zZWxlY3Rvcn1cIikgc3RpbGwgJHtpc1JldmVyc2VkfWVuYWJsZWQgYWZ0ZXIgJHttc31tc2BcblxuICAgIHJldHVybiB0aGlzLndhaXRVbnRpbChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzRW5hYmxlZCA9IGF3YWl0IHRoaXMuaXNFbmFibGVkKClcblxuICAgICAgICByZXR1cm4gaXNFbmFibGVkICE9PSByZXZlcnNlXG4gICAgfSwgbXMsIGVycm9yTWVzc2FnZSlcbn1cbiJdfQ==