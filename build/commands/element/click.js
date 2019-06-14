"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = click;

require("source-map-support/register");

/**
 *
 * Click on an element.
 *
 * Note: This issues a Webdriver `click` command for the selected element, which generally scrolls to and then clicks the
 * selected element. However, if you have fixed-position elements (such as a fixed header or footer) that cover up the
 * selected element after it is scrolled within the viewport, the click will be issued at the given coordinates, but will
 * be received by your fixed (overlaying) element. In these cased the following error is thrown:
 *
 * ```
 * Element is not clickable at point (x, x). Other element would receive the click: ..."
 * ```
 *
 * To work around this, try to find the overlaying element and remove it via `execute` command so it doesn't interfere
 * the click. You also can try to scroll to the element yourself using `scroll` with an offset appropriate for your
 * scenario.
 *
 * <example>
    :example.html
    <button id="myButton" onclick="document.getElementById('someText').innerHTML='I was clicked'">Click me</button>
    <div id="someText">I was not clicked</div>
    :click.js
    it('should demonstrate the click command', () => {
        const myButton = $('#myButton')
        myButton.click()
        const myText = $('#someText')
        const text = myText.getText();
        assert(text === 'I was clicked'); // true
    })
    :example.js
    it('should fetch menu links and visit each page', () => {
        const links = $$('#menu a');
        links.forEach((link) => {
            link.click();
        });
    });
 * </example>
 *
 * @alias element.click
 * @uses protocol/element, protocol/elementIdClick
 * @type action
 *
 */
function click() {
  return this.elementClick(this.elementId);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2NsaWNrLmpzIl0sIm5hbWVzIjpbImNsaWNrIiwiZWxlbWVudENsaWNrIiwiZWxlbWVudElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDZSxTQUFTQSxLQUFULEdBQWtCO0FBQzdCLFNBQU8sS0FBS0MsWUFBTCxDQUFrQixLQUFLQyxTQUF2QixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBDbGljayBvbiBhbiBlbGVtZW50LlxuICpcbiAqIE5vdGU6IFRoaXMgaXNzdWVzIGEgV2ViZHJpdmVyIGBjbGlja2AgY29tbWFuZCBmb3IgdGhlIHNlbGVjdGVkIGVsZW1lbnQsIHdoaWNoIGdlbmVyYWxseSBzY3JvbGxzIHRvIGFuZCB0aGVuIGNsaWNrcyB0aGVcbiAqIHNlbGVjdGVkIGVsZW1lbnQuIEhvd2V2ZXIsIGlmIHlvdSBoYXZlIGZpeGVkLXBvc2l0aW9uIGVsZW1lbnRzIChzdWNoIGFzIGEgZml4ZWQgaGVhZGVyIG9yIGZvb3RlcikgdGhhdCBjb3ZlciB1cCB0aGVcbiAqIHNlbGVjdGVkIGVsZW1lbnQgYWZ0ZXIgaXQgaXMgc2Nyb2xsZWQgd2l0aGluIHRoZSB2aWV3cG9ydCwgdGhlIGNsaWNrIHdpbGwgYmUgaXNzdWVkIGF0IHRoZSBnaXZlbiBjb29yZGluYXRlcywgYnV0IHdpbGxcbiAqIGJlIHJlY2VpdmVkIGJ5IHlvdXIgZml4ZWQgKG92ZXJsYXlpbmcpIGVsZW1lbnQuIEluIHRoZXNlIGNhc2VkIHRoZSBmb2xsb3dpbmcgZXJyb3IgaXMgdGhyb3duOlxuICpcbiAqIGBgYFxuICogRWxlbWVudCBpcyBub3QgY2xpY2thYmxlIGF0IHBvaW50ICh4LCB4KS4gT3RoZXIgZWxlbWVudCB3b3VsZCByZWNlaXZlIHRoZSBjbGljazogLi4uXCJcbiAqIGBgYFxuICpcbiAqIFRvIHdvcmsgYXJvdW5kIHRoaXMsIHRyeSB0byBmaW5kIHRoZSBvdmVybGF5aW5nIGVsZW1lbnQgYW5kIHJlbW92ZSBpdCB2aWEgYGV4ZWN1dGVgIGNvbW1hbmQgc28gaXQgZG9lc24ndCBpbnRlcmZlcmVcbiAqIHRoZSBjbGljay4gWW91IGFsc28gY2FuIHRyeSB0byBzY3JvbGwgdG8gdGhlIGVsZW1lbnQgeW91cnNlbGYgdXNpbmcgYHNjcm9sbGAgd2l0aCBhbiBvZmZzZXQgYXBwcm9wcmlhdGUgZm9yIHlvdXJcbiAqIHNjZW5hcmlvLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpleGFtcGxlLmh0bWxcbiAgICA8YnV0dG9uIGlkPVwibXlCdXR0b25cIiBvbmNsaWNrPVwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvbWVUZXh0JykuaW5uZXJIVE1MPSdJIHdhcyBjbGlja2VkJ1wiPkNsaWNrIG1lPC9idXR0b24+XG4gICAgPGRpdiBpZD1cInNvbWVUZXh0XCI+SSB3YXMgbm90IGNsaWNrZWQ8L2Rpdj5cbiAgICA6Y2xpY2suanNcbiAgICBpdCgnc2hvdWxkIGRlbW9uc3RyYXRlIHRoZSBjbGljayBjb21tYW5kJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBteUJ1dHRvbiA9ICQoJyNteUJ1dHRvbicpXG4gICAgICAgIG15QnV0dG9uLmNsaWNrKClcbiAgICAgICAgY29uc3QgbXlUZXh0ID0gJCgnI3NvbWVUZXh0JylcbiAgICAgICAgY29uc3QgdGV4dCA9IG15VGV4dC5nZXRUZXh0KCk7XG4gICAgICAgIGFzc2VydCh0ZXh0ID09PSAnSSB3YXMgY2xpY2tlZCcpOyAvLyB0cnVlXG4gICAgfSlcbiAgICA6ZXhhbXBsZS5qc1xuICAgIGl0KCdzaG91bGQgZmV0Y2ggbWVudSBsaW5rcyBhbmQgdmlzaXQgZWFjaCBwYWdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rcyA9ICQkKCcjbWVudSBhJyk7XG4gICAgICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGVsZW1lbnQuY2xpY2tcbiAqIEB1c2VzIHByb3RvY29sL2VsZW1lbnQsIHByb3RvY29sL2VsZW1lbnRJZENsaWNrXG4gKiBAdHlwZSBhY3Rpb25cbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xpY2sgKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRDbGljayh0aGlzLmVsZW1lbnRJZClcbn1cbiJdfQ==