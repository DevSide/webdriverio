"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = react$;

require("source-map-support/register");

var _fs = _interopRequireDefault(require("fs"));

var _getElementObject = require("../../utils/getElementObject");

var _resq = require("../../scripts/resq");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * The `react$` command is a useful command to query React Components by their
 * actual name and filter them by props and state.
 *
 * **NOTE:** the command only works with applications using React v16.x
 *
 * <example>
    :pause.js
    it('should calculate 7 * 6', () => {
        browser.url('https://ahfarmer.github.io/calculator/');

        browser.react$('t', { name: '7' }).click()
        browser.react$('t', { name: 'x' }).click()
        browser.react$('t', { name: '6' }).click()
        browser.react$('t', { name: '=' }).click()

        console.log($('.component-display').getText()); // prints "42"
    });
 * </example>
 *
 * @alias browser.react$
 * @param {String} selector of React component
 * @param {Object=} props  React props the element should contain
 * @param {Array<any>|number|string|object|boolean=} state  React state the element should be in
 * @return {Element}
 *
 */
const resqScript = _fs.default.readFileSync(require.resolve('resq'));

async function react$(selector, props = {}, state = {}) {
  await this.executeScript(resqScript.toString(), []);
  await this.execute(_resq.waitToLoadReact);
  const res = await this.execute(_resq.react$, selector, props, state);
  return _getElementObject.getElement.call(this, selector, res);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3JlYWN0JC5qcyJdLCJuYW1lcyI6WyJyZXNxU2NyaXB0IiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJyZXF1aXJlIiwicmVzb2x2ZSIsInJlYWN0JCIsInNlbGVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImV4ZWN1dGVTY3JpcHQiLCJ0b1N0cmluZyIsImV4ZWN1dGUiLCJ3YWl0VG9Mb2FkUmVhY3QiLCJyZXMiLCJyZWFjdCRTY3JpcHQiLCJnZXRFbGVtZW50IiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBNEJBOztBQUNBOztBQUNBOzs7O0FBOUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBLE1BQU1BLFVBQVUsR0FBR0MsWUFBR0MsWUFBSCxDQUFnQkMsT0FBTyxDQUFDQyxPQUFSLENBQWdCLE1BQWhCLENBQWhCLENBQW5COztBQUVlLGVBQWVDLE1BQWYsQ0FBdUJDLFFBQXZCLEVBQWlDQyxLQUFLLEdBQUcsRUFBekMsRUFBNkNDLEtBQUssR0FBRyxFQUFyRCxFQUF5RDtBQUNwRSxRQUFNLEtBQUtDLGFBQUwsQ0FBbUJULFVBQVUsQ0FBQ1UsUUFBWCxFQUFuQixFQUEwQyxFQUExQyxDQUFOO0FBQ0EsUUFBTSxLQUFLQyxPQUFMLENBQWFDLHFCQUFiLENBQU47QUFDQSxRQUFNQyxHQUFHLEdBQUcsTUFBTSxLQUFLRixPQUFMLENBQWFHLFlBQWIsRUFBMkJSLFFBQTNCLEVBQXFDQyxLQUFyQyxFQUE0Q0MsS0FBNUMsQ0FBbEI7QUFDQSxTQUFPTyw2QkFBV0MsSUFBWCxDQUFnQixJQUFoQixFQUFzQlYsUUFBdEIsRUFBZ0NPLEdBQWhDLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFRoZSBgcmVhY3QkYCBjb21tYW5kIGlzIGEgdXNlZnVsIGNvbW1hbmQgdG8gcXVlcnkgUmVhY3QgQ29tcG9uZW50cyBieSB0aGVpclxuICogYWN0dWFsIG5hbWUgYW5kIGZpbHRlciB0aGVtIGJ5IHByb3BzIGFuZCBzdGF0ZS5cbiAqXG4gKiAqKk5PVEU6KiogdGhlIGNvbW1hbmQgb25seSB3b3JrcyB3aXRoIGFwcGxpY2F0aW9ucyB1c2luZyBSZWFjdCB2MTYueFxuICpcbiAqIDxleGFtcGxlPlxuICAgIDpwYXVzZS5qc1xuICAgIGl0KCdzaG91bGQgY2FsY3VsYXRlIDcgKiA2JywgKCkgPT4ge1xuICAgICAgICBicm93c2VyLnVybCgnaHR0cHM6Ly9haGZhcm1lci5naXRodWIuaW8vY2FsY3VsYXRvci8nKTtcblxuICAgICAgICBicm93c2VyLnJlYWN0JCgndCcsIHsgbmFtZTogJzcnIH0pLmNsaWNrKClcbiAgICAgICAgYnJvd3Nlci5yZWFjdCQoJ3QnLCB7IG5hbWU6ICd4JyB9KS5jbGljaygpXG4gICAgICAgIGJyb3dzZXIucmVhY3QkKCd0JywgeyBuYW1lOiAnNicgfSkuY2xpY2soKVxuICAgICAgICBicm93c2VyLnJlYWN0JCgndCcsIHsgbmFtZTogJz0nIH0pLmNsaWNrKClcblxuICAgICAgICBjb25zb2xlLmxvZygkKCcuY29tcG9uZW50LWRpc3BsYXknKS5nZXRUZXh0KCkpOyAvLyBwcmludHMgXCI0MlwiXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGJyb3dzZXIucmVhY3QkXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3Igb2YgUmVhY3QgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdD19IHByb3BzICBSZWFjdCBwcm9wcyB0aGUgZWxlbWVudCBzaG91bGQgY29udGFpblxuICogQHBhcmFtIHtBcnJheTxhbnk+fG51bWJlcnxzdHJpbmd8b2JqZWN0fGJvb2xlYW49fSBzdGF0ZSAgUmVhY3Qgc3RhdGUgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGluXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICpcbiAqL1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgZ2V0RWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2dldEVsZW1lbnRPYmplY3QnXG5pbXBvcnQgeyB3YWl0VG9Mb2FkUmVhY3QsIHJlYWN0JCBhcyByZWFjdCRTY3JpcHQgfSBmcm9tICcuLi8uLi9zY3JpcHRzL3Jlc3EnXG5cbmNvbnN0IHJlc3FTY3JpcHQgPSBmcy5yZWFkRmlsZVN5bmMocmVxdWlyZS5yZXNvbHZlKCdyZXNxJykpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlYWN0JCAoc2VsZWN0b3IsIHByb3BzID0ge30sIHN0YXRlID0ge30pIHtcbiAgICBhd2FpdCB0aGlzLmV4ZWN1dGVTY3JpcHQocmVzcVNjcmlwdC50b1N0cmluZygpLCBbXSlcbiAgICBhd2FpdCB0aGlzLmV4ZWN1dGUod2FpdFRvTG9hZFJlYWN0KVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZXhlY3V0ZShyZWFjdCRTY3JpcHQsIHNlbGVjdG9yLCBwcm9wcywgc3RhdGUpXG4gICAgcmV0dXJuIGdldEVsZW1lbnQuY2FsbCh0aGlzLCBzZWxlY3RvciwgcmVzKVxufVxuIl19