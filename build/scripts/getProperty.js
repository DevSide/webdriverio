"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProperty;

require("source-map-support/register");

/**
 * get property from element
 * @param  {String} element    element with requested property
 * @param  {String} property   requested property
 * @return {String}            the value of the property
 */
function getProperty(element, property) {
  return element[property];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL2dldFByb3BlcnR5LmpzIl0sIm5hbWVzIjpbImdldFByb3BlcnR5IiwiZWxlbWVudCIsInByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7O0FBTWUsU0FBU0EsV0FBVCxDQUFzQkMsT0FBdEIsRUFBK0JDLFFBQS9CLEVBQXlDO0FBQ3BELFNBQU9ELE9BQU8sQ0FBQ0MsUUFBRCxDQUFkO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGdldCBwcm9wZXJ0eSBmcm9tIGVsZW1lbnRcbiAqIEBwYXJhbSAge1N0cmluZ30gZWxlbWVudCAgICBlbGVtZW50IHdpdGggcmVxdWVzdGVkIHByb3BlcnR5XG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3BlcnR5ICAgcmVxdWVzdGVkIHByb3BlcnR5XG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQcm9wZXJ0eSAoZWxlbWVudCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gZWxlbWVudFtwcm9wZXJ0eV1cbn1cbiJdfQ==