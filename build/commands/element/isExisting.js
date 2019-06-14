"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isExisting;

require("source-map-support/register");

/**
 *
 * Returns true if element exists in the DOM
 *
 * <example>
    :index.html
    <div id="notDisplayed" style="display: none"></div>
    <div id="notVisible" style="visibility: hidden"></div>
    <div id="notInViewport" style="position:absolute; left: 9999999"></div>
    <div id="zeroOpacity" style="opacity: 0"></div>
    :isExisting.js
    it('should detect if elements are existing', () => {
        let elem = $('#someRandomNonExistingElement')
        let isExisting = elem.isExisting()
        console.log(isExisting); // outputs: false

        elem = $('#notDisplayed')
        isExisting = elem.isExisting()
        console.log(isExisting); // outputs: true

        elem = $('#notVisible')
        isExisting = elem.isExisting()
        console.log(isExisting); // outputs: true

        elem = $('#notInViewport')
        isExisting = elem.isExisting()
        console.log(isExisting); // outputs: true

        elem = $('#zeroOpacity')
        isExisting = elem.isExisting()
        console.log(isExisting); // outputs: true
    });
 * </example>
 *
 * @alias element.isExisting
 * @return {Boolean}            true if element(s)* [is|are] existing
 * @uses protocol/elements
 * @type state
 *
 */
function isExisting() {
  return this.parent.$$(this.selector).then(res => res.length > 0);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2lzRXhpc3RpbmcuanMiXSwibmFtZXMiOlsiaXNFeGlzdGluZyIsInBhcmVudCIsIiQkIiwic2VsZWN0b3IiLCJ0aGVuIiwicmVzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDZSxTQUFTQSxVQUFULEdBQXVCO0FBQ2xDLFNBQU8sS0FBS0MsTUFBTCxDQUFZQyxFQUFaLENBQWUsS0FBS0MsUUFBcEIsRUFBOEJDLElBQTlCLENBQW9DQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsTUFBSixHQUFhLENBQXpELENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKlxuICogUmV0dXJucyB0cnVlIGlmIGVsZW1lbnQgZXhpc3RzIGluIHRoZSBET01cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6aW5kZXguaHRtbFxuICAgIDxkaXYgaWQ9XCJub3REaXNwbGF5ZWRcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj48L2Rpdj5cbiAgICA8ZGl2IGlkPVwibm90VmlzaWJsZVwiIHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuXCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIm5vdEluVmlld3BvcnRcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OiA5OTk5OTk5XCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cInplcm9PcGFjaXR5XCIgc3R5bGU9XCJvcGFjaXR5OiAwXCI+PC9kaXY+XG4gICAgOmlzRXhpc3RpbmcuanNcbiAgICBpdCgnc2hvdWxkIGRldGVjdCBpZiBlbGVtZW50cyBhcmUgZXhpc3RpbmcnLCAoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtID0gJCgnI3NvbWVSYW5kb21Ob25FeGlzdGluZ0VsZW1lbnQnKVxuICAgICAgICBsZXQgaXNFeGlzdGluZyA9IGVsZW0uaXNFeGlzdGluZygpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzRXhpc3RpbmcpOyAvLyBvdXRwdXRzOiBmYWxzZVxuXG4gICAgICAgIGVsZW0gPSAkKCcjbm90RGlzcGxheWVkJylcbiAgICAgICAgaXNFeGlzdGluZyA9IGVsZW0uaXNFeGlzdGluZygpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzRXhpc3RpbmcpOyAvLyBvdXRwdXRzOiB0cnVlXG5cbiAgICAgICAgZWxlbSA9ICQoJyNub3RWaXNpYmxlJylcbiAgICAgICAgaXNFeGlzdGluZyA9IGVsZW0uaXNFeGlzdGluZygpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzRXhpc3RpbmcpOyAvLyBvdXRwdXRzOiB0cnVlXG5cbiAgICAgICAgZWxlbSA9ICQoJyNub3RJblZpZXdwb3J0JylcbiAgICAgICAgaXNFeGlzdGluZyA9IGVsZW0uaXNFeGlzdGluZygpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzRXhpc3RpbmcpOyAvLyBvdXRwdXRzOiB0cnVlXG5cbiAgICAgICAgZWxlbSA9ICQoJyN6ZXJvT3BhY2l0eScpXG4gICAgICAgIGlzRXhpc3RpbmcgPSBlbGVtLmlzRXhpc3RpbmcoKVxuICAgICAgICBjb25zb2xlLmxvZyhpc0V4aXN0aW5nKTsgLy8gb3V0cHV0czogdHJ1ZVxuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBlbGVtZW50LmlzRXhpc3RpbmdcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgICAgdHJ1ZSBpZiBlbGVtZW50KHMpKiBbaXN8YXJlXSBleGlzdGluZ1xuICogQHVzZXMgcHJvdG9jb2wvZWxlbWVudHNcbiAqIEB0eXBlIHN0YXRlXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRXhpc3RpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC4kJCh0aGlzLnNlbGVjdG9yKS50aGVuKChyZXMpID0+IHJlcy5sZW5ndGggPiAwKVxufVxuIl19