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
        const appWrapper = browser.$('div#root')

        appWrapper.react$('t', { name: '7' }).click()
        appWrapper.react$('t', { name: 'x' }).click()
        appWrapper.react$('t', { name: '6' }).click()
        appWrapper.react$('t', { name: '=' }).click()

        console.log($('.component-display').getText()); // prints "42"
    });
 * </example>
 *
 * @alias react$
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
  const res = await this.execute(_resq.react$, selector, props, state, this);
  return _getElementObject.getElement.call(this, selector, res);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lbGVtZW50L3JlYWN0JC5qcyJdLCJuYW1lcyI6WyJyZXNxU2NyaXB0IiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJyZXF1aXJlIiwicmVzb2x2ZSIsInJlYWN0JCIsInNlbGVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImV4ZWN1dGVTY3JpcHQiLCJ0b1N0cmluZyIsImV4ZWN1dGUiLCJ3YWl0VG9Mb2FkUmVhY3QiLCJyZXMiLCJyZWFjdCRTY3JpcHQiLCJnZXRFbGVtZW50IiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBNkJBOztBQUNBOztBQUNBOzs7O0FBL0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQSxNQUFNQSxVQUFVLEdBQUdDLFlBQUdDLFlBQUgsQ0FBZ0JDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixNQUFoQixDQUFoQixDQUFuQjs7QUFFZSxlQUFlQyxNQUFmLENBQXNCQyxRQUF0QixFQUFnQ0MsS0FBSyxHQUFHLEVBQXhDLEVBQTRDQyxLQUFLLEdBQUcsRUFBcEQsRUFBd0Q7QUFDbkUsUUFBTSxLQUFLQyxhQUFMLENBQW1CVCxVQUFVLENBQUNVLFFBQVgsRUFBbkIsRUFBMEMsRUFBMUMsQ0FBTjtBQUNBLFFBQU0sS0FBS0MsT0FBTCxDQUFhQyxxQkFBYixDQUFOO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU0sS0FBS0YsT0FBTCxDQUFhRyxZQUFiLEVBQTJCUixRQUEzQixFQUFxQ0MsS0FBckMsRUFBNENDLEtBQTVDLEVBQW1ELElBQW5ELENBQWxCO0FBQ0EsU0FBT08sNkJBQVdDLElBQVgsQ0FBZ0IsSUFBaEIsRUFBc0JWLFFBQXRCLEVBQWdDTyxHQUFoQyxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBUaGUgYHJlYWN0JGAgY29tbWFuZCBpcyBhIHVzZWZ1bCBjb21tYW5kIHRvIHF1ZXJ5IFJlYWN0IENvbXBvbmVudHMgYnkgdGhlaXJcbiAqIGFjdHVhbCBuYW1lIGFuZCBmaWx0ZXIgdGhlbSBieSBwcm9wcyBhbmQgc3RhdGUuXG4gKlxuICogKipOT1RFOioqIHRoZSBjb21tYW5kIG9ubHkgd29ya3Mgd2l0aCBhcHBsaWNhdGlvbnMgdXNpbmcgUmVhY3QgdjE2LnhcbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6cGF1c2UuanNcbiAgICBpdCgnc2hvdWxkIGNhbGN1bGF0ZSA3ICogNicsICgpID0+IHtcbiAgICAgICAgYnJvd3Nlci51cmwoJ2h0dHBzOi8vYWhmYXJtZXIuZ2l0aHViLmlvL2NhbGN1bGF0b3IvJyk7XG4gICAgICAgIGNvbnN0IGFwcFdyYXBwZXIgPSBicm93c2VyLiQoJ2RpdiNyb290JylcblxuICAgICAgICBhcHBXcmFwcGVyLnJlYWN0JCgndCcsIHsgbmFtZTogJzcnIH0pLmNsaWNrKClcbiAgICAgICAgYXBwV3JhcHBlci5yZWFjdCQoJ3QnLCB7IG5hbWU6ICd4JyB9KS5jbGljaygpXG4gICAgICAgIGFwcFdyYXBwZXIucmVhY3QkKCd0JywgeyBuYW1lOiAnNicgfSkuY2xpY2soKVxuICAgICAgICBhcHBXcmFwcGVyLnJlYWN0JCgndCcsIHsgbmFtZTogJz0nIH0pLmNsaWNrKClcblxuICAgICAgICBjb25zb2xlLmxvZygkKCcuY29tcG9uZW50LWRpc3BsYXknKS5nZXRUZXh0KCkpOyAvLyBwcmludHMgXCI0MlwiXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIHJlYWN0JFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIG9mIFJlYWN0IGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3Q9fSBwcm9wcyAgUmVhY3QgcHJvcHMgdGhlIGVsZW1lbnQgc2hvdWxkIGNvbnRhaW5cbiAqIEBwYXJhbSB7QXJyYXk8YW55PnxudW1iZXJ8c3RyaW5nfG9iamVjdHxib29sZWFuPX0gc3RhdGUgIFJlYWN0IHN0YXRlIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpblxuICogQHJldHVybiB7RWxlbWVudH1cbiAqXG4gKi9cbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCB7IGdldEVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9nZXRFbGVtZW50T2JqZWN0J1xuaW1wb3J0IHsgd2FpdFRvTG9hZFJlYWN0LCByZWFjdCQgYXMgcmVhY3QkU2NyaXB0IH0gZnJvbSAnLi4vLi4vc2NyaXB0cy9yZXNxJ1xuXG5jb25zdCByZXNxU2NyaXB0ID0gZnMucmVhZEZpbGVTeW5jKHJlcXVpcmUucmVzb2x2ZSgncmVzcScpKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZWFjdCQoc2VsZWN0b3IsIHByb3BzID0ge30sIHN0YXRlID0ge30pIHtcbiAgICBhd2FpdCB0aGlzLmV4ZWN1dGVTY3JpcHQocmVzcVNjcmlwdC50b1N0cmluZygpLCBbXSlcbiAgICBhd2FpdCB0aGlzLmV4ZWN1dGUod2FpdFRvTG9hZFJlYWN0KVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZXhlY3V0ZShyZWFjdCRTY3JpcHQsIHNlbGVjdG9yLCBwcm9wcywgc3RhdGUsIHRoaXMpXG4gICAgcmV0dXJuIGdldEVsZW1lbnQuY2FsbCh0aGlzLCBzZWxlY3RvciwgcmVzKVxufVxuIl19