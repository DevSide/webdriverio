"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shadowRoot;

require("source-map-support/register");

var _shadowFnFactory = require("../../scripts/shadowFnFactory");

/**
 *
 * Access an element inside a given element's shadowRoot
 *
 * <example>
    :shadow$$.js
    it('should return an element inside a shadowRoot', () => {
        const innerEl = $('.input').shadow$('#innerEl');
        console.log(innerEl.getValue()); // outputs: 'test123'
    });
 * </example>
 *
 * @alias element.shadow$
 * @param {String|Function} selector  selector or JS Function to fetch a certain element
 * @return {Element}
 * @type utility
 *
 */
async function shadowRoot(selector) {
  return await this.$((0, _shadowFnFactory.shadowFnFactory)(selector));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3NoYWRvdyQuanMiXSwibmFtZXMiOlsic2hhZG93Um9vdCIsInNlbGVjdG9yIiwiJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBbUJBOztBQW5CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJlLGVBQWVBLFVBQWYsQ0FBMkJDLFFBQTNCLEVBQXFDO0FBQ2hELFNBQU8sTUFBTSxLQUFLQyxDQUFMLENBQU8sc0NBQWdCRCxRQUFoQixDQUFQLENBQWI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIEFjY2VzcyBhbiBlbGVtZW50IGluc2lkZSBhIGdpdmVuIGVsZW1lbnQncyBzaGFkb3dSb290XG4gKlxuICogPGV4YW1wbGU+XG4gICAgOnNoYWRvdyQkLmpzXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYW4gZWxlbWVudCBpbnNpZGUgYSBzaGFkb3dSb290JywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbm5lckVsID0gJCgnLmlucHV0Jykuc2hhZG93JCgnI2lubmVyRWwnKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5uZXJFbC5nZXRWYWx1ZSgpKTsgLy8gb3V0cHV0czogJ3Rlc3QxMjMnXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGVsZW1lbnQuc2hhZG93JFxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHNlbGVjdG9yICBzZWxlY3RvciBvciBKUyBGdW5jdGlvbiB0byBmZXRjaCBhIGNlcnRhaW4gZWxlbWVudFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqIEB0eXBlIHV0aWxpdHlcbiAqXG4gKi9cblxuaW1wb3J0IHsgc2hhZG93Rm5GYWN0b3J5IH0gZnJvbSAnLi4vLi4vc2NyaXB0cy9zaGFkb3dGbkZhY3RvcnknXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNoYWRvd1Jvb3QgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuJChzaGFkb3dGbkZhY3Rvcnkoc2VsZWN0b3IpKVxufVxuIl19