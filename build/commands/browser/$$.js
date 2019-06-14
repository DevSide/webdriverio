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
 * to fetch multiple elements on the page. It returns an array with element results that will have an
 * extended prototype to call action commands without passing in a selector. However if you still pass
 * in a selector it will look for that element first and call the action on that element.
 *
 * Using the wdio testrunner this command is a global variable else it will be located on the browser object instead.
 *
 * You can chain `$` or `$$` together in order to walk down the DOM tree. For more information on how
 * to select specific elements, see [`Selectors`](/docs/selectors.html).
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
        const text = $$('#menu')[0];
        console.log(text.$$('li')[2].$('a').getText()); // outputs: "API"
    });

    it('should get text a menu link - JS Function', () => {
        const text = $$(function() { // Arrow function is not allowed here.
            // this is Window https://developer.mozilla.org/en-US/docs/Web/API/Window
            // TypeScript users may do something like this
            // return (this as Window).document.querySelectorAll('#menu')
            return this.document.querySelectorAll('#menu'); // Element[]
        })[0];
        console.log(text.$$('li')[2].$('a').getText()); // outputs: "API"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyLyQkLmpzIl0sIm5hbWVzIjpbIiQkIiwic2VsZWN0b3IiLCJyZXMiLCJmaW5kRWxlbWVudHMiLCJjYWxsIiwiZ2V0RWxlbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQTBDQTs7QUFDQTs7QUEzQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDZSxlQUFlQSxFQUFmLENBQW1CQyxRQUFuQixFQUE2QjtBQUN4QyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsb0JBQWFDLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0JILFFBQXhCLENBQWxCO0FBQ0EsU0FBT0ksOEJBQVlELElBQVosQ0FBaUIsSUFBakIsRUFBdUJILFFBQXZCLEVBQWlDQyxHQUFqQyxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBgJCRgIGNvbW1hbmQgaXMgYSBzaG9ydCB3YXkgdG8gY2FsbCB0aGUgW2BmaW5kRWxlbWVudHNgXSgvZG9jcy9hcGkvd2ViZHJpdmVyLmh0bWwjZmluZGVsZW1lbnRzKSBjb21tYW5kIGluIG9yZGVyXG4gKiB0byBmZXRjaCBtdWx0aXBsZSBlbGVtZW50cyBvbiB0aGUgcGFnZS4gSXQgcmV0dXJucyBhbiBhcnJheSB3aXRoIGVsZW1lbnQgcmVzdWx0cyB0aGF0IHdpbGwgaGF2ZSBhblxuICogZXh0ZW5kZWQgcHJvdG90eXBlIHRvIGNhbGwgYWN0aW9uIGNvbW1hbmRzIHdpdGhvdXQgcGFzc2luZyBpbiBhIHNlbGVjdG9yLiBIb3dldmVyIGlmIHlvdSBzdGlsbCBwYXNzXG4gKiBpbiBhIHNlbGVjdG9yIGl0IHdpbGwgbG9vayBmb3IgdGhhdCBlbGVtZW50IGZpcnN0IGFuZCBjYWxsIHRoZSBhY3Rpb24gb24gdGhhdCBlbGVtZW50LlxuICpcbiAqIFVzaW5nIHRoZSB3ZGlvIHRlc3RydW5uZXIgdGhpcyBjb21tYW5kIGlzIGEgZ2xvYmFsIHZhcmlhYmxlIGVsc2UgaXQgd2lsbCBiZSBsb2NhdGVkIG9uIHRoZSBicm93c2VyIG9iamVjdCBpbnN0ZWFkLlxuICpcbiAqIFlvdSBjYW4gY2hhaW4gYCRgIG9yIGAkJGAgdG9nZXRoZXIgaW4gb3JkZXIgdG8gd2FsayBkb3duIHRoZSBET00gdHJlZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gaG93XG4gKiB0byBzZWxlY3Qgc3BlY2lmaWMgZWxlbWVudHMsIHNlZSBbYFNlbGVjdG9yc2BdKC9kb2NzL3NlbGVjdG9ycy5odG1sKS5cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6aW5kZXguaHRtbFxuICAgIDx1bCBpZD1cIm1lbnVcIj5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIj5EZXZlbG9wZXIgR3VpZGU8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+QVBJPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkNvbnRyaWJ1dGU8L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDokLmpzXG4gICAgaXQoJ3Nob3VsZCBnZXQgdGV4dCBhIG1lbnUgbGluaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9ICQkKCcjbWVudScpWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZXh0LiQkKCdsaScpWzJdLiQoJ2EnKS5nZXRUZXh0KCkpOyAvLyBvdXRwdXRzOiBcIkFQSVwiXG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGdldCB0ZXh0IGEgbWVudSBsaW5rIC0gSlMgRnVuY3Rpb24nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSAkJChmdW5jdGlvbigpIHsgLy8gQXJyb3cgZnVuY3Rpb24gaXMgbm90IGFsbG93ZWQgaGVyZS5cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgV2luZG93IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dcbiAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdXNlcnMgbWF5IGRvIHNvbWV0aGluZyBsaWtlIHRoaXNcbiAgICAgICAgICAgIC8vIHJldHVybiAodGhpcyBhcyBXaW5kb3cpLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZW51JylcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZW51Jyk7IC8vIEVsZW1lbnRbXVxuICAgICAgICB9KVswXTtcbiAgICAgICAgY29uc29sZS5sb2codGV4dC4kJCgnbGknKVsyXS4kKCdhJykuZ2V0VGV4dCgpKTsgLy8gb3V0cHV0czogXCJBUElcIlxuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyAkJFxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHNlbGVjdG9yICBzZWxlY3RvciBvciBKUyBGdW5jdGlvbiB0byBmZXRjaCBtdWx0aXBsZSBlbGVtZW50c1xuICogQHJldHVybiB7RWxlbWVudFtdfVxuICogQHR5cGUgdXRpbGl0eVxuICpcbiAqL1xuaW1wb3J0IHsgZmluZEVsZW1lbnRzIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBnZXRFbGVtZW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL2dldEVsZW1lbnRPYmplY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uICQkIChzZWxlY3Rvcikge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZpbmRFbGVtZW50cy5jYWxsKHRoaXMsIHNlbGVjdG9yKVxuICAgIHJldHVybiBnZXRFbGVtZW50cy5jYWxsKHRoaXMsIHNlbGVjdG9yLCByZXMpXG59XG4iXX0=