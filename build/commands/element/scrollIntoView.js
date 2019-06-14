"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollIntoView;

require("source-map-support/register");

var _constants = require("../../constants");

/**
 *
 * Scroll element into viewport.
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
 *
 * <example>
    :scrollIntoView.js
    it('should demonstrate the scrollIntoView command', () => {
        const elem = $('#myElement');
        // scroll to specific element
        elem.scrollIntoView();
    });
 * </example>
 *
 * @alias element.scrollIntoView
 * @param {object|boolean=} scrollIntoViewOptions  boolean alignToTop or scrollIntoViewOptions object
 * @uses protocol/execute
 * @type utility
 *
 */
function scrollIntoView(scrollIntoViewOptions = true) {
  return this.parent.execute(
  /* istanbul ignore next */
  function (elem, options) {
    elem.scrollIntoView(options);
  }, {
    [_constants.ELEMENT_KEY]: this.elementId,
    // w3c compatible
    ELEMENT: this.elementId // jsonwp compatible

  }, scrollIntoViewOptions);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3Njcm9sbEludG9WaWV3LmpzIl0sIm5hbWVzIjpbInNjcm9sbEludG9WaWV3Iiwic2Nyb2xsSW50b1ZpZXdPcHRpb25zIiwicGFyZW50IiwiZXhlY3V0ZSIsImVsZW0iLCJvcHRpb25zIiwiRUxFTUVOVF9LRVkiLCJlbGVtZW50SWQiLCJFTEVNRU5UIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFxQkE7O0FBckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCZSxTQUFTQSxjQUFULENBQXlCQyxxQkFBcUIsR0FBRyxJQUFqRCxFQUF1RDtBQUNsRSxTQUFPLEtBQUtDLE1BQUwsQ0FBWUMsT0FBWjtBQUFvQjtBQUEwQixZQUFVQyxJQUFWLEVBQWdCQyxPQUFoQixFQUF5QjtBQUMxRUQsSUFBQUEsSUFBSSxDQUFDSixjQUFMLENBQW9CSyxPQUFwQjtBQUNILEdBRk0sRUFFSjtBQUNDLEtBQUNDLHNCQUFELEdBQWUsS0FBS0MsU0FEckI7QUFDZ0M7QUFDL0JDLElBQUFBLE9BQU8sRUFBRSxLQUFLRCxTQUZmLENBRXlCOztBQUZ6QixHQUZJLEVBS0pOLHFCQUxJLENBQVA7QUFNSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFNjcm9sbCBlbGVtZW50IGludG8gdmlld3BvcnQuXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9zY3JvbGxJbnRvVmlld1xuICpcbiAqIDxleGFtcGxlPlxuICAgIDpzY3JvbGxJbnRvVmlldy5qc1xuICAgIGl0KCdzaG91bGQgZGVtb25zdHJhdGUgdGhlIHNjcm9sbEludG9WaWV3IGNvbW1hbmQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSAkKCcjbXlFbGVtZW50Jyk7XG4gICAgICAgIC8vIHNjcm9sbCB0byBzcGVjaWZpYyBlbGVtZW50XG4gICAgICAgIGVsZW0uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9KTtcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAYWxpYXMgZWxlbWVudC5zY3JvbGxJbnRvVmlld1xuICogQHBhcmFtIHtvYmplY3R8Ym9vbGVhbj19IHNjcm9sbEludG9WaWV3T3B0aW9ucyAgYm9vbGVhbiBhbGlnblRvVG9wIG9yIHNjcm9sbEludG9WaWV3T3B0aW9ucyBvYmplY3RcbiAqIEB1c2VzIHByb3RvY29sL2V4ZWN1dGVcbiAqIEB0eXBlIHV0aWxpdHlcbiAqXG4gKi9cblxuaW1wb3J0IHsgRUxFTUVOVF9LRVkgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcm9sbEludG9WaWV3IChzY3JvbGxJbnRvVmlld09wdGlvbnMgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmV4ZWN1dGUoLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiAoZWxlbSwgb3B0aW9ucykge1xuICAgICAgICBlbGVtLnNjcm9sbEludG9WaWV3KG9wdGlvbnMpXG4gICAgfSwge1xuICAgICAgICBbRUxFTUVOVF9LRVldOiB0aGlzLmVsZW1lbnRJZCwgLy8gdzNjIGNvbXBhdGlibGVcbiAgICAgICAgRUxFTUVOVDogdGhpcy5lbGVtZW50SWQgLy8ganNvbndwIGNvbXBhdGlibGVcbiAgICB9LCBzY3JvbGxJbnRvVmlld09wdGlvbnMpXG59XG4iXX0=