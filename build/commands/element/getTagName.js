"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTagName;

require("source-map-support/register");

/**
 *
 * Get tag name of a DOM-element.
 *
 * <example>
    :index.html
    <div id="elem">Lorem ipsum</div>

    :getTagName.js
    it('should demonstrate the getTagName command', () => {
        const elem = $('#elem');

        const tagName = elem.getTagName();
        console.log(tagName); // outputs: "div"
    })
 * </example>
 *
 * @alias element.getTagName
 * @return {String} the element's tag name, as a lowercase string
 * @uses protocol/elements, protocol/elementIdName
 * @type property
 *
 */
function getTagName() {
  return this.getElementTagName(this.elementId);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2dldFRhZ05hbWUuanMiXSwibmFtZXMiOlsiZ2V0VGFnTmFtZSIsImdldEVsZW1lbnRUYWdOYW1lIiwiZWxlbWVudElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QmUsU0FBU0EsVUFBVCxHQUFzQjtBQUNqQyxTQUFPLEtBQUtDLGlCQUFMLENBQXVCLEtBQUtDLFNBQTVCLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIEdldCB0YWcgbmFtZSBvZiBhIERPTS1lbGVtZW50LlxuICpcbiAqIDxleGFtcGxlPlxuICAgIDppbmRleC5odG1sXG4gICAgPGRpdiBpZD1cImVsZW1cIj5Mb3JlbSBpcHN1bTwvZGl2PlxuXG4gICAgOmdldFRhZ05hbWUuanNcbiAgICBpdCgnc2hvdWxkIGRlbW9uc3RyYXRlIHRoZSBnZXRUYWdOYW1lIGNvbW1hbmQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSAkKCcjZWxlbScpO1xuXG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtLmdldFRhZ05hbWUoKTtcbiAgICAgICAgY29uc29sZS5sb2codGFnTmFtZSk7IC8vIG91dHB1dHM6IFwiZGl2XCJcbiAgICB9KVxuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBlbGVtZW50LmdldFRhZ05hbWVcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGVsZW1lbnQncyB0YWcgbmFtZSwgYXMgYSBsb3dlcmNhc2Ugc3RyaW5nXG4gKiBAdXNlcyBwcm90b2NvbC9lbGVtZW50cywgcHJvdG9jb2wvZWxlbWVudElkTmFtZVxuICogQHR5cGUgcHJvcGVydHlcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50VGFnTmFtZSh0aGlzLmVsZW1lbnRJZClcbn1cbiJdfQ==