"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEnabled;

require("source-map-support/register");

/**
 *
 * Return true or false if the selected DOM-element is enabled.
 *
 * <example>
    :index.html
    <input type="text" name="inputField" class="input1">
    <input type="text" name="inputField" class="input2" disabled>
    <input type="text" name="inputField" class="input3" disabled="disabled">

    :isEnabled.js
    it('should detect if an element is enabled', () => {
        let elem = $('.input1')
        let isEnabled = elem.isEnabled();
        console.log(isEnabled); // outputs: true

        elem = $('.input2')
        isEnabled = elem.isEnabled();
        console.log(isEnabled2); // outputs: false

        elem = $('.input3')
        isEnabled = elem.isEnabled();
        console.log(isEnabled3); // outputs: false
    });
 * </example>
 *
 * @alias element.isEnabled
 * @return {Boolean} true if element(s)* (is|are) enabled
 * @uses protocol/elements, protocol/elementIdEnabled
 * @type state
 *
 */
function isEnabled() {
  return this.isElementEnabled(this.elementId);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2lzRW5hYmxlZC5qcyJdLCJuYW1lcyI6WyJpc0VuYWJsZWQiLCJpc0VsZW1lbnRFbmFibGVkIiwiZWxlbWVudElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ2UsU0FBU0EsU0FBVCxHQUFxQjtBQUNoQyxTQUFPLEtBQUtDLGdCQUFMLENBQXNCLEtBQUtDLFNBQTNCLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFJldHVybiB0cnVlIG9yIGZhbHNlIGlmIHRoZSBzZWxlY3RlZCBET00tZWxlbWVudCBpcyBlbmFibGVkLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDppbmRleC5odG1sXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlucHV0RmllbGRcIiBjbGFzcz1cImlucHV0MVwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnB1dEZpZWxkXCIgY2xhc3M9XCJpbnB1dDJcIiBkaXNhYmxlZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5wdXRGaWVsZFwiIGNsYXNzPVwiaW5wdXQzXCIgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlxuXG4gICAgOmlzRW5hYmxlZC5qc1xuICAgIGl0KCdzaG91bGQgZGV0ZWN0IGlmIGFuIGVsZW1lbnQgaXMgZW5hYmxlZCcsICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW0gPSAkKCcuaW5wdXQxJylcbiAgICAgICAgbGV0IGlzRW5hYmxlZCA9IGVsZW0uaXNFbmFibGVkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzRW5hYmxlZCk7IC8vIG91dHB1dHM6IHRydWVcblxuICAgICAgICBlbGVtID0gJCgnLmlucHV0MicpXG4gICAgICAgIGlzRW5hYmxlZCA9IGVsZW0uaXNFbmFibGVkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzRW5hYmxlZDIpOyAvLyBvdXRwdXRzOiBmYWxzZVxuXG4gICAgICAgIGVsZW0gPSAkKCcuaW5wdXQzJylcbiAgICAgICAgaXNFbmFibGVkID0gZWxlbS5pc0VuYWJsZWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coaXNFbmFibGVkMyk7IC8vIG91dHB1dHM6IGZhbHNlXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGVsZW1lbnQuaXNFbmFibGVkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGVsZW1lbnQocykqIChpc3xhcmUpIGVuYWJsZWRcbiAqIEB1c2VzIHByb3RvY29sL2VsZW1lbnRzLCBwcm90b2NvbC9lbGVtZW50SWRFbmFibGVkXG4gKiBAdHlwZSBzdGF0ZVxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNFbGVtZW50RW5hYmxlZCh0aGlzLmVsZW1lbnRJZClcbn1cbiJdfQ==