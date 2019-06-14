"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = touchAction;

require("source-map-support/register");

var _constant = require("../constant");

/**
 *
 * The Touch Action API provides the basis of all gestures that can be automated in Appium.
 * It is currently only available to native apps and can not be used to interact with webapps.
 * At its core is the ability to chain together _ad hoc_ individual actions, which will then be
 * applied to an element in the application on the device. The basic actions that can be used are:
 *
 * - press (pass element or (x,y) or both)
 * - longPress (pass element or (x,y) or both)
 * - tap (pass element or (x,y) or both)
 * - moveTo (pass absolute x,y coordinates)
 * - wait (pass ms (as milliseconds))
 * - release (no arguments)
 *
 * <example>
    :touchAction.js
    it('should do a touch gesture', function () {
        const screen = $('//UITextbox');

        // simple touch action on element
        screen.touchAction('tap');

        // simple touch action using selector and x y variables
        // tap location is 30px right and 20px down relative from the center of the element
        screen.touchAction({
            action: 'tap', x: 30, y:20
        })

        // multi action on an element (drag&drop)
        screen.touchAction([
            'press',
            { action: 'moveTo', x: 200, y: 300 },
            'release'
        ])

        // drag&drop to element
        const otherElement = $('//UIAApplication[1]/UIAElement[2]')
        screen.touchAction([
            'press',
            { action: 'moveTo', element: otherElement },
            'release'
        ])
    });
 * </example>
 *
 * @param {String|Object[]} action    action to execute
 *
 * @see https://saucelabs.com/blog/appium-sauce-labs-bootcamp-chapter-2-touch-actions
 * @type mobile
 * @for android, ios
 * @uses mobile/performTouchAction, mobile/performMultiAction
 *
 */
function touchAction(...args) {
  return _constant.touchAction.apply(this, args);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3RvdWNoQWN0aW9uLmpzIl0sIm5hbWVzIjpbInRvdWNoQWN0aW9uIiwiYXJncyIsInRvdWNoQWN0aW9uQ29tbWFuZCIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFzREE7O0FBdERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEZSxTQUFTQSxXQUFULENBQXNCLEdBQUdDLElBQXpCLEVBQStCO0FBQzFDLFNBQU9DLHNCQUFtQkMsS0FBbkIsQ0FBeUIsSUFBekIsRUFBK0JGLElBQS9CLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFRoZSBUb3VjaCBBY3Rpb24gQVBJIHByb3ZpZGVzIHRoZSBiYXNpcyBvZiBhbGwgZ2VzdHVyZXMgdGhhdCBjYW4gYmUgYXV0b21hdGVkIGluIEFwcGl1bS5cbiAqIEl0IGlzIGN1cnJlbnRseSBvbmx5IGF2YWlsYWJsZSB0byBuYXRpdmUgYXBwcyBhbmQgY2FuIG5vdCBiZSB1c2VkIHRvIGludGVyYWN0IHdpdGggd2ViYXBwcy5cbiAqIEF0IGl0cyBjb3JlIGlzIHRoZSBhYmlsaXR5IHRvIGNoYWluIHRvZ2V0aGVyIF9hZCBob2NfIGluZGl2aWR1YWwgYWN0aW9ucywgd2hpY2ggd2lsbCB0aGVuIGJlXG4gKiBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgaW4gdGhlIGFwcGxpY2F0aW9uIG9uIHRoZSBkZXZpY2UuIFRoZSBiYXNpYyBhY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgYXJlOlxuICpcbiAqIC0gcHJlc3MgKHBhc3MgZWxlbWVudCBvciAoeCx5KSBvciBib3RoKVxuICogLSBsb25nUHJlc3MgKHBhc3MgZWxlbWVudCBvciAoeCx5KSBvciBib3RoKVxuICogLSB0YXAgKHBhc3MgZWxlbWVudCBvciAoeCx5KSBvciBib3RoKVxuICogLSBtb3ZlVG8gKHBhc3MgYWJzb2x1dGUgeCx5IGNvb3JkaW5hdGVzKVxuICogLSB3YWl0IChwYXNzIG1zIChhcyBtaWxsaXNlY29uZHMpKVxuICogLSByZWxlYXNlIChubyBhcmd1bWVudHMpXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOnRvdWNoQWN0aW9uLmpzXG4gICAgaXQoJ3Nob3VsZCBkbyBhIHRvdWNoIGdlc3R1cmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNjcmVlbiA9ICQoJy8vVUlUZXh0Ym94Jyk7XG5cbiAgICAgICAgLy8gc2ltcGxlIHRvdWNoIGFjdGlvbiBvbiBlbGVtZW50XG4gICAgICAgIHNjcmVlbi50b3VjaEFjdGlvbigndGFwJyk7XG5cbiAgICAgICAgLy8gc2ltcGxlIHRvdWNoIGFjdGlvbiB1c2luZyBzZWxlY3RvciBhbmQgeCB5IHZhcmlhYmxlc1xuICAgICAgICAvLyB0YXAgbG9jYXRpb24gaXMgMzBweCByaWdodCBhbmQgMjBweCBkb3duIHJlbGF0aXZlIGZyb20gdGhlIGNlbnRlciBvZiB0aGUgZWxlbWVudFxuICAgICAgICBzY3JlZW4udG91Y2hBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uOiAndGFwJywgeDogMzAsIHk6MjBcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBtdWx0aSBhY3Rpb24gb24gYW4gZWxlbWVudCAoZHJhZyZkcm9wKVxuICAgICAgICBzY3JlZW4udG91Y2hBY3Rpb24oW1xuICAgICAgICAgICAgJ3ByZXNzJyxcbiAgICAgICAgICAgIHsgYWN0aW9uOiAnbW92ZVRvJywgeDogMjAwLCB5OiAzMDAgfSxcbiAgICAgICAgICAgICdyZWxlYXNlJ1xuICAgICAgICBdKVxuXG4gICAgICAgIC8vIGRyYWcmZHJvcCB0byBlbGVtZW50XG4gICAgICAgIGNvbnN0IG90aGVyRWxlbWVudCA9ICQoJy8vVUlBQXBwbGljYXRpb25bMV0vVUlBRWxlbWVudFsyXScpXG4gICAgICAgIHNjcmVlbi50b3VjaEFjdGlvbihbXG4gICAgICAgICAgICAncHJlc3MnLFxuICAgICAgICAgICAgeyBhY3Rpb246ICdtb3ZlVG8nLCBlbGVtZW50OiBvdGhlckVsZW1lbnQgfSxcbiAgICAgICAgICAgICdyZWxlYXNlJ1xuICAgICAgICBdKVxuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdFtdfSBhY3Rpb24gICAgYWN0aW9uIHRvIGV4ZWN1dGVcbiAqXG4gKiBAc2VlIGh0dHBzOi8vc2F1Y2VsYWJzLmNvbS9ibG9nL2FwcGl1bS1zYXVjZS1sYWJzLWJvb3RjYW1wLWNoYXB0ZXItMi10b3VjaC1hY3Rpb25zXG4gKiBAdHlwZSBtb2JpbGVcbiAqIEBmb3IgYW5kcm9pZCwgaW9zXG4gKiBAdXNlcyBtb2JpbGUvcGVyZm9ybVRvdWNoQWN0aW9uLCBtb2JpbGUvcGVyZm9ybU11bHRpQWN0aW9uXG4gKlxuICovXG5cbmltcG9ydCB7IHRvdWNoQWN0aW9uIGFzIHRvdWNoQWN0aW9uQ29tbWFuZCB9IGZyb20gJy4uL2NvbnN0YW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b3VjaEFjdGlvbiAoLi4uYXJncykge1xuICAgIHJldHVybiB0b3VjaEFjdGlvbkNvbW1hbmQuYXBwbHkodGhpcywgYXJncylcbn1cbiJdfQ==