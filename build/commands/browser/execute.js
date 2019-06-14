"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = execute;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame.
 * The executed script is assumed to be synchronous and the result of evaluating the script is returned to
 * the client.
 *
 * The script argument defines the script to execute in the form of a function body. The value returned by
 * that function will be returned to the client. The function will be invoked with the provided args array
 * and the values may be accessed via the arguments object in the order specified.
 *
 * Arguments may be any JSON-primitive, array, or JSON object. JSON objects that define a WebElement
 * reference will be converted to the corresponding DOM element. Likewise, any WebElements in the script
 * result will be returned to the client as WebElement JSON objects.
 *
 * <example>
    :execute.js
    it('should inject javascript on the page', () => {
        const result = browser.execute((a, b, c, d) => {
            // browser context - you may not access client or console
            return a + b + c + d
        }, 1, 2, 3, 4)
        // node.js context - client and console are available
        console.log(result) // outputs: 10
    });
 * </example>
 *
 * @param {String|Function} script                     The script to execute.
 * @param {*=}               arguments  script arguments
 *
 * @return {*}             The script result.
 *
 * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-execute-script
 * @type protocol
 *
 */
function execute(...args) {
  let script = args.shift();
  /*!
   * parameter check
   */

  if (typeof script !== 'string' && typeof script !== 'function') {
    throw new Error('number or type of arguments don\'t agree with execute protocol command');
  }
  /*!
   * instances started as multibrowserinstance can't getting called with
   * a function parameter, therefor we need to check if it starts with "function () {"
   */


  if (typeof script === 'function') {
    script = `return (${script}).apply(null, arguments)`;
  }

  return this.executeScript(script, (0, _utils.verifyArgsAndStripIfElement)(args));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL2V4ZWN1dGUuanMiXSwibmFtZXMiOlsiZXhlY3V0ZSIsImFyZ3MiLCJzY3JpcHQiLCJzaGlmdCIsIkVycm9yIiwiZXhlY3V0ZVNjcmlwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NlLFNBQVNBLE9BQVQsQ0FBa0IsR0FBR0MsSUFBckIsRUFBMkI7QUFDdEMsTUFBSUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsRUFBYjtBQUVBOzs7O0FBR0EsTUFBSyxPQUFPRCxNQUFQLEtBQWtCLFFBQWxCLElBQThCLE9BQU9BLE1BQVAsS0FBa0IsVUFBckQsRUFBa0U7QUFDOUQsVUFBTSxJQUFJRSxLQUFKLENBQVUsd0VBQVYsQ0FBTjtBQUNIO0FBRUQ7Ozs7OztBQUlBLE1BQUksT0FBT0YsTUFBUCxLQUFrQixVQUF0QixFQUFrQztBQUM5QkEsSUFBQUEsTUFBTSxHQUFJLFdBQVVBLE1BQU8sMEJBQTNCO0FBQ0g7O0FBRUQsU0FBTyxLQUFLRyxhQUFMLENBQW1CSCxNQUFuQixFQUEyQix3Q0FBNEJELElBQTVCLENBQTNCLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZlcmlmeUFyZ3NBbmRTdHJpcElmRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuLyoqXG4gKlxuICogSW5qZWN0IGEgc25pcHBldCBvZiBKYXZhU2NyaXB0IGludG8gdGhlIHBhZ2UgZm9yIGV4ZWN1dGlvbiBpbiB0aGUgY29udGV4dCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGZyYW1lLlxuICogVGhlIGV4ZWN1dGVkIHNjcmlwdCBpcyBhc3N1bWVkIHRvIGJlIHN5bmNocm9ub3VzIGFuZCB0aGUgcmVzdWx0IG9mIGV2YWx1YXRpbmcgdGhlIHNjcmlwdCBpcyByZXR1cm5lZCB0b1xuICogdGhlIGNsaWVudC5cbiAqXG4gKiBUaGUgc2NyaXB0IGFyZ3VtZW50IGRlZmluZXMgdGhlIHNjcmlwdCB0byBleGVjdXRlIGluIHRoZSBmb3JtIG9mIGEgZnVuY3Rpb24gYm9keS4gVGhlIHZhbHVlIHJldHVybmVkIGJ5XG4gKiB0aGF0IGZ1bmN0aW9uIHdpbGwgYmUgcmV0dXJuZWQgdG8gdGhlIGNsaWVudC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCB3aXRoIHRoZSBwcm92aWRlZCBhcmdzIGFycmF5XG4gKiBhbmQgdGhlIHZhbHVlcyBtYXkgYmUgYWNjZXNzZWQgdmlhIHRoZSBhcmd1bWVudHMgb2JqZWN0IGluIHRoZSBvcmRlciBzcGVjaWZpZWQuXG4gKlxuICogQXJndW1lbnRzIG1heSBiZSBhbnkgSlNPTi1wcmltaXRpdmUsIGFycmF5LCBvciBKU09OIG9iamVjdC4gSlNPTiBvYmplY3RzIHRoYXQgZGVmaW5lIGEgV2ViRWxlbWVudFxuICogcmVmZXJlbmNlIHdpbGwgYmUgY29udmVydGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIERPTSBlbGVtZW50LiBMaWtld2lzZSwgYW55IFdlYkVsZW1lbnRzIGluIHRoZSBzY3JpcHRcbiAqIHJlc3VsdCB3aWxsIGJlIHJldHVybmVkIHRvIHRoZSBjbGllbnQgYXMgV2ViRWxlbWVudCBKU09OIG9iamVjdHMuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmV4ZWN1dGUuanNcbiAgICBpdCgnc2hvdWxkIGluamVjdCBqYXZhc2NyaXB0IG9uIHRoZSBwYWdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBicm93c2VyLmV4ZWN1dGUoKGEsIGIsIGMsIGQpID0+IHtcbiAgICAgICAgICAgIC8vIGJyb3dzZXIgY29udGV4dCAtIHlvdSBtYXkgbm90IGFjY2VzcyBjbGllbnQgb3IgY29uc29sZVxuICAgICAgICAgICAgcmV0dXJuIGEgKyBiICsgYyArIGRcbiAgICAgICAgfSwgMSwgMiwgMywgNClcbiAgICAgICAgLy8gbm9kZS5qcyBjb250ZXh0IC0gY2xpZW50IGFuZCBjb25zb2xlIGFyZSBhdmFpbGFibGVcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KSAvLyBvdXRwdXRzOiAxMFxuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBzY3JpcHQgICAgICAgICAgICAgICAgICAgICBUaGUgc2NyaXB0IHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0geyo9fSAgICAgICAgICAgICAgIGFyZ3VtZW50cyAgc2NyaXB0IGFyZ3VtZW50c1xuICpcbiAqIEByZXR1cm4geyp9ICAgICAgICAgICAgIFRoZSBzY3JpcHQgcmVzdWx0LlxuICpcbiAqIEBzZWUgIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJkcml2ZXIvd2ViZHJpdmVyLXNwZWMuaHRtbCNkZm4tZXhlY3V0ZS1zY3JpcHRcbiAqIEB0eXBlIHByb3RvY29sXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4ZWN1dGUgKC4uLmFyZ3MpIHtcbiAgICBsZXQgc2NyaXB0ID0gYXJncy5zaGlmdCgpXG5cbiAgICAvKiFcbiAgICAgKiBwYXJhbWV0ZXIgY2hlY2tcbiAgICAgKi9cbiAgICBpZiAoKHR5cGVvZiBzY3JpcHQgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBzY3JpcHQgIT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbnVtYmVyIG9yIHR5cGUgb2YgYXJndW1lbnRzIGRvblxcJ3QgYWdyZWUgd2l0aCBleGVjdXRlIHByb3RvY29sIGNvbW1hbmQnKVxuICAgIH1cblxuICAgIC8qIVxuICAgICAqIGluc3RhbmNlcyBzdGFydGVkIGFzIG11bHRpYnJvd3Nlcmluc3RhbmNlIGNhbid0IGdldHRpbmcgY2FsbGVkIHdpdGhcbiAgICAgKiBhIGZ1bmN0aW9uIHBhcmFtZXRlciwgdGhlcmVmb3Igd2UgbmVlZCB0byBjaGVjayBpZiBpdCBzdGFydHMgd2l0aCBcImZ1bmN0aW9uICgpIHtcIlxuICAgICAqL1xuICAgIGlmICh0eXBlb2Ygc2NyaXB0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNjcmlwdCA9IGByZXR1cm4gKCR7c2NyaXB0fSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKWBcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlU2NyaXB0KHNjcmlwdCwgdmVyaWZ5QXJnc0FuZFN0cmlwSWZFbGVtZW50KGFyZ3MpKVxufVxuIl19