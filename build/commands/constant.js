"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.touchAction = exports.validateParameters = exports.formatArgs = void 0;

require("source-map-support/register");

/**
 * Constants around commands
 */
const TOUCH_ACTIONS = ['press', 'longPress', 'tap', 'moveTo', 'wait', 'release'];
const POS_ACTIONS = TOUCH_ACTIONS.slice(0, 4);
const ACCEPTED_OPTIONS = ['x', 'y', 'element'];

const formatArgs = function (scope, actions) {
  return actions.map(action => {
    if (Array.isArray(action)) {
      return formatArgs(scope, action);
    }

    if (typeof action === 'string') {
      action = {
        action
      };
    }

    const formattedAction = {
      action: action.action,
      options: {}
      /**
       * don't propagate for actions that don't require element options
       */

    };
    const actionElement = action.element && typeof action.element.elementId === 'string' ? action.element.elementId : scope.elementId;

    if (POS_ACTIONS.includes(action.action) && actionElement) {
      formattedAction.options.element = actionElement;
    }

    if (isFinite(action.x)) formattedAction.options.x = action.x;
    if (isFinite(action.y)) formattedAction.options.y = action.y;
    if (action.ms) formattedAction.options.ms = action.ms;
    /**
     * remove options property if empty
     */

    if (Object.keys(formattedAction.options).length === 0) {
      delete formattedAction.options;
    }

    return formattedAction;
  });
};
/**
 * Make sure action has proper options before sending command to Appium.
 *
 * @param  {Object} params  touchAction parameters
 * @return null
 */


exports.formatArgs = formatArgs;

const validateParameters = params => {
  const options = Object.keys(params.options || {});

  if (params.action === 'release' && options.length !== 0) {
    throw new Error('action "release" doesn\'t accept any options ' + `("${options.join('", "')}" found)`);
  }

  if (params.action === 'wait' && (options.includes('x') || options.includes('y'))) {
    throw new Error('action "wait" doesn\'t accept x or y options');
  }

  if (POS_ACTIONS.includes(params.action)) {
    for (const option in params.options) {
      if (!ACCEPTED_OPTIONS.includes(option)) {
        throw new Error(`action "${params.action}" doesn't accept "${option}" as option`);
      }
    }

    if (options.length === 0) {
      throw new Error(`Touch actions like "${params.action}" need at least some kind of ` + 'position information like "element", "x" or "y" options, you\'ve none given.');
    }
  }
};

exports.validateParameters = validateParameters;

const touchAction = function (actions) {
  if (!Array.isArray(actions)) {
    actions = [actions];
  }

  const formattedAction = formatArgs(this, actions);
  const protocolCommand = Array.isArray(actions[0]) ? this.multiTouchPerform.bind(this) : this.touchPerform.bind(this);
  formattedAction.forEach(params => validateParameters(params));
  return protocolCommand(formattedAction);
};

exports.touchAction = touchAction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9jb25zdGFudC5qcyJdLCJuYW1lcyI6WyJUT1VDSF9BQ1RJT05TIiwiUE9TX0FDVElPTlMiLCJzbGljZSIsIkFDQ0VQVEVEX09QVElPTlMiLCJmb3JtYXRBcmdzIiwic2NvcGUiLCJhY3Rpb25zIiwibWFwIiwiYWN0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9ybWF0dGVkQWN0aW9uIiwib3B0aW9ucyIsImFjdGlvbkVsZW1lbnQiLCJlbGVtZW50IiwiZWxlbWVudElkIiwiaW5jbHVkZXMiLCJpc0Zpbml0ZSIsIngiLCJ5IiwibXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidmFsaWRhdGVQYXJhbWV0ZXJzIiwicGFyYW1zIiwiRXJyb3IiLCJqb2luIiwib3B0aW9uIiwidG91Y2hBY3Rpb24iLCJwcm90b2NvbENvbW1hbmQiLCJtdWx0aVRvdWNoUGVyZm9ybSIsInRvdWNoUGVyZm9ybSIsImZvckVhY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFJQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQyxPQUFELEVBQVUsV0FBVixFQUF1QixLQUF2QixFQUE4QixRQUE5QixFQUF3QyxNQUF4QyxFQUFnRCxTQUFoRCxDQUF0QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0QsYUFBYSxDQUFDRSxLQUFkLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQXBCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLFNBQVgsQ0FBekI7O0FBRU8sTUFBTUMsVUFBVSxHQUFHLFVBQVVDLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCO0FBQ2hELFNBQU9BLE9BQU8sQ0FBQ0MsR0FBUixDQUFhQyxNQUFELElBQVk7QUFDM0IsUUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNGLE1BQWQsQ0FBSixFQUEyQjtBQUN2QixhQUFPSixVQUFVLENBQUNDLEtBQUQsRUFBUUcsTUFBUixDQUFqQjtBQUNIOztBQUVELFFB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OUJNOzs7O0FBZ0NBLE1BQU1xQixXQUFXLEdBQUcsVUFBVXZCLE9BQVYsRUFBbUI7QUFDMUMsTUFBSSxDQUFDRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0osT0FBZCxDQUFMLEVBQTZCO0FBQ3pCQSxJQUFBQSxPQUFPLEdBQUcsQ0FBQ0EsT0FBRCxDQUFWO0FBQ0g7O0FBRUQsUUFBTUssZUFBZSxHQUFHUCxVQUFVLENBQUMsSUFBRCxFQUFPRSxPQUFQLENBQWxDO0FBQ0EsUUFBTXdCLGVBQWUsR0FBR3JCLEtBQUssQ0FBQ0MsT0FBTixDQUFjSixPQUFPLENBQUMsQ0FBRCxDQUFyQixJQUE4QixLQUFLeUIsaUJBQW5DLE1BQThCLElBQTlCLElBQXlELEtBQUtDLFlBQTlELE1BQXlELElBQXpELENBQXhCO0FBQ0FyQixFQUFBQSxlQUFlLENBQUNzQixPQUFoQixDQUF5QlIsTUFBRCxJQUFZRCxrQkFBa0IsQ0FBQ0MsTUFBRCxDQUF0RDtBQUNBLFNBQU9LLGVBQWUsQ0FBQ25CLGVBQUQsQ0FBdEI7QUFDSCxDQVRNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb25zdGFudHMgYXJvdW5kIGNvbW1hbmRzXG4gKi9cblxuY29uc3QgVE9VQ0hfQUNUSU9OUyA9IFsncHJlc3MnLCAnbG9uZ1ByZXNzJywgJ3RhcCcsICdtb3ZlVG8nLCAnd2FpdCcsICdyZWxlYXNlJ11cbmNvbnN0IFBPU19BQ1RJT05TID0gVE9VQ0hfQUNUSU9OUy5zbGljZSgwLCA0KVxuY29uc3QgQUNDRVBURURfT1BUSU9OUyA9IFsneCcsICd5JywgJ2VsZW1lbnQnXVxuXG5leHBvcnQgY29uc3QgZm9ybWF0QXJncyA9IGZ1bmN0aW9uIChzY29wZSwgYWN0aW9ucykge1xuICAgIHJldHVybiBhY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFjdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRBcmdzKHNjb3BlLCBhY3Rpb24pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IHsgYWN0aW9uIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZEFjdGlvbiA9IHsgYWN0aW9uOiBhY3Rpb24uYWN0aW9uLCBvcHRpb25zOiB7fSB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRvbid0IHByb3BhZ2F0ZSBmb3IgYWN0aW9ucyB0aGF0IGRvbid0IHJlcXVpcmUgZWxlbWVudCBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBhY3Rpb25FbGVtZW50ID0gYWN0aW9uLmVsZW1lbnQgJiYgdHlwZW9mIGFjdGlvbi5lbGVtZW50LmVsZW1lbnRJZCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gYWN0aW9uLmVsZW1lbnQuZWxlbWVudElkXG4gICAgICAgICAgICA6IHNjb3BlLmVsZW1lbnRJZFxuICAgICAgICBpZiAoUE9TX0FDVElPTlMuaW5jbHVkZXMoYWN0aW9uLmFjdGlvbikgJiYgYWN0aW9uRWxlbWVudCkge1xuICAgICAgICAgICAgZm9ybWF0dGVkQWN0aW9uLm9wdGlvbnMuZWxlbWVudCA9IGFjdGlvbkVsZW1lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0Zpbml0ZShhY3Rpb24ueCkpIGZvcm1hdHRlZEFjdGlvbi5vcHRpb25zLnggPSBhY3Rpb24ueFxuICAgICAgICBpZiAoaXNGaW5pdGUoYWN0aW9uLnkpKSBmb3JtYXR0ZWRBY3Rpb24ub3B0aW9ucy55ID0gYWN0aW9uLnlcbiAgICAgICAgaWYgKGFjdGlvbi5tcykgZm9ybWF0dGVkQWN0aW9uLm9wdGlvbnMubXMgPSBhY3Rpb24ubXNcblxuICAgICAgICAvKipcbiAgICAgICAgICogcmVtb3ZlIG9wdGlvbnMgcHJvcGVydHkgaWYgZW1wdHlcbiAgICAgICAgICovXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhmb3JtYXR0ZWRBY3Rpb24ub3B0aW9ucykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgZm9ybWF0dGVkQWN0aW9uLm9wdGlvbnNcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRBY3Rpb25cbiAgICB9KVxufVxuXG4vKipcbiAqIE1ha2Ugc3VyZSBhY3Rpb24gaGFzIHByb3BlciBvcHRpb25zIGJlZm9yZSBzZW5kaW5nIGNvbW1hbmQgdG8gQXBwaXVtLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gcGFyYW1zICB0b3VjaEFjdGlvbiBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIG51bGxcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUGFyYW1ldGVycyA9IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmtleXMocGFyYW1zLm9wdGlvbnMgfHwge30pXG4gICAgaWYgKHBhcmFtcy5hY3Rpb24gPT09ICdyZWxlYXNlJyAmJiBvcHRpb25zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnYWN0aW9uIFwicmVsZWFzZVwiIGRvZXNuXFwndCBhY2NlcHQgYW55IG9wdGlvbnMgJyArXG4gICAgICAgICAgICBgKFwiJHtvcHRpb25zLmpvaW4oJ1wiLCBcIicpfVwiIGZvdW5kKWBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgcGFyYW1zLmFjdGlvbiA9PT0gJ3dhaXQnICYmXG4gICAgICAgIChvcHRpb25zLmluY2x1ZGVzKCd4JykgfHwgb3B0aW9ucy5pbmNsdWRlcygneScpKVxuICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FjdGlvbiBcIndhaXRcIiBkb2VzblxcJ3QgYWNjZXB0IHggb3IgeSBvcHRpb25zJylcbiAgICB9XG5cbiAgICBpZiAoUE9TX0FDVElPTlMuaW5jbHVkZXMocGFyYW1zLmFjdGlvbikpIHtcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gaW4gcGFyYW1zLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghQUNDRVBURURfT1BUSU9OUy5pbmNsdWRlcyhvcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhY3Rpb24gXCIke3BhcmFtcy5hY3Rpb259XCIgZG9lc24ndCBhY2NlcHQgXCIke29wdGlvbn1cIiBhcyBvcHRpb25gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRvdWNoIGFjdGlvbnMgbGlrZSBcIiR7cGFyYW1zLmFjdGlvbn1cIiBuZWVkIGF0IGxlYXN0IHNvbWUga2luZCBvZiBgICtcbiAgICAgICAgICAgICAgICAncG9zaXRpb24gaW5mb3JtYXRpb24gbGlrZSBcImVsZW1lbnRcIiwgXCJ4XCIgb3IgXCJ5XCIgb3B0aW9ucywgeW91XFwndmUgbm9uZSBnaXZlbi4nXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b3VjaEFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFjdGlvbnMpKSB7XG4gICAgICAgIGFjdGlvbnMgPSBbYWN0aW9uc11cbiAgICB9XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRBY3Rpb24gPSBmb3JtYXRBcmdzKHRoaXMsIGFjdGlvbnMpXG4gICAgY29uc3QgcHJvdG9jb2xDb21tYW5kID0gQXJyYXkuaXNBcnJheShhY3Rpb25zWzBdKSA/IDo6dGhpcy5tdWx0aVRvdWNoUGVyZm9ybSA6IDo6dGhpcy50b3VjaFBlcmZvcm1cbiAgICBmb3JtYXR0ZWRBY3Rpb24uZm9yRWFjaCgocGFyYW1zKSA9PiB2YWxpZGF0ZVBhcmFtZXRlcnMocGFyYW1zKSlcbiAgICByZXR1cm4gcHJvdG9jb2xDb21tYW5kKGZvcm1hdHRlZEFjdGlvbilcbn1cbiJdfQ==