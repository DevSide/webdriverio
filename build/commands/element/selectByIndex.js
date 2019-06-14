"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectByIndex;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Select option with a specific index.
 *
 * <example>
    :example.html
    <select id="selectbox">
        <option value="someValue0">uno</option>
        <option value="someValue1">dos</option>
        <option value="someValue2">tres</option>
        <option value="someValue3">cuatro</option>
        <option value="someValue4">cinco</option>
        <option value="someValue5">seis</option>
    </select>
    :selectByIndex.js
    it('Should demonstrate the selectByIndex command', () => {
        const selectBox = $('#selectbox');
        console.log(selectBox.getValue()); // returns "someValue0"
        selectBox.selectByIndex(4);
        console.log(selectBox.getValue()); // returns "someValue4"
    });
 * </example>
 *
 * @alias element.selectByIndexs
 * @param {Number} index      option index
 * @uses protocol/findElementsFromElement, protocol/elementClick
 * @type action
 *
 */
async function selectByIndex(index) {
  /**
   * negative index check
   */
  if (index < 0) {
    throw new Error('Index needs to be 0 or any other positive number');
  }
  /**
  * get option elememnts using css
  */


  const optionElements = await this.findElementsFromElement(this.elementId, 'css selector', 'option');

  if (optionElements.length === 0) {
    throw new Error('Select element doesn\'t contain any option element');
  }

  if (optionElements.length - 1 < index) {
    throw new Error(`Option with index "${index}" not found. Select element only contains ${optionElements.length} option elements`);
  }
  /**
  * select option
  */


  return this.elementClick((0, _utils.getElementFromResponse)(optionElements[index]));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3NlbGVjdEJ5SW5kZXguanMiXSwibmFtZXMiOlsic2VsZWN0QnlJbmRleCIsImluZGV4IiwiRXJyb3IiLCJvcHRpb25FbGVtZW50cyIsImZpbmRFbGVtZW50c0Zyb21FbGVtZW50IiwiZWxlbWVudElkIiwibGVuZ3RoIiwiZWxlbWVudENsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUE4QkE7O0FBOUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDZSxlQUFlQSxhQUFmLENBQThCQyxLQUE5QixFQUFxQztBQUNoRDs7O0FBR0EsTUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYLFVBQU0sSUFBSUMsS0FBSixDQUFVLGtEQUFWLENBQU47QUFDSDtBQUVEOzs7OztBQUdBLFFBQU1DLGNBQWMsR0FBRyxNQUFNLEtBQUtDLHVCQUFMLENBQTZCLEtBQUtDLFNBQWxDLEVBQTZDLGNBQTdDLEVBQThELFFBQTlELENBQTdCOztBQUVBLE1BQUlGLGNBQWMsQ0FBQ0csTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUM3QixVQUFNLElBQUlKLEtBQUosQ0FBVSxvREFBVixDQUFOO0FBQ0g7O0FBRUQsTUFBSUMsY0FBYyxDQUFDRyxNQUFmLEdBQXdCLENBQXhCLEdBQTRCTCxLQUFoQyxFQUF1QztBQUNuQyxVQUFNLElBQUlDLEtBQUosQ0FBVyxzQkFBcUJELEtBQU0sNkNBQTRDRSxjQUFjLENBQUNHLE1BQU8sa0JBQXhHLENBQU47QUFDSDtBQUVEOzs7OztBQUdBLFNBQU8sS0FBS0MsWUFBTCxDQUFrQixtQ0FBdUJKLGNBQWMsQ0FBQ0YsS0FBRCxDQUFyQyxDQUFsQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBTZWxlY3Qgb3B0aW9uIHdpdGggYSBzcGVjaWZpYyBpbmRleC5cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6ZXhhbXBsZS5odG1sXG4gICAgPHNlbGVjdCBpZD1cInNlbGVjdGJveFwiPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwic29tZVZhbHVlMFwiPnVubzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwic29tZVZhbHVlMVwiPmRvczwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwic29tZVZhbHVlMlwiPnRyZXM8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNvbWVWYWx1ZTNcIj5jdWF0cm88L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNvbWVWYWx1ZTRcIj5jaW5jbzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwic29tZVZhbHVlNVwiPnNlaXM8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgICA6c2VsZWN0QnlJbmRleC5qc1xuICAgIGl0KCdTaG91bGQgZGVtb25zdHJhdGUgdGhlIHNlbGVjdEJ5SW5kZXggY29tbWFuZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0Qm94ID0gJCgnI3NlbGVjdGJveCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RCb3guZ2V0VmFsdWUoKSk7IC8vIHJldHVybnMgXCJzb21lVmFsdWUwXCJcbiAgICAgICAgc2VsZWN0Qm94LnNlbGVjdEJ5SW5kZXgoNCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdEJveC5nZXRWYWx1ZSgpKTsgLy8gcmV0dXJucyBcInNvbWVWYWx1ZTRcIlxuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBlbGVtZW50LnNlbGVjdEJ5SW5kZXhzXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXggICAgICBvcHRpb24gaW5kZXhcbiAqIEB1c2VzIHByb3RvY29sL2ZpbmRFbGVtZW50c0Zyb21FbGVtZW50LCBwcm90b2NvbC9lbGVtZW50Q2xpY2tcbiAqIEB0eXBlIGFjdGlvblxuICpcbiAqL1xuXG5pbXBvcnQgeyBnZXRFbGVtZW50RnJvbVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlbGVjdEJ5SW5kZXggKGluZGV4KSB7XG4gICAgLyoqXG4gICAgICogbmVnYXRpdmUgaW5kZXggY2hlY2tcbiAgICAgKi9cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW5kZXggbmVlZHMgdG8gYmUgMCBvciBhbnkgb3RoZXIgcG9zaXRpdmUgbnVtYmVyJylcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGdldCBvcHRpb24gZWxlbWVtbnRzIHVzaW5nIGNzc1xuICAgICovXG4gICAgY29uc3Qgb3B0aW9uRWxlbWVudHMgPSBhd2FpdCB0aGlzLmZpbmRFbGVtZW50c0Zyb21FbGVtZW50KHRoaXMuZWxlbWVudElkLCAnY3NzIHNlbGVjdG9yJywgICdvcHRpb24nKVxuXG4gICAgaWYgKG9wdGlvbkVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbGVjdCBlbGVtZW50IGRvZXNuXFwndCBjb250YWluIGFueSBvcHRpb24gZWxlbWVudCcpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbkVsZW1lbnRzLmxlbmd0aCAtIDEgPCBpbmRleCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9wdGlvbiB3aXRoIGluZGV4IFwiJHtpbmRleH1cIiBub3QgZm91bmQuIFNlbGVjdCBlbGVtZW50IG9ubHkgY29udGFpbnMgJHtvcHRpb25FbGVtZW50cy5sZW5ndGh9IG9wdGlvbiBlbGVtZW50c2ApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzZWxlY3Qgb3B0aW9uXG4gICAgKi9cbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Q2xpY2soZ2V0RWxlbWVudEZyb21SZXNwb25zZShvcHRpb25FbGVtZW50c1tpbmRleF0pKVxufVxuIl19