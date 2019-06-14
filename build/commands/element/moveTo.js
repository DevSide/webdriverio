"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = moveTo;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Move the mouse by an offset of the specified element. If no element is specified,
 * the move is relative to the current mouse cursor. If an element is provided but
 * no offset, the mouse will be moved to the center of the element. If the element
 * is not visible, it will be scrolled into view.
 *
 * @param {Number=} xoffset  X offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element.
 * @param {Number=} yoffset  Y offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element.
 *
 * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidmoveto
 * @type protocol
 */
async function moveTo(xoffset, yoffset) {
  if (!this.isW3C) {
    return this.moveToElement(this.elementId, xoffset, yoffset);
  }
  /**
   * get rect of element
   */


  const {
    x,
    y,
    width,
    height
  } = await (0, _utils.getElementRect)(this);
  const newXoffset = parseInt(x + (typeof xoffset === 'number' ? xoffset : width / 2), 10);
  const newYoffset = parseInt(y + (typeof yoffset === 'number' ? yoffset : height / 2), 10);
  /**
   * W3C way of handle the mouse move actions
   */

  return this.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: {
      pointerType: 'mouse'
    },
    actions: [{
      type: 'pointerMove',
      duration: 0,
      x: newXoffset,
      y: newYoffset
    }]
  }]).then(() => this.releaseActions());
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L21vdmVUby5qcyJdLCJuYW1lcyI6WyJtb3ZlVG8iLCJ4b2Zmc2V0IiwieW9mZnNldCIsImlzVzNDIiwibW92ZVRvRWxlbWVudCIsImVsZW1lbnRJZCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJuZXdYb2Zmc2V0IiwicGFyc2VJbnQiLCJuZXdZb2Zmc2V0IiwicGVyZm9ybUFjdGlvbnMiLCJ0eXBlIiwiaWQiLCJwYXJhbWV0ZXJzIiwicG9pbnRlclR5cGUiLCJhY3Rpb25zIiwiZHVyYXRpb24iLCJ0aGVuIiwicmVsZWFzZUFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWNBOztBQWRBOzs7Ozs7Ozs7Ozs7O0FBZ0JlLGVBQWVBLE1BQWYsQ0FBdUJDLE9BQXZCLEVBQWdDQyxPQUFoQyxFQUF5QztBQUNwRCxNQUFJLENBQUMsS0FBS0MsS0FBVixFQUFpQjtBQUNiLFdBQU8sS0FBS0MsYUFBTCxDQUFtQixLQUFLQyxTQUF4QixFQUFtQ0osT0FBbkMsRUFBNENDLE9BQTVDLENBQVA7QUFDSDtBQUVEOzs7OztBQUdBLFFBQU07QUFBRUksSUFBQUEsQ0FBRjtBQUFLQyxJQUFBQSxDQUFMO0FBQVFDLElBQUFBLEtBQVI7QUFBZUMsSUFBQUE7QUFBZixNQUEwQixNQUFNLDJCQUFlLElBQWYsQ0FBdEM7QUFDQSxRQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0wsQ0FBQyxJQUFJLE9BQU9MLE9BQVAsS0FBbUIsUUFBbkIsR0FBOEJBLE9BQTlCLEdBQXlDTyxLQUFLLEdBQUcsQ0FBckQsQ0FBRixFQUE0RCxFQUE1RCxDQUEzQjtBQUNBLFFBQU1JLFVBQVUsR0FBR0QsUUFBUSxDQUFDSixDQUFDLElBQUksT0FBT0wsT0FBUCxLQUFtQixRQUFuQixHQUE4QkEsT0FBOUIsR0FBeUNPLE1BQU0sR0FBRyxDQUF0RCxDQUFGLEVBQTZELEVBQTdELENBQTNCO0FBRUE7Ozs7QUFHQSxTQUFPLEtBQUtJLGNBQUwsQ0FBb0IsQ0FBQztBQUN4QkMsSUFBQUEsSUFBSSxFQUFFLFNBRGtCO0FBRXhCQyxJQUFBQSxFQUFFLEVBQUUsU0FGb0I7QUFHeEJDLElBQUFBLFVBQVUsRUFBRTtBQUFFQyxNQUFBQSxXQUFXLEVBQUU7QUFBZixLQUhZO0FBSXhCQyxJQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUFFSixNQUFBQSxJQUFJLEVBQUUsYUFBUjtBQUF1QkssTUFBQUEsUUFBUSxFQUFFLENBQWpDO0FBQW9DYixNQUFBQSxDQUFDLEVBQUVJLFVBQXZDO0FBQW1ESCxNQUFBQSxDQUFDLEVBQUVLO0FBQXRELEtBQUQ7QUFKZSxHQUFELENBQXBCLEVBS0hRLElBTEcsQ0FLRSxNQUFNLEtBQUtDLGNBQUwsRUFMUixDQUFQO0FBTUgiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBNb3ZlIHRoZSBtb3VzZSBieSBhbiBvZmZzZXQgb2YgdGhlIHNwZWNpZmllZCBlbGVtZW50LiBJZiBubyBlbGVtZW50IGlzIHNwZWNpZmllZCxcbiAqIHRoZSBtb3ZlIGlzIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IG1vdXNlIGN1cnNvci4gSWYgYW4gZWxlbWVudCBpcyBwcm92aWRlZCBidXRcbiAqIG5vIG9mZnNldCwgdGhlIG1vdXNlIHdpbGwgYmUgbW92ZWQgdG8gdGhlIGNlbnRlciBvZiB0aGUgZWxlbWVudC4gSWYgdGhlIGVsZW1lbnRcbiAqIGlzIG5vdCB2aXNpYmxlLCBpdCB3aWxsIGJlIHNjcm9sbGVkIGludG8gdmlldy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcj19IHhvZmZzZXQgIFggb2Zmc2V0IHRvIG1vdmUgdG8sIHJlbGF0aXZlIHRvIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIGVsZW1lbnQuIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBtb3VzZSB3aWxsIG1vdmUgdG8gdGhlIG1pZGRsZSBvZiB0aGUgZWxlbWVudC5cbiAqIEBwYXJhbSB7TnVtYmVyPX0geW9mZnNldCAgWSBvZmZzZXQgdG8gbW92ZSB0bywgcmVsYXRpdmUgdG8gdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgZWxlbWVudC4gSWYgbm90IHNwZWNpZmllZCwgdGhlIG1vdXNlIHdpbGwgbW92ZSB0byB0aGUgbWlkZGxlIG9mIHRoZSBlbGVtZW50LlxuICpcbiAqIEBzZWUgIGh0dHBzOi8vZ2l0aHViLmNvbS9TZWxlbml1bUhRL3NlbGVuaXVtL3dpa2kvSnNvbldpcmVQcm90b2NvbCNzZXNzaW9uc2Vzc2lvbmlkbW92ZXRvXG4gKiBAdHlwZSBwcm90b2NvbFxuICovXG5cbmltcG9ydCB7IGdldEVsZW1lbnRSZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1vdmVUbyAoeG9mZnNldCwgeW9mZnNldCkge1xuICAgIGlmICghdGhpcy5pc1czQykge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlVG9FbGVtZW50KHRoaXMuZWxlbWVudElkLCB4b2Zmc2V0LCB5b2Zmc2V0KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCByZWN0IG9mIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IGF3YWl0IGdldEVsZW1lbnRSZWN0KHRoaXMpXG4gICAgY29uc3QgbmV3WG9mZnNldCA9IHBhcnNlSW50KHggKyAodHlwZW9mIHhvZmZzZXQgPT09ICdudW1iZXInID8geG9mZnNldCA6ICh3aWR0aCAvIDIpKSwgMTApXG4gICAgY29uc3QgbmV3WW9mZnNldCA9IHBhcnNlSW50KHkgKyAodHlwZW9mIHlvZmZzZXQgPT09ICdudW1iZXInID8geW9mZnNldCA6IChoZWlnaHQgLyAyKSksIDEwKVxuXG4gICAgLyoqXG4gICAgICogVzNDIHdheSBvZiBoYW5kbGUgdGhlIG1vdXNlIG1vdmUgYWN0aW9uc1xuICAgICAqL1xuICAgIHJldHVybiB0aGlzLnBlcmZvcm1BY3Rpb25zKFt7XG4gICAgICAgIHR5cGU6ICdwb2ludGVyJyxcbiAgICAgICAgaWQ6ICdmaW5nZXIxJyxcbiAgICAgICAgcGFyYW1ldGVyczogeyBwb2ludGVyVHlwZTogJ21vdXNlJyB9LFxuICAgICAgICBhY3Rpb25zOiBbeyB0eXBlOiAncG9pbnRlck1vdmUnLCBkdXJhdGlvbjogMCwgeDogbmV3WG9mZnNldCwgeTogbmV3WW9mZnNldCB9XVxuICAgIH1dKS50aGVuKCgpID0+IHRoaXMucmVsZWFzZUFjdGlvbnMoKSlcbn1cbiJdfQ==