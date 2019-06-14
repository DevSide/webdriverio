"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reloadSession;

require("source-map-support/register");

var _request = _interopRequireDefault(require("webdriver/build/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Creates a new Selenium session with your current capabilities. This is useful if you
 * test highly stateful application where you need to clean the browser session between
 * the tests in your spec file to avoid creating hundreds of single test files with WDIO.
 * Be careful though, this command affects your test time tremendously since spawning
 * new Selenium sessions is very time consuming especially when using cloud services.
 *
 * <example>
    :reloadSync.js
    it('should reload my session with current capabilities', () => {
        console.log(browser.sessionId) // outputs: e042b3f3cd5a479da4e171825e96e655
        browser.reloadSession()
        console.log(browser.sessionId) // outputs: 9a0d9bf9d4864160aa982c50cf18a573
    })
 * </example>
 *
 * @alias browser.reloadSession
 * @type utility
 *
 */
async function reloadSession() {
  const oldSessionId = this.sessionId;
  /**
   * end current running session
   */

  await this.deleteSession();
  const {
    w3cCaps,
    jsonwpCaps
  } = this.options.requestedCapabilities;
  const sessionRequest = new _request.default('POST', '/session', {
    capabilities: w3cCaps,
    // W3C compliant
    desiredCapabilities: jsonwpCaps // JSONWP compliant

  });
  const response = await sessionRequest.makeRequest(this.options);
  const newSessionId = response.sessionId || response.value && response.value.sessionId;
  this.sessionId = newSessionId;

  if (Array.isArray(this.options.onReload) && this.options.onReload.length) {
    await Promise.all(this.options.onReload.map(hook => hook(oldSessionId, newSessionId)));
  }

  return newSessionId;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3JlbG9hZFNlc3Npb24uanMiXSwibmFtZXMiOlsicmVsb2FkU2Vzc2lvbiIsIm9sZFNlc3Npb25JZCIsInNlc3Npb25JZCIsImRlbGV0ZVNlc3Npb24iLCJ3M2NDYXBzIiwianNvbndwQ2FwcyIsIm9wdGlvbnMiLCJyZXF1ZXN0ZWRDYXBhYmlsaXRpZXMiLCJzZXNzaW9uUmVxdWVzdCIsIldlYkRyaXZlclJlcXVlc3QiLCJjYXBhYmlsaXRpZXMiLCJkZXNpcmVkQ2FwYWJpbGl0aWVzIiwicmVzcG9uc2UiLCJtYWtlUmVxdWVzdCIsIm5ld1Nlc3Npb25JZCIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5Iiwib25SZWxvYWQiLCJsZW5ndGgiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaG9vayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBc0JBOzs7O0FBdEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QmUsZUFBZUEsYUFBZixHQUFnQztBQUMzQyxRQUFNQyxZQUFZLEdBQUcsS0FBS0MsU0FBMUI7QUFFQTs7OztBQUdBLFFBQU0sS0FBS0MsYUFBTCxFQUFOO0FBRUEsUUFBTTtBQUFFQyxJQUFBQSxPQUFGO0FBQVdDLElBQUFBO0FBQVgsTUFBMEIsS0FBS0MsT0FBTCxDQUFhQyxxQkFBN0M7QUFDQSxRQUFNQyxjQUFjLEdBQUcsSUFBSUMsZ0JBQUosQ0FDbkIsTUFEbUIsRUFFbkIsVUFGbUIsRUFHbkI7QUFDSUMsSUFBQUEsWUFBWSxFQUFFTixPQURsQjtBQUMyQjtBQUN2Qk8sSUFBQUEsbUJBQW1CLEVBQUVOLFVBRnpCLENBRW9DOztBQUZwQyxHQUhtQixDQUF2QjtBQVNBLFFBQU1PLFFBQVEsR0FBRyxNQUFNSixjQUFjLENBQUNLLFdBQWYsQ0FBMkIsS0FBS1AsT0FBaEMsQ0FBdkI7QUFDQSxRQUFNUSxZQUFZLEdBQUdGLFFBQVEsQ0FBQ1YsU0FBVCxJQUF1QlUsUUFBUSxDQUFDRyxLQUFULElBQWtCSCxRQUFRLENBQUNHLEtBQVQsQ0FBZWIsU0FBN0U7QUFDQSxPQUFLQSxTQUFMLEdBQWlCWSxZQUFqQjs7QUFFQSxNQUFJRSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxLQUFLWCxPQUFMLENBQWFZLFFBQTNCLEtBQXdDLEtBQUtaLE9BQUwsQ0FBYVksUUFBYixDQUFzQkMsTUFBbEUsRUFBMEU7QUFDdEUsVUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS2YsT0FBTCxDQUFhWSxRQUFiLENBQXNCSSxHQUF0QixDQUEyQkMsSUFBRCxJQUFVQSxJQUFJLENBQUN0QixZQUFELEVBQWVhLFlBQWYsQ0FBeEMsQ0FBWixDQUFOO0FBQ0g7O0FBRUQsU0FBT0EsWUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogQ3JlYXRlcyBhIG5ldyBTZWxlbml1bSBzZXNzaW9uIHdpdGggeW91ciBjdXJyZW50IGNhcGFiaWxpdGllcy4gVGhpcyBpcyB1c2VmdWwgaWYgeW91XG4gKiB0ZXN0IGhpZ2hseSBzdGF0ZWZ1bCBhcHBsaWNhdGlvbiB3aGVyZSB5b3UgbmVlZCB0byBjbGVhbiB0aGUgYnJvd3NlciBzZXNzaW9uIGJldHdlZW5cbiAqIHRoZSB0ZXN0cyBpbiB5b3VyIHNwZWMgZmlsZSB0byBhdm9pZCBjcmVhdGluZyBodW5kcmVkcyBvZiBzaW5nbGUgdGVzdCBmaWxlcyB3aXRoIFdESU8uXG4gKiBCZSBjYXJlZnVsIHRob3VnaCwgdGhpcyBjb21tYW5kIGFmZmVjdHMgeW91ciB0ZXN0IHRpbWUgdHJlbWVuZG91c2x5IHNpbmNlIHNwYXduaW5nXG4gKiBuZXcgU2VsZW5pdW0gc2Vzc2lvbnMgaXMgdmVyeSB0aW1lIGNvbnN1bWluZyBlc3BlY2lhbGx5IHdoZW4gdXNpbmcgY2xvdWQgc2VydmljZXMuXG4gKlxuICogPGV4YW1wbGU+XG4gICAgOnJlbG9hZFN5bmMuanNcbiAgICBpdCgnc2hvdWxkIHJlbG9hZCBteSBzZXNzaW9uIHdpdGggY3VycmVudCBjYXBhYmlsaXRpZXMnLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGJyb3dzZXIuc2Vzc2lvbklkKSAvLyBvdXRwdXRzOiBlMDQyYjNmM2NkNWE0NzlkYTRlMTcxODI1ZTk2ZTY1NVxuICAgICAgICBicm93c2VyLnJlbG9hZFNlc3Npb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhicm93c2VyLnNlc3Npb25JZCkgLy8gb3V0cHV0czogOWEwZDliZjlkNDg2NDE2MGFhOTgyYzUwY2YxOGE1NzNcbiAgICB9KVxuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBicm93c2VyLnJlbG9hZFNlc3Npb25cbiAqIEB0eXBlIHV0aWxpdHlcbiAqXG4gKi9cblxuaW1wb3J0IFdlYkRyaXZlclJlcXVlc3QgZnJvbSAnd2ViZHJpdmVyL2J1aWxkL3JlcXVlc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlbG9hZFNlc3Npb24gKCkge1xuICAgIGNvbnN0IG9sZFNlc3Npb25JZCA9IHRoaXMuc2Vzc2lvbklkXG5cbiAgICAvKipcbiAgICAgKiBlbmQgY3VycmVudCBydW5uaW5nIHNlc3Npb25cbiAgICAgKi9cbiAgICBhd2FpdCB0aGlzLmRlbGV0ZVNlc3Npb24oKVxuXG4gICAgY29uc3QgeyB3M2NDYXBzLCBqc29ud3BDYXBzIH0gPSB0aGlzLm9wdGlvbnMucmVxdWVzdGVkQ2FwYWJpbGl0aWVzXG4gICAgY29uc3Qgc2Vzc2lvblJlcXVlc3QgPSBuZXcgV2ViRHJpdmVyUmVxdWVzdChcbiAgICAgICAgJ1BPU1QnLFxuICAgICAgICAnL3Nlc3Npb24nLFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXBhYmlsaXRpZXM6IHczY0NhcHMsIC8vIFczQyBjb21wbGlhbnRcbiAgICAgICAgICAgIGRlc2lyZWRDYXBhYmlsaXRpZXM6IGpzb253cENhcHMgLy8gSlNPTldQIGNvbXBsaWFudFxuICAgICAgICB9XG4gICAgKVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzZXNzaW9uUmVxdWVzdC5tYWtlUmVxdWVzdCh0aGlzLm9wdGlvbnMpXG4gICAgY29uc3QgbmV3U2Vzc2lvbklkID0gcmVzcG9uc2Uuc2Vzc2lvbklkIHx8IChyZXNwb25zZS52YWx1ZSAmJiByZXNwb25zZS52YWx1ZS5zZXNzaW9uSWQpXG4gICAgdGhpcy5zZXNzaW9uSWQgPSBuZXdTZXNzaW9uSWRcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucy5vblJlbG9hZCkgJiYgdGhpcy5vcHRpb25zLm9uUmVsb2FkLmxlbmd0aCkge1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLm9wdGlvbnMub25SZWxvYWQubWFwKChob29rKSA9PiBob29rKG9sZFNlc3Npb25JZCwgbmV3U2Vzc2lvbklkKSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1Nlc3Npb25JZFxufVxuIl19