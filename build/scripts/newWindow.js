"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = newWindow;

require("source-map-support/register");

/**
 * opens new window via window.open
 * @param  {String} url            The URL to be loaded in the newly opened window.
 * @param  {String} windowName     A string name for the new window.
 * @param  {String} windowFeatures An optional parameter listing the features (size, position, scrollbars, etc.) of the new window as a string.
 *
 * @see  https://developer.mozilla.org/en-US/docs/Web/API/Window.open
 */
function newWindow(url, windowName = 'new window', windowFeatures = '') {
  window.open(url, windowName, windowFeatures);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL25ld1dpbmRvdy5qcyJdLCJuYW1lcyI6WyJuZXdXaW5kb3ciLCJ1cmwiLCJ3aW5kb3dOYW1lIiwid2luZG93RmVhdHVyZXMiLCJ3aW5kb3ciLCJvcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFRZSxTQUFTQSxTQUFULENBQW9CQyxHQUFwQixFQUF5QkMsVUFBVSxHQUFHLFlBQXRDLEVBQW9EQyxjQUFjLEdBQUcsRUFBckUsRUFBeUU7QUFDcEZDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixHQUFaLEVBQWlCQyxVQUFqQixFQUE2QkMsY0FBN0I7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogb3BlbnMgbmV3IHdpbmRvdyB2aWEgd2luZG93Lm9wZW5cbiAqIEBwYXJhbSAge1N0cmluZ30gdXJsICAgICAgICAgICAgVGhlIFVSTCB0byBiZSBsb2FkZWQgaW4gdGhlIG5ld2x5IG9wZW5lZCB3aW5kb3cuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHdpbmRvd05hbWUgICAgIEEgc3RyaW5nIG5hbWUgZm9yIHRoZSBuZXcgd2luZG93LlxuICogQHBhcmFtICB7U3RyaW5nfSB3aW5kb3dGZWF0dXJlcyBBbiBvcHRpb25hbCBwYXJhbWV0ZXIgbGlzdGluZyB0aGUgZmVhdHVyZXMgKHNpemUsIHBvc2l0aW9uLCBzY3JvbGxiYXJzLCBldGMuKSBvZiB0aGUgbmV3IHdpbmRvdyBhcyBhIHN0cmluZy5cbiAqXG4gKiBAc2VlICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93Lm9wZW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3V2luZG93ICh1cmwsIHdpbmRvd05hbWUgPSAnbmV3IHdpbmRvdycsIHdpbmRvd0ZlYXR1cmVzID0gJycpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsIHdpbmRvd05hbWUsIHdpbmRvd0ZlYXR1cmVzKVxufVxuIl19