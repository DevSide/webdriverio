"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shadowFnFactory = void 0;

require("source-map-support/register");

// generate a function that can be used to query shadowRoots
const shadowFnFactory = function (elementSelector, qsAll) {
  const strFn = `
    (function() {
      // element has a shadowRoot property
      if (this.shadowRoot) {
        return this.shadowRoot.querySelector${qsAll ? 'All' : ''}('${elementSelector}')
      }
      // fall back to querying the element directly if not
      return this.querySelector${qsAll ? 'All' : ''}('${elementSelector}')
    })`;
  return eval(strFn);
};

exports.shadowFnFactory = shadowFnFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL3NoYWRvd0ZuRmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJzaGFkb3dGbkZhY3RvcnkiLCJlbGVtZW50U2VsZWN0b3IiLCJxc0FsbCIsInN0ckZuIiwiZXZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDTyxNQUFNQSxlQUFlLEdBQUcsVUFBU0MsZUFBVCxFQUEwQkMsS0FBMUIsRUFBaUM7QUFDNUQsUUFBTUMsS0FBSyxHQUFJOzs7OzhDQUkyQkQsS0FBSyxHQUFHLEtBQUgsR0FBVyxFQUFHLEtBQUlELGVBQWdCOzs7aUNBR3BEQyxLQUFLLEdBQUcsS0FBSCxHQUFXLEVBQUcsS0FBSUQsZUFBZ0I7T0FQcEU7QUFTQSxTQUFPRyxJQUFJLENBQUNELEtBQUQsQ0FBWDtBQUNILENBWE0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gcXVlcnkgc2hhZG93Um9vdHNcbmV4cG9ydCBjb25zdCBzaGFkb3dGbkZhY3RvcnkgPSBmdW5jdGlvbihlbGVtZW50U2VsZWN0b3IsIHFzQWxsKSB7XG4gICAgY29uc3Qgc3RyRm4gPSBgXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gZWxlbWVudCBoYXMgYSBzaGFkb3dSb290IHByb3BlcnR5XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvciR7cXNBbGwgPyAnQWxsJyA6ICcnfSgnJHtlbGVtZW50U2VsZWN0b3J9JylcbiAgICAgIH1cbiAgICAgIC8vIGZhbGwgYmFjayB0byBxdWVyeWluZyB0aGUgZWxlbWVudCBkaXJlY3RseSBpZiBub3RcbiAgICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3Ike3FzQWxsID8gJ0FsbCcgOiAnJ30oJyR7ZWxlbWVudFNlbGVjdG9yfScpXG4gICAgfSlgXG4gICAgcmV0dXJuIGV2YWwoc3RyRm4pXG59XG4iXX0=