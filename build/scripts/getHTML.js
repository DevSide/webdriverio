"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHTML;

require("source-map-support/register");

/**
 * get HTML of selector element
 *
 * @param  {String}  element             element to get HTML from
 * @param  {Boolean} includeSelectorTag  if true, selector tag gets included (uses outerHTML)
 * @return {String}                      html source
 */
function getHTML(element, includeSelectorTag) {
  return element[includeSelectorTag ? 'outerHTML' : 'innerHTML'];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL2dldEhUTUwuanMiXSwibmFtZXMiOlsiZ2V0SFRNTCIsImVsZW1lbnQiLCJpbmNsdWRlU2VsZWN0b3JUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7O0FBUWUsU0FBU0EsT0FBVCxDQUFrQkMsT0FBbEIsRUFBMkJDLGtCQUEzQixFQUErQztBQUMxRCxTQUFPRCxPQUFPLENBQUNDLGtCQUFrQixHQUFHLFdBQUgsR0FBaUIsV0FBcEMsQ0FBZDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIGdldCBIVE1MIG9mIHNlbGVjdG9yIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBlbGVtZW50ICAgICAgICAgICAgIGVsZW1lbnQgdG8gZ2V0IEhUTUwgZnJvbVxuICogQHBhcmFtICB7Qm9vbGVhbn0gaW5jbHVkZVNlbGVjdG9yVGFnICBpZiB0cnVlLCBzZWxlY3RvciB0YWcgZ2V0cyBpbmNsdWRlZCAodXNlcyBvdXRlckhUTUwpXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgIGh0bWwgc291cmNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTCAoZWxlbWVudCwgaW5jbHVkZVNlbGVjdG9yVGFnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRbaW5jbHVkZVNlbGVjdG9yVGFnID8gJ291dGVySFRNTCcgOiAnaW5uZXJIVE1MJ11cbn1cbiJdfQ==