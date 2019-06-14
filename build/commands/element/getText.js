"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getText;

require("source-map-support/register");

/**
 *
 * Get the text content from a DOM-element. Make sure the element
 * you want to request the text from [is interactable](http://www.w3.org/TR/webdriver/#interactable)
 * otherwise you will get an empty string as return value. If the element is disabled or not
 * visible and you still want to receive the text content use [getHTML](https://webdriver.io/docs/api/element/getHTML.html)
 * as a workaround.
 *
 * <example>
    :index.html
    <div id="elem">
        Lorem ipsum <strong>dolor</strong> sit amet,<br>
        consetetur sadipscing elitr
    </div>
    <span style="display: none">I am invisible</span>
    :getText.js
    it('should demonstrate the getText function', () => {
        const elem = $('#elem');
        console.log(elem.getText());
        // outputs the following:
        // "Lorem ipsum dolor sit amet,consetetur sadipscing elitr"

        const span = $('span');
        console.log(span.getText());
        // outputs "" (empty string) since element is not interactable
    });
    it('get content from table cell', () => {
        browser.url('http://the-internet.herokuapp.com/tables');
        const rows = $$('#table1 tr');
        const columns = rows[1].$$('td'); // get columns of 2nd row
        console.log(columns[2].getText()); // get text of 3rd column
    });
 * </example>
 *
 * @alias element.getText
 * @return {String} content of selected element (all HTML tags are removed)
 * @uses protocol/elements, protocol/elementIdText
 * @type property
 *
 */
function getText() {
  return this.getElementText(this.elementId);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2dldFRleHQuanMiXSwibmFtZXMiOlsiZ2V0VGV4dCIsImdldEVsZW1lbnRUZXh0IiwiZWxlbWVudElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDZSxTQUFTQSxPQUFULEdBQW9CO0FBQy9CLFNBQU8sS0FBS0MsY0FBTCxDQUFvQixLQUFLQyxTQUF6QixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBHZXQgdGhlIHRleHQgY29udGVudCBmcm9tIGEgRE9NLWVsZW1lbnQuIE1ha2Ugc3VyZSB0aGUgZWxlbWVudFxuICogeW91IHdhbnQgdG8gcmVxdWVzdCB0aGUgdGV4dCBmcm9tIFtpcyBpbnRlcmFjdGFibGVdKGh0dHA6Ly93d3cudzMub3JnL1RSL3dlYmRyaXZlci8jaW50ZXJhY3RhYmxlKVxuICogb3RoZXJ3aXNlIHlvdSB3aWxsIGdldCBhbiBlbXB0eSBzdHJpbmcgYXMgcmV0dXJuIHZhbHVlLiBJZiB0aGUgZWxlbWVudCBpcyBkaXNhYmxlZCBvciBub3RcbiAqIHZpc2libGUgYW5kIHlvdSBzdGlsbCB3YW50IHRvIHJlY2VpdmUgdGhlIHRleHQgY29udGVudCB1c2UgW2dldEhUTUxdKGh0dHBzOi8vd2ViZHJpdmVyLmlvL2RvY3MvYXBpL2VsZW1lbnQvZ2V0SFRNTC5odG1sKVxuICogYXMgYSB3b3JrYXJvdW5kLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDppbmRleC5odG1sXG4gICAgPGRpdiBpZD1cImVsZW1cIj5cbiAgICAgICAgTG9yZW0gaXBzdW0gPHN0cm9uZz5kb2xvcjwvc3Ryb25nPiBzaXQgYW1ldCw8YnI+XG4gICAgICAgIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0clxuICAgIDwvZGl2PlxuICAgIDxzcGFuIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPkkgYW0gaW52aXNpYmxlPC9zcGFuPlxuICAgIDpnZXRUZXh0LmpzXG4gICAgaXQoJ3Nob3VsZCBkZW1vbnN0cmF0ZSB0aGUgZ2V0VGV4dCBmdW5jdGlvbicsICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbSA9ICQoJyNlbGVtJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW0uZ2V0VGV4dCgpKTtcbiAgICAgICAgLy8gb3V0cHV0cyB0aGUgZm9sbG93aW5nOlxuICAgICAgICAvLyBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0clwiXG5cbiAgICAgICAgY29uc3Qgc3BhbiA9ICQoJ3NwYW4nKTtcbiAgICAgICAgY29uc29sZS5sb2coc3Bhbi5nZXRUZXh0KCkpO1xuICAgICAgICAvLyBvdXRwdXRzIFwiXCIgKGVtcHR5IHN0cmluZykgc2luY2UgZWxlbWVudCBpcyBub3QgaW50ZXJhY3RhYmxlXG4gICAgfSk7XG4gICAgaXQoJ2dldCBjb250ZW50IGZyb20gdGFibGUgY2VsbCcsICgpID0+IHtcbiAgICAgICAgYnJvd3Nlci51cmwoJ2h0dHA6Ly90aGUtaW50ZXJuZXQuaGVyb2t1YXBwLmNvbS90YWJsZXMnKTtcbiAgICAgICAgY29uc3Qgcm93cyA9ICQkKCcjdGFibGUxIHRyJyk7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSByb3dzWzFdLiQkKCd0ZCcpOyAvLyBnZXQgY29sdW1ucyBvZiAybmQgcm93XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbnNbMl0uZ2V0VGV4dCgpKTsgLy8gZ2V0IHRleHQgb2YgM3JkIGNvbHVtblxuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBlbGVtZW50LmdldFRleHRcbiAqIEByZXR1cm4ge1N0cmluZ30gY29udGVudCBvZiBzZWxlY3RlZCBlbGVtZW50IChhbGwgSFRNTCB0YWdzIGFyZSByZW1vdmVkKVxuICogQHVzZXMgcHJvdG9jb2wvZWxlbWVudHMsIHByb3RvY29sL2VsZW1lbnRJZFRleHRcbiAqIEB0eXBlIHByb3BlcnR5XG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRleHQgKCkge1xuICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRUZXh0KHRoaXMuZWxlbWVudElkKVxufVxuIl19