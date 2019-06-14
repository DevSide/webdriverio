"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = executeAsync;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Inject a snippet of JavaScript into the page for execution in the context of the currently selected
 * frame. The executed script is assumed to be asynchronous and must signal that is done by invoking
 * the provided callback, which is always provided as the final argument to the function. The value
 * to this callback will be returned to the client.
 *
 * Asynchronous script commands may not span page loads. If an unload event is fired while waiting
 * for a script result, an error should be returned to the client.
 *
 * The script argument defines the script to execute in the form of a function body. The function will
 * be invoked with the provided args array and the values may be accessed via the arguments object
 * in the order specified. The final argument will always be a callback function that must be invoked
 * to signal that the script has finished.
 *
 * Arguments may be any JSON-primitive, array, or JSON object. JSON objects that define a WebElement
 * reference will be converted to the corresponding DOM element. Likewise, any WebElements in the script
 * result will be returned to the client as WebElement JSON objects.
 *
 * <example>
    :executeAsync.js
    it('should execute async JavaScript on the page', () => {
        browser.setTimeout({ script: 5000 })
        const result = browser.executeAsync(function(a, b, c, d, done) {
            // browser context - you may not access client or console
            setTimeout(() => {
                done(a + b + c + d)
            }, 3000);
        }, 1, 2, 3, 4)
        // node.js context - client and console are available
        console.log(result) // outputs: 10
    });
 * </example>
 *
 * @param {String|Function} script     The script to execute.
 * @param {*=}               arguments  script arguments
 *
 * @return {*}             The script result.
 *
 * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-execute-async-script
 * @type protocol
 *
 */
function executeAsync(...args) {
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

  return this.executeAsyncScript(script, (0, _utils.verifyArgsAndStripIfElement)(args));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL2V4ZWN1dGVBc3luYy5qcyJdLCJuYW1lcyI6WyJleGVjdXRlQXN5bmMiLCJhcmdzIiwic2NyaXB0Iiwic2hpZnQiLCJFcnJvciIsImV4ZWN1dGVBc3luY1NjcmlwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q2UsU0FBU0EsWUFBVCxDQUF1QixHQUFHQyxJQUExQixFQUFnQztBQUMzQyxNQUFJQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsS0FBTCxFQUFiO0FBRUE7Ozs7QUFHQSxNQUFLLE9BQU9ELE1BQVAsS0FBa0IsUUFBbEIsSUFBOEIsT0FBT0EsTUFBUCxLQUFrQixVQUFyRCxFQUFrRTtBQUM5RCxVQUFNLElBQUlFLEtBQUosQ0FBVSx3RUFBVixDQUFOO0FBQ0g7QUFFRDs7Ozs7O0FBSUEsTUFBSSxPQUFPRixNQUFQLEtBQWtCLFVBQXRCLEVBQWtDO0FBQzlCQSxJQUFBQSxNQUFNLEdBQUksV0FBVUEsTUFBTywwQkFBM0I7QUFDSDs7QUFFRCxTQUFPLEtBQUtHLGtCQUFMLENBQXdCSCxNQUF4QixFQUFnQyx3Q0FBNEJELElBQTVCLENBQWhDLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZlcmlmeUFyZ3NBbmRTdHJpcElmRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuLyoqXG4gKlxuICogSW5qZWN0IGEgc25pcHBldCBvZiBKYXZhU2NyaXB0IGludG8gdGhlIHBhZ2UgZm9yIGV4ZWN1dGlvbiBpbiB0aGUgY29udGV4dCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkXG4gKiBmcmFtZS4gVGhlIGV4ZWN1dGVkIHNjcmlwdCBpcyBhc3N1bWVkIHRvIGJlIGFzeW5jaHJvbm91cyBhbmQgbXVzdCBzaWduYWwgdGhhdCBpcyBkb25lIGJ5IGludm9raW5nXG4gKiB0aGUgcHJvdmlkZWQgY2FsbGJhY2ssIHdoaWNoIGlzIGFsd2F5cyBwcm92aWRlZCBhcyB0aGUgZmluYWwgYXJndW1lbnQgdG8gdGhlIGZ1bmN0aW9uLiBUaGUgdmFsdWVcbiAqIHRvIHRoaXMgY2FsbGJhY2sgd2lsbCBiZSByZXR1cm5lZCB0byB0aGUgY2xpZW50LlxuICpcbiAqIEFzeW5jaHJvbm91cyBzY3JpcHQgY29tbWFuZHMgbWF5IG5vdCBzcGFuIHBhZ2UgbG9hZHMuIElmIGFuIHVubG9hZCBldmVudCBpcyBmaXJlZCB3aGlsZSB3YWl0aW5nXG4gKiBmb3IgYSBzY3JpcHQgcmVzdWx0LCBhbiBlcnJvciBzaG91bGQgYmUgcmV0dXJuZWQgdG8gdGhlIGNsaWVudC5cbiAqXG4gKiBUaGUgc2NyaXB0IGFyZ3VtZW50IGRlZmluZXMgdGhlIHNjcmlwdCB0byBleGVjdXRlIGluIHRoZSBmb3JtIG9mIGEgZnVuY3Rpb24gYm9keS4gVGhlIGZ1bmN0aW9uIHdpbGxcbiAqIGJlIGludm9rZWQgd2l0aCB0aGUgcHJvdmlkZWQgYXJncyBhcnJheSBhbmQgdGhlIHZhbHVlcyBtYXkgYmUgYWNjZXNzZWQgdmlhIHRoZSBhcmd1bWVudHMgb2JqZWN0XG4gKiBpbiB0aGUgb3JkZXIgc3BlY2lmaWVkLiBUaGUgZmluYWwgYXJndW1lbnQgd2lsbCBhbHdheXMgYmUgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IG11c3QgYmUgaW52b2tlZFxuICogdG8gc2lnbmFsIHRoYXQgdGhlIHNjcmlwdCBoYXMgZmluaXNoZWQuXG4gKlxuICogQXJndW1lbnRzIG1heSBiZSBhbnkgSlNPTi1wcmltaXRpdmUsIGFycmF5LCBvciBKU09OIG9iamVjdC4gSlNPTiBvYmplY3RzIHRoYXQgZGVmaW5lIGEgV2ViRWxlbWVudFxuICogcmVmZXJlbmNlIHdpbGwgYmUgY29udmVydGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIERPTSBlbGVtZW50LiBMaWtld2lzZSwgYW55IFdlYkVsZW1lbnRzIGluIHRoZSBzY3JpcHRcbiAqIHJlc3VsdCB3aWxsIGJlIHJldHVybmVkIHRvIHRoZSBjbGllbnQgYXMgV2ViRWxlbWVudCBKU09OIG9iamVjdHMuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmV4ZWN1dGVBc3luYy5qc1xuICAgIGl0KCdzaG91bGQgZXhlY3V0ZSBhc3luYyBKYXZhU2NyaXB0IG9uIHRoZSBwYWdlJywgKCkgPT4ge1xuICAgICAgICBicm93c2VyLnNldFRpbWVvdXQoeyBzY3JpcHQ6IDUwMDAgfSlcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYnJvd3Nlci5leGVjdXRlQXN5bmMoZnVuY3Rpb24oYSwgYiwgYywgZCwgZG9uZSkge1xuICAgICAgICAgICAgLy8gYnJvd3NlciBjb250ZXh0IC0geW91IG1heSBub3QgYWNjZXNzIGNsaWVudCBvciBjb25zb2xlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb25lKGEgKyBiICsgYyArIGQpXG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfSwgMSwgMiwgMywgNClcbiAgICAgICAgLy8gbm9kZS5qcyBjb250ZXh0IC0gY2xpZW50IGFuZCBjb25zb2xlIGFyZSBhdmFpbGFibGVcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KSAvLyBvdXRwdXRzOiAxMFxuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBzY3JpcHQgICAgIFRoZSBzY3JpcHQgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7Kj19ICAgICAgICAgICAgICAgYXJndW1lbnRzICBzY3JpcHQgYXJndW1lbnRzXG4gKlxuICogQHJldHVybiB7Kn0gICAgICAgICAgICAgVGhlIHNjcmlwdCByZXN1bHQuXG4gKlxuICogQHNlZSAgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmRyaXZlci93ZWJkcml2ZXItc3BlYy5odG1sI2Rmbi1leGVjdXRlLWFzeW5jLXNjcmlwdFxuICogQHR5cGUgcHJvdG9jb2xcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhlY3V0ZUFzeW5jICguLi5hcmdzKSB7XG4gICAgbGV0IHNjcmlwdCA9IGFyZ3Muc2hpZnQoKVxuXG4gICAgLyohXG4gICAgICogcGFyYW1ldGVyIGNoZWNrXG4gICAgICovXG4gICAgaWYgKCh0eXBlb2Ygc2NyaXB0ICE9PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2NyaXB0ICE9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ251bWJlciBvciB0eXBlIG9mIGFyZ3VtZW50cyBkb25cXCd0IGFncmVlIHdpdGggZXhlY3V0ZSBwcm90b2NvbCBjb21tYW5kJylcbiAgICB9XG5cbiAgICAvKiFcbiAgICAgKiBpbnN0YW5jZXMgc3RhcnRlZCBhcyBtdWx0aWJyb3dzZXJpbnN0YW5jZSBjYW4ndCBnZXR0aW5nIGNhbGxlZCB3aXRoXG4gICAgICogYSBmdW5jdGlvbiBwYXJhbWV0ZXIsIHRoZXJlZm9yIHdlIG5lZWQgdG8gY2hlY2sgaWYgaXQgc3RhcnRzIHdpdGggXCJmdW5jdGlvbiAoKSB7XCJcbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIHNjcmlwdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzY3JpcHQgPSBgcmV0dXJuICgke3NjcmlwdH0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cylgXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUFzeW5jU2NyaXB0KHNjcmlwdCwgdmVyaWZ5QXJnc0FuZFN0cmlwSWZFbGVtZW50KGFyZ3MpKVxufVxuIl19