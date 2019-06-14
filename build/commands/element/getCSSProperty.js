"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCSSProperty;

require("source-map-support/register");

var _utils = require("../../utils");

/**
 *
 * Get a css property from a DOM-element selected by given selector. The return value
 * is formatted to be testable. Colors gets parsed via [rgb2hex](https://www.npmjs.org/package/rgb2hex)
 * and all other properties get parsed via [css-value](https://www.npmjs.org/package/css-value).
 *
 * Note that shorthand CSS properties (e.g. background, font, border, margin, padding, list-style, outline,
 * pause, cue) are not returned, in accordance with the DOM CSS2 specification - you should directly access
 * the longhand properties (e.g. background-color) to access the desired values.
 *
 * <example>
    :example.html
    <label id="myLabel" for="input" style="color: #0088cc; font-family: helvetica, arial, freesans, clean, sans-serif, width: 100px">Some Label</label>
    :getCSSProperty.js
    it('should demonstrate the getCSSProperty command', () => {
        const elem = $('#myLabel')
        const color = elem.getCSSProperty('color')
        console.log(color)
        // outputs the following:
        // {
        //     property: 'color',
        //     value: 'rgba(0, 136, 204, 1)',
        //     parsed: {
        //         hex: '#0088cc',
        //         alpha: 1,
        //         type: 'color',
        //         rgba: 'rgba(0, 136, 204, 1)'
        //     }
        // }

        const font = elem.getCSSProperty('font-family')
        console.log(font)
        // outputs the following:
        // {
        //      property: 'font-family',
        //      value: 'helvetica',
        //      parsed: {
        //          value: [ 'helvetica', 'arial', 'freesans', 'clean', 'sans-serif' ],
        //          type: 'font',
        //          string: 'helvetica, arial, freesans, clean, sans-serif'
        //      }
        // }

        var width = elem.getCSSProperty('width')
        console.log(width)
        // outputs the following:
        // {
        //     property: 'width',
        //     value: '100px',
        //     parsed: {
        //         type: 'number',
        //         string: '100px',
        //         unit: 'px',
        //         value: 100
        //     }
        // }
    })
 * </example>
 *
 * @alias element.getCSSProperty
 * @param {String} cssProperty css property name
 * @return {Object} The specified css of the element
 * @uses protocol/elements, protocol/elementIdCssProperty
 * @type property
 *
 */
async function getCSSProperty(cssProperty) {
  const cssValue = await this.getElementCSSValue(this.elementId, cssProperty);
  return (0, _utils.parseCSS)(cssValue, cssProperty);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2dldENTU1Byb3BlcnR5LmpzIl0sIm5hbWVzIjpbImdldENTU1Byb3BlcnR5IiwiY3NzUHJvcGVydHkiLCJjc3NWYWx1ZSIsImdldEVsZW1lbnRDU1NWYWx1ZSIsImVsZW1lbnRJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBbUVBOztBQW5FQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVlLGVBQWVBLGNBQWYsQ0FBK0JDLFdBQS9CLEVBQTRDO0FBQ3ZELFFBQU1DLFFBQVEsR0FBRyxNQUFNLEtBQUtDLGtCQUFMLENBQXdCLEtBQUtDLFNBQTdCLEVBQXdDSCxXQUF4QyxDQUF2QjtBQUNBLFNBQU8scUJBQVNDLFFBQVQsRUFBbUJELFdBQW5CLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIEdldCBhIGNzcyBwcm9wZXJ0eSBmcm9tIGEgRE9NLWVsZW1lbnQgc2VsZWN0ZWQgYnkgZ2l2ZW4gc2VsZWN0b3IuIFRoZSByZXR1cm4gdmFsdWVcbiAqIGlzIGZvcm1hdHRlZCB0byBiZSB0ZXN0YWJsZS4gQ29sb3JzIGdldHMgcGFyc2VkIHZpYSBbcmdiMmhleF0oaHR0cHM6Ly93d3cubnBtanMub3JnL3BhY2thZ2UvcmdiMmhleClcbiAqIGFuZCBhbGwgb3RoZXIgcHJvcGVydGllcyBnZXQgcGFyc2VkIHZpYSBbY3NzLXZhbHVlXShodHRwczovL3d3dy5ucG1qcy5vcmcvcGFja2FnZS9jc3MtdmFsdWUpLlxuICpcbiAqIE5vdGUgdGhhdCBzaG9ydGhhbmQgQ1NTIHByb3BlcnRpZXMgKGUuZy4gYmFja2dyb3VuZCwgZm9udCwgYm9yZGVyLCBtYXJnaW4sIHBhZGRpbmcsIGxpc3Qtc3R5bGUsIG91dGxpbmUsXG4gKiBwYXVzZSwgY3VlKSBhcmUgbm90IHJldHVybmVkLCBpbiBhY2NvcmRhbmNlIHdpdGggdGhlIERPTSBDU1MyIHNwZWNpZmljYXRpb24gLSB5b3Ugc2hvdWxkIGRpcmVjdGx5IGFjY2Vzc1xuICogdGhlIGxvbmdoYW5kIHByb3BlcnRpZXMgKGUuZy4gYmFja2dyb3VuZC1jb2xvcikgdG8gYWNjZXNzIHRoZSBkZXNpcmVkIHZhbHVlcy5cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6ZXhhbXBsZS5odG1sXG4gICAgPGxhYmVsIGlkPVwibXlMYWJlbFwiIGZvcj1cImlucHV0XCIgc3R5bGU9XCJjb2xvcjogIzAwODhjYzsgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgYXJpYWwsIGZyZWVzYW5zLCBjbGVhbiwgc2Fucy1zZXJpZiwgd2lkdGg6IDEwMHB4XCI+U29tZSBMYWJlbDwvbGFiZWw+XG4gICAgOmdldENTU1Byb3BlcnR5LmpzXG4gICAgaXQoJ3Nob3VsZCBkZW1vbnN0cmF0ZSB0aGUgZ2V0Q1NTUHJvcGVydHkgY29tbWFuZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbSA9ICQoJyNteUxhYmVsJylcbiAgICAgICAgY29uc3QgY29sb3IgPSBlbGVtLmdldENTU1Byb3BlcnR5KCdjb2xvcicpXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbG9yKVxuICAgICAgICAvLyBvdXRwdXRzIHRoZSBmb2xsb3dpbmc6XG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIHByb3BlcnR5OiAnY29sb3InLFxuICAgICAgICAvLyAgICAgdmFsdWU6ICdyZ2JhKDAsIDEzNiwgMjA0LCAxKScsXG4gICAgICAgIC8vICAgICBwYXJzZWQ6IHtcbiAgICAgICAgLy8gICAgICAgICBoZXg6ICcjMDA4OGNjJyxcbiAgICAgICAgLy8gICAgICAgICBhbHBoYTogMSxcbiAgICAgICAgLy8gICAgICAgICB0eXBlOiAnY29sb3InLFxuICAgICAgICAvLyAgICAgICAgIHJnYmE6ICdyZ2JhKDAsIDEzNiwgMjA0LCAxKSdcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNvbnN0IGZvbnQgPSBlbGVtLmdldENTU1Byb3BlcnR5KCdmb250LWZhbWlseScpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvbnQpXG4gICAgICAgIC8vIG91dHB1dHMgdGhlIGZvbGxvd2luZzpcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgIHByb3BlcnR5OiAnZm9udC1mYW1pbHknLFxuICAgICAgICAvLyAgICAgIHZhbHVlOiAnaGVsdmV0aWNhJyxcbiAgICAgICAgLy8gICAgICBwYXJzZWQ6IHtcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6IFsgJ2hlbHZldGljYScsICdhcmlhbCcsICdmcmVlc2FucycsICdjbGVhbicsICdzYW5zLXNlcmlmJyBdLFxuICAgICAgICAvLyAgICAgICAgICB0eXBlOiAnZm9udCcsXG4gICAgICAgIC8vICAgICAgICAgIHN0cmluZzogJ2hlbHZldGljYSwgYXJpYWwsIGZyZWVzYW5zLCBjbGVhbiwgc2Fucy1zZXJpZidcbiAgICAgICAgLy8gICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICB2YXIgd2lkdGggPSBlbGVtLmdldENTU1Byb3BlcnR5KCd3aWR0aCcpXG4gICAgICAgIGNvbnNvbGUubG9nKHdpZHRoKVxuICAgICAgICAvLyBvdXRwdXRzIHRoZSBmb2xsb3dpbmc6XG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIHByb3BlcnR5OiAnd2lkdGgnLFxuICAgICAgICAvLyAgICAgdmFsdWU6ICcxMDBweCcsXG4gICAgICAgIC8vICAgICBwYXJzZWQ6IHtcbiAgICAgICAgLy8gICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgLy8gICAgICAgICBzdHJpbmc6ICcxMDBweCcsXG4gICAgICAgIC8vICAgICAgICAgdW5pdDogJ3B4JyxcbiAgICAgICAgLy8gICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9KVxuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBlbGVtZW50LmdldENTU1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY3NzUHJvcGVydHkgY3NzIHByb3BlcnR5IG5hbWVcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHNwZWNpZmllZCBjc3Mgb2YgdGhlIGVsZW1lbnRcbiAqIEB1c2VzIHByb3RvY29sL2VsZW1lbnRzLCBwcm90b2NvbC9lbGVtZW50SWRDc3NQcm9wZXJ0eVxuICogQHR5cGUgcHJvcGVydHlcbiAqXG4gKi9cblxuaW1wb3J0IHsgcGFyc2VDU1MgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0Q1NTUHJvcGVydHkgKGNzc1Byb3BlcnR5KSB7XG4gICAgY29uc3QgY3NzVmFsdWUgPSBhd2FpdCB0aGlzLmdldEVsZW1lbnRDU1NWYWx1ZSh0aGlzLmVsZW1lbnRJZCwgY3NzUHJvcGVydHkpXG4gICAgcmV0dXJuIHBhcnNlQ1NTKGNzc1ZhbHVlLCBjc3NQcm9wZXJ0eSlcbn1cbiJdfQ==