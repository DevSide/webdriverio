"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectByVisibleText;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Select option with displayed text matching the argument.
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
    :selectByVisibleText.js
    it('demonstrate the selectByVisibleText command', () => {
        const selectBox = $('#selectbox');
        console.log(selectBox.getText('option:checked')); // returns "uno"
        selectBox.selectByVisibleText('cuatro');
        console.log(selectBox.getText('option:checked')); // returns "cuatro"
    })
 * </example>
 *
 * @alias element.selectByVisibleText
 * @param {String} text       text of option element to get selected
 * @uses protocol/findElementsFromElement, protocol/elementClick
 * @type action
 *
 */
async function selectByVisibleText(text) {
  /**
   * convert value into string
   */
  text = typeof text === 'number' ? text.toString() : text;
  const normalized = text.trim() // strip leading and trailing white-space characters
  .replace(/\s+/, ' '); // replace sequences of whitespace characters by a single space

  /**
  * find option element using xpath
  */

  const formatted = /"/.test(normalized) ? 'concat("' + normalized.split('"').join('", \'"\', "') + '")' : `"${normalized}"`;
  const dotFormat = `[. = ${formatted}]`;
  const spaceFormat = `[normalize-space(text()) = ${formatted}]`;
  const selections = [`./option${dotFormat}`, `./option${spaceFormat}`, `./optgroup/option${dotFormat}`, `./optgroup/option${spaceFormat}`];
  const optionElement = await this.findElementFromElement(this.elementId, 'xpath', selections.join('|'));
  /**
  * select option
  */

  return this.elementClick((0, _utils.getElementFromResponse)(optionElement));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3NlbGVjdEJ5VmlzaWJsZVRleHQuanMiXSwibmFtZXMiOlsic2VsZWN0QnlWaXNpYmxlVGV4dCIsInRleHQiLCJ0b1N0cmluZyIsIm5vcm1hbGl6ZWQiLCJ0cmltIiwicmVwbGFjZSIsImZvcm1hdHRlZCIsInRlc3QiLCJzcGxpdCIsImpvaW4iLCJkb3RGb3JtYXQiLCJzcGFjZUZvcm1hdCIsInNlbGVjdGlvbnMiLCJvcHRpb25FbGVtZW50IiwiZmluZEVsZW1lbnRGcm9tRWxlbWVudCIsImVsZW1lbnRJZCIsImVsZW1lbnRDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBOEJBOztBQTlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ2UsZUFBZUEsbUJBQWYsQ0FBb0NDLElBQXBDLEVBQTBDO0FBQ3JEOzs7QUFHQUEsRUFBQUEsSUFBSSxHQUFHLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsR0FDREEsSUFBSSxDQUFDQyxRQUFMLEVBREMsR0FFREQsSUFGTjtBQUlBLFFBQU1FLFVBQVUsR0FBR0YsSUFBSSxDQUNsQkcsSUFEYyxHQUNQO0FBRE8sR0FFZEMsT0FGYyxDQUVOLEtBRk0sRUFFQyxHQUZELENBQW5CLENBUnFELENBVTVCOztBQUV6Qjs7OztBQUdBLFFBQU1DLFNBQVMsR0FBRyxJQUFJQyxJQUFKLENBQVNKLFVBQVQsSUFDWixhQUFhQSxVQUFVLENBQUNLLEtBQVgsQ0FBaUIsR0FBakIsRUFBc0JDLElBQXRCLENBQTJCLGFBQTNCLENBQWIsR0FBeUQsSUFEN0MsR0FFWCxJQUFHTixVQUFXLEdBRnJCO0FBR0EsUUFBTU8sU0FBUyxHQUFJLFFBQU9KLFNBQVUsR0FBcEM7QUFDQSxRQUFNSyxXQUFXLEdBQUksOEJBQTZCTCxTQUFVLEdBQTVEO0FBRUEsUUFBTU0sVUFBVSxHQUFHLENBQ2QsV0FBVUYsU0FBVSxFQUROLEVBRWQsV0FBVUMsV0FBWSxFQUZSLEVBR2Qsb0JBQW1CRCxTQUFVLEVBSGYsRUFJZCxvQkFBbUJDLFdBQVksRUFKakIsQ0FBbkI7QUFPQSxRQUFNRSxhQUFhLEdBQUcsTUFBTSxLQUFLQyxzQkFBTCxDQUE0QixLQUFLQyxTQUFqQyxFQUE0QyxPQUE1QyxFQUFxREgsVUFBVSxDQUFDSCxJQUFYLENBQWdCLEdBQWhCLENBQXJELENBQTVCO0FBRUE7Ozs7QUFHQSxTQUFPLEtBQUtPLFlBQUwsQ0FBa0IsbUNBQXVCSCxhQUF2QixDQUFsQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBTZWxlY3Qgb3B0aW9uIHdpdGggZGlzcGxheWVkIHRleHQgbWF0Y2hpbmcgdGhlIGFyZ3VtZW50LlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpleGFtcGxlLmh0bWxcbiAgICA8c2VsZWN0IGlkPVwic2VsZWN0Ym94XCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJzb21lVmFsdWUwXCI+dW5vPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJzb21lVmFsdWUxXCI+ZG9zPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJzb21lVmFsdWUyXCI+dHJlczwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwic29tZVZhbHVlM1wiPmN1YXRybzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwic29tZVZhbHVlNFwiPmNpbmNvPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJzb21lVmFsdWU1XCI+c2Vpczwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICAgIDpzZWxlY3RCeVZpc2libGVUZXh0LmpzXG4gICAgaXQoJ2RlbW9uc3RyYXRlIHRoZSBzZWxlY3RCeVZpc2libGVUZXh0IGNvbW1hbmQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdEJveCA9ICQoJyNzZWxlY3Rib3gnKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0Qm94LmdldFRleHQoJ29wdGlvbjpjaGVja2VkJykpOyAvLyByZXR1cm5zIFwidW5vXCJcbiAgICAgICAgc2VsZWN0Qm94LnNlbGVjdEJ5VmlzaWJsZVRleHQoJ2N1YXRybycpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RCb3guZ2V0VGV4dCgnb3B0aW9uOmNoZWNrZWQnKSk7IC8vIHJldHVybnMgXCJjdWF0cm9cIlxuICAgIH0pXG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGVsZW1lbnQuc2VsZWN0QnlWaXNpYmxlVGV4dFxuICogQHBhcmFtIHtTdHJpbmd9IHRleHQgICAgICAgdGV4dCBvZiBvcHRpb24gZWxlbWVudCB0byBnZXQgc2VsZWN0ZWRcbiAqIEB1c2VzIHByb3RvY29sL2ZpbmRFbGVtZW50c0Zyb21FbGVtZW50LCBwcm90b2NvbC9lbGVtZW50Q2xpY2tcbiAqIEB0eXBlIGFjdGlvblxuICpcbiAqL1xuXG5pbXBvcnQgeyBnZXRFbGVtZW50RnJvbVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlbGVjdEJ5VmlzaWJsZVRleHQgKHRleHQpIHtcbiAgICAvKipcbiAgICAgKiBjb252ZXJ0IHZhbHVlIGludG8gc3RyaW5nXG4gICAgICovXG4gICAgdGV4dCA9IHR5cGVvZiB0ZXh0ID09PSAnbnVtYmVyJ1xuICAgICAgICA/IHRleHQudG9TdHJpbmcoKVxuICAgICAgICA6IHRleHRcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB0ZXh0XG4gICAgICAgIC50cmltKCkgLy8gc3RyaXAgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGUtc3BhY2UgY2hhcmFjdGVyc1xuICAgICAgICAucmVwbGFjZSgvXFxzKy8sICcgJykgLy8gcmVwbGFjZSBzZXF1ZW5jZXMgb2Ygd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGJ5IGEgc2luZ2xlIHNwYWNlXG5cbiAgICAvKipcbiAgICAqIGZpbmQgb3B0aW9uIGVsZW1lbnQgdXNpbmcgeHBhdGhcbiAgICAqL1xuICAgIGNvbnN0IGZvcm1hdHRlZCA9IC9cIi8udGVzdChub3JtYWxpemVkKVxuICAgICAgICA/ICdjb25jYXQoXCInICsgbm9ybWFsaXplZC5zcGxpdCgnXCInKS5qb2luKCdcIiwgXFwnXCJcXCcsIFwiJykgKyAnXCIpJ1xuICAgICAgICA6IGBcIiR7bm9ybWFsaXplZH1cImBcbiAgICBjb25zdCBkb3RGb3JtYXQgPSBgWy4gPSAke2Zvcm1hdHRlZH1dYFxuICAgIGNvbnN0IHNwYWNlRm9ybWF0ID0gYFtub3JtYWxpemUtc3BhY2UodGV4dCgpKSA9ICR7Zm9ybWF0dGVkfV1gXG5cbiAgICBjb25zdCBzZWxlY3Rpb25zID0gW1xuICAgICAgICBgLi9vcHRpb24ke2RvdEZvcm1hdH1gLFxuICAgICAgICBgLi9vcHRpb24ke3NwYWNlRm9ybWF0fWAsXG4gICAgICAgIGAuL29wdGdyb3VwL29wdGlvbiR7ZG90Rm9ybWF0fWAsXG4gICAgICAgIGAuL29wdGdyb3VwL29wdGlvbiR7c3BhY2VGb3JtYXR9YCxcbiAgICBdXG5cbiAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gYXdhaXQgdGhpcy5maW5kRWxlbWVudEZyb21FbGVtZW50KHRoaXMuZWxlbWVudElkLCAneHBhdGgnLCBzZWxlY3Rpb25zLmpvaW4oJ3wnKSlcblxuICAgIC8qKlxuICAgICogc2VsZWN0IG9wdGlvblxuICAgICovXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudENsaWNrKGdldEVsZW1lbnRGcm9tUmVzcG9uc2Uob3B0aW9uRWxlbWVudCkpXG59XG4iXX0=