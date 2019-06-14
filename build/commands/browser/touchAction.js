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
        browser.touchAction({
            action: 'tap',
            element: screen
        });

        // simple touch action x y variables
        // tap location is 30px right and 20px down relative from the viewport
        browser.touchAction({
            action: 'tap',
            x: 30,
            y:20
        })

        // simple touch action x y variables
        // tap location is 30px right and 20px down relative from the center of the element
        browser.touchAction({
            action: 'tap',
            x: 30,
            y:20,
            element: screen
        })

        // multi action on an element
        // drag&drop from position 200x200 down 100px on the screen
        browser.touchAction([
            { action: 'press', x: 200, y: 200 },
            { action: 'moveTo', x: 200, y: 300 },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3RvdWNoQWN0aW9uLmpzIl0sIm5hbWVzIjpbInRvdWNoQWN0aW9uIiwiYXJncyIsInRvdWNoQWN0aW9uQ29tbWFuZCIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUE2REE7O0FBN0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRGUsU0FBU0EsV0FBVCxDQUFzQixHQUFHQyxJQUF6QixFQUErQjtBQUMxQyxTQUFPQyxzQkFBbUJDLEtBQW5CLENBQXlCLElBQXpCLEVBQStCRixJQUEvQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBUaGUgVG91Y2ggQWN0aW9uIEFQSSBwcm92aWRlcyB0aGUgYmFzaXMgb2YgYWxsIGdlc3R1cmVzIHRoYXQgY2FuIGJlIGF1dG9tYXRlZCBpbiBBcHBpdW0uXG4gKiBJdCBpcyBjdXJyZW50bHkgb25seSBhdmFpbGFibGUgdG8gbmF0aXZlIGFwcHMgYW5kIGNhbiBub3QgYmUgdXNlZCB0byBpbnRlcmFjdCB3aXRoIHdlYmFwcHMuXG4gKiBBdCBpdHMgY29yZSBpcyB0aGUgYWJpbGl0eSB0byBjaGFpbiB0b2dldGhlciBfYWQgaG9jXyBpbmRpdmlkdWFsIGFjdGlvbnMsIHdoaWNoIHdpbGwgdGhlbiBiZVxuICogYXBwbGllZCB0byBhbiBlbGVtZW50IGluIHRoZSBhcHBsaWNhdGlvbiBvbiB0aGUgZGV2aWNlLiBUaGUgYmFzaWMgYWN0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIGFyZTpcbiAqXG4gKiAtIHByZXNzIChwYXNzIGVsZW1lbnQgb3IgKHgseSkgb3IgYm90aClcbiAqIC0gbG9uZ1ByZXNzIChwYXNzIGVsZW1lbnQgb3IgKHgseSkgb3IgYm90aClcbiAqIC0gdGFwIChwYXNzIGVsZW1lbnQgb3IgKHgseSkgb3IgYm90aClcbiAqIC0gbW92ZVRvIChwYXNzIGFic29sdXRlIHgseSBjb29yZGluYXRlcylcbiAqIC0gd2FpdCAocGFzcyBtcyAoYXMgbWlsbGlzZWNvbmRzKSlcbiAqIC0gcmVsZWFzZSAobm8gYXJndW1lbnRzKVxuICpcbiAqIDxleGFtcGxlPlxuICAgIDp0b3VjaEFjdGlvbi5qc1xuICAgIGl0KCdzaG91bGQgZG8gYSB0b3VjaCBnZXN0dXJlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzY3JlZW4gPSAkKCcvL1VJVGV4dGJveCcpO1xuXG4gICAgICAgIC8vIHNpbXBsZSB0b3VjaCBhY3Rpb24gb24gZWxlbWVudFxuICAgICAgICBicm93c2VyLnRvdWNoQWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3RhcCcsXG4gICAgICAgICAgICBlbGVtZW50OiBzY3JlZW5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc2ltcGxlIHRvdWNoIGFjdGlvbiB4IHkgdmFyaWFibGVzXG4gICAgICAgIC8vIHRhcCBsb2NhdGlvbiBpcyAzMHB4IHJpZ2h0IGFuZCAyMHB4IGRvd24gcmVsYXRpdmUgZnJvbSB0aGUgdmlld3BvcnRcbiAgICAgICAgYnJvd3Nlci50b3VjaEFjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb246ICd0YXAnLFxuICAgICAgICAgICAgeDogMzAsXG4gICAgICAgICAgICB5OjIwXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2ltcGxlIHRvdWNoIGFjdGlvbiB4IHkgdmFyaWFibGVzXG4gICAgICAgIC8vIHRhcCBsb2NhdGlvbiBpcyAzMHB4IHJpZ2h0IGFuZCAyMHB4IGRvd24gcmVsYXRpdmUgZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBlbGVtZW50XG4gICAgICAgIGJyb3dzZXIudG91Y2hBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uOiAndGFwJyxcbiAgICAgICAgICAgIHg6IDMwLFxuICAgICAgICAgICAgeToyMCxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHNjcmVlblxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIG11bHRpIGFjdGlvbiBvbiBhbiBlbGVtZW50XG4gICAgICAgIC8vIGRyYWcmZHJvcCBmcm9tIHBvc2l0aW9uIDIwMHgyMDAgZG93biAxMDBweCBvbiB0aGUgc2NyZWVuXG4gICAgICAgIGJyb3dzZXIudG91Y2hBY3Rpb24oW1xuICAgICAgICAgICAgeyBhY3Rpb246ICdwcmVzcycsIHg6IDIwMCwgeTogMjAwIH0sXG4gICAgICAgICAgICB7IGFjdGlvbjogJ21vdmVUbycsIHg6IDIwMCwgeTogMzAwIH0sXG4gICAgICAgICAgICAncmVsZWFzZSdcbiAgICAgICAgXSlcbiAgICB9KTtcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3RbXX0gYWN0aW9uICAgIGFjdGlvbiB0byBleGVjdXRlXG4gKlxuICogQHNlZSBodHRwczovL3NhdWNlbGFicy5jb20vYmxvZy9hcHBpdW0tc2F1Y2UtbGFicy1ib290Y2FtcC1jaGFwdGVyLTItdG91Y2gtYWN0aW9uc1xuICogQHR5cGUgbW9iaWxlXG4gKiBAZm9yIGFuZHJvaWQsIGlvc1xuICogQHVzZXMgbW9iaWxlL3BlcmZvcm1Ub3VjaEFjdGlvbiwgbW9iaWxlL3BlcmZvcm1NdWx0aUFjdGlvblxuICpcbiAqL1xuXG5pbXBvcnQgeyB0b3VjaEFjdGlvbiBhcyB0b3VjaEFjdGlvbkNvbW1hbmQgfSBmcm9tICcuLi9jb25zdGFudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG91Y2hBY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdG91Y2hBY3Rpb25Db21tYW5kLmFwcGx5KHRoaXMsIGFyZ3MpXG59XG4iXX0=