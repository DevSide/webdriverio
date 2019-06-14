"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSize;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Get the width and height for an DOM-element.
 *
 * <example>
    :getSize.js
    it('should demonstrate the getSize command', () => {
        browser.url('http://github.com')
        const logo = $('.octicon-mark-github')

        const size = logo.getSize()
        console.log(size) // outputs: { width: 32, height: 32 }

        const width = logo.getSize('width')
        console.log(width) // outputs: 32

        const height = logo.getSize('height')
        console.log(height) // outputs: 32
    })
 * </example>
 *
 * @alias element.getElementSize
 * @param {String=} prop     size to receive [optional] ("width" or "height")
 * @return {Object|Number}    requested element size (`{ width: <Number>, height: <Number> }`) or actual width/height as number if prop param is given
 * @type property
 *
 */
async function getSize(prop = null) {
  let rect = {};

  if (this.isW3C) {
    rect = await (0, _utils.getElementRect)(this);
  } else {
    rect = await this.getElementSize(this.elementId);
  }

  if (rect[prop]) {
    return rect[prop];
  }

  return {
    width: rect.width,
    height: rect.height
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2dldFNpemUuanMiXSwibmFtZXMiOlsiZ2V0U2l6ZSIsInByb3AiLCJyZWN0IiwiaXNXM0MiLCJnZXRFbGVtZW50U2l6ZSIsImVsZW1lbnRJZCIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUE0QkE7O0FBNUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QmUsZUFBZUEsT0FBZixDQUF1QkMsSUFBSSxHQUFHLElBQTlCLEVBQW9DO0FBQy9DLE1BQUlDLElBQUksR0FBRyxFQUFYOztBQUVBLE1BQUksS0FBS0MsS0FBVCxFQUFnQjtBQUNaRCxJQUFBQSxJQUFJLEdBQUcsTUFBTSwyQkFBZSxJQUFmLENBQWI7QUFDSCxHQUZELE1BRU87QUFDSEEsSUFBQUEsSUFBSSxHQUFHLE1BQU0sS0FBS0UsY0FBTCxDQUFvQixLQUFLQyxTQUF6QixDQUFiO0FBQ0g7O0FBRUQsTUFBR0gsSUFBSSxDQUFDRCxJQUFELENBQVAsRUFBZTtBQUNYLFdBQU9DLElBQUksQ0FBQ0QsSUFBRCxDQUFYO0FBQ0g7O0FBRUQsU0FBTztBQUNISyxJQUFBQSxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FEVDtBQUVIQyxJQUFBQSxNQUFNLEVBQUVMLElBQUksQ0FBQ0s7QUFGVixHQUFQO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBHZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgZm9yIGFuIERPTS1lbGVtZW50LlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpnZXRTaXplLmpzXG4gICAgaXQoJ3Nob3VsZCBkZW1vbnN0cmF0ZSB0aGUgZ2V0U2l6ZSBjb21tYW5kJywgKCkgPT4ge1xuICAgICAgICBicm93c2VyLnVybCgnaHR0cDovL2dpdGh1Yi5jb20nKVxuICAgICAgICBjb25zdCBsb2dvID0gJCgnLm9jdGljb24tbWFyay1naXRodWInKVxuXG4gICAgICAgIGNvbnN0IHNpemUgPSBsb2dvLmdldFNpemUoKVxuICAgICAgICBjb25zb2xlLmxvZyhzaXplKSAvLyBvdXRwdXRzOiB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSBsb2dvLmdldFNpemUoJ3dpZHRoJylcbiAgICAgICAgY29uc29sZS5sb2cod2lkdGgpIC8vIG91dHB1dHM6IDMyXG5cbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gbG9nby5nZXRTaXplKCdoZWlnaHQnKVxuICAgICAgICBjb25zb2xlLmxvZyhoZWlnaHQpIC8vIG91dHB1dHM6IDMyXG4gICAgfSlcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAYWxpYXMgZWxlbWVudC5nZXRFbGVtZW50U2l6ZVxuICogQHBhcmFtIHtTdHJpbmc9fSBwcm9wICAgICBzaXplIHRvIHJlY2VpdmUgW29wdGlvbmFsXSAoXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIpXG4gKiBAcmV0dXJuIHtPYmplY3R8TnVtYmVyfSAgICByZXF1ZXN0ZWQgZWxlbWVudCBzaXplIChgeyB3aWR0aDogPE51bWJlcj4sIGhlaWdodDogPE51bWJlcj4gfWApIG9yIGFjdHVhbCB3aWR0aC9oZWlnaHQgYXMgbnVtYmVyIGlmIHByb3AgcGFyYW0gaXMgZ2l2ZW5cbiAqIEB0eXBlIHByb3BlcnR5XG4gKlxuICovXG5cbmltcG9ydCB7IGdldEVsZW1lbnRSZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFNpemUocHJvcCA9IG51bGwpIHtcbiAgICBsZXQgcmVjdCA9IHt9XG5cbiAgICBpZiAodGhpcy5pc1czQykge1xuICAgICAgICByZWN0ID0gYXdhaXQgZ2V0RWxlbWVudFJlY3QodGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgICByZWN0ID0gYXdhaXQgdGhpcy5nZXRFbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnRJZClcbiAgICB9XG5cbiAgICBpZihyZWN0W3Byb3BdKSB7XG4gICAgICAgIHJldHVybiByZWN0W3Byb3BdXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgICB9XG59XG4iXX0=