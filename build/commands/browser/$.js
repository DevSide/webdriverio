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
 * to fetch a single element on the page. It returns an object that with an extended prototype to call
 * action commands without passing in a selector. However if you still pass in a selector it will look
 * for that element first and call the action on that element.
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
        const text = $('#menu');
        console.log(text.$$('li')[2].$('a').getText()); // outputs: "API"
    });

    it('should get text a menu link - JS Function', () => {
        const text = $(function() { // Arrow function is not allowed here.
            // this is Window https://developer.mozilla.org/en-US/docs/Web/API/Window
            // TypeScript users may do something like this
            // return (this as Window).document.querySelector('#menu')
            return this.document.querySelector('#menu'); // Element
        });
        console.log(text.$$('li')[2].$('a').getText()); // outputs: "API"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyLyQuanMiXSwibmFtZXMiOlsiJCIsInNlbGVjdG9yIiwicmVzIiwiZmluZEVsZW1lbnQiLCJjYWxsIiwiZ2V0RWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBMENBOztBQUNBOztBQTNDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNlLGVBQWVBLENBQWYsQ0FBa0JDLFFBQWxCLEVBQTRCO0FBQ3ZDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxtQkFBWUMsSUFBWixDQUFpQixJQUFqQixFQUF1QkgsUUFBdkIsQ0FBbEI7QUFDQSxTQUFPSSw2QkFBV0QsSUFBWCxDQUFnQixJQUFoQixFQUFzQkgsUUFBdEIsRUFBZ0NDLEdBQWhDLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGAkYCBjb21tYW5kIGlzIGEgc2hvcnQgd2F5IHRvIGNhbGwgdGhlIFtgZmluZEVsZW1lbnRgXSgvZG9jcy9hcGkvd2ViZHJpdmVyLmh0bWwjZmluZGVsZW1lbnQpIGNvbW1hbmQgaW4gb3JkZXJcbiAqIHRvIGZldGNoIGEgc2luZ2xlIGVsZW1lbnQgb24gdGhlIHBhZ2UuIEl0IHJldHVybnMgYW4gb2JqZWN0IHRoYXQgd2l0aCBhbiBleHRlbmRlZCBwcm90b3R5cGUgdG8gY2FsbFxuICogYWN0aW9uIGNvbW1hbmRzIHdpdGhvdXQgcGFzc2luZyBpbiBhIHNlbGVjdG9yLiBIb3dldmVyIGlmIHlvdSBzdGlsbCBwYXNzIGluIGEgc2VsZWN0b3IgaXQgd2lsbCBsb29rXG4gKiBmb3IgdGhhdCBlbGVtZW50IGZpcnN0IGFuZCBjYWxsIHRoZSBhY3Rpb24gb24gdGhhdCBlbGVtZW50LlxuICpcbiAqIFVzaW5nIHRoZSB3ZGlvIHRlc3RydW5uZXIgdGhpcyBjb21tYW5kIGlzIGEgZ2xvYmFsIHZhcmlhYmxlIGVsc2UgaXQgd2lsbCBiZSBsb2NhdGVkIG9uIHRoZSBicm93c2VyIG9iamVjdCBpbnN0ZWFkLlxuICpcbiAqIFlvdSBjYW4gY2hhaW4gYCRgIG9yIGAkJGAgdG9nZXRoZXIgaW4gb3JkZXIgdG8gd2FsayBkb3duIHRoZSBET00gdHJlZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gaG93XG4gKiB0byBzZWxlY3Qgc3BlY2lmaWMgZWxlbWVudHMsIHNlZSBbYFNlbGVjdG9yc2BdKC9kb2NzL3NlbGVjdG9ycy5odG1sKS5cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6aW5kZXguaHRtbFxuICAgIDx1bCBpZD1cIm1lbnVcIj5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIj5EZXZlbG9wZXIgR3VpZGU8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+QVBJPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkNvbnRyaWJ1dGU8L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDokLmpzXG4gICAgaXQoJ3Nob3VsZCBnZXQgdGV4dCBhIG1lbnUgbGluaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9ICQoJyNtZW51Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRleHQuJCQoJ2xpJylbMl0uJCgnYScpLmdldFRleHQoKSk7IC8vIG91dHB1dHM6IFwiQVBJXCJcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgZ2V0IHRleHQgYSBtZW51IGxpbmsgLSBKUyBGdW5jdGlvbicsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9ICQoZnVuY3Rpb24oKSB7IC8vIEFycm93IGZ1bmN0aW9uIGlzIG5vdCBhbGxvd2VkIGhlcmUuXG4gICAgICAgICAgICAvLyB0aGlzIGlzIFdpbmRvdyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93XG4gICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHVzZXJzIG1heSBkbyBzb21ldGhpbmcgbGlrZSB0aGlzXG4gICAgICAgICAgICAvLyByZXR1cm4gKHRoaXMgYXMgV2luZG93KS5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpOyAvLyBFbGVtZW50XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZXh0LiQkKCdsaScpWzJdLiQoJ2EnKS5nZXRUZXh0KCkpOyAvLyBvdXRwdXRzOiBcIkFQSVwiXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzICRcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBzZWxlY3RvciAgc2VsZWN0b3Igb3IgSlMgRnVuY3Rpb24gdG8gZmV0Y2ggYSBjZXJ0YWluIGVsZW1lbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiBAdHlwZSB1dGlsaXR5XG4gKlxuICovXG5pbXBvcnQgeyBmaW5kRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0RWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2dldEVsZW1lbnRPYmplY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uICQgKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmluZEVsZW1lbnQuY2FsbCh0aGlzLCBzZWxlY3RvcilcbiAgICByZXR1cm4gZ2V0RWxlbWVudC5jYWxsKHRoaXMsIHNlbGVjdG9yLCByZXMpXG59XG4iXX0=