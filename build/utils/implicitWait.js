"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = implicitWait;

require("source-map-support/register");

var _logger = _interopRequireDefault(require("@wdio/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = (0, _logger.default)('webdriverio');
/**
 * wait on element if:
 *  - elementId couldn't be fetched in the first place
 *  - command is not explicit wait command for existance or displayedness
 * @param  {Object}  currentElement  element to wait on if necessary
 * @param  {string}  commandName  name of the command that called this
 * @return {Promise} resolves with element after any necessary waiting
 */

async function implicitWait(currentElement, commandName) {
  if (!currentElement.elementId && !commandName.match(/(waitUntil|waitFor|isExisting|is?\w+Displayed)/)) {
    log.debug(`command ${commandName} was called on an element ("${currentElement.selector}") ` + 'that wasn\'t found, waiting for it...');

    try {
      await currentElement.waitForExist();
      /**
       * if waitForExist was successful requery element and assign elementId to the scope
       */

      return await currentElement.parent.$(currentElement.selector);
    } catch (_unused) {
      throw new Error(`Can't call ${commandName} on element with selector "${currentElement.selector}" because element wasn't found`);
    }
  }

  return currentElement;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pbXBsaWNpdFdhaXQuanMiXSwibmFtZXMiOlsibG9nIiwiaW1wbGljaXRXYWl0IiwiY3VycmVudEVsZW1lbnQiLCJjb21tYW5kTmFtZSIsImVsZW1lbnRJZCIsIm1hdGNoIiwiZGVidWciLCJzZWxlY3RvciIsIndhaXRGb3JFeGlzdCIsInBhcmVudCIsIiQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQSxNQUFNQSxHQUFHLEdBQUcscUJBQU8sYUFBUCxDQUFaO0FBRUE7Ozs7Ozs7OztBQVFlLGVBQWVDLFlBQWYsQ0FBNkJDLGNBQTdCLEVBQTZDQyxXQUE3QyxFQUEwRDtBQUVyRSxNQUFJLENBQUNELGNBQWMsQ0FBQ0UsU0FBaEIsSUFBNkIsQ0FBQ0QsV0FBVyxDQUFDRSxLQUFaLENBQWtCLGdEQUFsQixDQUFsQyxFQUF1RztBQUNuR0wsSUFBQUEsR0FBRyxDQUFDTSxLQUFKLENBQ0ssV0FBVUgsV0FBWSwrQkFBOEJELGNBQWMsQ0FBQ0ssUUFBUyxLQUE3RSxHQUNBLHVDQUZKOztBQUtBLFFBQUk7QUFDQSxZQUFNTCxjQUFjLENBQUNNLFlBQWYsRUFBTjtBQUNBOzs7O0FBR0EsYUFBTyxNQUFNTixjQUFjLENBQUNPLE1BQWYsQ0FBc0JDLENBQXRCLENBQXdCUixjQUFjLENBQUNLLFFBQXZDLENBQWI7QUFDSCxLQU5ELENBTUUsZ0JBQU07QUFDSixZQUFNLElBQUlJLEtBQUosQ0FDRCxjQUFhUixXQUFZLDhCQUE2QkQsY0FBYyxDQUFDSyxRQUFTLGdDQUQ3RSxDQUFOO0FBRUg7QUFDSjs7QUFFRCxTQUFPTCxjQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nZ2VyIGZyb20gJ0B3ZGlvL2xvZ2dlcidcbmNvbnN0IGxvZyA9IGxvZ2dlcignd2ViZHJpdmVyaW8nKVxuXG4vKipcbiAqIHdhaXQgb24gZWxlbWVudCBpZjpcbiAqICAtIGVsZW1lbnRJZCBjb3VsZG4ndCBiZSBmZXRjaGVkIGluIHRoZSBmaXJzdCBwbGFjZVxuICogIC0gY29tbWFuZCBpcyBub3QgZXhwbGljaXQgd2FpdCBjb21tYW5kIGZvciBleGlzdGFuY2Ugb3IgZGlzcGxheWVkbmVzc1xuICogQHBhcmFtICB7T2JqZWN0fSAgY3VycmVudEVsZW1lbnQgIGVsZW1lbnQgdG8gd2FpdCBvbiBpZiBuZWNlc3NhcnlcbiAqIEBwYXJhbSAge3N0cmluZ30gIGNvbW1hbmROYW1lICBuYW1lIG9mIHRoZSBjb21tYW5kIHRoYXQgY2FsbGVkIHRoaXNcbiAqIEByZXR1cm4ge1Byb21pc2V9IHJlc29sdmVzIHdpdGggZWxlbWVudCBhZnRlciBhbnkgbmVjZXNzYXJ5IHdhaXRpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW1wbGljaXRXYWl0IChjdXJyZW50RWxlbWVudCwgY29tbWFuZE5hbWUpIHtcblxuICAgIGlmICghY3VycmVudEVsZW1lbnQuZWxlbWVudElkICYmICFjb21tYW5kTmFtZS5tYXRjaCgvKHdhaXRVbnRpbHx3YWl0Rm9yfGlzRXhpc3Rpbmd8aXM/XFx3K0Rpc3BsYXllZCkvKSkge1xuICAgICAgICBsb2cuZGVidWcoXG4gICAgICAgICAgICBgY29tbWFuZCAke2NvbW1hbmROYW1lfSB3YXMgY2FsbGVkIG9uIGFuIGVsZW1lbnQgKFwiJHtjdXJyZW50RWxlbWVudC5zZWxlY3Rvcn1cIikgYCArXG4gICAgICAgICAgICAndGhhdCB3YXNuXFwndCBmb3VuZCwgd2FpdGluZyBmb3IgaXQuLi4nXG4gICAgICAgIClcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgY3VycmVudEVsZW1lbnQud2FpdEZvckV4aXN0KClcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogaWYgd2FpdEZvckV4aXN0IHdhcyBzdWNjZXNzZnVsIHJlcXVlcnkgZWxlbWVudCBhbmQgYXNzaWduIGVsZW1lbnRJZCB0byB0aGUgc2NvcGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGN1cnJlbnRFbGVtZW50LnBhcmVudC4kKGN1cnJlbnRFbGVtZW50LnNlbGVjdG9yKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgQ2FuJ3QgY2FsbCAke2NvbW1hbmROYW1lfSBvbiBlbGVtZW50IHdpdGggc2VsZWN0b3IgXCIke2N1cnJlbnRFbGVtZW50LnNlbGVjdG9yfVwiIGJlY2F1c2UgZWxlbWVudCB3YXNuJ3QgZm91bmRgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50XG59XG4iXX0=