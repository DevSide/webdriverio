"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debug;

require("source-map-support/register");

var _serializeError = _interopRequireDefault(require("serialize-error"));

var _repl = _interopRequireDefault(require("@wdio/repl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function debug(commandTimeout = 5000) {
  const repl = new _repl.default();
  const {
    introMessage
  } = _repl.default;
  /**
   * run repl in standalone mode
   */

  if (!process.env.WDIO_WORKER) {
    // eslint-disable-next-line
    console.log(_repl.default.introMessage);
    const context = {
      browser: this,
      driver: this,
      $: this.$.bind(this),
      $$: this.$$.bind(this)
    };
    return repl.start(context);
  }
  /**
   * register worker process as debugger target
   */


  process._debugProcess(process.pid);
  /**
   * initialise repl in testrunner
   */


  process.send({
    origin: 'debugger',
    name: 'start',
    params: {
      commandTimeout,
      introMessage
    }
  });

  let commandResolve =
  /* istanbul ignore next */
  () => {};

  process.on('message', m => {
    if (m.origin !== 'debugger') {
      return;
    }

    if (m.name === 'stop') {
      process._debugEnd(process.pid);

      return commandResolve();
    }
    /* istanbul ignore if */


    if (m.name === 'eval') {
      repl.eval(m.content.cmd, global, null, (e, result) => {
        if (e) {
          process.send({
            origin: 'debugger',
            name: 'result',
            params: _objectSpread({
              error: true
            }, (0, _serializeError.default)(e))
          });
        }
        /**
         * try to do some smart serializations
         */


        if (typeof result === 'function') {
          result = `[Function: ${result.name}]`;
        }

        process.send({
          origin: 'debugger',
          name: 'result',
          params: {
            result
          }
        });
      });
    }
  });
  return new Promise(resolve => commandResolve = resolve);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL2RlYnVnLmpzIl0sIm5hbWVzIjpbImRlYnVnIiwiY29tbWFuZFRpbWVvdXQiLCJyZXBsIiwiV0RJT1JlcGwiLCJpbnRyb01lc3NhZ2UiLCJwcm9jZXNzIiwiZW52IiwiV0RJT19XT1JLRVIiLCJjb25zb2xlIiwibG9nIiwiY29udGV4dCIsImJyb3dzZXIiLCJkcml2ZXIiLCIkIiwiJCQiLCJzdGFydCIsIl9kZWJ1Z1Byb2Nlc3MiLCJwaWQiLCJzZW5kIiwib3JpZ2luIiwibmFtZSIsInBhcmFtcyIsImNvbW1hbmRSZXNvbHZlIiwib24iLCJtIiwiX2RlYnVnRW5kIiwiZXZhbCIsImNvbnRlbnQiLCJjbWQiLCJnbG9iYWwiLCJlIiwicmVzdWx0IiwiZXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBZ0NBOztBQUNBOzs7Ozs7OztBQUVlLFNBQVNBLEtBQVQsQ0FBZUMsY0FBYyxHQUFHLElBQWhDLEVBQXNDO0FBQ2pELFFBQU1DLElBQUksR0FBRyxJQUFJQyxhQUFKLEVBQWI7QUFDQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBbUJELGFBQXpCO0FBRUE7Ozs7QUFHQSxNQUFJLENBQUNFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUFqQixFQUE4QjtBQUMxQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sY0FBU0MsWUFBckI7QUFDQSxVQUFNTSxPQUFPLEdBQUc7QUFDWkMsTUFBQUEsT0FBTyxFQUFFLElBREc7QUFFWkMsTUFBQUEsTUFBTSxFQUFFLElBRkk7QUFHWkMsTUFBQUEsQ0FBQyxFQUFJLEtBQUtBLENBQVQsTUFBSSxJQUFKLENBSFc7QUFJWkMsTUFBQUEsRUFBRSxFQUFJLEtBQUtBLEVBQVQsTUFBSSxJQUFKO0FBSlUsS0FBaEI7QUFNQSxXQUFPWixJQUFJLENBQUNhLEtBQUwsQ0FBV0wsT0FBWCxDQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHQUwsRUFBQUEsT0FBTyxDQUFDVyxhQUFSLENBQXNCWCxPQUFPLENBQUNZLEdBQTlCO0FBRUE7Ozs7O0FBR0FaLEVBQUFBLE9BQU8sQ0FBQ2EsSUFBUixDQUFhO0FBQ1RDLElBQUFBLE1BQU0sRUFBRSxVQURDO0FBRVRDLElBQUFBLElBQUksRUFBRSxPQUZHO0FBR1RDLElBQUFBLE1BQU0sRUFBRTtBQUFFcEIsTUFBQUEsY0FBRjtBQUFrQkcsTUFBQUE7QUFBbEI7QUFIQyxHQUFiOztBQU1BLE1BQUlrQixjQUFjO0FBQUc7QUFBMkIsUUFBTSxDQUFFLENBQXhEOztBQUNBakIsRUFBQUEsT0FBTyxDQUFDa0IsRUFBUixDQUFXLFNBQVgsRUFBdUJDLENBQUQsSUFBTztBQUN6QixRQUFJQSxDQUFDLENBQUNMLE1BQUYsS0FBYSxVQUFqQixFQUE2QjtBQUN6QjtBQUNIOztBQUVELFFBQUlLLENBQUMsQ0FBQ0osSUFBRixLQUFXLE1BQWYsRUFBdUI7QUFDbkJmLE1BQUFBLE9BQU8sQ0FBQ29CLFNBQVIsQ0FBa0JwQixPQUFPLENBQUNZLEdBQTFCOztBQUNBLGFBQU9LLGNBQWMsRUFBckI7QUFDSDtBQUVEOzs7QUFDQSxRQUFJRSxDQUFDLENBQUNKLElBQUYsS0FBVyxNQUFmLEVBQXVCO0FBQ25CbEIsTUFBQUEsSUFBSSxDQUFDd0IsSUFBTCxDQUFVRixDQUFDLENBQUNHLE9BQUYsQ0FBVUMsR0FBcEIsRUFBeUJDLE1BQXpCLEVBQWlDLElBQWpDLEVBQXVDLENBQUNDLENBQUQsRUFBSUMsTUFBSixLQUFlO0FBQ2xELFlBQUlELENBQUosRUFBTztBQUNIekIsVUFBQUEsT0FBTyxDQUFDYSxJQUFSLENBQWE7QUFDVEMsWUFBQUEsTUFBTSxFQUFFLFVBREM7QUFFVEMsWUFBQUEsSUFBSSxFQUFFLFFBRkc7QUFHVEMsWUFBQUEsTUFBTTtBQUNGVyxjQUFBQSxLQUFLLEVBQUU7QUFETCxlQUVDLDZCQUFlRixDQUFmLENBRkQ7QUFIRyxXQUFiO0FBUUg7QUFFRDs7Ozs7QUFHQSxZQUFJLE9BQU9DLE1BQVAsS0FBa0IsVUFBdEIsRUFBa0M7QUFDOUJBLFVBQUFBLE1BQU0sR0FBSSxjQUFhQSxNQUFNLENBQUNYLElBQUssR0FBbkM7QUFDSDs7QUFFRGYsUUFBQUEsT0FBTyxDQUFDYSxJQUFSLENBQWE7QUFDVEMsVUFBQUEsTUFBTSxFQUFFLFVBREM7QUFFVEMsVUFBQUEsSUFBSSxFQUFFLFFBRkc7QUFHVEMsVUFBQUEsTUFBTSxFQUFFO0FBQUVVLFlBQUFBO0FBQUY7QUFIQyxTQUFiO0FBS0gsT0F4QkQ7QUF5Qkg7QUFDSixHQXRDRDtBQXdDQSxTQUFPLElBQUlFLE9BQUosQ0FBYUMsT0FBRCxJQUFjWixjQUFjLEdBQUdZLE9BQTNDLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKlxuICogVGhpcyBjb21tYW5kIGhlbHBzIHlvdSB0byBkZWJ1ZyB5b3VyIGludGVncmF0aW9uIHRlc3RzLiBJdCBzdG9wcyB0aGUgcnVubmluZyBicm93c2VyIGFuZCBnaXZlc1xuICogeW91IHRpbWUgdG8ganVtcCBpbnRvIGl0IGFuZCBjaGVjayB0aGUgc3RhdGUgb2YgeW91ciBhcHBsaWNhdGlvbiAoZS5nLiB1c2luZyBkZXYgdG9vbHMpLlxuICogWW91ciB0ZXJtaW5hbCB0cmFuc2Zvcm1zIGludG8gYSBbUkVQTF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUmVhZCVFMiU4MCU5M2V2YWwlRTIlODAlOTNwcmludF9sb29wKVxuICogaW50ZXJmYWNlIHRoYXQgd2lsbCBhbGxvdyB5b3UgdG8gdHJ5IG91dCBjZXJ0YWluIGNvbW1hbmRzLCBmaW5kIGVsZW1lbnRzIGFuZCB0ZXN0IGFjdGlvbnMgb25cbiAqIHRoZW0uXG4gKlxuICogWyFbV2ViZHJpdmVySU8gUkVQTF0oaHR0cHM6Ly93ZWJkcml2ZXIuaW8vaW1nL3JlcGwuZ2lmKV0oaHR0cHM6Ly93ZWJkcml2ZXIuaW8vaW1nL3JlcGwuZ2lmKVxuICpcbiAqIElmIHlvdSBydW4gdGhlIFdESU8gdGVzdHJ1bm5lciBtYWtlIHN1cmUgeW91IGluY3JlYXNlIHRoZSB0aW1lb3V0IHByb3BlcnR5IG9mIHRoZSB0ZXN0IGZyYW1ld29ya1xuICogeW91IGFyZSB1c2luZyAoZS5nLiBNb2NoYSBvciBKYXNtaW5lKSBpbiBvcmRlciB0byBwcmV2ZW50IHRlc3QgdGVybWluYXRpb24gZHVlIHRvIGEgdGVzdCB0aW1lb3V0LlxuICogQWxzbyBhdm9pZCBleGVjdXRpbmcgdGhlIGNvbW1hbmQgd2l0aCBtdWx0aXBsZSBjYXBhYmlsaXRpZXMgcnVubmluZyBhdCB0aGUgc2FtZSB0aW1lLlxuICpcbiAqIDxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC94V3dQLTNCX1l5RVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6ZGVidWcuanNcbiAgICBpdCgnc2hvdWxkIGRlbW9uc3RyYXRlIHRoZSBkZWJ1ZyBjb21tYW5kJywgKCkgPT4ge1xuICAgICAgICAkKCcjaW5wdXQnKS5zZXRWYWx1ZSgnRk9PJylcbiAgICAgICAgYnJvd3Nlci5kZWJ1ZygpIC8vIGp1bXBpbmcgaW50byB0aGUgYnJvd3NlciBhbmQgY2hhbmdlIHZhbHVlIG9mICNpbnB1dCB0byAnQkFSJ1xuICAgICAgICBjb25zdCB2YWx1ZSA9ICQoJyNpbnB1dCcpLmdldFZhbHVlKClcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpIC8vIG91dHB1dHM6IFwiQkFSXCJcbiAgICB9KVxuICogPC9leGFtcGxlPlxuICpcbiAqIEBhbGlhcyBicm93c2VyLmRlYnVnXG4gKiBAdHlwZSB1dGlsaXR5XG4gKlxuICovXG5cbmltcG9ydCBzZXJpYWxpemVFcnJvciBmcm9tICdzZXJpYWxpemUtZXJyb3InXG5pbXBvcnQgV0RJT1JlcGwgZnJvbSAnQHdkaW8vcmVwbCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVidWcoY29tbWFuZFRpbWVvdXQgPSA1MDAwKSB7XG4gICAgY29uc3QgcmVwbCA9IG5ldyBXRElPUmVwbCgpXG4gICAgY29uc3QgeyBpbnRyb01lc3NhZ2UgfSA9IFdESU9SZXBsXG5cbiAgICAvKipcbiAgICAgKiBydW4gcmVwbCBpbiBzdGFuZGFsb25lIG1vZGVcbiAgICAgKi9cbiAgICBpZiAoIXByb2Nlc3MuZW52LldESU9fV09SS0VSKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBjb25zb2xlLmxvZyhXRElPUmVwbC5pbnRyb01lc3NhZ2UpXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICAgICAgICBicm93c2VyOiB0aGlzLFxuICAgICAgICAgICAgZHJpdmVyOiB0aGlzLFxuICAgICAgICAgICAgJDogOjp0aGlzLiQsXG4gICAgICAgICAgICAkJDogOjp0aGlzLiQkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcGwuc3RhcnQoY29udGV4dClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWdpc3RlciB3b3JrZXIgcHJvY2VzcyBhcyBkZWJ1Z2dlciB0YXJnZXRcbiAgICAgKi9cbiAgICBwcm9jZXNzLl9kZWJ1Z1Byb2Nlc3MocHJvY2Vzcy5waWQpXG5cbiAgICAvKipcbiAgICAgKiBpbml0aWFsaXNlIHJlcGwgaW4gdGVzdHJ1bm5lclxuICAgICAqL1xuICAgIHByb2Nlc3Muc2VuZCh7XG4gICAgICAgIG9yaWdpbjogJ2RlYnVnZ2VyJyxcbiAgICAgICAgbmFtZTogJ3N0YXJ0JyxcbiAgICAgICAgcGFyYW1zOiB7IGNvbW1hbmRUaW1lb3V0LCBpbnRyb01lc3NhZ2UgfVxuICAgIH0pXG5cbiAgICBsZXQgY29tbWFuZFJlc29sdmUgPSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAoKSA9PiB7fVxuICAgIHByb2Nlc3Mub24oJ21lc3NhZ2UnLCAobSkgPT4ge1xuICAgICAgICBpZiAobS5vcmlnaW4gIT09ICdkZWJ1Z2dlcicpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG0ubmFtZSA9PT0gJ3N0b3AnKSB7XG4gICAgICAgICAgICBwcm9jZXNzLl9kZWJ1Z0VuZChwcm9jZXNzLnBpZClcbiAgICAgICAgICAgIHJldHVybiBjb21tYW5kUmVzb2x2ZSgpXG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKG0ubmFtZSA9PT0gJ2V2YWwnKSB7XG4gICAgICAgICAgICByZXBsLmV2YWwobS5jb250ZW50LmNtZCwgZ2xvYmFsLCBudWxsLCAoZSwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogJ2RlYnVnZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXN1bHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VyaWFsaXplRXJyb3IoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiB0cnkgdG8gZG8gc29tZSBzbWFydCBzZXJpYWxpemF0aW9uc1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGBbRnVuY3Rpb246ICR7cmVzdWx0Lm5hbWV9XWBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcm9jZXNzLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW46ICdkZWJ1Z2dlcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXN1bHQnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgcmVzdWx0IH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IChjb21tYW5kUmVzb2x2ZSA9IHJlc29sdmUpKVxufVxuIl19