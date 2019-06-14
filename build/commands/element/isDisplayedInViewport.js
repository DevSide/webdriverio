"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDisplayedInViewport;

require("source-map-support/register");

var _constants = require("../../constants");

var _utils = require("../../utils");

var _isDisplayedInViewport = _interopRequireDefault(require("../../scripts/isDisplayedInViewport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Return true if the selected DOM-element found by given selector is visible and within the viewport.
 *
 * <example>
    :index.html
    <div id="notDisplayed" style="display: none"></div>
    <div id="notVisible" style="visibility: hidden"></div>
    <div id="notInViewport" style="position:absolute; left: 9999999"></div>
    <div id="zeroOpacity" style="opacity: 0"></div>
    :isDisplayedInViewport.js
    :isDisplayed.js
    it('should detect if an element is visible', () => {
        let isDisplayedInViewport = $('#notDisplayed').isDisplayedInViewport();
        console.log(isDisplayedInViewport); // outputs: false

        isDisplayedInViewport = $('#notVisible').isDisplayedInViewport();
        console.log(isDisplayedInViewport); // outputs: false

        isDisplayedInViewport = $('#notExisting').isDisplayedInViewport();
        console.log(isDisplayedInViewport); // outputs: false

        isDisplayedInViewport = $('#notInViewport').isDisplayedInViewport();
        console.log(isDisplayedInViewport); // outputs: false

        isDisplayedInViewport = $('#zeroOpacity').isDisplayedInViewport();
        console.log(isDisplayedInViewport); // outputs: false
    });
 * </example>
 *
 * @alias element.isDisplayedInViewport
 * @return {Boolean}            true if element(s)* [is|are] displayed
 * @uses protocol/selectorExecute, protocol/timeoutsAsyncScript
 * @type state
 *
 */
function isDisplayedInViewport() {
  return (0, _utils.getBrowserObject)(this).execute(_isDisplayedInViewport.default, {
    [_constants.ELEMENT_KEY]: this.elementId,
    // w3c compatible
    ELEMENT: this.elementId // jsonwp compatible

  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2lzRGlzcGxheWVkSW5WaWV3cG9ydC5qcyJdLCJuYW1lcyI6WyJpc0Rpc3BsYXllZEluVmlld3BvcnQiLCJleGVjdXRlIiwiaXNEaXNwbGF5ZWRJblZpZXdwb3J0U2NyaXB0IiwiRUxFTUVOVF9LRVkiLCJlbGVtZW50SWQiLCJFTEVNRU5UIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFzQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUF2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDZSxTQUFTQSxxQkFBVCxHQUFrQztBQUM3QyxTQUFPLDZCQUFpQixJQUFqQixFQUF1QkMsT0FBdkIsQ0FBK0JDLDhCQUEvQixFQUE0RDtBQUMvRCxLQUFDQyxzQkFBRCxHQUFlLEtBQUtDLFNBRDJDO0FBQ2hDO0FBQy9CQyxJQUFBQSxPQUFPLEVBQUUsS0FBS0QsU0FGaUQsQ0FFdkM7O0FBRnVDLEdBQTVELENBQVA7QUFJSCIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKlxuICogUmV0dXJuIHRydWUgaWYgdGhlIHNlbGVjdGVkIERPTS1lbGVtZW50IGZvdW5kIGJ5IGdpdmVuIHNlbGVjdG9yIGlzIHZpc2libGUgYW5kIHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmluZGV4Lmh0bWxcbiAgICA8ZGl2IGlkPVwibm90RGlzcGxheWVkXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIm5vdFZpc2libGVcIiBzdHlsZT1cInZpc2liaWxpdHk6IGhpZGRlblwiPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJub3RJblZpZXdwb3J0XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDogOTk5OTk5OVwiPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJ6ZXJvT3BhY2l0eVwiIHN0eWxlPVwib3BhY2l0eTogMFwiPjwvZGl2PlxuICAgIDppc0Rpc3BsYXllZEluVmlld3BvcnQuanNcbiAgICA6aXNEaXNwbGF5ZWQuanNcbiAgICBpdCgnc2hvdWxkIGRldGVjdCBpZiBhbiBlbGVtZW50IGlzIHZpc2libGUnLCAoKSA9PiB7XG4gICAgICAgIGxldCBpc0Rpc3BsYXllZEluVmlld3BvcnQgPSAkKCcjbm90RGlzcGxheWVkJykuaXNEaXNwbGF5ZWRJblZpZXdwb3J0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzRGlzcGxheWVkSW5WaWV3cG9ydCk7IC8vIG91dHB1dHM6IGZhbHNlXG5cbiAgICAgICAgaXNEaXNwbGF5ZWRJblZpZXdwb3J0ID0gJCgnI25vdFZpc2libGUnKS5pc0Rpc3BsYXllZEluVmlld3BvcnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coaXNEaXNwbGF5ZWRJblZpZXdwb3J0KTsgLy8gb3V0cHV0czogZmFsc2VcblxuICAgICAgICBpc0Rpc3BsYXllZEluVmlld3BvcnQgPSAkKCcjbm90RXhpc3RpbmcnKS5pc0Rpc3BsYXllZEluVmlld3BvcnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coaXNEaXNwbGF5ZWRJblZpZXdwb3J0KTsgLy8gb3V0cHV0czogZmFsc2VcblxuICAgICAgICBpc0Rpc3BsYXllZEluVmlld3BvcnQgPSAkKCcjbm90SW5WaWV3cG9ydCcpLmlzRGlzcGxheWVkSW5WaWV3cG9ydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhpc0Rpc3BsYXllZEluVmlld3BvcnQpOyAvLyBvdXRwdXRzOiBmYWxzZVxuXG4gICAgICAgIGlzRGlzcGxheWVkSW5WaWV3cG9ydCA9ICQoJyN6ZXJvT3BhY2l0eScpLmlzRGlzcGxheWVkSW5WaWV3cG9ydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhpc0Rpc3BsYXllZEluVmlld3BvcnQpOyAvLyBvdXRwdXRzOiBmYWxzZVxuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBlbGVtZW50LmlzRGlzcGxheWVkSW5WaWV3cG9ydFxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICAgICB0cnVlIGlmIGVsZW1lbnQocykqIFtpc3xhcmVdIGRpc3BsYXllZFxuICogQHVzZXMgcHJvdG9jb2wvc2VsZWN0b3JFeGVjdXRlLCBwcm90b2NvbC90aW1lb3V0c0FzeW5jU2NyaXB0XG4gKiBAdHlwZSBzdGF0ZVxuICpcbiAqL1xuXG5pbXBvcnQgeyBFTEVNRU5UX0tFWSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGdldEJyb3dzZXJPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBpc0Rpc3BsYXllZEluVmlld3BvcnRTY3JpcHQgZnJvbSAnLi4vLi4vc2NyaXB0cy9pc0Rpc3BsYXllZEluVmlld3BvcnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGlzcGxheWVkSW5WaWV3cG9ydCAoKSB7XG4gICAgcmV0dXJuIGdldEJyb3dzZXJPYmplY3QodGhpcykuZXhlY3V0ZShpc0Rpc3BsYXllZEluVmlld3BvcnRTY3JpcHQsIHtcbiAgICAgICAgW0VMRU1FTlRfS0VZXTogdGhpcy5lbGVtZW50SWQsIC8vIHczYyBjb21wYXRpYmxlXG4gICAgICAgIEVMRU1FTlQ6IHRoaXMuZWxlbWVudElkIC8vIGpzb253cCBjb21wYXRpYmxlXG4gICAgfSlcbn1cbiJdfQ==