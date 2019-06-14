"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLocation;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Determine an element’s location on the page. The point (0, 0) refers to
 * the upper-left corner of the page.
 *
 * <example>
    :getLocation.js
    it('should demonstrate the getLocation function', () => {
        browser.url('http://github.com');
        const logo = $('.octicon-mark-github')
        const location = logo.getLocation();
        console.log(location); // outputs: { x: 150, y: 20 }

        const xLocation = logo.getLocation('x')
        console.log(xLocation); // outputs: 150

        const yLocation = logo.getLocation('.octicon-mark-github', 'y')
        console.log(yLocation); // outputs: 20
    });
 * </example>
 *
 * @alias element.getLocation
 * @param {String} prop    can be "x" or "y" to get a result value directly for easier assertions
 * @return {Object|Number}  The X and Y coordinates for the element on the page (`{x:number, y:number}`)
 * @uses protocol/elementIdLocation
 * @type property
 */
async function getLocation(prop) {
  let location = {};

  if (this.isW3C) {
    location = await (0, _utils.getElementRect)(this);
    delete location.width;
    delete location.height;
  } else {
    location = await this.getElementLocation(this.elementId);
  }

  if (prop === 'x' || prop === 'y') {
    return location[prop];
  }

  return location;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2dldExvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImdldExvY2F0aW9uIiwicHJvcCIsImxvY2F0aW9uIiwiaXNXM0MiLCJ3aWR0aCIsImhlaWdodCIsImdldEVsZW1lbnRMb2NhdGlvbiIsImVsZW1lbnRJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBNEJBOztBQTVCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJlLGVBQWVBLFdBQWYsQ0FBNEJDLElBQTVCLEVBQWtDO0FBQzdDLE1BQUlDLFFBQVEsR0FBRyxFQUFmOztBQUVBLE1BQUksS0FBS0MsS0FBVCxFQUFnQjtBQUNaRCxJQUFBQSxRQUFRLEdBQUcsTUFBTSwyQkFBZSxJQUFmLENBQWpCO0FBQ0EsV0FBT0EsUUFBUSxDQUFDRSxLQUFoQjtBQUNBLFdBQU9GLFFBQVEsQ0FBQ0csTUFBaEI7QUFDSCxHQUpELE1BSU87QUFDSEgsSUFBQUEsUUFBUSxHQUFHLE1BQU0sS0FBS0ksa0JBQUwsQ0FBd0IsS0FBS0MsU0FBN0IsQ0FBakI7QUFDSDs7QUFFRCxNQUFJTixJQUFJLEtBQUssR0FBVCxJQUFnQkEsSUFBSSxLQUFLLEdBQTdCLEVBQWtDO0FBQzlCLFdBQU9DLFFBQVEsQ0FBQ0QsSUFBRCxDQUFmO0FBQ0g7O0FBRUQsU0FBT0MsUUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogRGV0ZXJtaW5lIGFuIGVsZW1lbnTigJlzIGxvY2F0aW9uIG9uIHRoZSBwYWdlLiBUaGUgcG9pbnQgKDAsIDApIHJlZmVycyB0b1xuICogdGhlIHVwcGVyLWxlZnQgY29ybmVyIG9mIHRoZSBwYWdlLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpnZXRMb2NhdGlvbi5qc1xuICAgIGl0KCdzaG91bGQgZGVtb25zdHJhdGUgdGhlIGdldExvY2F0aW9uIGZ1bmN0aW9uJywgKCkgPT4ge1xuICAgICAgICBicm93c2VyLnVybCgnaHR0cDovL2dpdGh1Yi5jb20nKTtcbiAgICAgICAgY29uc3QgbG9nbyA9ICQoJy5vY3RpY29uLW1hcmstZ2l0aHViJylcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBsb2dvLmdldExvY2F0aW9uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTsgLy8gb3V0cHV0czogeyB4OiAxNTAsIHk6IDIwIH1cblxuICAgICAgICBjb25zdCB4TG9jYXRpb24gPSBsb2dvLmdldExvY2F0aW9uKCd4JylcbiAgICAgICAgY29uc29sZS5sb2coeExvY2F0aW9uKTsgLy8gb3V0cHV0czogMTUwXG5cbiAgICAgICAgY29uc3QgeUxvY2F0aW9uID0gbG9nby5nZXRMb2NhdGlvbignLm9jdGljb24tbWFyay1naXRodWInLCAneScpXG4gICAgICAgIGNvbnNvbGUubG9nKHlMb2NhdGlvbik7IC8vIG91dHB1dHM6IDIwXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGVsZW1lbnQuZ2V0TG9jYXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wICAgIGNhbiBiZSBcInhcIiBvciBcInlcIiB0byBnZXQgYSByZXN1bHQgdmFsdWUgZGlyZWN0bHkgZm9yIGVhc2llciBhc3NlcnRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R8TnVtYmVyfSAgVGhlIFggYW5kIFkgY29vcmRpbmF0ZXMgZm9yIHRoZSBlbGVtZW50IG9uIHRoZSBwYWdlIChge3g6bnVtYmVyLCB5Om51bWJlcn1gKVxuICogQHVzZXMgcHJvdG9jb2wvZWxlbWVudElkTG9jYXRpb25cbiAqIEB0eXBlIHByb3BlcnR5XG4gKi9cblxuaW1wb3J0IHsgZ2V0RWxlbWVudFJlY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb24gKHByb3ApIHtcbiAgICBsZXQgbG9jYXRpb24gPSB7fVxuXG4gICAgaWYgKHRoaXMuaXNXM0MpIHtcbiAgICAgICAgbG9jYXRpb24gPSBhd2FpdCBnZXRFbGVtZW50UmVjdCh0aGlzKVxuICAgICAgICBkZWxldGUgbG9jYXRpb24ud2lkdGhcbiAgICAgICAgZGVsZXRlIGxvY2F0aW9uLmhlaWdodFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uID0gYXdhaXQgdGhpcy5nZXRFbGVtZW50TG9jYXRpb24odGhpcy5lbGVtZW50SWQpXG4gICAgfVxuXG4gICAgaWYgKHByb3AgPT09ICd4JyB8fCBwcm9wID09PSAneScpIHtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uW3Byb3BdXG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2F0aW9uXG59XG4iXX0=