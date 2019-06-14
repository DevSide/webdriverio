"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = doubleClick;

require("source-map-support/register");

/**
 *
 * Double-click on an element.
 *
 * <example>
    :example.html
    <button id="myButton" ondblclick="document.getElementById('someText').innerHTML='I was dblclicked'">Click me</button>
    <div id="someText">I was not clicked</div>
    :doubleClick.js
    it('should demonstrate the doubleClick command', () => {
        const myButton = $('#myButton')
        myButton.doubleClick()

        const value = myButton.getText()
        assert(value === 'I was dblclicked') // true
    })
 * </example>
 *
 * @alias element.doubleClick
 * @uses protocol/element, protocol/moveTo, protocol/doDoubleClick, protocol/touchDoubleClick
 * @type action
 *
 */
async function doubleClick() {
  /**
   * move to element
   */
  await this.moveTo();

  if (!this.isW3C) {
    return this.positionDoubleClick();
  }
  /**
   * W3C way of handle the double click actions
   */


  await this.performActions([{
    type: 'pointer',
    id: 'pointer1',
    parameters: {
      pointerType: 'mouse'
    },
    actions: [{
      type: 'pointerDown',
      button: 0
    }, {
      type: 'pointerUp',
      button: 0
    }, {
      type: 'pause',
      duration: 10
    }, {
      type: 'pointerDown',
      button: 0
    }, {
      type: 'pointerUp',
      button: 0
    }]
  }]);
  return this.releaseActions();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2RvdWJsZUNsaWNrLmpzIl0sIm5hbWVzIjpbImRvdWJsZUNsaWNrIiwibW92ZVRvIiwiaXNXM0MiLCJwb3NpdGlvbkRvdWJsZUNsaWNrIiwicGVyZm9ybUFjdGlvbnMiLCJ0eXBlIiwiaWQiLCJwYXJhbWV0ZXJzIiwicG9pbnRlclR5cGUiLCJhY3Rpb25zIiwiYnV0dG9uIiwiZHVyYXRpb24iLCJyZWxlYXNlQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJlLGVBQWVBLFdBQWYsR0FBOEI7QUFDekM7OztBQUdBLFFBQU0sS0FBS0MsTUFBTCxFQUFOOztBQUVBLE1BQUksQ0FBQyxLQUFLQyxLQUFWLEVBQWlCO0FBQ2IsV0FBTyxLQUFLQyxtQkFBTCxFQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHQSxRQUFNLEtBQUtDLGNBQUwsQ0FBb0IsQ0FBQztBQUN2QkMsSUFBQUEsSUFBSSxFQUFFLFNBRGlCO0FBRXZCQyxJQUFBQSxFQUFFLEVBQUUsVUFGbUI7QUFHdkJDLElBQUFBLFVBQVUsRUFBRTtBQUFFQyxNQUFBQSxXQUFXLEVBQUU7QUFBZixLQUhXO0FBSXZCQyxJQUFBQSxPQUFPLEVBQUUsQ0FDTDtBQUFFSixNQUFBQSxJQUFJLEVBQUUsYUFBUjtBQUF1QkssTUFBQUEsTUFBTSxFQUFFO0FBQS9CLEtBREssRUFFTDtBQUFFTCxNQUFBQSxJQUFJLEVBQUUsV0FBUjtBQUFxQkssTUFBQUEsTUFBTSxFQUFFO0FBQTdCLEtBRkssRUFHTDtBQUFFTCxNQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQk0sTUFBQUEsUUFBUSxFQUFFO0FBQTNCLEtBSEssRUFJTDtBQUFFTixNQUFBQSxJQUFJLEVBQUUsYUFBUjtBQUF1QkssTUFBQUEsTUFBTSxFQUFFO0FBQS9CLEtBSkssRUFLTDtBQUFFTCxNQUFBQSxJQUFJLEVBQUUsV0FBUjtBQUFxQkssTUFBQUEsTUFBTSxFQUFFO0FBQTdCLEtBTEs7QUFKYyxHQUFELENBQXBCLENBQU47QUFhQSxTQUFPLEtBQUtFLGNBQUwsRUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogRG91YmxlLWNsaWNrIG9uIGFuIGVsZW1lbnQuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmV4YW1wbGUuaHRtbFxuICAgIDxidXR0b24gaWQ9XCJteUJ1dHRvblwiIG9uZGJsY2xpY2s9XCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29tZVRleHQnKS5pbm5lckhUTUw9J0kgd2FzIGRibGNsaWNrZWQnXCI+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICA8ZGl2IGlkPVwic29tZVRleHRcIj5JIHdhcyBub3QgY2xpY2tlZDwvZGl2PlxuICAgIDpkb3VibGVDbGljay5qc1xuICAgIGl0KCdzaG91bGQgZGVtb25zdHJhdGUgdGhlIGRvdWJsZUNsaWNrIGNvbW1hbmQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG15QnV0dG9uID0gJCgnI215QnV0dG9uJylcbiAgICAgICAgbXlCdXR0b24uZG91YmxlQ2xpY2soKVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbXlCdXR0b24uZ2V0VGV4dCgpXG4gICAgICAgIGFzc2VydCh2YWx1ZSA9PT0gJ0kgd2FzIGRibGNsaWNrZWQnKSAvLyB0cnVlXG4gICAgfSlcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAYWxpYXMgZWxlbWVudC5kb3VibGVDbGlja1xuICogQHVzZXMgcHJvdG9jb2wvZWxlbWVudCwgcHJvdG9jb2wvbW92ZVRvLCBwcm90b2NvbC9kb0RvdWJsZUNsaWNrLCBwcm90b2NvbC90b3VjaERvdWJsZUNsaWNrXG4gKiBAdHlwZSBhY3Rpb25cbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRvdWJsZUNsaWNrICgpIHtcbiAgICAvKipcbiAgICAgKiBtb3ZlIHRvIGVsZW1lbnRcbiAgICAgKi9cbiAgICBhd2FpdCB0aGlzLm1vdmVUbygpXG5cbiAgICBpZiAoIXRoaXMuaXNXM0MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25Eb3VibGVDbGljaygpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVzNDIHdheSBvZiBoYW5kbGUgdGhlIGRvdWJsZSBjbGljayBhY3Rpb25zXG4gICAgICovXG4gICAgYXdhaXQgdGhpcy5wZXJmb3JtQWN0aW9ucyhbe1xuICAgICAgICB0eXBlOiAncG9pbnRlcicsXG4gICAgICAgIGlkOiAncG9pbnRlcjEnLFxuICAgICAgICBwYXJhbWV0ZXJzOiB7IHBvaW50ZXJUeXBlOiAnbW91c2UnIH0sXG4gICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgIHsgdHlwZTogJ3BvaW50ZXJEb3duJywgYnV0dG9uOiAwIH0sXG4gICAgICAgICAgICB7IHR5cGU6ICdwb2ludGVyVXAnLCBidXR0b246IDAgfSxcbiAgICAgICAgICAgIHsgdHlwZTogJ3BhdXNlJywgZHVyYXRpb246IDEwIH0sXG4gICAgICAgICAgICB7IHR5cGU6ICdwb2ludGVyRG93bicsIGJ1dHRvbjogMCB9LFxuICAgICAgICAgICAgeyB0eXBlOiAncG9pbnRlclVwJywgYnV0dG9uOiAwIH1cbiAgICAgICAgXVxuICAgIH1dKVxuXG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUFjdGlvbnMoKVxufVxuIl19