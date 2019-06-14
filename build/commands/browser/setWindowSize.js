"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setWindowSize;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Resizes browser window outer size according to provided width and height.
 *
 * <example>
 * :setWindowSize.js
    it('should re-size browser outer window with 500 width and 600 height', function () {
        browser.setWindowSize(500, 600);
    });
 * </example>
 *
 * @alias browser.setWindowSize
 * @param {Number} width browser will be resized to provided width
 * @param {Number} height browser will be resized to provided height
 * @return {Null|Object} Null for *NO*W3C browser and Object{x, y, width, height} for W3C browser
 * @type window
 *
 */
function setWindowSize(width, height) {
  const minWindowSize = 0;
  const maxWindowSize = 2147483647;
  /**
   * type check
   */

  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new Error('setWindowSize expects width and height of type number');
  }
  /**
   * value check
   */


  if (width < minWindowSize || width > maxWindowSize || height < minWindowSize || height > maxWindowSize) {
    throw new Error('setWindowSize expects width and height to be a number in the 0 to 2^31 − 1 range');
  }

  const browser = (0, _utils.getBrowserObject)(this);

  if (!browser.isW3C) {
    return browser._setWindowSize(width, height);
  }

  return browser.setWindowRect(null, null, width, height);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3NldFdpbmRvd1NpemUuanMiXSwibmFtZXMiOlsic2V0V2luZG93U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwibWluV2luZG93U2l6ZSIsIm1heFdpbmRvd1NpemUiLCJFcnJvciIsImJyb3dzZXIiLCJpc1czQyIsIl9zZXRXaW5kb3dTaXplIiwic2V0V2luZG93UmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBbUJBOztBQW5CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJlLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCQyxNQUE5QixFQUFzQztBQUNqRCxRQUFNQyxhQUFhLEdBQUcsQ0FBdEI7QUFDQSxRQUFNQyxhQUFhLEdBQUcsVUFBdEI7QUFFQTs7OztBQUdBLE1BQUksT0FBT0gsS0FBUCxLQUFpQixRQUFqQixJQUE2QixPQUFPQyxNQUFQLEtBQWtCLFFBQW5ELEVBQTZEO0FBQ3pELFVBQU0sSUFBSUcsS0FBSixDQUFVLHVEQUFWLENBQU47QUFDSDtBQUVEOzs7OztBQUdBLE1BQUtKLEtBQUssR0FBR0UsYUFBUixJQUF5QkYsS0FBSyxHQUFHRyxhQUFsQyxJQUFxREYsTUFBTSxHQUFHQyxhQUFULElBQTBCRCxNQUFNLEdBQUdFLGFBQTVGLEVBQTRHO0FBQ3hHLFVBQU0sSUFBSUMsS0FBSixDQUFVLGtGQUFWLENBQU47QUFDSDs7QUFFRCxRQUFNQyxPQUFPLEdBQUcsNkJBQWlCLElBQWpCLENBQWhCOztBQUVBLE1BQUksQ0FBQ0EsT0FBTyxDQUFDQyxLQUFiLEVBQW9CO0FBQ2hCLFdBQU9ELE9BQU8sQ0FBQ0UsY0FBUixDQUF1QlAsS0FBdkIsRUFBOEJDLE1BQTlCLENBQVA7QUFDSDs7QUFDRCxTQUFPSSxPQUFPLENBQUNHLGFBQVIsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0NSLEtBQWxDLEVBQXlDQyxNQUF6QyxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBSZXNpemVzIGJyb3dzZXIgd2luZG93IG91dGVyIHNpemUgYWNjb3JkaW5nIHRvIHByb3ZpZGVkIHdpZHRoIGFuZCBoZWlnaHQuXG4gKlxuICogPGV4YW1wbGU+XG4gKiA6c2V0V2luZG93U2l6ZS5qc1xuICAgIGl0KCdzaG91bGQgcmUtc2l6ZSBicm93c2VyIG91dGVyIHdpbmRvdyB3aXRoIDUwMCB3aWR0aCBhbmQgNjAwIGhlaWdodCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnJvd3Nlci5zZXRXaW5kb3dTaXplKDUwMCwgNjAwKTtcbiAgICB9KTtcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAYWxpYXMgYnJvd3Nlci5zZXRXaW5kb3dTaXplXG4gKiBAcGFyYW0ge051bWJlcn0gd2lkdGggYnJvd3NlciB3aWxsIGJlIHJlc2l6ZWQgdG8gcHJvdmlkZWQgd2lkdGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgYnJvd3NlciB3aWxsIGJlIHJlc2l6ZWQgdG8gcHJvdmlkZWQgaGVpZ2h0XG4gKiBAcmV0dXJuIHtOdWxsfE9iamVjdH0gTnVsbCBmb3IgKk5PKlczQyBicm93c2VyIGFuZCBPYmplY3R7eCwgeSwgd2lkdGgsIGhlaWdodH0gZm9yIFczQyBicm93c2VyXG4gKiBAdHlwZSB3aW5kb3dcbiAqXG4gKi9cblxuaW1wb3J0IHsgZ2V0QnJvd3Nlck9iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRXaW5kb3dTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBtaW5XaW5kb3dTaXplID0gMFxuICAgIGNvbnN0IG1heFdpbmRvd1NpemUgPSAyMTQ3NDgzNjQ3XG5cbiAgICAvKipcbiAgICAgKiB0eXBlIGNoZWNrXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGhlaWdodCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRXaW5kb3dTaXplIGV4cGVjdHMgd2lkdGggYW5kIGhlaWdodCBvZiB0eXBlIG51bWJlcicpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdmFsdWUgY2hlY2tcbiAgICAgKi9cbiAgICBpZiAoKHdpZHRoIDwgbWluV2luZG93U2l6ZSB8fCB3aWR0aCA+IG1heFdpbmRvd1NpemUpIHx8IChoZWlnaHQgPCBtaW5XaW5kb3dTaXplIHx8IGhlaWdodCA+IG1heFdpbmRvd1NpemUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc2V0V2luZG93U2l6ZSBleHBlY3RzIHdpZHRoIGFuZCBoZWlnaHQgdG8gYmUgYSBudW1iZXIgaW4gdGhlIDAgdG8gMl4zMSDiiJIgMSByYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJPYmplY3QodGhpcylcblxuICAgIGlmICghYnJvd3Nlci5pc1czQykge1xuICAgICAgICByZXR1cm4gYnJvd3Nlci5fc2V0V2luZG93U2l6ZSh3aWR0aCwgaGVpZ2h0KVxuICAgIH1cbiAgICByZXR1cm4gYnJvd3Nlci5zZXRXaW5kb3dSZWN0KG51bGwsIG51bGwsIHdpZHRoLCBoZWlnaHQpXG59XG4iXX0=