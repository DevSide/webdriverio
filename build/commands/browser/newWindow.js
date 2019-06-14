"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = newWindow;

require("source-map-support/register");

var _newWindow = _interopRequireDefault(require("../../scripts/newWindow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Open new window in browser. This command is the equivalent function to `window.open()`. This command does not
 * work in mobile environments.
 *
 * __Note:__ When calling this command you automatically switch to the new window.
 *
 * <example>
    :newWindowSync.js
    it('should open a new tab', () => {
        browser.url('http://google.com')
        console.log(browser.getTitle()) // outputs: "Google"

        browser.newWindow('https://webdriver.io', 'WebdriverIO window', 'width=420,height=230,resizable,scrollbars=yes,status=1')
        console.log(browser.getTitle()) // outputs: "WebdriverIO · Next-gen WebDriver test framework for Node.js"

        browser.closeWindow()
        console.log(browser.getTitle()) // outputs: "Google"
    });
 * </example>
 *
 * @param {String} url            website URL to open
 * @param {String=} windowName     name of the new window
 * @param {String=} windowFeatures features of opened window (e.g. size, position, scrollbars, etc.)
 * @return {String}                id of window handle of new tab
 *
 * @uses browser/execute, protocol/getWindowHandles, protocol/switchToWindow
 * @alias browser.newWindow
 * @type window
 */
async function newWindow(url, windowName = 'New Window', windowFeatures = '') {
  /*!
   * parameter check
   */
  if (typeof url !== 'string') {
    throw new Error('number or type of arguments don\'t agree with newWindow command');
  }
  /*!
   * mobile check
   */


  if (this.isMobile) {
    throw new Error('newWindow command is not supported on mobile platforms');
  }

  await this.execute(_newWindow.default, url, windowName, windowFeatures);
  const tabs = await this.getWindowHandles();
  const newTab = tabs.pop();
  await this.switchToWindow(newTab);
  return newTab;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL25ld1dpbmRvdy5qcyJdLCJuYW1lcyI6WyJuZXdXaW5kb3ciLCJ1cmwiLCJ3aW5kb3dOYW1lIiwid2luZG93RmVhdHVyZXMiLCJFcnJvciIsImlzTW9iaWxlIiwiZXhlY3V0ZSIsIm5ld1dpbmRvd0hlbHBlciIsInRhYnMiLCJnZXRXaW5kb3dIYW5kbGVzIiwibmV3VGFiIiwicG9wIiwic3dpdGNoVG9XaW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWdDQTs7OztBQS9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNlLGVBQWVBLFNBQWYsQ0FBMEJDLEdBQTFCLEVBQStCQyxVQUFVLEdBQUcsWUFBNUMsRUFBMERDLGNBQWMsR0FBRyxFQUEzRSxFQUErRTtBQUMxRjs7O0FBR0EsTUFBSSxPQUFPRixHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDekIsVUFBTSxJQUFJRyxLQUFKLENBQVUsaUVBQVYsQ0FBTjtBQUNIO0FBRUQ7Ozs7O0FBR0EsTUFBSSxLQUFLQyxRQUFULEVBQW1CO0FBQ2YsVUFBTSxJQUFJRCxLQUFKLENBQVUsd0RBQVYsQ0FBTjtBQUNIOztBQUVELFFBQU0sS0FBS0UsT0FBTCxDQUFhQyxrQkFBYixFQUE4Qk4sR0FBOUIsRUFBbUNDLFVBQW5DLEVBQStDQyxjQUEvQyxDQUFOO0FBRUEsUUFBTUssSUFBSSxHQUFHLE1BQU0sS0FBS0MsZ0JBQUwsRUFBbkI7QUFDQSxRQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxFQUFmO0FBRUEsUUFBTSxLQUFLQyxjQUFMLENBQW9CRixNQUFwQixDQUFOO0FBQ0EsU0FBT0EsTUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqXG4gKiBPcGVuIG5ldyB3aW5kb3cgaW4gYnJvd3Nlci4gVGhpcyBjb21tYW5kIGlzIHRoZSBlcXVpdmFsZW50IGZ1bmN0aW9uIHRvIGB3aW5kb3cub3BlbigpYC4gVGhpcyBjb21tYW5kIGRvZXMgbm90XG4gKiB3b3JrIGluIG1vYmlsZSBlbnZpcm9ubWVudHMuXG4gKlxuICogX19Ob3RlOl9fIFdoZW4gY2FsbGluZyB0aGlzIGNvbW1hbmQgeW91IGF1dG9tYXRpY2FsbHkgc3dpdGNoIHRvIHRoZSBuZXcgd2luZG93LlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpuZXdXaW5kb3dTeW5jLmpzXG4gICAgaXQoJ3Nob3VsZCBvcGVuIGEgbmV3IHRhYicsICgpID0+IHtcbiAgICAgICAgYnJvd3Nlci51cmwoJ2h0dHA6Ly9nb29nbGUuY29tJylcbiAgICAgICAgY29uc29sZS5sb2coYnJvd3Nlci5nZXRUaXRsZSgpKSAvLyBvdXRwdXRzOiBcIkdvb2dsZVwiXG5cbiAgICAgICAgYnJvd3Nlci5uZXdXaW5kb3coJ2h0dHBzOi8vd2ViZHJpdmVyLmlvJywgJ1dlYmRyaXZlcklPIHdpbmRvdycsICd3aWR0aD00MjAsaGVpZ2h0PTIzMCxyZXNpemFibGUsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPTEnKVxuICAgICAgICBjb25zb2xlLmxvZyhicm93c2VyLmdldFRpdGxlKCkpIC8vIG91dHB1dHM6IFwiV2ViZHJpdmVySU8gwrcgTmV4dC1nZW4gV2ViRHJpdmVyIHRlc3QgZnJhbWV3b3JrIGZvciBOb2RlLmpzXCJcblxuICAgICAgICBicm93c2VyLmNsb3NlV2luZG93KClcbiAgICAgICAgY29uc29sZS5sb2coYnJvd3Nlci5nZXRUaXRsZSgpKSAvLyBvdXRwdXRzOiBcIkdvb2dsZVwiXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCAgICAgICAgICAgIHdlYnNpdGUgVVJMIHRvIG9wZW5cbiAqIEBwYXJhbSB7U3RyaW5nPX0gd2luZG93TmFtZSAgICAgbmFtZSBvZiB0aGUgbmV3IHdpbmRvd1xuICogQHBhcmFtIHtTdHJpbmc9fSB3aW5kb3dGZWF0dXJlcyBmZWF0dXJlcyBvZiBvcGVuZWQgd2luZG93IChlLmcuIHNpemUsIHBvc2l0aW9uLCBzY3JvbGxiYXJzLCBldGMuKVxuICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICBpZCBvZiB3aW5kb3cgaGFuZGxlIG9mIG5ldyB0YWJcbiAqXG4gKiBAdXNlcyBicm93c2VyL2V4ZWN1dGUsIHByb3RvY29sL2dldFdpbmRvd0hhbmRsZXMsIHByb3RvY29sL3N3aXRjaFRvV2luZG93XG4gKiBAYWxpYXMgYnJvd3Nlci5uZXdXaW5kb3dcbiAqIEB0eXBlIHdpbmRvd1xuICovXG5cbmltcG9ydCBuZXdXaW5kb3dIZWxwZXIgZnJvbSAnLi4vLi4vc2NyaXB0cy9uZXdXaW5kb3cnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG5ld1dpbmRvdyAodXJsLCB3aW5kb3dOYW1lID0gJ05ldyBXaW5kb3cnLCB3aW5kb3dGZWF0dXJlcyA9ICcnKSB7XG4gICAgLyohXG4gICAgICogcGFyYW1ldGVyIGNoZWNrXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbnVtYmVyIG9yIHR5cGUgb2YgYXJndW1lbnRzIGRvblxcJ3QgYWdyZWUgd2l0aCBuZXdXaW5kb3cgY29tbWFuZCcpXG4gICAgfVxuXG4gICAgLyohXG4gICAgICogbW9iaWxlIGNoZWNrXG4gICAgICovXG4gICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduZXdXaW5kb3cgY29tbWFuZCBpcyBub3Qgc3VwcG9ydGVkIG9uIG1vYmlsZSBwbGF0Zm9ybXMnKVxuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuZXhlY3V0ZShuZXdXaW5kb3dIZWxwZXIsIHVybCwgd2luZG93TmFtZSwgd2luZG93RmVhdHVyZXMpXG5cbiAgICBjb25zdCB0YWJzID0gYXdhaXQgdGhpcy5nZXRXaW5kb3dIYW5kbGVzKClcbiAgICBjb25zdCBuZXdUYWIgPSB0YWJzLnBvcCgpXG5cbiAgICBhd2FpdCB0aGlzLnN3aXRjaFRvV2luZG93KG5ld1RhYilcbiAgICByZXR1cm4gbmV3VGFiXG59XG4iXX0=