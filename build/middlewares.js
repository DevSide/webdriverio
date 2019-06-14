"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiremoteHandler = exports.elementErrorHandler = void 0;

require("source-map-support/register");

var _refetchElement = _interopRequireDefault(require("./utils/refetchElement"));

var _implicitWait = _interopRequireDefault(require("./utils/implicitWait"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is an command wrapper for elements that checks if a command is called
 * that wasn't found on the page and automatically waits for it
 *
 * @param  {Function} fn  commandWrap from wdio-sync package (or shim if not running in sync)
 */
const elementErrorHandler = fn => (commandName, commandFn) => {
  return function (...args) {
    return fn(commandName, async () => {
      const element = await (0, _implicitWait.default)(this, commandName);
      this.elementId = element.elementId;

      try {
        const result = await fn(commandName, commandFn).apply(this, args);
        /**
         * assume Safari responses like { error: 'no such element', message: '', stacktrace: '' }
         * as `stale element reference`
         */

        if (result && result.error === 'no such element') {
          const err = new Error();
          err.name = 'stale element reference';
          throw err;
        }

        return result;
      } catch (error) {
        if (error.name === 'stale element reference') {
          const element = await (0, _refetchElement.default)(this, commandName);
          this.elementId = element.elementId;
          this.parent = element.parent;
          return await fn(commandName, commandFn).apply(this, args);
        }

        throw error;
      }
    }).apply(this);
  };
};
/**
 * handle single command calls from multiremote instances
 */


exports.elementErrorHandler = elementErrorHandler;

const multiremoteHandler = wrapCommand => commandName => {
  return wrapCommand(commandName, function (...args) {
    const commandResults = this.instances.map(instanceName => {
      return this[instanceName][commandName](...args);
    });
    return Promise.all(commandResults);
  });
};

exports.multiremoteHandler = multiremoteHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taWRkbGV3YXJlcy5qcyJdLCJuYW1lcyI6WyJlbGVtZW50RXJyb3JIYW5kbGVyIiwiZm4iLCJjb21tYW5kTmFtZSIsImNvbW1hbmRGbiIsImFyZ3MiLCJlbGVtZW50IiwiZWxlbWVudElkIiwicmVzdWx0IiwiYXBwbHkiLCJlcnJvciIsImVyciIsIkVycm9yIiwibmFtZSIsInBhcmVudCIsIm11bHRpcmVtb3RlSGFuZGxlciIsIndyYXBDb21tYW5kIiwiY29tbWFuZFJlc3VsdHMiLCJpbnN0YW5jZXMiLCJtYXAiLCJpbnN0YW5jZU5hbWUiLCJQcm9taXNlIiwiYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOzs7Ozs7QUFNTyxNQUFNQSxtQkFBbUIsR0FBSUMsRUFBRCxJQUFRLENBQUNDLFdBQUQsRUFBY0MsU0FBZCxLQUE0QjtBQUNuRSxTQUFPLFVBQVUsR0FBR0MsSUFBYixFQUFtQjtBQUN0QixXQUFPSCxFQUFFLENBQUNDLFdBQUQsRUFBYyxZQUFZO0FBQy9CLFlBQU1HLE9BQU8sR0FBRyxNQUFNLDJCQUFhLElBQWIsRUFBbUJILFdBQW5CLENBQXRCO0FBQ0EsV0FBS0ksU0FBTCxHQUFpQkQsT0FBTyxDQUFDQyxTQUF6Qjs7QUFFQSxVQUFJO0FBQ0EsY0FBTUMsTUFBTSxHQUFHLE1BQU1OLEVBQUUsQ0FBQ0MsV0FBRCxFQUFjQyxTQUFkLENBQUYsQ0FBMkJLLEtBQTNCLENBQWlDLElBQWpDLEVBQXVDSixJQUF2QyxDQUFyQjtBQUVBOzs7OztBQUlBLFlBQUlHLE1BQU0sSUFBSUEsTUFBTSxDQUFDRSxLQUFQLEtBQWlCLGlCQUEvQixFQUFrRDtBQUM5QyxnQkFBTUMsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBRCxVQUFBQSxHQUFHLENBQUNFLElBQUosR0FBVyx5QkFBWDtBQUNBLGdCQUFNRixHQUFOO0FBQ0g7O0FBRUQsZUFBT0gsTUFBUDtBQUNILE9BZEQsQ0FjRSxPQUFPRSxLQUFQLEVBQWM7QUFDWixZQUFJQSxLQUFLLENBQUNHLElBQU4sS0FBZSx5QkFBbkIsRUFBOEM7QUFDMUMsZ0JBQU1QLE9BQU8sR0FBRyxNQUFNLDZCQUFlLElBQWYsRUFBcUJILFdBQXJCLENBQXRCO0FBQ0EsZUFBS0ksU0FBTCxHQUFpQkQsT0FBTyxDQUFDQyxTQUF6QjtBQUNBLGVBQUtPLE1BQUwsR0FBY1IsT0FBTyxDQUFDUSxNQUF0QjtBQUVBLGlCQUFPLE1BQU1aLEVBQUUsQ0FBQ0MsV0FBRCxFQUFjQyxTQUFkLENBQUYsQ0FBMkJLLEtBQTNCLENBQWlDLElBQWpDLEVBQXVDSixJQUF2QyxDQUFiO0FBQ0g7O0FBQ0QsY0FBTUssS0FBTjtBQUNIO0FBQ0osS0E1QlEsQ0FBRixDQTRCSkQsS0E1QkksQ0E0QkUsSUE1QkYsQ0FBUDtBQThCSCxHQS9CRDtBQWdDSCxDQWpDTTtBQW1DUDs7Ozs7OztBQUdPLE1BQU1NLGtCQUFrQixHQUFJQyxXQUFELElBQWtCYixXQUFELElBQWlCO0FBQ2hFLFNBQU9hLFdBQVcsQ0FBQ2IsV0FBRCxFQUFjLFVBQVUsR0FBR0UsSUFBYixFQUFtQjtBQUMvQyxVQUFNWSxjQUFjLEdBQUcsS0FBS0MsU0FBTCxDQUFlQyxHQUFmLENBQW9CQyxZQUFELElBQWtCO0FBQ3hELGFBQU8sS0FBS0EsWUFBTCxFQUFtQmpCLFdBQW5CLEVBQWdDLEdBQUdFLElBQW5DLENBQVA7QUFDSCxLQUZzQixDQUF2QjtBQUlBLFdBQU9nQixPQUFPLENBQUNDLEdBQVIsQ0FBWUwsY0FBWixDQUFQO0FBQ0gsR0FOaUIsQ0FBbEI7QUFPSCxDQVJNIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgcmVmZXRjaEVsZW1lbnQgZnJvbSAnLi91dGlscy9yZWZldGNoRWxlbWVudCdcbmltcG9ydCBpbXBsaWNpdFdhaXQgZnJvbSAnLi91dGlscy9pbXBsaWNpdFdhaXQnXG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgYW4gY29tbWFuZCB3cmFwcGVyIGZvciBlbGVtZW50cyB0aGF0IGNoZWNrcyBpZiBhIGNvbW1hbmQgaXMgY2FsbGVkXG4gKiB0aGF0IHdhc24ndCBmb3VuZCBvbiB0aGUgcGFnZSBhbmQgYXV0b21hdGljYWxseSB3YWl0cyBmb3IgaXRcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gIGNvbW1hbmRXcmFwIGZyb20gd2Rpby1zeW5jIHBhY2thZ2UgKG9yIHNoaW0gaWYgbm90IHJ1bm5pbmcgaW4gc3luYylcbiAqL1xuZXhwb3J0IGNvbnN0IGVsZW1lbnRFcnJvckhhbmRsZXIgPSAoZm4pID0+IChjb21tYW5kTmFtZSwgY29tbWFuZEZuKSA9PiB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBmbihjb21tYW5kTmFtZSwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGF3YWl0IGltcGxpY2l0V2FpdCh0aGlzLCBjb21tYW5kTmFtZSlcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudElkID0gZWxlbWVudC5lbGVtZW50SWRcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbihjb21tYW5kTmFtZSwgY29tbWFuZEZuKS5hcHBseSh0aGlzLCBhcmdzKVxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogYXNzdW1lIFNhZmFyaSByZXNwb25zZXMgbGlrZSB7IGVycm9yOiAnbm8gc3VjaCBlbGVtZW50JywgbWVzc2FnZTogJycsIHN0YWNrdHJhY2U6ICcnIH1cbiAgICAgICAgICAgICAgICAgKiBhcyBgc3RhbGUgZWxlbWVudCByZWZlcmVuY2VgXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3IgPT09ICdubyBzdWNoIGVsZW1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgICAgICAgIGVyci5uYW1lID0gJ3N0YWxlIGVsZW1lbnQgcmVmZXJlbmNlJ1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5uYW1lID09PSAnc3RhbGUgZWxlbWVudCByZWZlcmVuY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhd2FpdCByZWZldGNoRWxlbWVudCh0aGlzLCBjb21tYW5kTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50LmVsZW1lbnRJZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudCA9IGVsZW1lbnQucGFyZW50XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZuKGNvbW1hbmROYW1lLCBjb21tYW5kRm4pLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmFwcGx5KHRoaXMpXG5cbiAgICB9XG59XG5cbi8qKlxuICogaGFuZGxlIHNpbmdsZSBjb21tYW5kIGNhbGxzIGZyb20gbXVsdGlyZW1vdGUgaW5zdGFuY2VzXG4gKi9cbmV4cG9ydCBjb25zdCBtdWx0aXJlbW90ZUhhbmRsZXIgPSAod3JhcENvbW1hbmQpID0+IChjb21tYW5kTmFtZSkgPT4ge1xuICAgIHJldHVybiB3cmFwQ29tbWFuZChjb21tYW5kTmFtZSwgZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZFJlc3VsdHMgPSB0aGlzLmluc3RhbmNlcy5tYXAoKGluc3RhbmNlTmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbaW5zdGFuY2VOYW1lXVtjb21tYW5kTmFtZV0oLi4uYXJncylcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoY29tbWFuZFJlc3VsdHMpXG4gICAgfSlcbn1cbiJdfQ==