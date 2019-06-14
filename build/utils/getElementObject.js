"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElements = exports.getElement = void 0;

require("source-map-support/register");

var _webdriver = require("webdriver");

var _config = require("@wdio/config");

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _utils = require("../utils");

var _middlewares = require("../middlewares");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * transforms and findElement response into a WDIO element
 * @param  {String} selector  selector that was used to query the element
 * @param  {Object} res       findElement response
 * @return {Object}           WDIO element object
 */
const getElement = function findElement(selector, res) {
  const browser = (0, _utils.getBrowserObject)(this);
  const prototype = (0, _lodash.default)({}, browser.__propertiesObject__, (0, _utils.getPrototype)('element'), {
    scope: 'element'
  });
  const element = (0, _webdriver.webdriverMonad)(this.options, client => {
    const elementId = (0, _utils.getElementFromResponse)(res);

    if (elementId) {
      /**
       * set elementId for easy access
       */
      client.elementId = elementId;
      /**
       * set element id with proper key so element can be passed into execute commands
       */

      if (this.isW3C) {
        client[_constants.ELEMENT_KEY] = elementId;
      } else {
        client.ELEMENT = elementId;
      }
    } else {
      client.error = res;
    }

    client.selector = selector;
    client.parent = this;
    client.emit = this.emit.bind(this);
    return client;
  }, prototype);
  const elementInstance = element(this.sessionId, (0, _middlewares.elementErrorHandler)(_config.wrapCommand));
  const origAddCommand = elementInstance.addCommand.bind(elementInstance);

  elementInstance.addCommand = (name, fn) => {
    browser.__propertiesObject__[name] = {
      value: fn
    };
    origAddCommand(name, (0, _config.runFnInFiberContext)(fn));
  };

  return elementInstance;
};
/**
 * transforms and findElement response into a WDIO element
 * @param  {String} selector  selector that was used to query the element
 * @param  {Object} res       findElement response
 * @return {Object}           WDIO element object
 */


exports.getElement = getElement;

const getElements = function getElements(selector, res) {
  const browser = (0, _utils.getBrowserObject)(this);
  const prototype = (0, _lodash.default)({}, browser.__propertiesObject__, (0, _utils.getPrototype)('element'), {
    scope: 'element'
  });
  const elements = res.map((res, i) => {
    const element = (0, _webdriver.webdriverMonad)(this.options, client => {
      const elementId = (0, _utils.getElementFromResponse)(res);

      if (elementId) {
        /**
         * set elementId for easy access
         */
        client.elementId = elementId;
        /**
         * set element id with proper key so element can be passed into execute commands
         */

        if (this.isW3C) {
          client[_constants.ELEMENT_KEY] = elementId;
        } else {
          client.ELEMENT = elementId;
        }
      } else {
        client.error = res;
      }

      client.selector = selector;
      client.parent = this;
      client.index = i;
      client.emit = this.emit.bind(this);
      return client;
    }, prototype);
    const elementInstance = element(this.sessionId, (0, _middlewares.elementErrorHandler)(_config.wrapCommand));
    const origAddCommand = elementInstance.addCommand.bind(elementInstance);

    elementInstance.addCommand = (name, fn) => {
      browser.__propertiesObject__[name] = {
        value: fn
      };
      origAddCommand(name, (0, _config.runFnInFiberContext)(fn));
    };

    return elementInstance;
  });
  return elements;
};

exports.getElements = getElements;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRFbGVtZW50T2JqZWN0LmpzIl0sIm5hbWVzIjpbImdldEVsZW1lbnQiLCJmaW5kRWxlbWVudCIsInNlbGVjdG9yIiwicmVzIiwiYnJvd3NlciIsInByb3RvdHlwZSIsIl9fcHJvcGVydGllc09iamVjdF9fIiwic2NvcGUiLCJlbGVtZW50Iiwib3B0aW9ucyIsImNsaWVudCIsImVsZW1lbnRJZCIsImlzVzNDIiwiRUxFTUVOVF9LRVkiLCJFTEVNRU5UIiwiZXJyb3IiLCJwYXJlbnQiLCJlbWl0IiwiZWxlbWVudEluc3RhbmNlIiwic2Vzc2lvbklkIiwid3JhcENvbW1hbmQiLCJvcmlnQWRkQ29tbWFuZCIsImFkZENvbW1hbmQiLCJuYW1lIiwiZm4iLCJ2YWx1ZSIsImdldEVsZW1lbnRzIiwiZWxlbWVudHMiLCJtYXAiLCJpIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7OztBQU1PLE1BQU1BLFVBQVUsR0FBRyxTQUFTQyxXQUFULENBQXNCQyxRQUF0QixFQUFnQ0MsR0FBaEMsRUFBcUM7QUFDM0QsUUFBTUMsT0FBTyxHQUFHLDZCQUFpQixJQUFqQixDQUFoQjtBQUNBLFFBQU1DLFNBQVMsR0FBRyxxQkFBTSxFQUFOLEVBQVVELE9BQU8sQ0FBQ0Usb0JBQWxCLEVBQXdDLHlCQUFpQixTQUFqQixDQUF4QyxFQUFxRTtBQUFFQyxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFyRSxDQUFsQjtBQUVBLFFBQU1DLE9BQU8sR0FBRywrQkFBZSxLQUFLQyxPQUFwQixFQUE4QkMsTUFBRCxJQUFZO0FBQ3JELFVBQU1DLFNBQVMsR0FBRyxtQ0FBdUJSLEdBQXZCLENBQWxCOztBQUVBLFFBQUlRLFNBQUosRUFBZTtBQUNYOzs7QUFHQUQsTUFBQUEsTUFBTSxDQUFDQyxTQUFQLEdBQW1CQSxTQUFuQjtBQUVBOzs7O0FBR0EsVUFBSSxLQUFLQyxLQUFU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QUEsZUFBZSxDQUFDSSxVQUFoQixHQUE2QixDQUFDQyxJQUFELEVBQU9DLEVBQVAsS0FBYztBQUN2Q3BCLE1BQUFBLE9BQU8sQ0FBQ0Usb0JBQVIsQ0FBNkJpQixJQUE3QixJQUFxQztBQUFFRSxRQUFBQSxLQUFLLEVBQUVEO0FBQVQsT0FBckM7QUFDQUgsTUFBQUEsY0FBYyxDQUFDRSxJQUFELEVBQU8saUNBQW9CQyxFQUFwQixDQUFQLENBQWQ7QUFDSCxLQUhEOztBQUlBLFdBQU9OLGVBQVA7QUFDSCxHQXJDZ0IsQ0FBakI7QUF1Q0EsU0FBT1MsUUFBUDtBQUNILENBNUNNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2ViZHJpdmVyTW9uYWQgfSBmcm9tICd3ZWJkcml2ZXInXG5pbXBvcnQgeyB3cmFwQ29tbWFuZCwgcnVuRm5JbkZpYmVyQ29udGV4dCB9IGZyb20gJ0B3ZGlvL2NvbmZpZydcbmltcG9ydCBtZXJnZSBmcm9tICdsb2Rhc2gubWVyZ2UnXG5cbmltcG9ydCB7IGdldEJyb3dzZXJPYmplY3QsIGdldFByb3RvdHlwZSBhcyBnZXRXRElPUHJvdG90eXBlLCBnZXRFbGVtZW50RnJvbVJlc3BvbnNlIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBlbGVtZW50RXJyb3JIYW5kbGVyIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnXG5pbXBvcnQgeyBFTEVNRU5UX0tFWSB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuLyoqXG4gKiB0cmFuc2Zvcm1zIGFuZCBmaW5kRWxlbWVudCByZXNwb25zZSBpbnRvIGEgV0RJTyBlbGVtZW50XG4gKiBAcGFyYW0gIHtTdHJpbmd9IHNlbGVjdG9yICBzZWxlY3RvciB0aGF0IHdhcyB1c2VkIHRvIHF1ZXJ5IHRoZSBlbGVtZW50XG4gKiBAcGFyYW0gIHtPYmplY3R9IHJlcyAgICAgICBmaW5kRWxlbWVudCByZXNwb25zZVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgV0RJTyBlbGVtZW50IG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgZ2V0RWxlbWVudCA9IGZ1bmN0aW9uIGZpbmRFbGVtZW50IChzZWxlY3RvciwgcmVzKSB7XG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJPYmplY3QodGhpcylcbiAgICBjb25zdCBwcm90b3R5cGUgPSBtZXJnZSh7fSwgYnJvd3Nlci5fX3Byb3BlcnRpZXNPYmplY3RfXywgZ2V0V0RJT1Byb3RvdHlwZSgnZWxlbWVudCcpLCB7IHNjb3BlOiAnZWxlbWVudCcgfSlcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB3ZWJkcml2ZXJNb25hZCh0aGlzLm9wdGlvbnMsIChjbGllbnQpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudElkID0gZ2V0RWxlbWVudEZyb21SZXNwb25zZShyZXMpXG5cbiAgICAgICAgaWYgKGVsZW1lbnRJZCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBzZXQgZWxlbWVudElkIGZvciBlYXN5IGFjY2Vzc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjbGllbnQuZWxlbWVudElkID0gZWxlbWVudElkXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogc2V0IGVsZW1lbnQgaWQgd2l0aCBwcm9wZXIga2V5IHNvIGVsZW1lbnQgY2FuIGJlIHBhc3NlZCBpbnRvIGV4ZWN1dGUgY29tbWFuZHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNXM0MpIHtcbiAgICAgICAgICAgICAgICBjbGllbnRbRUxFTUVOVF9LRVldID0gZWxlbWVudElkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsaWVudC5FTEVNRU5UID0gZWxlbWVudElkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGllbnQuZXJyb3IgPSByZXNcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWVudC5zZWxlY3RvciA9IHNlbGVjdG9yXG4gICAgICAgIGNsaWVudC5wYXJlbnQgPSB0aGlzXG4gICAgICAgIGNsaWVudC5lbWl0ID0gOjp0aGlzLmVtaXRcbiAgICAgICAgcmV0dXJuIGNsaWVudFxuICAgIH0sIHByb3RvdHlwZSlcblxuICAgIGNvbnN0IGVsZW1lbnRJbnN0YW5jZSA9IGVsZW1lbnQodGhpcy5zZXNzaW9uSWQsIGVsZW1lbnRFcnJvckhhbmRsZXIod3JhcENvbW1hbmQpKVxuXG4gICAgY29uc3Qgb3JpZ0FkZENvbW1hbmQgPSA6OmVsZW1lbnRJbnN0YW5jZS5hZGRDb21tYW5kXG4gICAgZWxlbWVudEluc3RhbmNlLmFkZENvbW1hbmQgPSAobmFtZSwgZm4pID0+IHtcbiAgICAgICAgYnJvd3Nlci5fX3Byb3BlcnRpZXNPYmplY3RfX1tuYW1lXSA9IHsgdmFsdWU6IGZuIH1cbiAgICAgICAgb3JpZ0FkZENvbW1hbmQobmFtZSwgcnVuRm5JbkZpYmVyQ29udGV4dChmbikpXG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50SW5zdGFuY2Vcbn1cblxuLyoqXG4gKiB0cmFuc2Zvcm1zIGFuZCBmaW5kRWxlbWVudCByZXNwb25zZSBpbnRvIGEgV0RJTyBlbGVtZW50XG4gKiBAcGFyYW0gIHtTdHJpbmd9IHNlbGVjdG9yICBzZWxlY3RvciB0aGF0IHdhcyB1c2VkIHRvIHF1ZXJ5IHRoZSBlbGVtZW50XG4gKiBAcGFyYW0gIHtPYmplY3R9IHJlcyAgICAgICBmaW5kRWxlbWVudCByZXNwb25zZVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgV0RJTyBlbGVtZW50IG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgZ2V0RWxlbWVudHMgPSBmdW5jdGlvbiBnZXRFbGVtZW50cyAoc2VsZWN0b3IsIHJlcykge1xuICAgIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyT2JqZWN0KHRoaXMpXG4gICAgY29uc3QgcHJvdG90eXBlID0gbWVyZ2Uoe30sIGJyb3dzZXIuX19wcm9wZXJ0aWVzT2JqZWN0X18sIGdldFdESU9Qcm90b3R5cGUoJ2VsZW1lbnQnKSwgeyBzY29wZTogJ2VsZW1lbnQnIH0pXG5cbiAgICBjb25zdCBlbGVtZW50cyA9IHJlcy5tYXAoKHJlcywgaSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gd2ViZHJpdmVyTW9uYWQodGhpcy5vcHRpb25zLCAoY2xpZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50SWQgPSBnZXRFbGVtZW50RnJvbVJlc3BvbnNlKHJlcylcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRJZCkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIHNldCBlbGVtZW50SWQgZm9yIGVhc3kgYWNjZXNzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY2xpZW50LmVsZW1lbnRJZCA9IGVsZW1lbnRJZFxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogc2V0IGVsZW1lbnQgaWQgd2l0aCBwcm9wZXIga2V5IHNvIGVsZW1lbnQgY2FuIGJlIHBhc3NlZCBpbnRvIGV4ZWN1dGUgY29tbWFuZHNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1czQykge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRbRUxFTUVOVF9LRVldID0gZWxlbWVudElkXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50LkVMRU1FTlQgPSBlbGVtZW50SWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsaWVudC5lcnJvciA9IHJlc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGllbnQuc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICAgICAgY2xpZW50LnBhcmVudCA9IHRoaXNcbiAgICAgICAgICAgIGNsaWVudC5pbmRleCA9IGlcbiAgICAgICAgICAgIGNsaWVudC5lbWl0ID0gOjp0aGlzLmVtaXRcbiAgICAgICAgICAgIHJldHVybiBjbGllbnRcbiAgICAgICAgfSwgcHJvdG90eXBlKVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRJbnN0YW5jZSA9IGVsZW1lbnQodGhpcy5zZXNzaW9uSWQsIGVsZW1lbnRFcnJvckhhbmRsZXIod3JhcENvbW1hbmQpKVxuXG4gICAgICAgIGNvbnN0IG9yaWdBZGRDb21tYW5kID0gOjplbGVtZW50SW5zdGFuY2UuYWRkQ29tbWFuZFxuICAgICAgICBlbGVtZW50SW5zdGFuY2UuYWRkQ29tbWFuZCA9IChuYW1lLCBmbikgPT4ge1xuICAgICAgICAgICAgYnJvd3Nlci5fX3Byb3BlcnRpZXNPYmplY3RfX1tuYW1lXSA9IHsgdmFsdWU6IGZuIH1cbiAgICAgICAgICAgIG9yaWdBZGRDb21tYW5kKG5hbWUsIHJ1bkZuSW5GaWJlckNvbnRleHQoZm4pKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50SW5zdGFuY2VcbiAgICB9KVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzXG59XG4iXX0=