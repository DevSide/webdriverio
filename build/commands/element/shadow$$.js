"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shadowRoot;

require("source-map-support/register");

var _shadowFnFactory = require("../../scripts/shadowFnFactory");

/**
 *
 * Access elements inside a given element's shadowRoot
 *
 * <example>
    :shadow$$.js
    it('should return elements inside a shadowRoot', () => {
        const innerEl = $('.input').shadow$$('#innerEl');
        console.log(innerEl.getValue()); // outputs: 'test123'
    });
 * </example>
 *
 * @alias element.shadow$$
 * @param {String|Function} selector  selector or JS Function to fetch a certain element
 * @return {Element[]}
 * @type utility
 *
 */
async function shadowRoot(selector) {
  return await this.$$((0, _shadowFnFactory.shadowFnFactory)(selector, true));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3NoYWRvdyQkLmpzIl0sIm5hbWVzIjpbInNoYWRvd1Jvb3QiLCJzZWxlY3RvciIsIiQkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFtQkE7O0FBbkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQmUsZUFBZUEsVUFBZixDQUEyQkMsUUFBM0IsRUFBcUM7QUFDaEQsU0FBTyxNQUFNLEtBQUtDLEVBQUwsQ0FBUSxzQ0FBZ0JELFFBQWhCLEVBQTBCLElBQTFCLENBQVIsQ0FBYjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogQWNjZXNzIGVsZW1lbnRzIGluc2lkZSBhIGdpdmVuIGVsZW1lbnQncyBzaGFkb3dSb290XG4gKlxuICogPGV4YW1wbGU+XG4gICAgOnNoYWRvdyQkLmpzXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gZWxlbWVudHMgaW5zaWRlIGEgc2hhZG93Um9vdCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5uZXJFbCA9ICQoJy5pbnB1dCcpLnNoYWRvdyQkKCcjaW5uZXJFbCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbm5lckVsLmdldFZhbHVlKCkpOyAvLyBvdXRwdXRzOiAndGVzdDEyMydcbiAgICB9KTtcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAYWxpYXMgZWxlbWVudC5zaGFkb3ckJFxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHNlbGVjdG9yICBzZWxlY3RvciBvciBKUyBGdW5jdGlvbiB0byBmZXRjaCBhIGNlcnRhaW4gZWxlbWVudFxuICogQHJldHVybiB7RWxlbWVudFtdfVxuICogQHR5cGUgdXRpbGl0eVxuICpcbiAqL1xuXG5pbXBvcnQgeyBzaGFkb3dGbkZhY3RvcnkgfSBmcm9tICcuLi8uLi9zY3JpcHRzL3NoYWRvd0ZuRmFjdG9yeSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2hhZG93Um9vdCAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy4kJChzaGFkb3dGbkZhY3Rvcnkoc2VsZWN0b3IsIHRydWUpKVxufVxuIl19