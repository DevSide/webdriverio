"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = $$;

require("source-map-support/register");

var _utils = require("../../utils");

var _getElementObject = require("../../utils/getElementObject");

/**
 * The `$$` command is a short way to call the [`findElements`](/docs/api/webdriver.html#findelements) command in order
 * to fetch multiple elements on the page similar to the `$$` command from the browser scope. The difference when calling
 * it from an element scope is that the driver will look within the children of that element.
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
        console.log(text.$$(function() { // Arrow function is not allowed here.
            // this is Element https://developer.mozilla.org/en-US/docs/Web/API/Element
            // in this particular example it is HTMLUListElement
            // TypeScript users may do something like this
            // return (this as Element).querySelectorAll('li')
            return this.querySelectorAll('li'); // Element[]
        })[2].$('a').getText()); // outputs: "API"
    });
 * </example>
 *
 * @alias $$
 * @param {String|Function} selector  selector or JS Function to fetch multiple elements
 * @return {Element[]}
 * @type utility
 *
 */
async function $$(selector) {
  const res = await _utils.findElements.call(this, selector);
  return _getElementObject.getElements.call(this, selector, res);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50LyQkLmpzIl0sIm5hbWVzIjpbIiQkIiwic2VsZWN0b3IiLCJyZXMiLCJmaW5kRWxlbWVudHMiLCJjYWxsIiwiZ2V0RWxlbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQXVDQTs7QUFDQTs7QUF4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDZSxlQUFlQSxFQUFmLENBQW1CQyxRQUFuQixFQUE2QjtBQUN4QyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsb0JBQWFDLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0JILFFBQXhCLENBQWxCO0FBQ0EsU0FBT0ksOEJBQVlELElBQVosQ0FBaUIsSUFBakIsRUFBdUJILFFBQXZCLEVBQWlDQyxHQUFqQyxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBgJCRgIGNvbW1hbmQgaXMgYSBzaG9ydCB3YXkgdG8gY2FsbCB0aGUgW2BmaW5kRWxlbWVudHNgXSgvZG9jcy9hcGkvd2ViZHJpdmVyLmh0bWwjZmluZGVsZW1lbnRzKSBjb21tYW5kIGluIG9yZGVyXG4gKiB0byBmZXRjaCBtdWx0aXBsZSBlbGVtZW50cyBvbiB0aGUgcGFnZSBzaW1pbGFyIHRvIHRoZSBgJCRgIGNvbW1hbmQgZnJvbSB0aGUgYnJvd3NlciBzY29wZS4gVGhlIGRpZmZlcmVuY2Ugd2hlbiBjYWxsaW5nXG4gKiBpdCBmcm9tIGFuIGVsZW1lbnQgc2NvcGUgaXMgdGhhdCB0aGUgZHJpdmVyIHdpbGwgbG9vayB3aXRoaW4gdGhlIGNoaWxkcmVuIG9mIHRoYXQgZWxlbWVudC5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBob3cgdG8gc2VsZWN0IHNwZWNpZmljIGVsZW1lbnRzLCBzZWUgW2BTZWxlY3RvcnNgXSgvZG9jcy9zZWxlY3RvcnMuaHRtbCkuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmluZGV4Lmh0bWxcbiAgICA8dWwgaWQ9XCJtZW51XCI+XG4gICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+RGV2ZWxvcGVyIEd1aWRlPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkFQSTwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIj5Db250cmlidXRlPC9hPjwvbGk+XG4gICAgPC91bD5cbiAgICA6JC5qc1xuICAgIGl0KCdzaG91bGQgZ2V0IHRleHQgYSBtZW51IGxpbmsnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSAkKCcjbWVudScpO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZXh0LiQkKCdsaScpWzJdLiQoJ2EnKS5nZXRUZXh0KCkpOyAvLyBvdXRwdXRzOiBcIkFQSVwiXG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGdldCB0ZXh0IGEgbWVudSBsaW5rIC0gSlMgRnVuY3Rpb24nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSAkKCcjbWVudScpO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZXh0LiQkKGZ1bmN0aW9uKCkgeyAvLyBBcnJvdyBmdW5jdGlvbiBpcyBub3QgYWxsb3dlZCBoZXJlLlxuICAgICAgICAgICAgLy8gdGhpcyBpcyBFbGVtZW50IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50XG4gICAgICAgICAgICAvLyBpbiB0aGlzIHBhcnRpY3VsYXIgZXhhbXBsZSBpdCBpcyBIVE1MVUxpc3RFbGVtZW50XG4gICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHVzZXJzIG1heSBkbyBzb21ldGhpbmcgbGlrZSB0aGlzXG4gICAgICAgICAgICAvLyByZXR1cm4gKHRoaXMgYXMgRWxlbWVudCkucXVlcnlTZWxlY3RvckFsbCgnbGknKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbCgnbGknKTsgLy8gRWxlbWVudFtdXG4gICAgICAgIH0pWzJdLiQoJ2EnKS5nZXRUZXh0KCkpOyAvLyBvdXRwdXRzOiBcIkFQSVwiXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzICQkXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gc2VsZWN0b3IgIHNlbGVjdG9yIG9yIEpTIEZ1bmN0aW9uIHRvIGZldGNoIG11bHRpcGxlIGVsZW1lbnRzXG4gKiBAcmV0dXJuIHtFbGVtZW50W119XG4gKiBAdHlwZSB1dGlsaXR5XG4gKlxuICovXG5pbXBvcnQgeyBmaW5kRWxlbWVudHMgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IGdldEVsZW1lbnRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0RWxlbWVudE9iamVjdCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gJCQgKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmluZEVsZW1lbnRzLmNhbGwodGhpcywgc2VsZWN0b3IpXG4gICAgcmV0dXJuIGdldEVsZW1lbnRzLmNhbGwodGhpcywgc2VsZWN0b3IsIHJlcylcbn1cbiJdfQ==