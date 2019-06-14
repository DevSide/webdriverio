"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = call;

require("source-map-support/register");

/**
 * You can use `call` to execute any async action within your test spec. The command itself
 * is treated like a synchronous function. It accepts promises and stops the execution until
 * the promise has resolved.
 *
 * <example>
    :call.js
    it('some testing here', () => {
        browser.url('http://google.com')
        // make an asynchronous call using any 3rd party library supporting promises
        // e.g. call to backend or db to inject fixture data
        browser.call(() => {
            return somePromiseLibrary.someMethod().then(() => {
                // ...
            })
        })
        // example for async call to 3rd party library that doesn't support promises
        browser.call(() => {
            return new Promise((resolve, reject) => {
                someOtherNodeLibrary.someMethod(param1, (err, res) => {
                    if (err) {
                        return reject(err)
                    }
                    resolve(res)
                })
            })
        })
        // continue synchronously
        $('#elemA').click()
        $('.firstname').setValue('webdriverbot')
    });
 * </example>
 *
 * @alias browser.call
 * @param {Function} callback  function to be called
 * @type utility
 *
 */
function call(fn = () => {}) {
  return fn();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL2NhbGwuanMiXSwibmFtZXMiOlsiY2FsbCIsImZuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q2UsU0FBU0EsSUFBVCxDQUFlQyxFQUFFLEdBQUcsTUFBTSxDQUFFLENBQTVCLEVBQThCO0FBQ3pDLFNBQU9BLEVBQUUsRUFBVDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBZb3UgY2FuIHVzZSBgY2FsbGAgdG8gZXhlY3V0ZSBhbnkgYXN5bmMgYWN0aW9uIHdpdGhpbiB5b3VyIHRlc3Qgc3BlYy4gVGhlIGNvbW1hbmQgaXRzZWxmXG4gKiBpcyB0cmVhdGVkIGxpa2UgYSBzeW5jaHJvbm91cyBmdW5jdGlvbi4gSXQgYWNjZXB0cyBwcm9taXNlcyBhbmQgc3RvcHMgdGhlIGV4ZWN1dGlvbiB1bnRpbFxuICogdGhlIHByb21pc2UgaGFzIHJlc29sdmVkLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpjYWxsLmpzXG4gICAgaXQoJ3NvbWUgdGVzdGluZyBoZXJlJywgKCkgPT4ge1xuICAgICAgICBicm93c2VyLnVybCgnaHR0cDovL2dvb2dsZS5jb20nKVxuICAgICAgICAvLyBtYWtlIGFuIGFzeW5jaHJvbm91cyBjYWxsIHVzaW5nIGFueSAzcmQgcGFydHkgbGlicmFyeSBzdXBwb3J0aW5nIHByb21pc2VzXG4gICAgICAgIC8vIGUuZy4gY2FsbCB0byBiYWNrZW5kIG9yIGRiIHRvIGluamVjdCBmaXh0dXJlIGRhdGFcbiAgICAgICAgYnJvd3Nlci5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzb21lUHJvbWlzZUxpYnJhcnkuc29tZU1ldGhvZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIC4uLlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gZXhhbXBsZSBmb3IgYXN5bmMgY2FsbCB0byAzcmQgcGFydHkgbGlicmFyeSB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBwcm9taXNlc1xuICAgICAgICBicm93c2VyLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBzb21lT3RoZXJOb2RlTGlicmFyeS5zb21lTWV0aG9kKHBhcmFtMSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAvLyBjb250aW51ZSBzeW5jaHJvbm91c2x5XG4gICAgICAgICQoJyNlbGVtQScpLmNsaWNrKClcbiAgICAgICAgJCgnLmZpcnN0bmFtZScpLnNldFZhbHVlKCd3ZWJkcml2ZXJib3QnKVxuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBicm93c2VyLmNhbGxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrICBmdW5jdGlvbiB0byBiZSBjYWxsZWRcbiAqIEB0eXBlIHV0aWxpdHlcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsbCAoZm4gPSAoKSA9PiB7fSkge1xuICAgIHJldHVybiBmbigpXG59XG4iXX0=