"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAttribute;

require("source-map-support/register");

/**
 *
 * Get an attribute from a DOM-element based on the attribute name.
 *
 * <example>
    :index.html
    <form action="/submit" method="post" class="loginForm">
        <input type="text" name="name" placeholder="username"></input>
        <input type="text" name="password" placeholder="password"></input>
        <input type="submit" name="submit" value="submit"></input>
    </form>
    :getAttribute.js
    it('should demonstrate the getAttribute command', () => {
        const form = $('form')
        const attr = form.getAttribute('method')
        console.log(attr) // outputs: "post"
    })
 * </example>
 *
 * @alias element.getAttribute
 * @param {String} attributeName requested attribute
 * @return {String|null} The value of the attribute, or null if it is not set on the element.
 * @uses protocol/elements, protocol/elementIdAttribute
 * @type property
 *
 */
function getAttribute(attributeName) {
  return this.getElementAttribute(this.elementId, attributeName);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2dldEF0dHJpYnV0ZS5qcyJdLCJuYW1lcyI6WyJnZXRBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVOYW1lIiwiZ2V0RWxlbWVudEF0dHJpYnV0ZSIsImVsZW1lbnRJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJlLFNBQVNBLFlBQVQsQ0FBdUJDLGFBQXZCLEVBQXNDO0FBQ2pELFNBQU8sS0FBS0MsbUJBQUwsQ0FBeUIsS0FBS0MsU0FBOUIsRUFBeUNGLGFBQXpDLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIEdldCBhbiBhdHRyaWJ1dGUgZnJvbSBhIERPTS1lbGVtZW50IGJhc2VkIG9uIHRoZSBhdHRyaWJ1dGUgbmFtZS5cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6aW5kZXguaHRtbFxuICAgIDxmb3JtIGFjdGlvbj1cIi9zdWJtaXRcIiBtZXRob2Q9XCJwb3N0XCIgY2xhc3M9XCJsb2dpbkZvcm1cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCI+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwic3VibWl0XCI+PC9pbnB1dD5cbiAgICA8L2Zvcm0+XG4gICAgOmdldEF0dHJpYnV0ZS5qc1xuICAgIGl0KCdzaG91bGQgZGVtb25zdHJhdGUgdGhlIGdldEF0dHJpYnV0ZSBjb21tYW5kJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gJCgnZm9ybScpXG4gICAgICAgIGNvbnN0IGF0dHIgPSBmb3JtLmdldEF0dHJpYnV0ZSgnbWV0aG9kJylcbiAgICAgICAgY29uc29sZS5sb2coYXR0cikgLy8gb3V0cHV0czogXCJwb3N0XCJcbiAgICB9KVxuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBlbGVtZW50LmdldEF0dHJpYnV0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGF0dHJpYnV0ZU5hbWUgcmVxdWVzdGVkIGF0dHJpYnV0ZVxuICogQHJldHVybiB7U3RyaW5nfG51bGx9IFRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLCBvciBudWxsIGlmIGl0IGlzIG5vdCBzZXQgb24gdGhlIGVsZW1lbnQuXG4gKiBAdXNlcyBwcm90b2NvbC9lbGVtZW50cywgcHJvdG9jb2wvZWxlbWVudElkQXR0cmlidXRlXG4gKiBAdHlwZSBwcm9wZXJ0eVxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUgKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuZWxlbWVudElkLCBhdHRyaWJ1dGVOYW1lKVxufVxuIl19