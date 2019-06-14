"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCookies;

require("source-map-support/register");

/**
 *
 * Retrieve a [cookie](https://w3c.github.io/webdriver/webdriver-spec.html#cookies)
 * visible to the current page. You can query a specific cookie by providing the cookie name or
 * retrieve all.
 *
 * <example>
    :getCookies.js
    it('should return a cookie for me', () => {
        browser.setCookies([
            {name: 'test', value: '123'},
            {name: 'test2', value: '456'}
        ])
        const testCookie = browser.getCookies(['test'])
        console.log(testCookie); // outputs: [{ name: 'test', value: '123' }]

        const allCookies = browser.getCookies()
        console.log(allCookies);
        // outputs:
        // [
        //    { name: 'test', value: '123' },
        //    { name: 'test2', value: '456' }
        // ]
    })
 * </example>
 *
 * @alias browser.getCookies
 * @param {String[]=} names  names of requested cookies
 * @return {Object[]}        requested cookies if existing
 * @uses webdriver/getAllCookies
 *
 */
async function getCookies(names) {
  const namesList = typeof names !== 'undefined' && !Array.isArray(names) ? [names] : names;

  if (typeof namesList === 'undefined') {
    return this.getAllCookies();
  }

  if (namesList.every(obj => typeof obj !== 'string')) {
    throw new Error('Invalid input (see https://webdriver.io/docs/api/browser/getCookies.html for documentation.');
  }

  const allCookies = await this.getAllCookies();
  return allCookies.filter(cookie => namesList.includes(cookie.name));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL2dldENvb2tpZXMuanMiXSwibmFtZXMiOlsiZ2V0Q29va2llcyIsIm5hbWVzIiwibmFtZXNMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiZ2V0QWxsQ29va2llcyIsImV2ZXJ5Iiwib2JqIiwiRXJyb3IiLCJhbGxDb29raWVzIiwiZmlsdGVyIiwiY29va2llIiwiaW5jbHVkZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ2UsZUFBZUEsVUFBZixDQUEwQkMsS0FBMUIsRUFBaUM7QUFDNUMsUUFBTUMsU0FBUyxHQUFHLE9BQU9ELEtBQVAsS0FBaUIsV0FBakIsSUFBZ0MsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFOLENBQWNILEtBQWQsQ0FBakMsR0FBd0QsQ0FBQ0EsS0FBRCxDQUF4RCxHQUFrRUEsS0FBcEY7O0FBRUEsTUFBSSxPQUFPQyxTQUFQLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ2xDLFdBQU8sS0FBS0csYUFBTCxFQUFQO0FBQ0g7O0FBRUQsTUFBSUgsU0FBUyxDQUFDSSxLQUFWLENBQWdCQyxHQUFHLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQXRDLENBQUosRUFBcUQ7QUFDakQsVUFBTSxJQUFJQyxLQUFKLENBQVUsNkZBQVYsQ0FBTjtBQUNIOztBQUVELFFBQU1DLFVBQVUsR0FBRyxNQUFNLEtBQUtKLGFBQUwsRUFBekI7QUFFQSxTQUFPSSxVQUFVLENBQUNDLE1BQVgsQ0FBa0JDLE1BQU0sSUFBSVQsU0FBUyxDQUFDVSxRQUFWLENBQW1CRCxNQUFNLENBQUNFLElBQTFCLENBQTVCLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFJldHJpZXZlIGEgW2Nvb2tpZV0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmRyaXZlci93ZWJkcml2ZXItc3BlYy5odG1sI2Nvb2tpZXMpXG4gKiB2aXNpYmxlIHRvIHRoZSBjdXJyZW50IHBhZ2UuIFlvdSBjYW4gcXVlcnkgYSBzcGVjaWZpYyBjb29raWUgYnkgcHJvdmlkaW5nIHRoZSBjb29raWUgbmFtZSBvclxuICogcmV0cmlldmUgYWxsLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpnZXRDb29raWVzLmpzXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBjb29raWUgZm9yIG1lJywgKCkgPT4ge1xuICAgICAgICBicm93c2VyLnNldENvb2tpZXMoW1xuICAgICAgICAgICAge25hbWU6ICd0ZXN0JywgdmFsdWU6ICcxMjMnfSxcbiAgICAgICAgICAgIHtuYW1lOiAndGVzdDInLCB2YWx1ZTogJzQ1Nid9XG4gICAgICAgIF0pXG4gICAgICAgIGNvbnN0IHRlc3RDb29raWUgPSBicm93c2VyLmdldENvb2tpZXMoWyd0ZXN0J10pXG4gICAgICAgIGNvbnNvbGUubG9nKHRlc3RDb29raWUpOyAvLyBvdXRwdXRzOiBbeyBuYW1lOiAndGVzdCcsIHZhbHVlOiAnMTIzJyB9XVxuXG4gICAgICAgIGNvbnN0IGFsbENvb2tpZXMgPSBicm93c2VyLmdldENvb2tpZXMoKVxuICAgICAgICBjb25zb2xlLmxvZyhhbGxDb29raWVzKTtcbiAgICAgICAgLy8gb3V0cHV0czpcbiAgICAgICAgLy8gW1xuICAgICAgICAvLyAgICB7IG5hbWU6ICd0ZXN0JywgdmFsdWU6ICcxMjMnIH0sXG4gICAgICAgIC8vICAgIHsgbmFtZTogJ3Rlc3QyJywgdmFsdWU6ICc0NTYnIH1cbiAgICAgICAgLy8gXVxuICAgIH0pXG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGJyb3dzZXIuZ2V0Q29va2llc1xuICogQHBhcmFtIHtTdHJpbmdbXT19IG5hbWVzICBuYW1lcyBvZiByZXF1ZXN0ZWQgY29va2llc1xuICogQHJldHVybiB7T2JqZWN0W119ICAgICAgICByZXF1ZXN0ZWQgY29va2llcyBpZiBleGlzdGluZ1xuICogQHVzZXMgd2ViZHJpdmVyL2dldEFsbENvb2tpZXNcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldENvb2tpZXMobmFtZXMpIHtcbiAgICBjb25zdCBuYW1lc0xpc3QgPSB0eXBlb2YgbmFtZXMgIT09ICd1bmRlZmluZWQnICYmICFBcnJheS5pc0FycmF5KG5hbWVzKSA/IFtuYW1lc10gOiBuYW1lc1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lc0xpc3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbENvb2tpZXMoKVxuICAgIH1cblxuICAgIGlmIChuYW1lc0xpc3QuZXZlcnkob2JqID0+IHR5cGVvZiBvYmogIT09ICdzdHJpbmcnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaW5wdXQgKHNlZSBodHRwczovL3dlYmRyaXZlci5pby9kb2NzL2FwaS9icm93c2VyL2dldENvb2tpZXMuaHRtbCBmb3IgZG9jdW1lbnRhdGlvbi4nKVxuICAgIH1cblxuICAgIGNvbnN0IGFsbENvb2tpZXMgPSBhd2FpdCB0aGlzLmdldEFsbENvb2tpZXMoKVxuXG4gICAgcmV0dXJuIGFsbENvb2tpZXMuZmlsdGVyKGNvb2tpZSA9PiBuYW1lc0xpc3QuaW5jbHVkZXMoY29va2llLm5hbWUpKVxufVxuIl19