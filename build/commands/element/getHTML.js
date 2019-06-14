"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHTML;

require("source-map-support/register");

var _constants = require("../../constants");

var _utils = require("../../utils");

var _getHTML = _interopRequireDefault(require("../../scripts/getHTML"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Get source code of specified DOM element by selector.
 *
 * <example>
    :index.html
    <div id="test">
        <span>Lorem ipsum dolor amet</span>
    </div>
    :getHTML.js
    it('should get html for certain elements', () => {
        var outerHTML = $('#test').getHTML();
        console.log(outerHTML);
        // outputs:
        // "<div id="test"><span>Lorem ipsum dolor amet</span></div>"

        var innerHTML = $('#test').getHTML(false);
        console.log(innerHTML);
        // outputs:
        // "<span>Lorem ipsum dolor amet</span>"
    });
 * </example>
 *
 * @alias element.getHTML
 * @param {Boolean=} includeSelectorTag if true it includes the selector element tag (default: true)
 * @return {String}  the HTML of the specified element
 * @uses action/selectorExecute
 * @type property
 *
 */
function getHTML(includeSelectorTag = true) {
  return (0, _utils.getBrowserObject)(this).execute(_getHTML.default, {
    [_constants.ELEMENT_KEY]: this.elementId,
    // w3c compatible
    ELEMENT: this.elementId // jsonwp compatible

  }, includeSelectorTag);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2dldEhUTUwuanMiXSwibmFtZXMiOlsiZ2V0SFRNTCIsImluY2x1ZGVTZWxlY3RvclRhZyIsImV4ZWN1dGUiLCJnZXRIVE1MU2NyaXB0IiwiRUxFTUVOVF9LRVkiLCJlbGVtZW50SWQiLCJFTEVNRU5UIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUErQkE7O0FBQ0E7O0FBQ0E7Ozs7QUFqQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DZSxTQUFTQSxPQUFULENBQWtCQyxrQkFBa0IsR0FBRyxJQUF2QyxFQUE2QztBQUN4RCxTQUFPLDZCQUFpQixJQUFqQixFQUF1QkMsT0FBdkIsQ0FBK0JDLGdCQUEvQixFQUE4QztBQUNqRCxLQUFDQyxzQkFBRCxHQUFlLEtBQUtDLFNBRDZCO0FBQ2xCO0FBQy9CQyxJQUFBQSxPQUFPLEVBQUUsS0FBS0QsU0FGbUMsQ0FFekI7O0FBRnlCLEdBQTlDLEVBR0pKLGtCQUhJLENBQVA7QUFJSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIEdldCBzb3VyY2UgY29kZSBvZiBzcGVjaWZpZWQgRE9NIGVsZW1lbnQgYnkgc2VsZWN0b3IuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmluZGV4Lmh0bWxcbiAgICA8ZGl2IGlkPVwidGVzdFwiPlxuICAgICAgICA8c3Bhbj5Mb3JlbSBpcHN1bSBkb2xvciBhbWV0PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDpnZXRIVE1MLmpzXG4gICAgaXQoJ3Nob3VsZCBnZXQgaHRtbCBmb3IgY2VydGFpbiBlbGVtZW50cycsICgpID0+IHtcbiAgICAgICAgdmFyIG91dGVySFRNTCA9ICQoJyN0ZXN0JykuZ2V0SFRNTCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhvdXRlckhUTUwpO1xuICAgICAgICAvLyBvdXRwdXRzOlxuICAgICAgICAvLyBcIjxkaXYgaWQ9XCJ0ZXN0XCI+PHNwYW4+TG9yZW0gaXBzdW0gZG9sb3IgYW1ldDwvc3Bhbj48L2Rpdj5cIlxuXG4gICAgICAgIHZhciBpbm5lckhUTUwgPSAkKCcjdGVzdCcpLmdldEhUTUwoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbm5lckhUTUwpO1xuICAgICAgICAvLyBvdXRwdXRzOlxuICAgICAgICAvLyBcIjxzcGFuPkxvcmVtIGlwc3VtIGRvbG9yIGFtZXQ8L3NwYW4+XCJcbiAgICB9KTtcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAYWxpYXMgZWxlbWVudC5nZXRIVE1MXG4gKiBAcGFyYW0ge0Jvb2xlYW49fSBpbmNsdWRlU2VsZWN0b3JUYWcgaWYgdHJ1ZSBpdCBpbmNsdWRlcyB0aGUgc2VsZWN0b3IgZWxlbWVudCB0YWcgKGRlZmF1bHQ6IHRydWUpXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICB0aGUgSFRNTCBvZiB0aGUgc3BlY2lmaWVkIGVsZW1lbnRcbiAqIEB1c2VzIGFjdGlvbi9zZWxlY3RvckV4ZWN1dGVcbiAqIEB0eXBlIHByb3BlcnR5XG4gKlxuICovXG5cbmltcG9ydCB7IEVMRU1FTlRfS0VZIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgZ2V0QnJvd3Nlck9iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IGdldEhUTUxTY3JpcHQgZnJvbSAnLi4vLi4vc2NyaXB0cy9nZXRIVE1MJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIVE1MIChpbmNsdWRlU2VsZWN0b3JUYWcgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGdldEJyb3dzZXJPYmplY3QodGhpcykuZXhlY3V0ZShnZXRIVE1MU2NyaXB0LCB7XG4gICAgICAgIFtFTEVNRU5UX0tFWV06IHRoaXMuZWxlbWVudElkLCAvLyB3M2MgY29tcGF0aWJsZVxuICAgICAgICBFTEVNRU5UOiB0aGlzLmVsZW1lbnRJZCAvLyBqc29ud3AgY29tcGF0aWJsZVxuICAgIH0sIGluY2x1ZGVTZWxlY3RvclRhZylcbn1cbiJdfQ==