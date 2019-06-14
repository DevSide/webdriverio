"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectByAttribute;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Select option with a specific value.
 *
 * <example>
    :example.html
    <select id="selectbox">
        <option value="someValue0">uno</option>
        <option value="someValue1">dos</option>
        <option value="someValue2">tres</option>
        <option value="someValue3">cuatro</option>
        <option value="someValue4">cinco</option>
        <option name="someName5" value="someValue5">seis</option>
    </select>
    :selectByAttribute.js
    it('Should demonstrate the selectByAttribute command', () => {
        const selectBox = $('#selectbox');
        const value = selectBox.getValue();
        console.log(value); // returns "someValue0"

        selectBox.selectByAttribute('value', 'someValue3');
        console.log(selectBox.getValue()); // returns "someValue3"

        selectBox.selectByAttribute('name', 'someName5');
        console.log(selectBox.getValue()); // returns "someValue5"
    });
 * </example>
 *
 * @alias element.selectByAttribute
 * @param {String} attribute  attribute of option element to get selected
 * @param {String} value      value of option element to get selected
 * @uses protocol/findElementFromElement, protocol/elementClick
 * @type action
 *
 */
async function selectByAttribute(attribute, value) {
  /**
   * convert value into string
   */
  value = typeof value === 'number' ? value.toString() : value;
  /**
  * find option elememnt using xpath
  */

  const normalized = `[normalize-space(@${attribute.trim()}) = "${value.trim()}"]`;
  const optionElement = await this.findElementFromElement(this.elementId, 'xpath', `./option${normalized}|./optgroup/option${normalized}`);
  /**
  * select option
  */

  return this.elementClick((0, _utils.getElementFromResponse)(optionElement));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3NlbGVjdEJ5QXR0cmlidXRlLmpzIl0sIm5hbWVzIjpbInNlbGVjdEJ5QXR0cmlidXRlIiwiYXR0cmlidXRlIiwidmFsdWUiLCJ0b1N0cmluZyIsIm5vcm1hbGl6ZWQiLCJ0cmltIiwib3B0aW9uRWxlbWVudCIsImZpbmRFbGVtZW50RnJvbUVsZW1lbnQiLCJlbGVtZW50SWQiLCJlbGVtZW50Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9DQTs7QUFwQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NlLGVBQWVBLGlCQUFmLENBQWtDQyxTQUFsQyxFQUE2Q0MsS0FBN0MsRUFBb0Q7QUFDL0Q7OztBQUdBQSxFQUFBQSxLQUFLLEdBQUcsT0FBT0EsS0FBUCxLQUFpQixRQUFqQixHQUNGQSxLQUFLLENBQUNDLFFBQU4sRUFERSxHQUVGRCxLQUZOO0FBSUE7Ozs7QUFHQSxRQUFNRSxVQUFVLEdBQUkscUJBQW9CSCxTQUFTLENBQUNJLElBQVYsRUFBaUIsUUFBT0gsS0FBSyxDQUFDRyxJQUFOLEVBQWEsSUFBN0U7QUFDQSxRQUFNQyxhQUFhLEdBQUcsTUFBTSxLQUFLQyxzQkFBTCxDQUE0QixLQUFLQyxTQUFqQyxFQUE0QyxPQUE1QyxFQUFzRCxXQUFVSixVQUFXLHFCQUFvQkEsVUFBVyxFQUExRyxDQUE1QjtBQUVBOzs7O0FBR0EsU0FBTyxLQUFLSyxZQUFMLENBQWtCLG1DQUF1QkgsYUFBdkIsQ0FBbEIsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogU2VsZWN0IG9wdGlvbiB3aXRoIGEgc3BlY2lmaWMgdmFsdWUuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmV4YW1wbGUuaHRtbFxuICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3Rib3hcIj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNvbWVWYWx1ZTBcIj51bm88L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNvbWVWYWx1ZTFcIj5kb3M8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNvbWVWYWx1ZTJcIj50cmVzPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJzb21lVmFsdWUzXCI+Y3VhdHJvPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJzb21lVmFsdWU0XCI+Y2luY288L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiBuYW1lPVwic29tZU5hbWU1XCIgdmFsdWU9XCJzb21lVmFsdWU1XCI+c2Vpczwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICAgIDpzZWxlY3RCeUF0dHJpYnV0ZS5qc1xuICAgIGl0KCdTaG91bGQgZGVtb25zdHJhdGUgdGhlIHNlbGVjdEJ5QXR0cmlidXRlIGNvbW1hbmQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdEJveCA9ICQoJyNzZWxlY3Rib3gnKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzZWxlY3RCb3guZ2V0VmFsdWUoKTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpOyAvLyByZXR1cm5zIFwic29tZVZhbHVlMFwiXG5cbiAgICAgICAgc2VsZWN0Qm94LnNlbGVjdEJ5QXR0cmlidXRlKCd2YWx1ZScsICdzb21lVmFsdWUzJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdEJveC5nZXRWYWx1ZSgpKTsgLy8gcmV0dXJucyBcInNvbWVWYWx1ZTNcIlxuXG4gICAgICAgIHNlbGVjdEJveC5zZWxlY3RCeUF0dHJpYnV0ZSgnbmFtZScsICdzb21lTmFtZTUnKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0Qm94LmdldFZhbHVlKCkpOyAvLyByZXR1cm5zIFwic29tZVZhbHVlNVwiXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGVsZW1lbnQuc2VsZWN0QnlBdHRyaWJ1dGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyaWJ1dGUgIGF0dHJpYnV0ZSBvZiBvcHRpb24gZWxlbWVudCB0byBnZXQgc2VsZWN0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgICAgIHZhbHVlIG9mIG9wdGlvbiBlbGVtZW50IHRvIGdldCBzZWxlY3RlZFxuICogQHVzZXMgcHJvdG9jb2wvZmluZEVsZW1lbnRGcm9tRWxlbWVudCwgcHJvdG9jb2wvZWxlbWVudENsaWNrXG4gKiBAdHlwZSBhY3Rpb25cbiAqXG4gKi9cblxuaW1wb3J0IHsgZ2V0RWxlbWVudEZyb21SZXNwb25zZSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWxlY3RCeUF0dHJpYnV0ZSAoYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIC8qKlxuICAgICAqIGNvbnZlcnQgdmFsdWUgaW50byBzdHJpbmdcbiAgICAgKi9cbiAgICB2YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbiAgICAgICAgPyB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIDogdmFsdWVcblxuICAgIC8qKlxuICAgICogZmluZCBvcHRpb24gZWxlbWVtbnQgdXNpbmcgeHBhdGhcbiAgICAqL1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBgW25vcm1hbGl6ZS1zcGFjZShAJHthdHRyaWJ1dGUudHJpbSgpfSkgPSBcIiR7dmFsdWUudHJpbSgpfVwiXWBcbiAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gYXdhaXQgdGhpcy5maW5kRWxlbWVudEZyb21FbGVtZW50KHRoaXMuZWxlbWVudElkLCAneHBhdGgnLCBgLi9vcHRpb24ke25vcm1hbGl6ZWR9fC4vb3B0Z3JvdXAvb3B0aW9uJHtub3JtYWxpemVkfWApXG5cbiAgICAvKipcbiAgICAqIHNlbGVjdCBvcHRpb25cbiAgICAqL1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRDbGljayhnZXRFbGVtZW50RnJvbVJlc3BvbnNlKG9wdGlvbkVsZW1lbnQpKVxufVxuIl19