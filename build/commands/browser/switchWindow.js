"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = switchWindow;

require("source-map-support/register");

/**
 *
 * Switch focus to a particular tab / window.
 *
 * <example>
    :switchWindow.js
    it('should switch to another window', () => {
        // open url
        browser.url('https://google.com')
        // create new window
        browser.newWindow('https://webdriver.io')

        // switch back via url match
        browser.switchWindow('google.com')

        // switch back via title match
        browser.switchWindow('Next-gen WebDriver test framework')
    });
 * </example>
 *
 * @param {String|RegExp}  urlOrTitleToMatch  String or regular expression that matches the title or url of the page
 *
 * @uses protocol/getWindowHandles, protocol/switchToWindow, protocol/getUrl, protocol/getTitle
 * @alias browser.switchTab
 * @type window
 *
 */
async function switchWindow(urlOrTitleToMatch) {
  /*!
   * parameter check
   */
  if (typeof urlOrTitleToMatch !== 'string' && !(urlOrTitleToMatch instanceof RegExp)) {
    throw new Error('Unsupported parameter for switchWindow, required is "string" or an RegExp');
  }

  const tabs = await this.getWindowHandles();

  for (const tab of tabs) {
    await this.switchToWindow(tab);
    /**
     * check if url matches
     */

    const url = await this.getUrl();

    if (url.match(urlOrTitleToMatch)) {
      return tab;
    }
    /**
     * check title
     */


    const title = await this.getTitle();

    if (title.match(urlOrTitleToMatch)) {
      return tab;
    }
  }

  throw new Error(`No window found with title or url matching "${urlOrTitleToMatch}"`);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3N3aXRjaFdpbmRvdy5qcyJdLCJuYW1lcyI6WyJzd2l0Y2hXaW5kb3ciLCJ1cmxPclRpdGxlVG9NYXRjaCIsIlJlZ0V4cCIsIkVycm9yIiwidGFicyIsImdldFdpbmRvd0hhbmRsZXMiLCJ0YWIiLCJzd2l0Y2hUb1dpbmRvdyIsInVybCIsImdldFVybCIsIm1hdGNoIiwidGl0bGUiLCJnZXRUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCZSxlQUFlQSxZQUFmLENBQTZCQyxpQkFBN0IsRUFBZ0Q7QUFDM0Q7OztBQUdBLE1BQUksT0FBT0EsaUJBQVAsS0FBNkIsUUFBN0IsSUFBeUMsRUFBRUEsaUJBQWlCLFlBQVlDLE1BQS9CLENBQTdDLEVBQXFGO0FBQ2pGLFVBQU0sSUFBSUMsS0FBSixDQUFVLDJFQUFWLENBQU47QUFDSDs7QUFFRCxRQUFNQyxJQUFJLEdBQUcsTUFBTSxLQUFLQyxnQkFBTCxFQUFuQjs7QUFFQSxPQUFLLE1BQU1DLEdBQVgsSUFBa0JGLElBQWxCLEVBQXdCO0FBQ3BCLFVBQU0sS0FBS0csY0FBTCxDQUFvQkQsR0FBcEIsQ0FBTjtBQUVBOzs7O0FBR0EsVUFBTUUsR0FBRyxHQUFHLE1BQU0sS0FBS0MsTUFBTCxFQUFsQjs7QUFDQSxRQUFJRCxHQUFHLENBQUNFLEtBQUosQ0FBVVQsaUJBQVYsQ0FBSixFQUFrQztBQUM5QixhQUFPSyxHQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHQSxVQUFNSyxLQUFLLEdBQUcsTUFBTSxLQUFLQyxRQUFMLEVBQXBCOztBQUNBLFFBQUlELEtBQUssQ0FBQ0QsS0FBTixDQUFZVCxpQkFBWixDQUFKLEVBQW9DO0FBQ2hDLGFBQU9LLEdBQVA7QUFDSDtBQUNKOztBQUVELFFBQU0sSUFBSUgsS0FBSixDQUFXLCtDQUE4Q0YsaUJBQWtCLEdBQTNFLENBQU47QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKlxuICogU3dpdGNoIGZvY3VzIHRvIGEgcGFydGljdWxhciB0YWIgLyB3aW5kb3cuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOnN3aXRjaFdpbmRvdy5qc1xuICAgIGl0KCdzaG91bGQgc3dpdGNoIHRvIGFub3RoZXIgd2luZG93JywgKCkgPT4ge1xuICAgICAgICAvLyBvcGVuIHVybFxuICAgICAgICBicm93c2VyLnVybCgnaHR0cHM6Ly9nb29nbGUuY29tJylcbiAgICAgICAgLy8gY3JlYXRlIG5ldyB3aW5kb3dcbiAgICAgICAgYnJvd3Nlci5uZXdXaW5kb3coJ2h0dHBzOi8vd2ViZHJpdmVyLmlvJylcblxuICAgICAgICAvLyBzd2l0Y2ggYmFjayB2aWEgdXJsIG1hdGNoXG4gICAgICAgIGJyb3dzZXIuc3dpdGNoV2luZG93KCdnb29nbGUuY29tJylcblxuICAgICAgICAvLyBzd2l0Y2ggYmFjayB2aWEgdGl0bGUgbWF0Y2hcbiAgICAgICAgYnJvd3Nlci5zd2l0Y2hXaW5kb3coJ05leHQtZ2VuIFdlYkRyaXZlciB0ZXN0IGZyYW1ld29yaycpXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSAgdXJsT3JUaXRsZVRvTWF0Y2ggIFN0cmluZyBvciByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBtYXRjaGVzIHRoZSB0aXRsZSBvciB1cmwgb2YgdGhlIHBhZ2VcbiAqXG4gKiBAdXNlcyBwcm90b2NvbC9nZXRXaW5kb3dIYW5kbGVzLCBwcm90b2NvbC9zd2l0Y2hUb1dpbmRvdywgcHJvdG9jb2wvZ2V0VXJsLCBwcm90b2NvbC9nZXRUaXRsZVxuICogQGFsaWFzIGJyb3dzZXIuc3dpdGNoVGFiXG4gKiBAdHlwZSB3aW5kb3dcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc3dpdGNoV2luZG93ICh1cmxPclRpdGxlVG9NYXRjaCkge1xuICAgIC8qIVxuICAgICAqIHBhcmFtZXRlciBjaGVja1xuICAgICAqL1xuICAgIGlmICh0eXBlb2YgdXJsT3JUaXRsZVRvTWF0Y2ggIT09ICdzdHJpbmcnICYmICEodXJsT3JUaXRsZVRvTWF0Y2ggaW5zdGFuY2VvZiBSZWdFeHApKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgcGFyYW1ldGVyIGZvciBzd2l0Y2hXaW5kb3csIHJlcXVpcmVkIGlzIFwic3RyaW5nXCIgb3IgYW4gUmVnRXhwJylcbiAgICB9XG5cbiAgICBjb25zdCB0YWJzID0gYXdhaXQgdGhpcy5nZXRXaW5kb3dIYW5kbGVzKClcblxuICAgIGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zd2l0Y2hUb1dpbmRvdyh0YWIpXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNoZWNrIGlmIHVybCBtYXRjaGVzXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCB0aGlzLmdldFVybCgpXG4gICAgICAgIGlmICh1cmwubWF0Y2godXJsT3JUaXRsZVRvTWF0Y2gpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFiXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogY2hlY2sgdGl0bGVcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHRpdGxlID0gYXdhaXQgdGhpcy5nZXRUaXRsZSgpXG4gICAgICAgIGlmICh0aXRsZS5tYXRjaCh1cmxPclRpdGxlVG9NYXRjaCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0YWJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihgTm8gd2luZG93IGZvdW5kIHdpdGggdGl0bGUgb3IgdXJsIG1hdGNoaW5nIFwiJHt1cmxPclRpdGxlVG9NYXRjaH1cImApXG59XG4iXX0=