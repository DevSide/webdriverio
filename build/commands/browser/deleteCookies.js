"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteCookies;

require("source-map-support/register");

/**
 *
 * Delete cookies visible to the current page. By providing a cookie name it just removes the single cookie or more when multiple names are passed.
 *
 * <example>
    :deleteCookie.js
    it('should delete cookies', () => {
        browser.setCookies([
            {name: 'test', value: '123'},
            {name: 'test2', value: '456'},
            {name: 'test3', value: '789'}
        ])

        let cookies = browser.getCookies()
        console.log(cookies)
        // outputs:
        // [
        //     { name: 'test', value: '123' },
        //     { name: 'test2', value: '456' }
        //     { name: 'test3', value: '789' }
        // ]

        browser.deleteCookies(['test3'])
        cookies = browser.getCookies()
        console.log(cookies)
        // outputs:
        // [
        //     { name: 'test', value: '123' },
        //     { name: 'test2', value: '456' }
        // ]

        browser.deleteCookies()
        cookies = browser.getCookies()
        console.log(cookies) // outputs: []
    })
 * </example>
 *
 * @alias browser.deleteCookies
 * @param {String[]=} names  names of cookies to be deleted
 * @uses webdriver/deleteAllCookies,webdriver/deleteCookie
 * @type cookie
 *
 */
function deleteCookies(names) {
  const namesList = typeof names !== 'undefined' && !Array.isArray(names) ? [names] : names;

  if (typeof namesList === 'undefined') {
    return this.deleteAllCookies();
  }

  if (namesList.every(obj => typeof obj !== 'string')) {
    return Promise.reject(new Error('Invalid input (see https://webdriver.io/docs/api/browser/deleteCookies.html for documentation.'));
  }

  return Promise.all(namesList.map(name => this.deleteCookie(name)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL2RlbGV0ZUNvb2tpZXMuanMiXSwibmFtZXMiOlsiZGVsZXRlQ29va2llcyIsIm5hbWVzIiwibmFtZXNMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiZGVsZXRlQWxsQ29va2llcyIsImV2ZXJ5Iiwib2JqIiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwiYWxsIiwibWFwIiwibmFtZSIsImRlbGV0ZUNvb2tpZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q2UsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDekMsUUFBTUMsU0FBUyxHQUFHLE9BQU9ELEtBQVAsS0FBaUIsV0FBakIsSUFBZ0MsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFOLENBQWNILEtBQWQsQ0FBakMsR0FBd0QsQ0FBQ0EsS0FBRCxDQUF4RCxHQUFrRUEsS0FBcEY7O0FBRUEsTUFBSSxPQUFPQyxTQUFQLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ2xDLFdBQU8sS0FBS0csZ0JBQUwsRUFBUDtBQUNIOztBQUVELE1BQUlILFNBQVMsQ0FBQ0ksS0FBVixDQUFnQkMsR0FBRyxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUF0QyxDQUFKLEVBQXFEO0FBQ2pELFdBQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlLElBQUlDLEtBQUosQ0FBVSxnR0FBVixDQUFmLENBQVA7QUFDSDs7QUFFRCxTQUFPRixPQUFPLENBQUNHLEdBQVIsQ0FBWVQsU0FBUyxDQUFDVSxHQUFWLENBQWNDLElBQUksSUFBSSxLQUFLQyxZQUFMLENBQWtCRCxJQUFsQixDQUF0QixDQUFaLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIERlbGV0ZSBjb29raWVzIHZpc2libGUgdG8gdGhlIGN1cnJlbnQgcGFnZS4gQnkgcHJvdmlkaW5nIGEgY29va2llIG5hbWUgaXQganVzdCByZW1vdmVzIHRoZSBzaW5nbGUgY29va2llIG9yIG1vcmUgd2hlbiBtdWx0aXBsZSBuYW1lcyBhcmUgcGFzc2VkLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpkZWxldGVDb29raWUuanNcbiAgICBpdCgnc2hvdWxkIGRlbGV0ZSBjb29raWVzJywgKCkgPT4ge1xuICAgICAgICBicm93c2VyLnNldENvb2tpZXMoW1xuICAgICAgICAgICAge25hbWU6ICd0ZXN0JywgdmFsdWU6ICcxMjMnfSxcbiAgICAgICAgICAgIHtuYW1lOiAndGVzdDInLCB2YWx1ZTogJzQ1Nid9LFxuICAgICAgICAgICAge25hbWU6ICd0ZXN0MycsIHZhbHVlOiAnNzg5J31cbiAgICAgICAgXSlcblxuICAgICAgICBsZXQgY29va2llcyA9IGJyb3dzZXIuZ2V0Q29va2llcygpXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb2tpZXMpXG4gICAgICAgIC8vIG91dHB1dHM6XG4gICAgICAgIC8vIFtcbiAgICAgICAgLy8gICAgIHsgbmFtZTogJ3Rlc3QnLCB2YWx1ZTogJzEyMycgfSxcbiAgICAgICAgLy8gICAgIHsgbmFtZTogJ3Rlc3QyJywgdmFsdWU6ICc0NTYnIH1cbiAgICAgICAgLy8gICAgIHsgbmFtZTogJ3Rlc3QzJywgdmFsdWU6ICc3ODknIH1cbiAgICAgICAgLy8gXVxuXG4gICAgICAgIGJyb3dzZXIuZGVsZXRlQ29va2llcyhbJ3Rlc3QzJ10pXG4gICAgICAgIGNvb2tpZXMgPSBicm93c2VyLmdldENvb2tpZXMoKVxuICAgICAgICBjb25zb2xlLmxvZyhjb29raWVzKVxuICAgICAgICAvLyBvdXRwdXRzOlxuICAgICAgICAvLyBbXG4gICAgICAgIC8vICAgICB7IG5hbWU6ICd0ZXN0JywgdmFsdWU6ICcxMjMnIH0sXG4gICAgICAgIC8vICAgICB7IG5hbWU6ICd0ZXN0MicsIHZhbHVlOiAnNDU2JyB9XG4gICAgICAgIC8vIF1cblxuICAgICAgICBicm93c2VyLmRlbGV0ZUNvb2tpZXMoKVxuICAgICAgICBjb29raWVzID0gYnJvd3Nlci5nZXRDb29raWVzKClcbiAgICAgICAgY29uc29sZS5sb2coY29va2llcykgLy8gb3V0cHV0czogW11cbiAgICB9KVxuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBicm93c2VyLmRlbGV0ZUNvb2tpZXNcbiAqIEBwYXJhbSB7U3RyaW5nW109fSBuYW1lcyAgbmFtZXMgb2YgY29va2llcyB0byBiZSBkZWxldGVkXG4gKiBAdXNlcyB3ZWJkcml2ZXIvZGVsZXRlQWxsQ29va2llcyx3ZWJkcml2ZXIvZGVsZXRlQ29va2llXG4gKiBAdHlwZSBjb29raWVcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlQ29va2llcyhuYW1lcykge1xuICAgIGNvbnN0IG5hbWVzTGlzdCA9IHR5cGVvZiBuYW1lcyAhPT0gJ3VuZGVmaW5lZCcgJiYgIUFycmF5LmlzQXJyYXkobmFtZXMpID8gW25hbWVzXSA6IG5hbWVzXG5cbiAgICBpZiAodHlwZW9mIG5hbWVzTGlzdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlQWxsQ29va2llcygpXG4gICAgfVxuXG4gICAgaWYgKG5hbWVzTGlzdC5ldmVyeShvYmogPT4gdHlwZW9mIG9iaiAhPT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0ludmFsaWQgaW5wdXQgKHNlZSBodHRwczovL3dlYmRyaXZlci5pby9kb2NzL2FwaS9icm93c2VyL2RlbGV0ZUNvb2tpZXMuaHRtbCBmb3IgZG9jdW1lbnRhdGlvbi4nKSlcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobmFtZXNMaXN0Lm1hcChuYW1lID0+IHRoaXMuZGVsZXRlQ29va2llKG5hbWUpKSlcbn1cbiJdfQ==