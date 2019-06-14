"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSelected;

require("source-map-support/register");

/**
 *
 * Will return true or false whether or not an `<option>` or `<input>` element of type
 * checkbox or radio is currently selected.
 *
 * <example>
    :index.html
    <select name="selectbox" id="selectbox">
        <option value="John Doe">John Doe</option>
        <option value="Layla Terry" selected="selected">Layla Terry</option>
        <option value="Bill Gilbert">Bill Gilbert"</option>
    </select>

    :isSelected.js
    it('should detect if an element is selected', () => {
        let element = $('[value="Layla Terry"]');
        console.log(element.isSelected()); // outputs: true

        element = $('[value="Bill Gilbert"]')
        console.log(element.isSelected()); // outputs: false
    });
 * </example>
 *
 * @alias element.isSelected
 * @return {Boolean} true if element is selected
 * @uses protocol/elements, protocol/elementIdSelected
 * @type state
 *
 */
function isSelected() {
  return this.isElementSelected(this.elementId);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2lzU2VsZWN0ZWQuanMiXSwibmFtZXMiOlsiaXNTZWxlY3RlZCIsImlzRWxlbWVudFNlbGVjdGVkIiwiZWxlbWVudElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QmUsU0FBU0EsVUFBVCxHQUFzQjtBQUNqQyxTQUFPLEtBQUtDLGlCQUFMLENBQXVCLEtBQUtDLFNBQTVCLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFdpbGwgcmV0dXJuIHRydWUgb3IgZmFsc2Ugd2hldGhlciBvciBub3QgYW4gYDxvcHRpb24+YCBvciBgPGlucHV0PmAgZWxlbWVudCBvZiB0eXBlXG4gKiBjaGVja2JveCBvciByYWRpbyBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOmluZGV4Lmh0bWxcbiAgICA8c2VsZWN0IG5hbWU9XCJzZWxlY3Rib3hcIiBpZD1cInNlbGVjdGJveFwiPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSm9obiBEb2VcIj5Kb2huIERvZTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTGF5bGEgVGVycnlcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+TGF5bGEgVGVycnk8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJpbGwgR2lsYmVydFwiPkJpbGwgR2lsYmVydFwiPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG5cbiAgICA6aXNTZWxlY3RlZC5qc1xuICAgIGl0KCdzaG91bGQgZGV0ZWN0IGlmIGFuIGVsZW1lbnQgaXMgc2VsZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gJCgnW3ZhbHVlPVwiTGF5bGEgVGVycnlcIl0nKTtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5pc1NlbGVjdGVkKCkpOyAvLyBvdXRwdXRzOiB0cnVlXG5cbiAgICAgICAgZWxlbWVudCA9ICQoJ1t2YWx1ZT1cIkJpbGwgR2lsYmVydFwiXScpXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuaXNTZWxlY3RlZCgpKTsgLy8gb3V0cHV0czogZmFsc2VcbiAgICB9KTtcbiAqIDwvZXhhbXBsZT5cbiAqXG4gKiBAYWxpYXMgZWxlbWVudC5pc1NlbGVjdGVkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGVsZW1lbnQgaXMgc2VsZWN0ZWRcbiAqIEB1c2VzIHByb3RvY29sL2VsZW1lbnRzLCBwcm90b2NvbC9lbGVtZW50SWRTZWxlY3RlZFxuICogQHR5cGUgc3RhdGVcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0VsZW1lbnRTZWxlY3RlZCh0aGlzLmVsZW1lbnRJZClcbn1cbiJdfQ==