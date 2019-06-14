"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setCookies;

require("source-map-support/register");

/**
 *
 * Sets one or more [cookies](https://w3c.github.io/webdriver/#cookies) for the current page. Make sure you are
 * on the page that should receive the cookie. You can't set a cookie for an arbitrary page without
 * being on that page.
 *
 * <example>
    :setCookies.js
    it('should set a cookie for the page', () => {
        browser.url('/')

        // set a single cookie
        browser.setCookies({
            name: 'test1',
            value: 'one'
            // The below options are optional
            // path: '/foo', // The cookie path. Defaults to "/"
            // domain: '.example.com', // The domain the cookie is visible to. Defaults to the current browsing context’s active document’s URL domain
            // secure: true, // Whether the cookie is a secure cookie. Defaults to false
            // httpOnly: true, // Whether the cookie is an HTTP only cookie. Defaults to false
            // expiry: 1551393875 // When the cookie expires, specified in seconds since Unix Epoch
        })

        // set multiple cookies
        browser.setCookies([
            {name: 'test2', value: 'two'},
            {name: 'test3', value: 'three'}
        ])

        const cookies = browser.getCookies()
        console.log(cookies);
        // outputs:
        // [
        //      {name: 'test1', value: 'one', domain: 'www.example.com'},
        //      {name: 'test2', value: 'two', domain: 'www.example.com'},
        //      {name: 'test3', value: 'three', domain: 'www.example.com'}
        // ]
    });
 * </example>
 *
 * @alias browser.setCookies
 * @param {Object} cookie cookie object or object array
 * @uses protocol/addCookie
 * @type cookie
 *
 */
async function setCookies(cookieObjs) {
  const cookieObjsList = !Array.isArray(cookieObjs) ? [cookieObjs] : cookieObjs;

  if (cookieObjsList.some(obj => typeof obj !== 'object')) {
    throw new Error('Invalid input (see https://webdriver.io/docs/api/browser/setCookies.html for documentation.');
  }

  return Promise.all(cookieObjsList.map(cookieObj => this.addCookie(cookieObj)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3NldENvb2tpZXMuanMiXSwibmFtZXMiOlsic2V0Q29va2llcyIsImNvb2tpZU9ianMiLCJjb29raWVPYmpzTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInNvbWUiLCJvYmoiLCJFcnJvciIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJjb29raWVPYmoiLCJhZGRDb29raWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENlLGVBQWVBLFVBQWYsQ0FBMEJDLFVBQTFCLEVBQXNDO0FBQ2pELFFBQU1DLGNBQWMsR0FBRyxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsVUFBZCxDQUFELEdBQTZCLENBQUNBLFVBQUQsQ0FBN0IsR0FBNENBLFVBQW5FOztBQUVBLE1BQUlDLGNBQWMsQ0FBQ0csSUFBZixDQUFvQkMsR0FBRyxJQUFLLE9BQU9BLEdBQVAsS0FBZSxRQUEzQyxDQUFKLEVBQTJEO0FBQ3ZELFVBQU0sSUFBSUMsS0FBSixDQUFVLDZGQUFWLENBQU47QUFDSDs7QUFFRCxTQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsY0FBYyxDQUFDUSxHQUFmLENBQW1CQyxTQUFTLElBQUksS0FBS0MsU0FBTCxDQUFlRCxTQUFmLENBQWhDLENBQVosQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogU2V0cyBvbmUgb3IgbW9yZSBbY29va2llc10oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmRyaXZlci8jY29va2llcykgZm9yIHRoZSBjdXJyZW50IHBhZ2UuIE1ha2Ugc3VyZSB5b3UgYXJlXG4gKiBvbiB0aGUgcGFnZSB0aGF0IHNob3VsZCByZWNlaXZlIHRoZSBjb29raWUuIFlvdSBjYW4ndCBzZXQgYSBjb29raWUgZm9yIGFuIGFyYml0cmFyeSBwYWdlIHdpdGhvdXRcbiAqIGJlaW5nIG9uIHRoYXQgcGFnZS5cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6c2V0Q29va2llcy5qc1xuICAgIGl0KCdzaG91bGQgc2V0IGEgY29va2llIGZvciB0aGUgcGFnZScsICgpID0+IHtcbiAgICAgICAgYnJvd3Nlci51cmwoJy8nKVxuXG4gICAgICAgIC8vIHNldCBhIHNpbmdsZSBjb29raWVcbiAgICAgICAgYnJvd3Nlci5zZXRDb29raWVzKHtcbiAgICAgICAgICAgIG5hbWU6ICd0ZXN0MScsXG4gICAgICAgICAgICB2YWx1ZTogJ29uZSdcbiAgICAgICAgICAgIC8vIFRoZSBiZWxvdyBvcHRpb25zIGFyZSBvcHRpb25hbFxuICAgICAgICAgICAgLy8gcGF0aDogJy9mb28nLCAvLyBUaGUgY29va2llIHBhdGguIERlZmF1bHRzIHRvIFwiL1wiXG4gICAgICAgICAgICAvLyBkb21haW46ICcuZXhhbXBsZS5jb20nLCAvLyBUaGUgZG9tYWluIHRoZSBjb29raWUgaXMgdmlzaWJsZSB0by4gRGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgYnJvd3NpbmcgY29udGV4dOKAmXMgYWN0aXZlIGRvY3VtZW504oCZcyBVUkwgZG9tYWluXG4gICAgICAgICAgICAvLyBzZWN1cmU6IHRydWUsIC8vIFdoZXRoZXIgdGhlIGNvb2tpZSBpcyBhIHNlY3VyZSBjb29raWUuIERlZmF1bHRzIHRvIGZhbHNlXG4gICAgICAgICAgICAvLyBodHRwT25seTogdHJ1ZSwgLy8gV2hldGhlciB0aGUgY29va2llIGlzIGFuIEhUVFAgb25seSBjb29raWUuIERlZmF1bHRzIHRvIGZhbHNlXG4gICAgICAgICAgICAvLyBleHBpcnk6IDE1NTEzOTM4NzUgLy8gV2hlbiB0aGUgY29va2llIGV4cGlyZXMsIHNwZWNpZmllZCBpbiBzZWNvbmRzIHNpbmNlIFVuaXggRXBvY2hcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZXQgbXVsdGlwbGUgY29va2llc1xuICAgICAgICBicm93c2VyLnNldENvb2tpZXMoW1xuICAgICAgICAgICAge25hbWU6ICd0ZXN0MicsIHZhbHVlOiAndHdvJ30sXG4gICAgICAgICAgICB7bmFtZTogJ3Rlc3QzJywgdmFsdWU6ICd0aHJlZSd9XG4gICAgICAgIF0pXG5cbiAgICAgICAgY29uc3QgY29va2llcyA9IGJyb3dzZXIuZ2V0Q29va2llcygpXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb2tpZXMpO1xuICAgICAgICAvLyBvdXRwdXRzOlxuICAgICAgICAvLyBbXG4gICAgICAgIC8vICAgICAge25hbWU6ICd0ZXN0MScsIHZhbHVlOiAnb25lJywgZG9tYWluOiAnd3d3LmV4YW1wbGUuY29tJ30sXG4gICAgICAgIC8vICAgICAge25hbWU6ICd0ZXN0MicsIHZhbHVlOiAndHdvJywgZG9tYWluOiAnd3d3LmV4YW1wbGUuY29tJ30sXG4gICAgICAgIC8vICAgICAge25hbWU6ICd0ZXN0MycsIHZhbHVlOiAndGhyZWUnLCBkb21haW46ICd3d3cuZXhhbXBsZS5jb20nfVxuICAgICAgICAvLyBdXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGJyb3dzZXIuc2V0Q29va2llc1xuICogQHBhcmFtIHtPYmplY3R9IGNvb2tpZSBjb29raWUgb2JqZWN0IG9yIG9iamVjdCBhcnJheVxuICogQHVzZXMgcHJvdG9jb2wvYWRkQ29va2llXG4gKiBAdHlwZSBjb29raWVcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNldENvb2tpZXMoY29va2llT2Jqcykge1xuICAgIGNvbnN0IGNvb2tpZU9ianNMaXN0ID0gIUFycmF5LmlzQXJyYXkoY29va2llT2JqcykgPyBbY29va2llT2Jqc10gOiBjb29raWVPYmpzXG5cbiAgICBpZiAoY29va2llT2Jqc0xpc3Quc29tZShvYmogPT4gKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGlucHV0IChzZWUgaHR0cHM6Ly93ZWJkcml2ZXIuaW8vZG9jcy9hcGkvYnJvd3Nlci9zZXRDb29raWVzLmh0bWwgZm9yIGRvY3VtZW50YXRpb24uJylcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoY29va2llT2Jqc0xpc3QubWFwKGNvb2tpZU9iaiA9PiB0aGlzLmFkZENvb2tpZShjb29raWVPYmopKSlcbn1cbiJdfQ==