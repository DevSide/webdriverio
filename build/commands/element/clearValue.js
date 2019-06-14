"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearValue;

require("source-map-support/register");

/**
 *
 * Clear a `<textarea>` or text `<input>` element’s value. Make sure you can interact with the
 * element before using this command. You can't clear an input element that is disabled or in
 * readonly mode.
 *
 * <example>
    :clearValue.js
    it('should demonstrate the clearValue command', function () {
        const elem = $('.input')
        elem.setValue('test123')

        const value = elem.getValue()
        console.log(value) // returns 'test123'

        elem.clearValue()
        value = elem.getValue()
        assert(value === ''); // true
    })
 * </example>
 *
 * @alias element.clearValue
 * @uses protocol/elements, protocol/elementIdClear
 * @type action
 *
 */
function clearValue() {
  return this.elementClear(this.elementId);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2NsZWFyVmFsdWUuanMiXSwibmFtZXMiOlsiY2xlYXJWYWx1ZSIsImVsZW1lbnRDbGVhciIsImVsZW1lbnRJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJlLFNBQVNBLFVBQVQsR0FBdUI7QUFDbEMsU0FBTyxLQUFLQyxZQUFMLENBQWtCLEtBQUtDLFNBQXZCLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIENsZWFyIGEgYDx0ZXh0YXJlYT5gIG9yIHRleHQgYDxpbnB1dD5gIGVsZW1lbnTigJlzIHZhbHVlLiBNYWtlIHN1cmUgeW91IGNhbiBpbnRlcmFjdCB3aXRoIHRoZVxuICogZWxlbWVudCBiZWZvcmUgdXNpbmcgdGhpcyBjb21tYW5kLiBZb3UgY2FuJ3QgY2xlYXIgYW4gaW5wdXQgZWxlbWVudCB0aGF0IGlzIGRpc2FibGVkIG9yIGluXG4gKiByZWFkb25seSBtb2RlLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpjbGVhclZhbHVlLmpzXG4gICAgaXQoJ3Nob3VsZCBkZW1vbnN0cmF0ZSB0aGUgY2xlYXJWYWx1ZSBjb21tYW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBlbGVtID0gJCgnLmlucHV0JylcbiAgICAgICAgZWxlbS5zZXRWYWx1ZSgndGVzdDEyMycpXG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtLmdldFZhbHVlKClcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpIC8vIHJldHVybnMgJ3Rlc3QxMjMnXG5cbiAgICAgICAgZWxlbS5jbGVhclZhbHVlKClcbiAgICAgICAgdmFsdWUgPSBlbGVtLmdldFZhbHVlKClcbiAgICAgICAgYXNzZXJ0KHZhbHVlID09PSAnJyk7IC8vIHRydWVcbiAgICB9KVxuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBlbGVtZW50LmNsZWFyVmFsdWVcbiAqIEB1c2VzIHByb3RvY29sL2VsZW1lbnRzLCBwcm90b2NvbC9lbGVtZW50SWRDbGVhclxuICogQHR5cGUgYWN0aW9uXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyVmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRDbGVhcih0aGlzLmVsZW1lbnRJZClcbn1cbiJdfQ==