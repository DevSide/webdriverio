"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = waitForExist;

require("source-map-support/register");

/**
 *
 * Wait for an element for the provided amount of
 * milliseconds to be present within the DOM. Returns true if the selector
 * matches at least one element that exists in the DOM, otherwise throws an
 * error. If the reverse flag is true, the command will instead return true
 * if the selector does not match any elements.
 *
 * <example>
    :waitForExistSyncExample.js
    it('should display a notification message after successful form submit', function () {
        const form = $('form');
        const notification = $('.notification');
        form.submit();
        notification.waitForExist(5000);
        expect(notification.getText()).to.be.equal('Data transmitted successfully!')
    });
    it('should remove a message after successful form submit', function () {
        const form = $('form');
        const message = $('.message');
        form.submit();
        // passing 'undefined' allows us to keep the default timeout value without overwriting it
        message.waitForExist(undefined, true);
    });
 * </example>
 *
 * @alias element.waitForExist
 * @param {Number=}  ms       time in ms (default: 500)
 * @param {Boolean=} reverse  if true it instead waits for the selector to not match any elements (default: false)
 * @param {String=}  error    if exists it overrides the default error message
 * @return {Boolean} true     if element exists (or doesn't if flag is set)
 * @uses utility/waitUntil, state/isExisting
 * @type utility
 *
 */
function waitForExist(ms, reverse = false, error) {
  /*!
   * ensure that ms is set properly
   */
  if (typeof ms !== 'number') {
    ms = this.options.waitforTimeout;
  }

  const isReversed = reverse ? '' : 'not ';
  const errorMsg = typeof error === 'string' ? error : `element ("${this.selector}") still ${isReversed}existing after ${ms}ms`;
  return this.waitUntil(function async() {
    return this.isExisting().then(isExisting => isExisting !== reverse);
  }, ms, errorMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3dhaXRGb3JFeGlzdC5qcyJdLCJuYW1lcyI6WyJ3YWl0Rm9yRXhpc3QiLCJtcyIsInJldmVyc2UiLCJlcnJvciIsIm9wdGlvbnMiLCJ3YWl0Zm9yVGltZW91dCIsImlzUmV2ZXJzZWQiLCJlcnJvck1zZyIsInNlbGVjdG9yIiwid2FpdFVudGlsIiwiYXN5bmMiLCJpc0V4aXN0aW5nIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NlLFNBQVNBLFlBQVQsQ0FBdUJDLEVBQXZCLEVBQTJCQyxPQUFPLEdBQUcsS0FBckMsRUFBNENDLEtBQTVDLEVBQW1EO0FBQzlEOzs7QUFHQSxNQUFJLE9BQU9GLEVBQVAsS0FBYyxRQUFsQixFQUE0QjtBQUN4QkEsSUFBQUEsRUFBRSxHQUFHLEtBQUtHLE9BQUwsQ0FBYUMsY0FBbEI7QUFDSDs7QUFFRCxRQUFNQyxVQUFVLEdBQUdKLE9BQU8sR0FBRyxFQUFILEdBQVEsTUFBbEM7QUFDQSxRQUFNSyxRQUFRLEdBQUcsT0FBT0osS0FBUCxLQUFpQixRQUFqQixHQUE0QkEsS0FBNUIsR0FBcUMsYUFBWSxLQUFLSyxRQUFTLFlBQVdGLFVBQVcsa0JBQWlCTCxFQUFHLElBQTFIO0FBRUEsU0FBTyxLQUFLUSxTQUFMLENBQWUsU0FBU0MsS0FBVCxHQUFrQjtBQUNwQyxXQUFPLEtBQUtDLFVBQUwsR0FBa0JDLElBQWxCLENBQXdCRCxVQUFELElBQWdCQSxVQUFVLEtBQUtULE9BQXRELENBQVA7QUFDSCxHQUZNLEVBRUpELEVBRkksRUFFQU0sUUFGQSxDQUFQO0FBR0giLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICpcbiAqIFdhaXQgZm9yIGFuIGVsZW1lbnQgZm9yIHRoZSBwcm92aWRlZCBhbW91bnQgb2ZcbiAqIG1pbGxpc2Vjb25kcyB0byBiZSBwcmVzZW50IHdpdGhpbiB0aGUgRE9NLiBSZXR1cm5zIHRydWUgaWYgdGhlIHNlbGVjdG9yXG4gKiBtYXRjaGVzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHRoYXQgZXhpc3RzIGluIHRoZSBET00sIG90aGVyd2lzZSB0aHJvd3MgYW5cbiAqIGVycm9yLiBJZiB0aGUgcmV2ZXJzZSBmbGFnIGlzIHRydWUsIHRoZSBjb21tYW5kIHdpbGwgaW5zdGVhZCByZXR1cm4gdHJ1ZVxuICogaWYgdGhlIHNlbGVjdG9yIGRvZXMgbm90IG1hdGNoIGFueSBlbGVtZW50cy5cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6d2FpdEZvckV4aXN0U3luY0V4YW1wbGUuanNcbiAgICBpdCgnc2hvdWxkIGRpc3BsYXkgYSBub3RpZmljYXRpb24gbWVzc2FnZSBhZnRlciBzdWNjZXNzZnVsIGZvcm0gc3VibWl0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gJCgnZm9ybScpO1xuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSAkKCcubm90aWZpY2F0aW9uJyk7XG4gICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgIG5vdGlmaWNhdGlvbi53YWl0Rm9yRXhpc3QoNTAwMCk7XG4gICAgICAgIGV4cGVjdChub3RpZmljYXRpb24uZ2V0VGV4dCgpKS50by5iZS5lcXVhbCgnRGF0YSB0cmFuc21pdHRlZCBzdWNjZXNzZnVsbHkhJylcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHJlbW92ZSBhIG1lc3NhZ2UgYWZ0ZXIgc3VjY2Vzc2Z1bCBmb3JtIHN1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9ICQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICQoJy5tZXNzYWdlJyk7XG4gICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgIC8vIHBhc3NpbmcgJ3VuZGVmaW5lZCcgYWxsb3dzIHVzIHRvIGtlZXAgdGhlIGRlZmF1bHQgdGltZW91dCB2YWx1ZSB3aXRob3V0IG92ZXJ3cml0aW5nIGl0XG4gICAgICAgIG1lc3NhZ2Uud2FpdEZvckV4aXN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGVsZW1lbnQud2FpdEZvckV4aXN0XG4gKiBAcGFyYW0ge051bWJlcj19ICBtcyAgICAgICB0aW1lIGluIG1zIChkZWZhdWx0OiA1MDApXG4gKiBAcGFyYW0ge0Jvb2xlYW49fSByZXZlcnNlICBpZiB0cnVlIGl0IGluc3RlYWQgd2FpdHMgZm9yIHRoZSBzZWxlY3RvciB0byBub3QgbWF0Y2ggYW55IGVsZW1lbnRzIChkZWZhdWx0OiBmYWxzZSlcbiAqIEBwYXJhbSB7U3RyaW5nPX0gIGVycm9yICAgIGlmIGV4aXN0cyBpdCBvdmVycmlkZXMgdGhlIGRlZmF1bHQgZXJyb3IgbWVzc2FnZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSAgICAgaWYgZWxlbWVudCBleGlzdHMgKG9yIGRvZXNuJ3QgaWYgZmxhZyBpcyBzZXQpXG4gKiBAdXNlcyB1dGlsaXR5L3dhaXRVbnRpbCwgc3RhdGUvaXNFeGlzdGluZ1xuICogQHR5cGUgdXRpbGl0eVxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YWl0Rm9yRXhpc3QgKG1zLCByZXZlcnNlID0gZmFsc2UsIGVycm9yKSB7XG4gICAgLyohXG4gICAgICogZW5zdXJlIHRoYXQgbXMgaXMgc2V0IHByb3Blcmx5XG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBtcyAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgbXMgPSB0aGlzLm9wdGlvbnMud2FpdGZvclRpbWVvdXRcbiAgICB9XG5cbiAgICBjb25zdCBpc1JldmVyc2VkID0gcmV2ZXJzZSA/ICcnIDogJ25vdCAnXG4gICAgY29uc3QgZXJyb3JNc2cgPSB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOiBgZWxlbWVudCAoXCIke3RoaXMuc2VsZWN0b3J9XCIpIHN0aWxsICR7aXNSZXZlcnNlZH1leGlzdGluZyBhZnRlciAke21zfW1zYFxuXG4gICAgcmV0dXJuIHRoaXMud2FpdFVudGlsKGZ1bmN0aW9uIGFzeW5jICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNFeGlzdGluZygpLnRoZW4oKGlzRXhpc3RpbmcpID0+IGlzRXhpc3RpbmcgIT09IHJldmVyc2UpXG4gICAgfSwgbXMsIGVycm9yTXNnKVxufVxuIl19