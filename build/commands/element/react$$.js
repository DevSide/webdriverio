"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = react$$;

require("source-map-support/register");

var _fs = _interopRequireDefault(require("fs"));

var _getElementObject = require("../../utils/getElementObject");

var _resq = require("../../scripts/resq");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * The `react$$` command is a useful command to query multiple React Components
 * by their actual name and filter them by props and state.
 *
 * **NOTE:** the command only works with applications using React v16.x
 *
 * <example>
    :pause.js
    it('should calculate 7 * 6', () => {
        browser.url('https://ahfarmer.github.io/calculator/');
        const appWrapper = browser.$('div#root')

        const orangeButtons = appWrapper.react$$('t', { orange: true })
        console.log(orangeButtons.map((btn) => btn.getText())); // prints "[ '÷', 'x', '-', '+', '=' ]"
    });
 * </example>
 *
 * @alias react$$
 * @param {String} selector of React component
 * @param {Object=} props  React props the element should contain
 * @param {Array<any>|number|string|object|boolean=} state  React state the element should be in
 * @return {Element[]}
 *
 */
const resqScript = _fs.default.readFileSync(require.resolve('resq'));

async function react$$(selector, props = {}, state = {}) {
  await this.executeScript(resqScript.toString(), []);
  await this.execute(_resq.waitToLoadReact);
  const res = await this.execute(_resq.react$$, selector, props, state, this);
  return _getElementObject.getElements.call(this, selector, res);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3JlYWN0JCQuanMiXSwibmFtZXMiOlsicmVzcVNjcmlwdCIsImZzIiwicmVhZEZpbGVTeW5jIiwicmVxdWlyZSIsInJlc29sdmUiLCJyZWFjdCQkIiwic2VsZWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZXhlY3V0ZVNjcmlwdCIsInRvU3RyaW5nIiwiZXhlY3V0ZSIsIndhaXRUb0xvYWRSZWFjdCIsInJlcyIsInJlYWN0JCRTY3JpcHQiLCJnZXRFbGVtZW50cyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQXlCQTs7QUFDQTs7QUFDQTs7OztBQTNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSxNQUFNQSxVQUFVLEdBQUdDLFlBQUdDLFlBQUgsQ0FBZ0JDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixNQUFoQixDQUFoQixDQUFuQjs7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxRQUF2QixFQUFpQ0MsS0FBSyxHQUFHLEVBQXpDLEVBQTZDQyxLQUFLLEdBQUcsRUFBckQsRUFBeUQ7QUFDcEUsUUFBTSxLQUFLQyxhQUFMLENBQW1CVCxVQUFVLENBQUNVLFFBQVgsRUFBbkIsRUFBMEMsRUFBMUMsQ0FBTjtBQUNBLFFBQU0sS0FBS0MsT0FBTCxDQUFhQyxxQkFBYixDQUFOO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU0sS0FBS0YsT0FBTCxDQUFhRyxhQUFiLEVBQTRCUixRQUE1QixFQUFzQ0MsS0FBdEMsRUFBNkNDLEtBQTdDLEVBQW9ELElBQXBELENBQWxCO0FBQ0EsU0FBT08sOEJBQVlDLElBQVosQ0FBaUIsSUFBakIsRUFBdUJWLFFBQXZCLEVBQWlDTyxHQUFqQyxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBUaGUgYHJlYWN0JCRgIGNvbW1hbmQgaXMgYSB1c2VmdWwgY29tbWFuZCB0byBxdWVyeSBtdWx0aXBsZSBSZWFjdCBDb21wb25lbnRzXG4gKiBieSB0aGVpciBhY3R1YWwgbmFtZSBhbmQgZmlsdGVyIHRoZW0gYnkgcHJvcHMgYW5kIHN0YXRlLlxuICpcbiAqICoqTk9URToqKiB0aGUgY29tbWFuZCBvbmx5IHdvcmtzIHdpdGggYXBwbGljYXRpb25zIHVzaW5nIFJlYWN0IHYxNi54XG4gKlxuICogPGV4YW1wbGU+XG4gICAgOnBhdXNlLmpzXG4gICAgaXQoJ3Nob3VsZCBjYWxjdWxhdGUgNyAqIDYnLCAoKSA9PiB7XG4gICAgICAgIGJyb3dzZXIudXJsKCdodHRwczovL2FoZmFybWVyLmdpdGh1Yi5pby9jYWxjdWxhdG9yLycpO1xuICAgICAgICBjb25zdCBhcHBXcmFwcGVyID0gYnJvd3Nlci4kKCdkaXYjcm9vdCcpXG5cbiAgICAgICAgY29uc3Qgb3JhbmdlQnV0dG9ucyA9IGFwcFdyYXBwZXIucmVhY3QkJCgndCcsIHsgb3JhbmdlOiB0cnVlIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKG9yYW5nZUJ1dHRvbnMubWFwKChidG4pID0+IGJ0bi5nZXRUZXh0KCkpKTsgLy8gcHJpbnRzIFwiWyAnw7cnLCAneCcsICctJywgJysnLCAnPScgXVwiXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIHJlYWN0JCRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBvZiBSZWFjdCBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gcHJvcHMgIFJlYWN0IHByb3BzIHRoZSBlbGVtZW50IHNob3VsZCBjb250YWluXG4gKiBAcGFyYW0ge0FycmF5PGFueT58bnVtYmVyfHN0cmluZ3xvYmplY3R8Ym9vbGVhbj19IHN0YXRlICBSZWFjdCBzdGF0ZSB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5cbiAqIEByZXR1cm4ge0VsZW1lbnRbXX1cbiAqXG4gKi9cbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCB7IGdldEVsZW1lbnRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0RWxlbWVudE9iamVjdCdcbmltcG9ydCB7IHdhaXRUb0xvYWRSZWFjdCwgcmVhY3QkJCBhcyByZWFjdCQkU2NyaXB0IH0gZnJvbSAnLi4vLi4vc2NyaXB0cy9yZXNxJ1xuXG5jb25zdCByZXNxU2NyaXB0ID0gZnMucmVhZEZpbGVTeW5jKHJlcXVpcmUucmVzb2x2ZSgncmVzcScpKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZWFjdCQkKHNlbGVjdG9yLCBwcm9wcyA9IHt9LCBzdGF0ZSA9IHt9KSB7XG4gICAgYXdhaXQgdGhpcy5leGVjdXRlU2NyaXB0KHJlc3FTY3JpcHQudG9TdHJpbmcoKSwgW10pXG4gICAgYXdhaXQgdGhpcy5leGVjdXRlKHdhaXRUb0xvYWRSZWFjdClcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmV4ZWN1dGUocmVhY3QkJFNjcmlwdCwgc2VsZWN0b3IsIHByb3BzLCBzdGF0ZSwgdGhpcylcbiAgICByZXR1cm4gZ2V0RWxlbWVudHMuY2FsbCh0aGlzLCBzZWxlY3RvciwgcmVzKVxufVxuIl19