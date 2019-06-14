"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDisplayed;

require("source-map-support/register");

var _constants = require("../../constants");

var _utils = require("../../utils");

var _isElementDisplayed = _interopRequireDefault(require("../../scripts/isElementDisplayed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Return true if the selected DOM-element is displayed.
 *
 * <example>
    :index.html
    <div id="notDisplayed" style="display: none"></div>
    <div id="notVisible" style="visibility: hidden"></div>
    <div id="notInViewport" style="position:absolute; left: 9999999"></div>
    <div id="zeroOpacity" style="opacity: 0"></div>
    :isDisplayed.js
    it('should detect if an element is displayed', () => {
        let elem = $('#notDisplayed');
        let isDisplayed = elem.isDisplayed();
        console.log(isDisplayed); // outputs: false

        elem = $('#notVisible');

        isDisplayed = elem.isDisplayed();
        console.log(isDisplayed); // outputs: false

        elem = $('#notExisting');
        isDisplayed = elem.isDisplayed();
        console.log(isDisplayed); // outputs: false

        elem = $('#notInViewport');
        isDisplayed = elem.isDisplayed();
        console.log(isDisplayed); // outputs: true

        elem = $('#zeroOpacity');
        isDisplayed = elem.isDisplayed();
        console.log(isDisplayed); // outputs: true
    });
 * </example>
 *
 * @alias element.isDisplayed
 * @return {Boolean} true if element is displayed
 * @uses protocol/elements, protocol/elementIdDisplayed
 * @type state
 *
 */
const noW3CEndpoint = ['microsoftedge', 'safari', 'chrome'];

async function isDisplayed() {
  let browser = (0, _utils.getBrowserObject)(this);
  /*
   * This is only necessary as isDisplayed is on the exclusion list for the middleware
   */

  if (!this.elementId) {
    this.elementId = (await this.parent.$(this.selector)).elementId;
  }
  /*
   * if element was still not found it also is not displayed
   */


  if (!this.elementId) {
    return false;
  }
  /*
   * https://www.w3.org/TR/webdriver/#element-displayedness
   * Certain drivers have decided to remove the endpoint as the spec
   * no longer dictates it. In those instances, we pass the element through a script
   * that was provided by Brian Burg of safaridriver.
   *
   * 6th of May 2019 APPIUM response (mykola-mokhnach) :
   * - Appium didn't enable W3C mode for mobile drivers.
   * - Safari and Chrome work in jsonwp mode and Appium just rewrites W3C requests from upstream to jsonwp if needed
   */


  return browser.isW3C && !browser.isMobile && noW3CEndpoint.includes(browser.capabilities.browserName.toLowerCase()) ? await browser.execute(_isElementDisplayed.default, {
    [_constants.ELEMENT_KEY]: this.elementId,
    // w3c compatible
    ELEMENT: this.elementId // jsonwp compatible

  }) : await this.isElementDisplayed(this.elementId);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L2lzRGlzcGxheWVkLmpzIl0sIm5hbWVzIjpbIm5vVzNDRW5kcG9pbnQiLCJpc0Rpc3BsYXllZCIsImJyb3dzZXIiLCJlbGVtZW50SWQiLCJwYXJlbnQiLCIkIiwic2VsZWN0b3IiLCJpc1czQyIsImlzTW9iaWxlIiwiaW5jbHVkZXMiLCJjYXBhYmlsaXRpZXMiLCJicm93c2VyTmFtZSIsInRvTG93ZXJDYXNlIiwiZXhlY3V0ZSIsImlzRWxlbWVudERpc3BsYXllZFNjcmlwdCIsIkVMRU1FTlRfS0VZIiwiRUxFTUVOVCIsImlzRWxlbWVudERpc3BsYXllZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBMENBOztBQUNBOztBQUNBOzs7O0FBNUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQyxlQUFELEVBQWtCLFFBQWxCLEVBQTRCLFFBQTVCLENBQXRCOztBQUVlLGVBQWVDLFdBQWYsR0FBNkI7QUFFeEMsTUFBSUMsT0FBTyxHQUFHLDZCQUFpQixJQUFqQixDQUFkO0FBRUE7Ozs7QUFHQSxNQUFJLENBQUMsS0FBS0MsU0FBVixFQUFxQjtBQUNqQixTQUFLQSxTQUFMLEdBQWlCLENBQUMsTUFBTSxLQUFLQyxNQUFMLENBQVlDLENBQVosQ0FBYyxLQUFLQyxRQUFuQixDQUFQLEVBQXFDSCxTQUF0RDtBQUNIO0FBRUQ7Ozs7O0FBR0EsTUFBSSxDQUFDLEtBQUtBLFNBQVYsRUFBcUI7QUFDakIsV0FBTyxLQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7O0FBVUEsU0FBT0QsT0FBTyxDQUFDSyxLQUFSLElBQWlCLENBQUNMLE9BQU8sQ0FBQ00sUUFBMUIsSUFBc0NSLGFBQWEsQ0FBQ1MsUUFBZCxDQUF1QlAsT0FBTyxDQUFDUSxZQUFSLENBQXFCQyxXQUFyQixDQUFpQ0MsV0FBakMsRUFBdkIsQ0FBdEMsR0FDSCxNQUFNVixPQUFPLENBQUNXLE9BQVIsQ0FBZ0JDLDJCQUFoQixFQUEwQztBQUM1QyxLQUFDQyxzQkFBRCxHQUFlLEtBQUtaLFNBRHdCO0FBQ2I7QUFDL0JhLElBQUFBLE9BQU8sRUFBRSxLQUFLYixTQUY4QixDQUVwQjs7QUFGb0IsR0FBMUMsQ0FESCxHQUtILE1BQU0sS0FBS2Msa0JBQUwsQ0FBd0IsS0FBS2QsU0FBN0IsQ0FMVjtBQU1IIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogUmV0dXJuIHRydWUgaWYgdGhlIHNlbGVjdGVkIERPTS1lbGVtZW50IGlzIGRpc3BsYXllZC5cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6aW5kZXguaHRtbFxuICAgIDxkaXYgaWQ9XCJub3REaXNwbGF5ZWRcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj48L2Rpdj5cbiAgICA8ZGl2IGlkPVwibm90VmlzaWJsZVwiIHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuXCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIm5vdEluVmlld3BvcnRcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OiA5OTk5OTk5XCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cInplcm9PcGFjaXR5XCIgc3R5bGU9XCJvcGFjaXR5OiAwXCI+PC9kaXY+XG4gICAgOmlzRGlzcGxheWVkLmpzXG4gICAgaXQoJ3Nob3VsZCBkZXRlY3QgaWYgYW4gZWxlbWVudCBpcyBkaXNwbGF5ZWQnLCAoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtID0gJCgnI25vdERpc3BsYXllZCcpO1xuICAgICAgICBsZXQgaXNEaXNwbGF5ZWQgPSBlbGVtLmlzRGlzcGxheWVkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzRGlzcGxheWVkKTsgLy8gb3V0cHV0czogZmFsc2VcblxuICAgICAgICBlbGVtID0gJCgnI25vdFZpc2libGUnKTtcblxuICAgICAgICBpc0Rpc3BsYXllZCA9IGVsZW0uaXNEaXNwbGF5ZWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coaXNEaXNwbGF5ZWQpOyAvLyBvdXRwdXRzOiBmYWxzZVxuXG4gICAgICAgIGVsZW0gPSAkKCcjbm90RXhpc3RpbmcnKTtcbiAgICAgICAgaXNEaXNwbGF5ZWQgPSBlbGVtLmlzRGlzcGxheWVkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzRGlzcGxheWVkKTsgLy8gb3V0cHV0czogZmFsc2VcblxuICAgICAgICBlbGVtID0gJCgnI25vdEluVmlld3BvcnQnKTtcbiAgICAgICAgaXNEaXNwbGF5ZWQgPSBlbGVtLmlzRGlzcGxheWVkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzRGlzcGxheWVkKTsgLy8gb3V0cHV0czogdHJ1ZVxuXG4gICAgICAgIGVsZW0gPSAkKCcjemVyb09wYWNpdHknKTtcbiAgICAgICAgaXNEaXNwbGF5ZWQgPSBlbGVtLmlzRGlzcGxheWVkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzRGlzcGxheWVkKTsgLy8gb3V0cHV0czogdHJ1ZVxuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBlbGVtZW50LmlzRGlzcGxheWVkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGVsZW1lbnQgaXMgZGlzcGxheWVkXG4gKiBAdXNlcyBwcm90b2NvbC9lbGVtZW50cywgcHJvdG9jb2wvZWxlbWVudElkRGlzcGxheWVkXG4gKiBAdHlwZSBzdGF0ZVxuICpcbiAqL1xuXG5pbXBvcnQgeyBFTEVNRU5UX0tFWSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGdldEJyb3dzZXJPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBpc0VsZW1lbnREaXNwbGF5ZWRTY3JpcHQgZnJvbSAnLi4vLi4vc2NyaXB0cy9pc0VsZW1lbnREaXNwbGF5ZWQnXG5cbmNvbnN0IG5vVzNDRW5kcG9pbnQgPSBbJ21pY3Jvc29mdGVkZ2UnLCAnc2FmYXJpJywgJ2Nocm9tZSddXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGlzRGlzcGxheWVkKCkge1xuXG4gICAgbGV0IGJyb3dzZXIgPSBnZXRCcm93c2VyT2JqZWN0KHRoaXMpXG5cbiAgICAvKlxuICAgICAqIFRoaXMgaXMgb25seSBuZWNlc3NhcnkgYXMgaXNEaXNwbGF5ZWQgaXMgb24gdGhlIGV4Y2x1c2lvbiBsaXN0IGZvciB0aGUgbWlkZGxld2FyZVxuICAgICAqL1xuICAgIGlmICghdGhpcy5lbGVtZW50SWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSAoYXdhaXQgdGhpcy5wYXJlbnQuJCh0aGlzLnNlbGVjdG9yKSkuZWxlbWVudElkXG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBpZiBlbGVtZW50IHdhcyBzdGlsbCBub3QgZm91bmQgaXQgYWxzbyBpcyBub3QgZGlzcGxheWVkXG4gICAgICovXG4gICAgaWYgKCF0aGlzLmVsZW1lbnRJZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93ZWJkcml2ZXIvI2VsZW1lbnQtZGlzcGxheWVkbmVzc1xuICAgICAqIENlcnRhaW4gZHJpdmVycyBoYXZlIGRlY2lkZWQgdG8gcmVtb3ZlIHRoZSBlbmRwb2ludCBhcyB0aGUgc3BlY1xuICAgICAqIG5vIGxvbmdlciBkaWN0YXRlcyBpdC4gSW4gdGhvc2UgaW5zdGFuY2VzLCB3ZSBwYXNzIHRoZSBlbGVtZW50IHRocm91Z2ggYSBzY3JpcHRcbiAgICAgKiB0aGF0IHdhcyBwcm92aWRlZCBieSBCcmlhbiBCdXJnIG9mIHNhZmFyaWRyaXZlci5cbiAgICAgKlxuICAgICAqIDZ0aCBvZiBNYXkgMjAxOSBBUFBJVU0gcmVzcG9uc2UgKG15a29sYS1tb2tobmFjaCkgOlxuICAgICAqIC0gQXBwaXVtIGRpZG4ndCBlbmFibGUgVzNDIG1vZGUgZm9yIG1vYmlsZSBkcml2ZXJzLlxuICAgICAqIC0gU2FmYXJpIGFuZCBDaHJvbWUgd29yayBpbiBqc29ud3AgbW9kZSBhbmQgQXBwaXVtIGp1c3QgcmV3cml0ZXMgVzNDIHJlcXVlc3RzIGZyb20gdXBzdHJlYW0gdG8ganNvbndwIGlmIG5lZWRlZFxuICAgICAqL1xuICAgIHJldHVybiBicm93c2VyLmlzVzNDICYmICFicm93c2VyLmlzTW9iaWxlICYmIG5vVzNDRW5kcG9pbnQuaW5jbHVkZXMoYnJvd3Nlci5jYXBhYmlsaXRpZXMuYnJvd3Nlck5hbWUudG9Mb3dlckNhc2UoKSkgP1xuICAgICAgICBhd2FpdCBicm93c2VyLmV4ZWN1dGUoaXNFbGVtZW50RGlzcGxheWVkU2NyaXB0LCB7XG4gICAgICAgICAgICBbRUxFTUVOVF9LRVldOiB0aGlzLmVsZW1lbnRJZCwgLy8gdzNjIGNvbXBhdGlibGVcbiAgICAgICAgICAgIEVMRU1FTlQ6IHRoaXMuZWxlbWVudElkIC8vIGpzb253cCBjb21wYXRpYmxlXG4gICAgICAgIH0pIDpcbiAgICAgICAgYXdhaXQgdGhpcy5pc0VsZW1lbnREaXNwbGF5ZWQodGhpcy5lbGVtZW50SWQpXG59XG4iXX0=