"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProperty;

require("source-map-support/register");

var _utils = require("../../utils");

var _getProperty = _interopRequireDefault(require("../../scripts/getProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Get Element Property command will return the result of getting a property of an element.
 *
 * <example>
    :getProperty.js
    it('should demonstrate the getCSSProperty command', () => {
        var elem = $('body')
        var color = elem.getProperty('tagName')
        console.log(color) // outputs: "BODY"
    })
 * </example>
 *
 * @alias element.getProperty
 * @param {String} property  name of the element property
 * @return {Object|String} the value of the property of the selected element
 */
function getProperty(property) {
  if (this.isW3C) {
    return this.getElementProperty(this.elementId, property);
  }

  return (0, _utils.getBrowserObject)(this).execute(_getProperty.default, {
    ELEMENT: this.elementId
  }, property);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2dldFByb3BlcnR5LmpzIl0sIm5hbWVzIjpbImdldFByb3BlcnR5IiwicHJvcGVydHkiLCJpc1czQyIsImdldEVsZW1lbnRQcm9wZXJ0eSIsImVsZW1lbnRJZCIsImV4ZWN1dGUiLCJnZXRQcm9wZXJ0eVNjcmlwdCIsIkVMRU1FTlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWlCQTs7QUFDQTs7OztBQWxCQTs7Ozs7Ozs7Ozs7Ozs7OztBQW9CZSxTQUFTQSxXQUFULENBQXNCQyxRQUF0QixFQUFnQztBQUMzQyxNQUFJLEtBQUtDLEtBQVQsRUFBZ0I7QUFDWixXQUFPLEtBQUtDLGtCQUFMLENBQXdCLEtBQUtDLFNBQTdCLEVBQXdDSCxRQUF4QyxDQUFQO0FBQ0g7O0FBRUQsU0FBTyw2QkFBaUIsSUFBakIsRUFBdUJJLE9BQXZCLENBQ0hDLG9CQURHLEVBRUg7QUFBRUMsSUFBQUEsT0FBTyxFQUFFLEtBQUtIO0FBQWhCLEdBRkcsRUFHSEgsUUFIRyxDQUFQO0FBS0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBHZXQgRWxlbWVudCBQcm9wZXJ0eSBjb21tYW5kIHdpbGwgcmV0dXJuIHRoZSByZXN1bHQgb2YgZ2V0dGluZyBhIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmdldFByb3BlcnR5LmpzXG4gICAgaXQoJ3Nob3VsZCBkZW1vbnN0cmF0ZSB0aGUgZ2V0Q1NTUHJvcGVydHkgY29tbWFuZCcsICgpID0+IHtcbiAgICAgICAgdmFyIGVsZW0gPSAkKCdib2R5JylcbiAgICAgICAgdmFyIGNvbG9yID0gZWxlbS5nZXRQcm9wZXJ0eSgndGFnTmFtZScpXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbG9yKSAvLyBvdXRwdXRzOiBcIkJPRFlcIlxuICAgIH0pXG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGVsZW1lbnQuZ2V0UHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSAgbmFtZSBvZiB0aGUgZWxlbWVudCBwcm9wZXJ0eVxuICogQHJldHVybiB7T2JqZWN0fFN0cmluZ30gdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudFxuICovXG5cbmltcG9ydCB7IGdldEJyb3dzZXJPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBnZXRQcm9wZXJ0eVNjcmlwdCBmcm9tICcuLi8uLi9zY3JpcHRzL2dldFByb3BlcnR5J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQcm9wZXJ0eSAocHJvcGVydHkpIHtcbiAgICBpZiAodGhpcy5pc1czQykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50UHJvcGVydHkodGhpcy5lbGVtZW50SWQsIHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBnZXRCcm93c2VyT2JqZWN0KHRoaXMpLmV4ZWN1dGUoXG4gICAgICAgIGdldFByb3BlcnR5U2NyaXB0LFxuICAgICAgICB7IEVMRU1FTlQ6IHRoaXMuZWxlbWVudElkIH0sXG4gICAgICAgIHByb3BlcnR5XG4gICAgKVxufVxuIl19