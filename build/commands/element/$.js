"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = $;

require("source-map-support/register");

var _utils = require("../../utils");

var _getElementObject = require("../../utils/getElementObject");

/**
 * The `$` command is a short way to call the [`findElement`](/docs/api/webdriver.html#findelement) command in order
 * to fetch a single element on the page similar to the `$` command from the browser scope. The difference when calling
 * it from an element scope is that the driver will look within the children of that element.
 *
 * Note: chaining `$` and `$$` commands only make sense when you use multiple selector strategies. You will otherwise
 * make unnecessary requests that slow down the test (e.g. `$('body').$('div')` will trigger two request whereas
 * `$('body div')` does literary the same with just one request)
 *
 * For more information on how to select specific elements, see [`Selectors`](/docs/selectors.html).
 *
 * <example>
    :index.html
    <ul id="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/">Developer Guide</a></li>
        <li><a href="/">API</a></li>
        <li><a href="/">Contribute</a></li>
    </ul>
    :$.js
    it('should get text a menu link', () => {
        const text = $('#menu');
        console.log(text.$$('li')[2].$('a').getText()); // outputs: "API"
    });

    it('should get text a menu link - JS Function', () => {
        const text = $('#menu');
        console.log(text.$$('li')[2].$(function() { // Arrow function is not allowed here.
            // this is Element https://developer.mozilla.org/en-US/docs/Web/API/Element
            // in this particular example it is HTMLLIElement
            // TypeScript users may do something like this
            // return (this as Element).querySelector('a')
            return this.querySelector('a'); // Element
        }).getText()); // outputs: "API"
    });
 * </example>
 *
 * @alias $
 * @param {String|Function} selector  selector or JS Function to fetch a certain element
 * @return {Element}
 * @type utility
 *
 */
async function $(selector) {
  const res = await _utils.findElement.call(this, selector);
  return _getElementObject.getElement.call(this, selector, res);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50LyQuanMiXSwibmFtZXMiOlsiJCIsInNlbGVjdG9yIiwicmVzIiwiZmluZEVsZW1lbnQiLCJjYWxsIiwiZ2V0RWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBMkNBOztBQUNBOztBQTVDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDZSxlQUFlQSxDQUFmLENBQWtCQyxRQUFsQixFQUE0QjtBQUN2QyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsbUJBQVlDLElBQVosQ0FBaUIsSUFBakIsRUFBdUJILFFBQXZCLENBQWxCO0FBQ0EsU0FBT0ksNkJBQVdELElBQVgsQ0FBZ0IsSUFBaEIsRUFBc0JILFFBQXRCLEVBQWdDQyxHQUFoQyxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBgJGAgY29tbWFuZCBpcyBhIHNob3J0IHdheSB0byBjYWxsIHRoZSBbYGZpbmRFbGVtZW50YF0oL2RvY3MvYXBpL3dlYmRyaXZlci5odG1sI2ZpbmRlbGVtZW50KSBjb21tYW5kIGluIG9yZGVyXG4gKiB0byBmZXRjaCBhIHNpbmdsZSBlbGVtZW50IG9uIHRoZSBwYWdlIHNpbWlsYXIgdG8gdGhlIGAkYCBjb21tYW5kIGZyb20gdGhlIGJyb3dzZXIgc2NvcGUuIFRoZSBkaWZmZXJlbmNlIHdoZW4gY2FsbGluZ1xuICogaXQgZnJvbSBhbiBlbGVtZW50IHNjb3BlIGlzIHRoYXQgdGhlIGRyaXZlciB3aWxsIGxvb2sgd2l0aGluIHRoZSBjaGlsZHJlbiBvZiB0aGF0IGVsZW1lbnQuXG4gKlxuICogTm90ZTogY2hhaW5pbmcgYCRgIGFuZCBgJCRgIGNvbW1hbmRzIG9ubHkgbWFrZSBzZW5zZSB3aGVuIHlvdSB1c2UgbXVsdGlwbGUgc2VsZWN0b3Igc3RyYXRlZ2llcy4gWW91IHdpbGwgb3RoZXJ3aXNlXG4gKiBtYWtlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIHRoYXQgc2xvdyBkb3duIHRoZSB0ZXN0IChlLmcuIGAkKCdib2R5JykuJCgnZGl2JylgIHdpbGwgdHJpZ2dlciB0d28gcmVxdWVzdCB3aGVyZWFzXG4gKiBgJCgnYm9keSBkaXYnKWAgZG9lcyBsaXRlcmFyeSB0aGUgc2FtZSB3aXRoIGp1c3Qgb25lIHJlcXVlc3QpXG4gKlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gaG93IHRvIHNlbGVjdCBzcGVjaWZpYyBlbGVtZW50cywgc2VlIFtgU2VsZWN0b3JzYF0oL2RvY3Mvc2VsZWN0b3JzLmh0bWwpLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDppbmRleC5odG1sXG4gICAgPHVsIGlkPVwibWVudVwiPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkRldmVsb3BlciBHdWlkZTwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIj5BUEk8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+Q29udHJpYnV0ZTwvYT48L2xpPlxuICAgIDwvdWw+XG4gICAgOiQuanNcbiAgICBpdCgnc2hvdWxkIGdldCB0ZXh0IGEgbWVudSBsaW5rJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gJCgnI21lbnUnKTtcbiAgICAgICAgY29uc29sZS5sb2codGV4dC4kJCgnbGknKVsyXS4kKCdhJykuZ2V0VGV4dCgpKTsgLy8gb3V0cHV0czogXCJBUElcIlxuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBnZXQgdGV4dCBhIG1lbnUgbGluayAtIEpTIEZ1bmN0aW9uJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gJCgnI21lbnUnKTtcbiAgICAgICAgY29uc29sZS5sb2codGV4dC4kJCgnbGknKVsyXS4kKGZ1bmN0aW9uKCkgeyAvLyBBcnJvdyBmdW5jdGlvbiBpcyBub3QgYWxsb3dlZCBoZXJlLlxuICAgICAgICAgICAgLy8gdGhpcyBpcyBFbGVtZW50IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50XG4gICAgICAgICAgICAvLyBpbiB0aGlzIHBhcnRpY3VsYXIgZXhhbXBsZSBpdCBpcyBIVE1MTElFbGVtZW50XG4gICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHVzZXJzIG1heSBkbyBzb21ldGhpbmcgbGlrZSB0aGlzXG4gICAgICAgICAgICAvLyByZXR1cm4gKHRoaXMgYXMgRWxlbWVudCkucXVlcnlTZWxlY3RvcignYScpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKCdhJyk7IC8vIEVsZW1lbnRcbiAgICAgICAgfSkuZ2V0VGV4dCgpKTsgLy8gb3V0cHV0czogXCJBUElcIlxuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyAkXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gc2VsZWN0b3IgIHNlbGVjdG9yIG9yIEpTIEZ1bmN0aW9uIHRvIGZldGNoIGEgY2VydGFpbiBlbGVtZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogQHR5cGUgdXRpbGl0eVxuICpcbiAqL1xuaW1wb3J0IHsgZmluZEVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IGdldEVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9nZXRFbGVtZW50T2JqZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAkIChzZWxlY3Rvcikge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZpbmRFbGVtZW50LmNhbGwodGhpcywgc2VsZWN0b3IpXG4gICAgcmV0dXJuIGdldEVsZW1lbnQuY2FsbCh0aGlzLCBzZWxlY3RvciwgcmVzKVxufVxuIl19