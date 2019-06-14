"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pause;

require("source-map-support/register");

/**
 *
 * Pauses execution for a specific amount of time. It is recommended to not use this command to wait for an
 * element to show up. In order to avoid flaky test results it is better to use commands like
 * [`waitforExist`](/docs/api/element/waitForExist.html) or other waitFor* commands.
 *
 * <example>
    :pause.js
    it('should pause the execution', () => {
        const starttime = new Date().getTime()
        browser.pause(3000)
        const endtime = new Date().getTime()
        console.log(endtime - starttime) // outputs: 3000
    });
 * </example>
 *
 * @alias browser.pause
 * @param {Number} milliseconds time in ms
 * @type utility
 *
 */
function pause(milliseconds = 1000) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3BhdXNlLmpzIl0sIm5hbWVzIjpbInBhdXNlIiwibWlsbGlzZWNvbmRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JlLFNBQVNBLEtBQVQsQ0FBZ0JDLFlBQVksR0FBRyxJQUEvQixFQUFxQztBQUNoRCxTQUFPLElBQUlDLE9BQUosQ0FBYUMsT0FBRCxJQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsWUFBVixDQUFuQyxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBQYXVzZXMgZXhlY3V0aW9uIGZvciBhIHNwZWNpZmljIGFtb3VudCBvZiB0aW1lLiBJdCBpcyByZWNvbW1lbmRlZCB0byBub3QgdXNlIHRoaXMgY29tbWFuZCB0byB3YWl0IGZvciBhblxuICogZWxlbWVudCB0byBzaG93IHVwLiBJbiBvcmRlciB0byBhdm9pZCBmbGFreSB0ZXN0IHJlc3VsdHMgaXQgaXMgYmV0dGVyIHRvIHVzZSBjb21tYW5kcyBsaWtlXG4gKiBbYHdhaXRmb3JFeGlzdGBdKC9kb2NzL2FwaS9lbGVtZW50L3dhaXRGb3JFeGlzdC5odG1sKSBvciBvdGhlciB3YWl0Rm9yKiBjb21tYW5kcy5cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6cGF1c2UuanNcbiAgICBpdCgnc2hvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXJ0dGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgIGJyb3dzZXIucGF1c2UoMzAwMClcbiAgICAgICAgY29uc3QgZW5kdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgIGNvbnNvbGUubG9nKGVuZHRpbWUgLSBzdGFydHRpbWUpIC8vIG91dHB1dHM6IDMwMDBcbiAgICB9KTtcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAYWxpYXMgYnJvd3Nlci5wYXVzZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbGxpc2Vjb25kcyB0aW1lIGluIG1zXG4gKiBAdHlwZSB1dGlsaXR5XG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhdXNlIChtaWxsaXNlY29uZHMgPSAxMDAwKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1pbGxpc2Vjb25kcykpXG59XG4iXX0=