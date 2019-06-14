"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getValue;

require("source-map-support/register");

/**
 *
 * Get the value of a `<textarea>`, `<select>` or text `<input>` found by given selector.
 * If multiple elements are found via the given selector, an array of values is returned instead.
 * For input with checkbox or radio type use isSelected.
 *
 * <example>
    :index.html
    <input type="text" value="John Doe" id="username">
    :getValue.js
    it('should demonstrate the getValue command', () => {
        const inputUser = $('#username');
        const value = inputUser.getValue();
        console.log(value); // outputs: "John Doe"
    });
 * </example>
 *
 * @alias element.getValue
 * @return {String}  requested element(s) value
 * @uses protocol/elements, protocol/elementIdProperty
 * @type property
 *
 */
function getValue() {
  // `!this.isMobile` added to workaround https://github.com/appium/appium/issues/12218
  if (this.isW3C && !this.isMobile) {
    return this.getElementProperty(this.elementId, 'value');
  }

  return this.getElementAttribute(this.elementId, 'value');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2dldFZhbHVlLmpzIl0sIm5hbWVzIjpbImdldFZhbHVlIiwiaXNXM0MiLCJpc01vYmlsZSIsImdldEVsZW1lbnRQcm9wZXJ0eSIsImVsZW1lbnRJZCIsImdldEVsZW1lbnRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCZSxTQUFTQSxRQUFULEdBQXFCO0FBQ2hDO0FBQ0EsTUFBSSxLQUFLQyxLQUFMLElBQWMsQ0FBQyxLQUFLQyxRQUF4QixFQUFrQztBQUM5QixXQUFPLEtBQUtDLGtCQUFMLENBQXdCLEtBQUtDLFNBQTdCLEVBQXdDLE9BQXhDLENBQVA7QUFDSDs7QUFFRCxTQUFPLEtBQUtDLG1CQUFMLENBQXlCLEtBQUtELFNBQTlCLEVBQXlDLE9BQXpDLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIEdldCB0aGUgdmFsdWUgb2YgYSBgPHRleHRhcmVhPmAsIGA8c2VsZWN0PmAgb3IgdGV4dCBgPGlucHV0PmAgZm91bmQgYnkgZ2l2ZW4gc2VsZWN0b3IuXG4gKiBJZiBtdWx0aXBsZSBlbGVtZW50cyBhcmUgZm91bmQgdmlhIHRoZSBnaXZlbiBzZWxlY3RvciwgYW4gYXJyYXkgb2YgdmFsdWVzIGlzIHJldHVybmVkIGluc3RlYWQuXG4gKiBGb3IgaW5wdXQgd2l0aCBjaGVja2JveCBvciByYWRpbyB0eXBlIHVzZSBpc1NlbGVjdGVkLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDppbmRleC5odG1sXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJKb2huIERvZVwiIGlkPVwidXNlcm5hbWVcIj5cbiAgICA6Z2V0VmFsdWUuanNcbiAgICBpdCgnc2hvdWxkIGRlbW9uc3RyYXRlIHRoZSBnZXRWYWx1ZSBjb21tYW5kJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dFVzZXIgPSAkKCcjdXNlcm5hbWUnKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dFVzZXIuZ2V0VmFsdWUoKTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpOyAvLyBvdXRwdXRzOiBcIkpvaG4gRG9lXCJcbiAgICB9KTtcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAYWxpYXMgZWxlbWVudC5nZXRWYWx1ZVxuICogQHJldHVybiB7U3RyaW5nfSAgcmVxdWVzdGVkIGVsZW1lbnQocykgdmFsdWVcbiAqIEB1c2VzIHByb3RvY29sL2VsZW1lbnRzLCBwcm90b2NvbC9lbGVtZW50SWRQcm9wZXJ0eVxuICogQHR5cGUgcHJvcGVydHlcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFsdWUgKCkge1xuICAgIC8vIGAhdGhpcy5pc01vYmlsZWAgYWRkZWQgdG8gd29ya2Fyb3VuZCBodHRwczovL2dpdGh1Yi5jb20vYXBwaXVtL2FwcGl1bS9pc3N1ZXMvMTIyMThcbiAgICBpZiAodGhpcy5pc1czQyAmJiAhdGhpcy5pc01vYmlsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50UHJvcGVydHkodGhpcy5lbGVtZW50SWQsICd2YWx1ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRJZCwgJ3ZhbHVlJylcbn1cbiJdfQ==