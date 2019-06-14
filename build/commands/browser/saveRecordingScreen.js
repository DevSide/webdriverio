"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = saveRecordingScreen;

require("source-map-support/register");

var _fs = _interopRequireDefault(require("fs"));

var _safeBuffer = require("safe-buffer");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Appium only. Save a video started by startRecordingScreen command to file.
 * See [Appium docs](http://appium.io/docs/en/commands/device/recording-screen/start-recording-screen/)
 *
 * <example>
    :saveRecordingScreen.js
    it('should save a video', () => {
        browser.startRecordingScreen();
        $('~BUTTON').click();
        browser.saveRecordingScreen('./some/path/video.mp4');
    });
 * </example>
 *
 * @alias browser.saveRecordingScreen
 * @param   {String}  filepath  full or relative to the execution directory path to the generated video
 * @return  {Buffer}            video buffer
 * @type utility
 *
 */
async function saveRecordingScreen(filepath) {
  /**
   * type check
   */
  if (typeof filepath !== 'string') {
    throw new Error('saveRecordingScreen expects a filepath');
  }

  const absoluteFilepath = (0, _utils.getAbsoluteFilepath)(filepath);
  (0, _utils.assertDirectoryExists)(absoluteFilepath);
  const videoBuffer = await this.stopRecordingScreen();

  const video = _safeBuffer.Buffer.from(videoBuffer, 'base64');

  _fs.default.writeFileSync(absoluteFilepath, video);

  return video;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3NhdmVSZWNvcmRpbmdTY3JlZW4uanMiXSwibmFtZXMiOlsic2F2ZVJlY29yZGluZ1NjcmVlbiIsImZpbGVwYXRoIiwiRXJyb3IiLCJhYnNvbHV0ZUZpbGVwYXRoIiwidmlkZW9CdWZmZXIiLCJzdG9wUmVjb3JkaW5nU2NyZWVuIiwidmlkZW8iLCJCdWZmZXIiLCJmcm9tIiwiZnMiLCJ3cml0ZUZpbGVTeW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFxQkE7O0FBQ0E7O0FBQ0E7Ozs7QUF2QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJlLGVBQWVBLG1CQUFmLENBQW9DQyxRQUFwQyxFQUE4QztBQUN6RDs7O0FBR0EsTUFBSSxPQUFPQSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQzlCLFVBQU0sSUFBSUMsS0FBSixDQUFVLHdDQUFWLENBQU47QUFDSDs7QUFFRCxRQUFNQyxnQkFBZ0IsR0FBRyxnQ0FBb0JGLFFBQXBCLENBQXpCO0FBQ0Esb0NBQXNCRSxnQkFBdEI7QUFFQSxRQUFNQyxXQUFXLEdBQUcsTUFBTSxLQUFLQyxtQkFBTCxFQUExQjs7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLG1CQUFPQyxJQUFQLENBQVlKLFdBQVosRUFBeUIsUUFBekIsQ0FBZDs7QUFDQUssY0FBR0MsYUFBSCxDQUFpQlAsZ0JBQWpCLEVBQW1DRyxLQUFuQzs7QUFFQSxTQUFPQSxLQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBBcHBpdW0gb25seS4gU2F2ZSBhIHZpZGVvIHN0YXJ0ZWQgYnkgc3RhcnRSZWNvcmRpbmdTY3JlZW4gY29tbWFuZCB0byBmaWxlLlxuICogU2VlIFtBcHBpdW0gZG9jc10oaHR0cDovL2FwcGl1bS5pby9kb2NzL2VuL2NvbW1hbmRzL2RldmljZS9yZWNvcmRpbmctc2NyZWVuL3N0YXJ0LXJlY29yZGluZy1zY3JlZW4vKVxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpzYXZlUmVjb3JkaW5nU2NyZWVuLmpzXG4gICAgaXQoJ3Nob3VsZCBzYXZlIGEgdmlkZW8nLCAoKSA9PiB7XG4gICAgICAgIGJyb3dzZXIuc3RhcnRSZWNvcmRpbmdTY3JlZW4oKTtcbiAgICAgICAgJCgnfkJVVFRPTicpLmNsaWNrKCk7XG4gICAgICAgIGJyb3dzZXIuc2F2ZVJlY29yZGluZ1NjcmVlbignLi9zb21lL3BhdGgvdmlkZW8ubXA0Jyk7XG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGJyb3dzZXIuc2F2ZVJlY29yZGluZ1NjcmVlblxuICogQHBhcmFtICAge1N0cmluZ30gIGZpbGVwYXRoICBmdWxsIG9yIHJlbGF0aXZlIHRvIHRoZSBleGVjdXRpb24gZGlyZWN0b3J5IHBhdGggdG8gdGhlIGdlbmVyYXRlZCB2aWRlb1xuICogQHJldHVybiAge0J1ZmZlcn0gICAgICAgICAgICB2aWRlbyBidWZmZXJcbiAqIEB0eXBlIHV0aWxpdHlcbiAqXG4gKi9cblxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnc2FmZS1idWZmZXInXG5pbXBvcnQgeyBnZXRBYnNvbHV0ZUZpbGVwYXRoLCBhc3NlcnREaXJlY3RvcnlFeGlzdHMgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2F2ZVJlY29yZGluZ1NjcmVlbiAoZmlsZXBhdGgpIHtcbiAgICAvKipcbiAgICAgKiB0eXBlIGNoZWNrXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBmaWxlcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzYXZlUmVjb3JkaW5nU2NyZWVuIGV4cGVjdHMgYSBmaWxlcGF0aCcpXG4gICAgfVxuXG4gICAgY29uc3QgYWJzb2x1dGVGaWxlcGF0aCA9IGdldEFic29sdXRlRmlsZXBhdGgoZmlsZXBhdGgpXG4gICAgYXNzZXJ0RGlyZWN0b3J5RXhpc3RzKGFic29sdXRlRmlsZXBhdGgpXG5cbiAgICBjb25zdCB2aWRlb0J1ZmZlciA9IGF3YWl0IHRoaXMuc3RvcFJlY29yZGluZ1NjcmVlbigpXG4gICAgY29uc3QgdmlkZW8gPSBCdWZmZXIuZnJvbSh2aWRlb0J1ZmZlciwgJ2Jhc2U2NCcpXG4gICAgZnMud3JpdGVGaWxlU3luYyhhYnNvbHV0ZUZpbGVwYXRoLCB2aWRlbylcblxuICAgIHJldHVybiB2aWRlb1xufVxuIl19