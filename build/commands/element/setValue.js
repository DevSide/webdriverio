"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setValue;

require("source-map-support/register");

/**
 *
 * Send a sequence of key strokes to an element (clears value before). If the element
 * doesn't need to be cleared first then use addValue. You can also use
 * unicode characters like Left arrow or Back space. WebdriverIO will take care of
 * translating them into unicode characters. You’ll find all supported characters
 * [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
 * To do that, the value has to correspond to a key from the table.
 *
 * <example>
    :setValue.js
    it('should set value for a certain element', () => {
        const input = $('.input');
        input.setValue('test123');

        console.log(input.getValue()); // outputs: 'test123'
    });
 * </example>
 *
 * @alias element.setValue
 * @param {string | number | boolean | object | Array<any>}      value    Value to be added
 * @uses protocol/elements, protocol/elementIdClear, protocol/elementIdValue
 * @type action
 *
 */
async function setValue(value) {
  await this.clearValue();
  return this.addValue(value);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3NldFZhbHVlLmpzIl0sIm5hbWVzIjpbInNldFZhbHVlIiwidmFsdWUiLCJjbGVhclZhbHVlIiwiYWRkVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJlLGVBQWVBLFFBQWYsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQzNDLFFBQU0sS0FBS0MsVUFBTCxFQUFOO0FBQ0EsU0FBTyxLQUFLQyxRQUFMLENBQWNGLEtBQWQsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogU2VuZCBhIHNlcXVlbmNlIG9mIGtleSBzdHJva2VzIHRvIGFuIGVsZW1lbnQgKGNsZWFycyB2YWx1ZSBiZWZvcmUpLiBJZiB0aGUgZWxlbWVudFxuICogZG9lc24ndCBuZWVkIHRvIGJlIGNsZWFyZWQgZmlyc3QgdGhlbiB1c2UgYWRkVmFsdWUuIFlvdSBjYW4gYWxzbyB1c2VcbiAqIHVuaWNvZGUgY2hhcmFjdGVycyBsaWtlIExlZnQgYXJyb3cgb3IgQmFjayBzcGFjZS4gV2ViZHJpdmVySU8gd2lsbCB0YWtlIGNhcmUgb2ZcbiAqIHRyYW5zbGF0aW5nIHRoZW0gaW50byB1bmljb2RlIGNoYXJhY3RlcnMuIFlvdeKAmWxsIGZpbmQgYWxsIHN1cHBvcnRlZCBjaGFyYWN0ZXJzXG4gKiBbaGVyZV0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmRyaXZlci93ZWJkcml2ZXItc3BlYy5odG1sI2tleWJvYXJkLWFjdGlvbnMpLlxuICogVG8gZG8gdGhhdCwgdGhlIHZhbHVlIGhhcyB0byBjb3JyZXNwb25kIHRvIGEga2V5IGZyb20gdGhlIHRhYmxlLlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpzZXRWYWx1ZS5qc1xuICAgIGl0KCdzaG91bGQgc2V0IHZhbHVlIGZvciBhIGNlcnRhaW4gZWxlbWVudCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKCcuaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0VmFsdWUoJ3Rlc3QxMjMnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dC5nZXRWYWx1ZSgpKTsgLy8gb3V0cHV0czogJ3Rlc3QxMjMnXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGVsZW1lbnQuc2V0VmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG9iamVjdCB8IEFycmF5PGFueT59ICAgICAgdmFsdWUgICAgVmFsdWUgdG8gYmUgYWRkZWRcbiAqIEB1c2VzIHByb3RvY29sL2VsZW1lbnRzLCBwcm90b2NvbC9lbGVtZW50SWRDbGVhciwgcHJvdG9jb2wvZWxlbWVudElkVmFsdWVcbiAqIEB0eXBlIGFjdGlvblxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZXRWYWx1ZSAodmFsdWUpIHtcbiAgICBhd2FpdCB0aGlzLmNsZWFyVmFsdWUoKVxuICAgIHJldHVybiB0aGlzLmFkZFZhbHVlKHZhbHVlKVxufVxuIl19