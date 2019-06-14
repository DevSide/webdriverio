"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = saveScreenshot;

require("source-map-support/register");

var _fs = _interopRequireDefault(require("fs"));

var _safeBuffer = require("safe-buffer");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Save a screenshot of the current browsing context to a PNG file on your OS. Be aware that
 * some browser drivers take screenshots of the whole document (e.g. Geckodriver with Firefox)
 * and others only of the current viewport (e.g. Chromedriver with Chrome).
 *
 * <example>
    :saveScreenshot.js
    it('should save a screenshot of the browser view', function () {
        browser.saveScreenshot('./some/path/screenshot.png');
    });
 * </example>
 *
 * @alias browser.saveScreenshot
 * @param   {String}  filepath  path to the generated image (`.png` suffix is required) relative to the execution directory
 * @return  {Buffer}            screenshot buffer
 * @type utility
 *
 */
async function saveScreenshot(filepath) {
  /**
   * type check
   */
  if (typeof filepath !== 'string' || !filepath.endsWith('.png')) {
    throw new Error('saveScreenshot expects a filepath of type string and ".png" file ending');
  }

  const absoluteFilepath = (0, _utils.getAbsoluteFilepath)(filepath);
  (0, _utils.assertDirectoryExists)(absoluteFilepath);
  const screenBuffer = await this.takeScreenshot();

  const screenshot = _safeBuffer.Buffer.from(screenBuffer, 'base64');

  _fs.default.writeFileSync(absoluteFilepath, screenshot);

  return screenshot;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3NhdmVTY3JlZW5zaG90LmpzIl0sIm5hbWVzIjpbInNhdmVTY3JlZW5zaG90IiwiZmlsZXBhdGgiLCJlbmRzV2l0aCIsIkVycm9yIiwiYWJzb2x1dGVGaWxlcGF0aCIsInNjcmVlbkJ1ZmZlciIsInRha2VTY3JlZW5zaG90Iiwic2NyZWVuc2hvdCIsIkJ1ZmZlciIsImZyb20iLCJmcyIsIndyaXRlRmlsZVN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7OztBQXRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCZSxlQUFlQSxjQUFmLENBQStCQyxRQUEvQixFQUF5QztBQUNwRDs7O0FBR0EsTUFBSSxPQUFPQSxRQUFQLEtBQW9CLFFBQXBCLElBQWdDLENBQUNBLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQixNQUFsQixDQUFyQyxFQUFnRTtBQUM1RCxVQUFNLElBQUlDLEtBQUosQ0FBVSx5RUFBVixDQUFOO0FBQ0g7O0FBRUQsUUFBTUMsZ0JBQWdCLEdBQUcsZ0NBQW9CSCxRQUFwQixDQUF6QjtBQUNBLG9DQUFzQkcsZ0JBQXRCO0FBRUEsUUFBTUMsWUFBWSxHQUFHLE1BQU0sS0FBS0MsY0FBTCxFQUEzQjs7QUFDQSxRQUFNQyxVQUFVLEdBQUdDLG1CQUFPQyxJQUFQLENBQVlKLFlBQVosRUFBMEIsUUFBMUIsQ0FBbkI7O0FBQ0FLLGNBQUdDLGFBQUgsQ0FBaUJQLGdCQUFqQixFQUFtQ0csVUFBbkM7O0FBRUEsU0FBT0EsVUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogU2F2ZSBhIHNjcmVlbnNob3Qgb2YgdGhlIGN1cnJlbnQgYnJvd3NpbmcgY29udGV4dCB0byBhIFBORyBmaWxlIG9uIHlvdXIgT1MuIEJlIGF3YXJlIHRoYXRcbiAqIHNvbWUgYnJvd3NlciBkcml2ZXJzIHRha2Ugc2NyZWVuc2hvdHMgb2YgdGhlIHdob2xlIGRvY3VtZW50IChlLmcuIEdlY2tvZHJpdmVyIHdpdGggRmlyZWZveClcbiAqIGFuZCBvdGhlcnMgb25seSBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCAoZS5nLiBDaHJvbWVkcml2ZXIgd2l0aCBDaHJvbWUpLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpzYXZlU2NyZWVuc2hvdC5qc1xuICAgIGl0KCdzaG91bGQgc2F2ZSBhIHNjcmVlbnNob3Qgb2YgdGhlIGJyb3dzZXIgdmlldycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnJvd3Nlci5zYXZlU2NyZWVuc2hvdCgnLi9zb21lL3BhdGgvc2NyZWVuc2hvdC5wbmcnKTtcbiAgICB9KTtcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAYWxpYXMgYnJvd3Nlci5zYXZlU2NyZWVuc2hvdFxuICogQHBhcmFtICAge1N0cmluZ30gIGZpbGVwYXRoICBwYXRoIHRvIHRoZSBnZW5lcmF0ZWQgaW1hZ2UgKGAucG5nYCBzdWZmaXggaXMgcmVxdWlyZWQpIHJlbGF0aXZlIHRvIHRoZSBleGVjdXRpb24gZGlyZWN0b3J5XG4gKiBAcmV0dXJuICB7QnVmZmVyfSAgICAgICAgICAgIHNjcmVlbnNob3QgYnVmZmVyXG4gKiBAdHlwZSB1dGlsaXR5XG4gKlxuICovXG5cbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gJ3NhZmUtYnVmZmVyJ1xuaW1wb3J0IHsgZ2V0QWJzb2x1dGVGaWxlcGF0aCwgYXNzZXJ0RGlyZWN0b3J5RXhpc3RzIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNhdmVTY3JlZW5zaG90IChmaWxlcGF0aCkge1xuICAgIC8qKlxuICAgICAqIHR5cGUgY2hlY2tcbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIGZpbGVwYXRoICE9PSAnc3RyaW5nJyB8fCAhZmlsZXBhdGguZW5kc1dpdGgoJy5wbmcnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NhdmVTY3JlZW5zaG90IGV4cGVjdHMgYSBmaWxlcGF0aCBvZiB0eXBlIHN0cmluZyBhbmQgXCIucG5nXCIgZmlsZSBlbmRpbmcnKVxuICAgIH1cblxuICAgIGNvbnN0IGFic29sdXRlRmlsZXBhdGggPSBnZXRBYnNvbHV0ZUZpbGVwYXRoKGZpbGVwYXRoKVxuICAgIGFzc2VydERpcmVjdG9yeUV4aXN0cyhhYnNvbHV0ZUZpbGVwYXRoKVxuXG4gICAgY29uc3Qgc2NyZWVuQnVmZmVyID0gYXdhaXQgdGhpcy50YWtlU2NyZWVuc2hvdCgpXG4gICAgY29uc3Qgc2NyZWVuc2hvdCA9IEJ1ZmZlci5mcm9tKHNjcmVlbkJ1ZmZlciwgJ2Jhc2U2NCcpXG4gICAgZnMud3JpdGVGaWxlU3luYyhhYnNvbHV0ZUZpbGVwYXRoLCBzY3JlZW5zaG90KVxuXG4gICAgcmV0dXJuIHNjcmVlbnNob3Rcbn1cbiJdfQ==