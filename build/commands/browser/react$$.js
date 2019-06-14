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

        const orangeButtons = browser.react$$('t', { orange: true })
        console.log(orangeButtons.map((btn) => btn.getText())); // prints "[ '÷', 'x', '-', '+', '=' ]"
    });
 * </example>
 *
 * @alias browser.react$$
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
  const res = await this.execute(_resq.react$$, selector, props, state);
  return _getElementObject.getElements.call(this, selector, res);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3JlYWN0JCQuanMiXSwibmFtZXMiOlsicmVzcVNjcmlwdCIsImZzIiwicmVhZEZpbGVTeW5jIiwicmVxdWlyZSIsInJlc29sdmUiLCJyZWFjdCQkIiwic2VsZWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZXhlY3V0ZVNjcmlwdCIsInRvU3RyaW5nIiwiZXhlY3V0ZSIsIndhaXRUb0xvYWRSZWFjdCIsInJlcyIsInJlYWN0JCRTY3JpcHQiLCJnZXRFbGVtZW50cyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQXdCQTs7QUFDQTs7QUFDQTs7OztBQTFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBLE1BQU1BLFVBQVUsR0FBR0MsWUFBR0MsWUFBSCxDQUFnQkMsT0FBTyxDQUFDQyxPQUFSLENBQWdCLE1BQWhCLENBQWhCLENBQW5COztBQUVlLGVBQWVDLE9BQWYsQ0FBd0JDLFFBQXhCLEVBQWtDQyxLQUFLLEdBQUcsRUFBMUMsRUFBOENDLEtBQUssR0FBRyxFQUF0RCxFQUEwRDtBQUNyRSxRQUFNLEtBQUtDLGFBQUwsQ0FBbUJULFVBQVUsQ0FBQ1UsUUFBWCxFQUFuQixFQUEwQyxFQUExQyxDQUFOO0FBQ0EsUUFBTSxLQUFLQyxPQUFMLENBQWFDLHFCQUFiLENBQU47QUFDQSxRQUFNQyxHQUFHLEdBQUcsTUFBTSxLQUFLRixPQUFMLENBQWFHLGFBQWIsRUFBNEJSLFFBQTVCLEVBQXNDQyxLQUF0QyxFQUE2Q0MsS0FBN0MsQ0FBbEI7QUFDQSxTQUFPTyw4QkFBWUMsSUFBWixDQUFpQixJQUFqQixFQUF1QlYsUUFBdkIsRUFBaUNPLEdBQWpDLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFRoZSBgcmVhY3QkJGAgY29tbWFuZCBpcyBhIHVzZWZ1bCBjb21tYW5kIHRvIHF1ZXJ5IG11bHRpcGxlIFJlYWN0IENvbXBvbmVudHNcbiAqIGJ5IHRoZWlyIGFjdHVhbCBuYW1lIGFuZCBmaWx0ZXIgdGhlbSBieSBwcm9wcyBhbmQgc3RhdGUuXG4gKlxuICogKipOT1RFOioqIHRoZSBjb21tYW5kIG9ubHkgd29ya3Mgd2l0aCBhcHBsaWNhdGlvbnMgdXNpbmcgUmVhY3QgdjE2LnhcbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6cGF1c2UuanNcbiAgICBpdCgnc2hvdWxkIGNhbGN1bGF0ZSA3ICogNicsICgpID0+IHtcbiAgICAgICAgYnJvd3Nlci51cmwoJ2h0dHBzOi8vYWhmYXJtZXIuZ2l0aHViLmlvL2NhbGN1bGF0b3IvJyk7XG5cbiAgICAgICAgY29uc3Qgb3JhbmdlQnV0dG9ucyA9IGJyb3dzZXIucmVhY3QkJCgndCcsIHsgb3JhbmdlOiB0cnVlIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKG9yYW5nZUJ1dHRvbnMubWFwKChidG4pID0+IGJ0bi5nZXRUZXh0KCkpKTsgLy8gcHJpbnRzIFwiWyAnw7cnLCAneCcsICctJywgJysnLCAnPScgXVwiXG4gICAgfSk7XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQGFsaWFzIGJyb3dzZXIucmVhY3QkJFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIG9mIFJlYWN0IGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3Q9fSBwcm9wcyAgUmVhY3QgcHJvcHMgdGhlIGVsZW1lbnQgc2hvdWxkIGNvbnRhaW5cbiAqIEBwYXJhbSB7QXJyYXk8YW55PnxudW1iZXJ8c3RyaW5nfG9iamVjdHxib29sZWFuPX0gc3RhdGUgIFJlYWN0IHN0YXRlIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpblxuICogQHJldHVybiB7RWxlbWVudFtdfVxuICpcbiAqL1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgZ2V0RWxlbWVudHMgfSBmcm9tICcuLi8uLi91dGlscy9nZXRFbGVtZW50T2JqZWN0J1xuaW1wb3J0IHsgd2FpdFRvTG9hZFJlYWN0LCByZWFjdCQkIGFzIHJlYWN0JCRTY3JpcHQgfSBmcm9tICcuLi8uLi9zY3JpcHRzL3Jlc3EnXG5cbmNvbnN0IHJlc3FTY3JpcHQgPSBmcy5yZWFkRmlsZVN5bmMocmVxdWlyZS5yZXNvbHZlKCdyZXNxJykpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlYWN0JCQgKHNlbGVjdG9yLCBwcm9wcyA9IHt9LCBzdGF0ZSA9IHt9KSB7XG4gICAgYXdhaXQgdGhpcy5leGVjdXRlU2NyaXB0KHJlc3FTY3JpcHQudG9TdHJpbmcoKSwgW10pXG4gICAgYXdhaXQgdGhpcy5leGVjdXRlKHdhaXRUb0xvYWRSZWFjdClcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmV4ZWN1dGUocmVhY3QkJFNjcmlwdCwgc2VsZWN0b3IsIHByb3BzLCBzdGF0ZSlcbiAgICByZXR1cm4gZ2V0RWxlbWVudHMuY2FsbCh0aGlzLCBzZWxlY3RvciwgcmVzKVxufVxuIl19