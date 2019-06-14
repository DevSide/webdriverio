"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFocused;

require("source-map-support/register");

var _constants = require("../../constants");

var _utils = require("../../utils");

var _isFocused = _interopRequireDefault(require("../../scripts/isFocused"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Return true or false if the selected DOM-element currently has focus. If the selector matches
 * multiple elements, it will return true if one of the elements has focus.
 *
 * <example>
    :index.html
    <input name="login" autofocus="" />
    :hasFocus.js
    it('should detect the focus of an element', () => {
        browser.url('/');
        const loginInput = $('[name="login"]');
        console.log(loginInput.hasFocus()); // outputs: false

        loginInput.click();
        console.log(loginInput.hasFocus()); // outputs: true
    })
 * </example>
 *
 * @alias element.isFocused
 * @return {Boolean}         true if one of the matching elements has focus
 *
 * @uses protocol/execute
 * @type state
 *
 */
function isFocused() {
  return (0, _utils.getBrowserObject)(this).execute(_isFocused.default, {
    [_constants.ELEMENT_KEY]: this.elementId,
    // w3c compatible
    ELEMENT: this.elementId // jsonwp compatible

  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2lzRm9jdXNlZC5qcyJdLCJuYW1lcyI6WyJpc0ZvY3VzZWQiLCJleGVjdXRlIiwiaXNGb2N1c2VkU2NyaXB0IiwiRUxFTUVOVF9LRVkiLCJlbGVtZW50SWQiLCJFTEVNRU5UIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUEyQkE7O0FBQ0E7O0FBQ0E7Ozs7QUE3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JlLFNBQVNBLFNBQVQsR0FBc0I7QUFDakMsU0FBTyw2QkFBaUIsSUFBakIsRUFBdUJDLE9BQXZCLENBQStCQyxrQkFBL0IsRUFBZ0Q7QUFDbkQsS0FBQ0Msc0JBQUQsR0FBZSxLQUFLQyxTQUQrQjtBQUNwQjtBQUMvQkMsSUFBQUEsT0FBTyxFQUFFLEtBQUtELFNBRnFDLENBRTNCOztBQUYyQixHQUFoRCxDQUFQO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBSZXR1cm4gdHJ1ZSBvciBmYWxzZSBpZiB0aGUgc2VsZWN0ZWQgRE9NLWVsZW1lbnQgY3VycmVudGx5IGhhcyBmb2N1cy4gSWYgdGhlIHNlbGVjdG9yIG1hdGNoZXNcbiAqIG11bHRpcGxlIGVsZW1lbnRzLCBpdCB3aWxsIHJldHVybiB0cnVlIGlmIG9uZSBvZiB0aGUgZWxlbWVudHMgaGFzIGZvY3VzLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDppbmRleC5odG1sXG4gICAgPGlucHV0IG5hbWU9XCJsb2dpblwiIGF1dG9mb2N1cz1cIlwiIC8+XG4gICAgOmhhc0ZvY3VzLmpzXG4gICAgaXQoJ3Nob3VsZCBkZXRlY3QgdGhlIGZvY3VzIG9mIGFuIGVsZW1lbnQnLCAoKSA9PiB7XG4gICAgICAgIGJyb3dzZXIudXJsKCcvJyk7XG4gICAgICAgIGNvbnN0IGxvZ2luSW5wdXQgPSAkKCdbbmFtZT1cImxvZ2luXCJdJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ2luSW5wdXQuaGFzRm9jdXMoKSk7IC8vIG91dHB1dHM6IGZhbHNlXG5cbiAgICAgICAgbG9naW5JbnB1dC5jbGljaygpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2dpbklucHV0Lmhhc0ZvY3VzKCkpOyAvLyBvdXRwdXRzOiB0cnVlXG4gICAgfSlcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAYWxpYXMgZWxlbWVudC5pc0ZvY3VzZWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgdHJ1ZSBpZiBvbmUgb2YgdGhlIG1hdGNoaW5nIGVsZW1lbnRzIGhhcyBmb2N1c1xuICpcbiAqIEB1c2VzIHByb3RvY29sL2V4ZWN1dGVcbiAqIEB0eXBlIHN0YXRlXG4gKlxuICovXG5cbmltcG9ydCB7IEVMRU1FTlRfS0VZIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgZ2V0QnJvd3Nlck9iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IGlzRm9jdXNlZFNjcmlwdCBmcm9tICcuLi8uLi9zY3JpcHRzL2lzRm9jdXNlZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGb2N1c2VkICgpIHtcbiAgICByZXR1cm4gZ2V0QnJvd3Nlck9iamVjdCh0aGlzKS5leGVjdXRlKGlzRm9jdXNlZFNjcmlwdCwge1xuICAgICAgICBbRUxFTUVOVF9LRVldOiB0aGlzLmVsZW1lbnRJZCwgLy8gdzNjIGNvbXBhdGlibGVcbiAgICAgICAgRUxFTUVOVDogdGhpcy5lbGVtZW50SWQgLy8ganNvbndwIGNvbXBhdGlibGVcbiAgICB9KVxufVxuIl19