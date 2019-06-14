"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowSize;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Returns browser window size (and position for drivers with W3C support).
 *
 * <example>
 * :getWindowSize.js
    it('should return browser window size', function () {
        const windowSize = browser.getWindowSize(500, 600);
        console.log(windowSize);
        // outputs
        // Firefox: { x: 4, y: 23, width: 1280, height: 767 }
        // Chrome: { width: 1280, height: 767 }
    });
 * </example>
 *
 * @alias browser.getWindowSize
 * @return {Object} { x, y, width, height } for W3C or { width, height } for non W3C browser
 * @type window
 *
 */
function getWindowSize() {
  const browser = (0, _utils.getBrowserObject)(this);

  if (!browser.isW3C) {
    return browser._getWindowSize();
  }

  return browser.getWindowRect();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL2dldFdpbmRvd1NpemUuanMiXSwibmFtZXMiOlsiZ2V0V2luZG93U2l6ZSIsImJyb3dzZXIiLCJpc1czQyIsIl9nZXRXaW5kb3dTaXplIiwiZ2V0V2luZG93UmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBcUJBOztBQXJCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QmUsU0FBU0EsYUFBVCxHQUF5QjtBQUNwQyxRQUFNQyxPQUFPLEdBQUcsNkJBQWlCLElBQWpCLENBQWhCOztBQUVBLE1BQUksQ0FBQ0EsT0FBTyxDQUFDQyxLQUFiLEVBQW9CO0FBQ2hCLFdBQU9ELE9BQU8sQ0FBQ0UsY0FBUixFQUFQO0FBQ0g7O0FBQ0QsU0FBT0YsT0FBTyxDQUFDRyxhQUFSLEVBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFJldHVybnMgYnJvd3NlciB3aW5kb3cgc2l6ZSAoYW5kIHBvc2l0aW9uIGZvciBkcml2ZXJzIHdpdGggVzNDIHN1cHBvcnQpLlxuICpcbiAqIDxleGFtcGxlPlxuICogOmdldFdpbmRvd1NpemUuanNcbiAgICBpdCgnc2hvdWxkIHJldHVybiBicm93c2VyIHdpbmRvdyBzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB3aW5kb3dTaXplID0gYnJvd3Nlci5nZXRXaW5kb3dTaXplKDUwMCwgNjAwKTtcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93U2l6ZSk7XG4gICAgICAgIC8vIG91dHB1dHNcbiAgICAgICAgLy8gRmlyZWZveDogeyB4OiA0LCB5OiAyMywgd2lkdGg6IDEyODAsIGhlaWdodDogNzY3IH1cbiAgICAgICAgLy8gQ2hyb21lOiB7IHdpZHRoOiAxMjgwLCBoZWlnaHQ6IDc2NyB9XG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGJyb3dzZXIuZ2V0V2luZG93U2l6ZVxuICogQHJldHVybiB7T2JqZWN0fSB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSBmb3IgVzNDIG9yIHsgd2lkdGgsIGhlaWdodCB9IGZvciBub24gVzNDIGJyb3dzZXJcbiAqIEB0eXBlIHdpbmRvd1xuICpcbiAqL1xuXG5pbXBvcnQgeyBnZXRCcm93c2VyT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1NpemUoKSB7XG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJPYmplY3QodGhpcylcblxuICAgIGlmICghYnJvd3Nlci5pc1czQykge1xuICAgICAgICByZXR1cm4gYnJvd3Nlci5fZ2V0V2luZG93U2l6ZSgpXG4gICAgfVxuICAgIHJldHVybiBicm93c2VyLmdldFdpbmRvd1JlY3QoKVxufVxuIl19