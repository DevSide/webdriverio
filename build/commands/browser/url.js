"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = url;

require("source-map-support/register");

var _url = _interopRequireDefault(require("url"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Protocol binding to load or get the URL of the browser. If a baseUrl is
 * specified in the config, it will be prepended to the url parameter using
 * node's url.resolve() method.
 *
 * <example>
    :url.js
    // navigate to a new URL
    browser.url('https://webdriver.io');
    // receive url
    console.log(browser.getUrl()); // outputs: "https://webdriver.io"

    :baseUrlResolutions.js
    // With a base URL of http://example.com/site, the following url parameters resolve as such:
    // When providing a scheme:
    // https://webdriver.io
    browser.url('https://webdriver.io');
    // When not starting with a slash, the URL resolves relative to the baseUrl
    // http://example.com/site/relative
    browser.url('relative');
    // When starting with a slash, the URL resolves relative to the root path of the baseUrl
    // http://example.com/rootRelative
    browser.url('/rootRelative');
 * </example>
 *
 * @param {String=} url  the URL to navigate to
 * @return {String}     the current URL
 *
 * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get
 * @see  https://nodejs.org/api/url.html#url_url_resolve_from_to
 * @type protocol
 *
 */
function url(path) {
  if (typeof path !== 'string') {
    throw new Error('Parameter for "url" command needs to be type of string');
  }

  if (typeof this.options.baseUrl === 'string') {
    path = _url.default.resolve(this.options.baseUrl, path);
  }

  return this.navigateTo((0, _utils.validateUrl)(path));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3VybC5qcyJdLCJuYW1lcyI6WyJ1cmwiLCJwYXRoIiwiRXJyb3IiLCJvcHRpb25zIiwiYmFzZVVybCIsIm5vZGVVcmwiLCJyZXNvbHZlIiwibmF2aWdhdGVUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBbUNBOztBQUNBOzs7O0FBcENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NlLFNBQVNBLEdBQVQsQ0FBY0MsSUFBZCxFQUFvQjtBQUMvQixNQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsVUFBTSxJQUFJQyxLQUFKLENBQVUsd0RBQVYsQ0FBTjtBQUNIOztBQUVELE1BQUksT0FBTyxLQUFLQyxPQUFMLENBQWFDLE9BQXBCLEtBQWdDLFFBQXBDLEVBQThDO0FBQzFDSCxJQUFBQSxJQUFJLEdBQUdJLGFBQVFDLE9BQVIsQ0FBZ0IsS0FBS0gsT0FBTCxDQUFhQyxPQUE3QixFQUFzQ0gsSUFBdEMsQ0FBUDtBQUNIOztBQUVELFNBQU8sS0FBS00sVUFBTCxDQUFnQix3QkFBWU4sSUFBWixDQUFoQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBQcm90b2NvbCBiaW5kaW5nIHRvIGxvYWQgb3IgZ2V0IHRoZSBVUkwgb2YgdGhlIGJyb3dzZXIuIElmIGEgYmFzZVVybCBpc1xuICogc3BlY2lmaWVkIGluIHRoZSBjb25maWcsIGl0IHdpbGwgYmUgcHJlcGVuZGVkIHRvIHRoZSB1cmwgcGFyYW1ldGVyIHVzaW5nXG4gKiBub2RlJ3MgdXJsLnJlc29sdmUoKSBtZXRob2QuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOnVybC5qc1xuICAgIC8vIG5hdmlnYXRlIHRvIGEgbmV3IFVSTFxuICAgIGJyb3dzZXIudXJsKCdodHRwczovL3dlYmRyaXZlci5pbycpO1xuICAgIC8vIHJlY2VpdmUgdXJsXG4gICAgY29uc29sZS5sb2coYnJvd3Nlci5nZXRVcmwoKSk7IC8vIG91dHB1dHM6IFwiaHR0cHM6Ly93ZWJkcml2ZXIuaW9cIlxuXG4gICAgOmJhc2VVcmxSZXNvbHV0aW9ucy5qc1xuICAgIC8vIFdpdGggYSBiYXNlIFVSTCBvZiBodHRwOi8vZXhhbXBsZS5jb20vc2l0ZSwgdGhlIGZvbGxvd2luZyB1cmwgcGFyYW1ldGVycyByZXNvbHZlIGFzIHN1Y2g6XG4gICAgLy8gV2hlbiBwcm92aWRpbmcgYSBzY2hlbWU6XG4gICAgLy8gaHR0cHM6Ly93ZWJkcml2ZXIuaW9cbiAgICBicm93c2VyLnVybCgnaHR0cHM6Ly93ZWJkcml2ZXIuaW8nKTtcbiAgICAvLyBXaGVuIG5vdCBzdGFydGluZyB3aXRoIGEgc2xhc2gsIHRoZSBVUkwgcmVzb2x2ZXMgcmVsYXRpdmUgdG8gdGhlIGJhc2VVcmxcbiAgICAvLyBodHRwOi8vZXhhbXBsZS5jb20vc2l0ZS9yZWxhdGl2ZVxuICAgIGJyb3dzZXIudXJsKCdyZWxhdGl2ZScpO1xuICAgIC8vIFdoZW4gc3RhcnRpbmcgd2l0aCBhIHNsYXNoLCB0aGUgVVJMIHJlc29sdmVzIHJlbGF0aXZlIHRvIHRoZSByb290IHBhdGggb2YgdGhlIGJhc2VVcmxcbiAgICAvLyBodHRwOi8vZXhhbXBsZS5jb20vcm9vdFJlbGF0aXZlXG4gICAgYnJvd3Nlci51cmwoJy9yb290UmVsYXRpdmUnKTtcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZz19IHVybCAgdGhlIFVSTCB0byBuYXZpZ2F0ZSB0b1xuICogQHJldHVybiB7U3RyaW5nfSAgICAgdGhlIGN1cnJlbnQgVVJMXG4gKlxuICogQHNlZSAgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmRyaXZlci93ZWJkcml2ZXItc3BlYy5odG1sI2Rmbi1nZXRcbiAqIEBzZWUgIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvdXJsLmh0bWwjdXJsX3VybF9yZXNvbHZlX2Zyb21fdG9cbiAqIEB0eXBlIHByb3RvY29sXG4gKlxuICovXG5cbmltcG9ydCBub2RlVXJsIGZyb20gJ3VybCdcbmltcG9ydCB7IHZhbGlkYXRlVXJsIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVybCAocGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgZm9yIFwidXJsXCIgY29tbWFuZCBuZWVkcyB0byBiZSB0eXBlIG9mIHN0cmluZycpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuYmFzZVVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCA9IG5vZGVVcmwucmVzb2x2ZSh0aGlzLm9wdGlvbnMuYmFzZVVybCwgcGF0aClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvKHZhbGlkYXRlVXJsKHBhdGgpKVxufVxuIl19