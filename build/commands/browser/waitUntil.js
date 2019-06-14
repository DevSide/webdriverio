"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("source-map-support/register");

var _Timer = _interopRequireDefault(require("../../utils/Timer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * This wait command is your universal weapon if you want to wait on something. It expects a condition
 * and waits until that condition is fulfilled with a truthy value. If you use the WDIO testrunner the
 * commands within the condition are getting executed synchronously like in your test.
 *
 * A common example is to wait until a certain element contains a certain text (see example).
 *
 * <example>
    :example.html
    <div id="someText">I am some text</div>
    <script>
      setTimeout(() => {
        $('#someText').html('I am now different');
      }, 1000);
    </script>

    :waitUntil.js
    it('should wait until text has changed', () => {
        browser.waitUntil(() => {
          return $('#someText').getText() === 'I am now different'
        }, 5000, 'expected text to be different after 5s');
    });
 * </example>
 *
 *
 * @alias browser.waitUntil
 * @param {Function} condition  condition to wait on
 * @param {Number=}  timeout    timeout in ms (default: 500)
 * @param {String=}  timeoutMsg error message to throw when waitUntil times out
 * @param {Number=}  interval   interval between condition checks (default: 500)
 * @return {Boolean} true if condition is fulfilled
 * @uses utility/pause
 * @type utility
 *
 */
function _default(condition, timeout, timeoutMsg, interval) {
  if (typeof condition !== 'function') {
    throw new Error('Condition is not a function');
  }
  /*!
   * ensure that timeout and interval are set properly
   */


  if (typeof timeout !== 'number') {
    timeout = this.options.waitforTimeout;
  }

  if (typeof interval !== 'number') {
    interval = this.options.waitforInterval;
  }

  const fn = condition.bind(this);
  let timer = new _Timer.default(interval, timeout, fn, true);
  return timer.catch(e => {
    if (e.message === 'timeout') {
      if (typeof timeoutMsg === 'string') {
        throw new Error(timeoutMsg);
      }

      throw new Error(`waitUntil condition timed out after ${timeout}ms`);
    }

    throw new Error(`waitUntil condition failed with the following reason: ${e && e.message || e}`);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3dhaXRVbnRpbC5qcyJdLCJuYW1lcyI6WyJjb25kaXRpb24iLCJ0aW1lb3V0IiwidGltZW91dE1zZyIsImludGVydmFsIiwiRXJyb3IiLCJvcHRpb25zIiwid2FpdGZvclRpbWVvdXQiLCJ3YWl0Zm9ySW50ZXJ2YWwiLCJmbiIsImJpbmQiLCJ0aW1lciIsIlRpbWVyIiwiY2F0Y2giLCJlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBcUNBOzs7O0FBckNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q2Usa0JBQVVBLFNBQVYsRUFBcUJDLE9BQXJCLEVBQThCQyxVQUE5QixFQUEwQ0MsUUFBMUMsRUFBb0Q7QUFDL0QsTUFBSSxPQUFPSCxTQUFQLEtBQXFCLFVBQXpCLEVBQXFDO0FBQ2pDLFVBQU0sSUFBSUksS0FBSixDQUFVLDZCQUFWLENBQU47QUFDSDtBQUVEOzs7OztBQUdBLE1BQUksT0FBT0gsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUM3QkEsSUFBQUEsT0FBTyxHQUFHLEtBQUtJLE9BQUwsQ0FBYUMsY0FBdkI7QUFDSDs7QUFFRCxNQUFJLE9BQU9ILFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDOUJBLElBQUFBLFFBQVEsR0FBRyxLQUFLRSxPQUFMLENBQWFFLGVBQXhCO0FBQ0g7O0FBRUQsUUFBTUMsRUFBRSxHQUFHUixTQUFTLENBQUNTLElBQVYsQ0FBZSxJQUFmLENBQVg7QUFDQSxNQUFJQyxLQUFLLEdBQUcsSUFBSUMsY0FBSixDQUFVUixRQUFWLEVBQW9CRixPQUFwQixFQUE2Qk8sRUFBN0IsRUFBaUMsSUFBakMsQ0FBWjtBQUVBLFNBQU9FLEtBQUssQ0FBQ0UsS0FBTixDQUFhQyxDQUFELElBQU87QUFDdEIsUUFBSUEsQ0FBQyxDQUFDQyxPQUFGLEtBQWMsU0FBbEIsRUFBNkI7QUFDekIsVUFBSSxPQUFPWixVQUFQLEtBQXNCLFFBQTFCLEVBQW9DO0FBQ2hDLGNBQU0sSUFBSUUsS0FBSixDQUFVRixVQUFWLENBQU47QUFDSDs7QUFDRCxZQUFNLElBQUlFLEtBQUosQ0FBVyx1Q0FBc0NILE9BQVEsSUFBekQsQ0FBTjtBQUNIOztBQUVELFVBQU0sSUFBSUcsS0FBSixDQUFXLHlEQUF5RFMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLE9BQVIsSUFBb0JELENBQUUsRUFBekYsQ0FBTjtBQUNILEdBVE0sQ0FBUDtBQVVIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogVGhpcyB3YWl0IGNvbW1hbmQgaXMgeW91ciB1bml2ZXJzYWwgd2VhcG9uIGlmIHlvdSB3YW50IHRvIHdhaXQgb24gc29tZXRoaW5nLiBJdCBleHBlY3RzIGEgY29uZGl0aW9uXG4gKiBhbmQgd2FpdHMgdW50aWwgdGhhdCBjb25kaXRpb24gaXMgZnVsZmlsbGVkIHdpdGggYSB0cnV0aHkgdmFsdWUuIElmIHlvdSB1c2UgdGhlIFdESU8gdGVzdHJ1bm5lciB0aGVcbiAqIGNvbW1hbmRzIHdpdGhpbiB0aGUgY29uZGl0aW9uIGFyZSBnZXR0aW5nIGV4ZWN1dGVkIHN5bmNocm9ub3VzbHkgbGlrZSBpbiB5b3VyIHRlc3QuXG4gKlxuICogQSBjb21tb24gZXhhbXBsZSBpcyB0byB3YWl0IHVudGlsIGEgY2VydGFpbiBlbGVtZW50IGNvbnRhaW5zIGEgY2VydGFpbiB0ZXh0IChzZWUgZXhhbXBsZSkuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmV4YW1wbGUuaHRtbFxuICAgIDxkaXYgaWQ9XCJzb21lVGV4dFwiPkkgYW0gc29tZSB0ZXh0PC9kaXY+XG4gICAgPHNjcmlwdD5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkKCcjc29tZVRleHQnKS5odG1sKCdJIGFtIG5vdyBkaWZmZXJlbnQnKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIDwvc2NyaXB0PlxuXG4gICAgOndhaXRVbnRpbC5qc1xuICAgIGl0KCdzaG91bGQgd2FpdCB1bnRpbCB0ZXh0IGhhcyBjaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICBicm93c2VyLndhaXRVbnRpbCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICQoJyNzb21lVGV4dCcpLmdldFRleHQoKSA9PT0gJ0kgYW0gbm93IGRpZmZlcmVudCdcbiAgICAgICAgfSwgNTAwMCwgJ2V4cGVjdGVkIHRleHQgdG8gYmUgZGlmZmVyZW50IGFmdGVyIDVzJyk7XG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICpcbiAqIEBhbGlhcyBicm93c2VyLndhaXRVbnRpbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29uZGl0aW9uICBjb25kaXRpb24gdG8gd2FpdCBvblxuICogQHBhcmFtIHtOdW1iZXI9fSAgdGltZW91dCAgICB0aW1lb3V0IGluIG1zIChkZWZhdWx0OiA1MDApXG4gKiBAcGFyYW0ge1N0cmluZz19ICB0aW1lb3V0TXNnIGVycm9yIG1lc3NhZ2UgdG8gdGhyb3cgd2hlbiB3YWl0VW50aWwgdGltZXMgb3V0XG4gKiBAcGFyYW0ge051bWJlcj19ICBpbnRlcnZhbCAgIGludGVydmFsIGJldHdlZW4gY29uZGl0aW9uIGNoZWNrcyAoZGVmYXVsdDogNTAwKVxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjb25kaXRpb24gaXMgZnVsZmlsbGVkXG4gKiBAdXNlcyB1dGlsaXR5L3BhdXNlXG4gKiBAdHlwZSB1dGlsaXR5XG4gKlxuICovXG5cbmltcG9ydCBUaW1lciBmcm9tICcuLi8uLi91dGlscy9UaW1lcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbmRpdGlvbiwgdGltZW91dCwgdGltZW91dE1zZywgaW50ZXJ2YWwpIHtcbiAgICBpZiAodHlwZW9mIGNvbmRpdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmRpdGlvbiBpcyBub3QgYSBmdW5jdGlvbicpXG4gICAgfVxuXG4gICAgLyohXG4gICAgICogZW5zdXJlIHRoYXQgdGltZW91dCBhbmQgaW50ZXJ2YWwgYXJlIHNldCBwcm9wZXJseVxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgdGltZW91dCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGltZW91dCA9IHRoaXMub3B0aW9ucy53YWl0Zm9yVGltZW91dFxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW50ZXJ2YWwgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGludGVydmFsID0gdGhpcy5vcHRpb25zLndhaXRmb3JJbnRlcnZhbFxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gY29uZGl0aW9uLmJpbmQodGhpcylcbiAgICBsZXQgdGltZXIgPSBuZXcgVGltZXIoaW50ZXJ2YWwsIHRpbWVvdXQsIGZuLCB0cnVlKVxuXG4gICAgcmV0dXJuIHRpbWVyLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLm1lc3NhZ2UgPT09ICd0aW1lb3V0Jykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aW1lb3V0TXNnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aW1lb3V0TXNnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB3YWl0VW50aWwgY29uZGl0aW9uIHRpbWVkIG91dCBhZnRlciAke3RpbWVvdXR9bXNgKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB3YWl0VW50aWwgY29uZGl0aW9uIGZhaWxlZCB3aXRoIHRoZSBmb2xsb3dpbmcgcmVhc29uOiAkeyhlICYmIGUubWVzc2FnZSkgfHwgZX1gKVxuICAgIH0pXG59XG4iXX0=