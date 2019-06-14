"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = waitForDisplayed;

require("source-map-support/register");

/**
 *
 * Wait for an element for the provided amount of
 * milliseconds to be displayed or not displayed.
 *
 * <example>
    :index.html
    <div id="elem" style="visibility: hidden;">Hello World!</div>
    <script type="text/javascript">
        setTimeout(() => {
            document.getElementById('elem').style.visibility = 'visible';
        }, 2000);
    </script>
    :waitForVisibleExample.js
    it('should detect when element is visible', () => {
        const elem = $('#elem')
        elem.waitForDisplayed(3000);
    });
    it('should detect when element is no longer visible', () => {
        const elem = $('#elem')
        // passing 'undefined' allows us to keep the default timeout value without overwriting it
        elem.waitForDisplayed(undefined, true);
    });
 * </example>
 *
 * @alias element.waitForDisplayed
 * @param {Number=}  ms       time in ms (default: 500)
 * @param {Boolean=} reverse  if true it waits for the opposite (default: false)
 * @param {String=}  error    if exists it overrides the default error message
 * @return {Boolean} true     if element is displayed (or doesn't if flag is set)
 * @uses utility/waitUntil, state/isDisplayed
 * @type utility
 *
 */
async function waitForDisplayed(ms, reverse = false, error) {
  /*
   * ensure that ms is set properly
   */
  if (typeof ms !== 'number') {
    ms = this.options.waitforTimeout;
  }

  const isReversed = reverse ? '' : 'not ';
  const errorMsg = typeof error === 'string' ? error : `element ("${this.selector}") still ${isReversed}displayed after ${ms}ms`;
  return this.waitUntil(async () => reverse !== (await this.isDisplayed()), ms, errorMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3dhaXRGb3JEaXNwbGF5ZWQuanMiXSwibmFtZXMiOlsid2FpdEZvckRpc3BsYXllZCIsIm1zIiwicmV2ZXJzZSIsImVycm9yIiwib3B0aW9ucyIsIndhaXRmb3JUaW1lb3V0IiwiaXNSZXZlcnNlZCIsImVycm9yTXNnIiwic2VsZWN0b3IiLCJ3YWl0VW50aWwiLCJpc0Rpc3BsYXllZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ2UsZUFBZUEsZ0JBQWYsQ0FBaUNDLEVBQWpDLEVBQXFDQyxPQUFPLEdBQUcsS0FBL0MsRUFBc0RDLEtBQXRELEVBQTZEO0FBQ3hFOzs7QUFHQSxNQUFJLE9BQU9GLEVBQVAsS0FBYyxRQUFsQixFQUE0QjtBQUN4QkEsSUFBQUEsRUFBRSxHQUFHLEtBQUtHLE9BQUwsQ0FBYUMsY0FBbEI7QUFDSDs7QUFFRCxRQUFNQyxVQUFVLEdBQUdKLE9BQU8sR0FBRyxFQUFILEdBQVEsTUFBbEM7QUFDQSxRQUFNSyxRQUFRLEdBQUcsT0FBT0osS0FBUCxLQUFpQixRQUFqQixHQUE0QkEsS0FBNUIsR0FBcUMsYUFBWSxLQUFLSyxRQUFTLFlBQVdGLFVBQVcsbUJBQWtCTCxFQUFHLElBQTNIO0FBRUEsU0FBTyxLQUFLUSxTQUFMLENBQWUsWUFBWVAsT0FBTyxNQUFLLE1BQU0sS0FBS1EsV0FBTCxFQUFYLENBQWxDLEVBQWlFVCxFQUFqRSxFQUFxRU0sUUFBckUsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqXG4gKiBXYWl0IGZvciBhbiBlbGVtZW50IGZvciB0aGUgcHJvdmlkZWQgYW1vdW50IG9mXG4gKiBtaWxsaXNlY29uZHMgdG8gYmUgZGlzcGxheWVkIG9yIG5vdCBkaXNwbGF5ZWQuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmluZGV4Lmh0bWxcbiAgICA8ZGl2IGlkPVwiZWxlbVwiIHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuO1wiPkhlbGxvIFdvcmxkITwvZGl2PlxuICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbGVtJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgPC9zY3JpcHQ+XG4gICAgOndhaXRGb3JWaXNpYmxlRXhhbXBsZS5qc1xuICAgIGl0KCdzaG91bGQgZGV0ZWN0IHdoZW4gZWxlbWVudCBpcyB2aXNpYmxlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtID0gJCgnI2VsZW0nKVxuICAgICAgICBlbGVtLndhaXRGb3JEaXNwbGF5ZWQoMzAwMCk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBkZXRlY3Qgd2hlbiBlbGVtZW50IGlzIG5vIGxvbmdlciB2aXNpYmxlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtID0gJCgnI2VsZW0nKVxuICAgICAgICAvLyBwYXNzaW5nICd1bmRlZmluZWQnIGFsbG93cyB1cyB0byBrZWVwIHRoZSBkZWZhdWx0IHRpbWVvdXQgdmFsdWUgd2l0aG91dCBvdmVyd3JpdGluZyBpdFxuICAgICAgICBlbGVtLndhaXRGb3JEaXNwbGF5ZWQodW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9KTtcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAYWxpYXMgZWxlbWVudC53YWl0Rm9yRGlzcGxheWVkXG4gKiBAcGFyYW0ge051bWJlcj19ICBtcyAgICAgICB0aW1lIGluIG1zIChkZWZhdWx0OiA1MDApXG4gKiBAcGFyYW0ge0Jvb2xlYW49fSByZXZlcnNlICBpZiB0cnVlIGl0IHdhaXRzIGZvciB0aGUgb3Bwb3NpdGUgKGRlZmF1bHQ6IGZhbHNlKVxuICogQHBhcmFtIHtTdHJpbmc9fSAgZXJyb3IgICAgaWYgZXhpc3RzIGl0IG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBlcnJvciBtZXNzYWdlXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlICAgICBpZiBlbGVtZW50IGlzIGRpc3BsYXllZCAob3IgZG9lc24ndCBpZiBmbGFnIGlzIHNldClcbiAqIEB1c2VzIHV0aWxpdHkvd2FpdFVudGlsLCBzdGF0ZS9pc0Rpc3BsYXllZFxuICogQHR5cGUgdXRpbGl0eVxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB3YWl0Rm9yRGlzcGxheWVkIChtcywgcmV2ZXJzZSA9IGZhbHNlLCBlcnJvcikge1xuICAgIC8qXG4gICAgICogZW5zdXJlIHRoYXQgbXMgaXMgc2V0IHByb3Blcmx5XG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBtcyAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgbXMgPSB0aGlzLm9wdGlvbnMud2FpdGZvclRpbWVvdXRcbiAgICB9XG5cbiAgICBjb25zdCBpc1JldmVyc2VkID0gcmV2ZXJzZSA/ICcnIDogJ25vdCAnXG4gICAgY29uc3QgZXJyb3JNc2cgPSB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOiBgZWxlbWVudCAoXCIke3RoaXMuc2VsZWN0b3J9XCIpIHN0aWxsICR7aXNSZXZlcnNlZH1kaXNwbGF5ZWQgYWZ0ZXIgJHttc31tc2BcblxuICAgIHJldHVybiB0aGlzLndhaXRVbnRpbChhc3luYyAoKSA9PiByZXZlcnNlICE9PSBhd2FpdCB0aGlzLmlzRGlzcGxheWVkKCksIG1zLCBlcnJvck1zZylcbn1cbiJdfQ==