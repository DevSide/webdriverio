"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setTimeout;

require("source-map-support/register");

/**
 *
 * Sets the timeouts associated with the current session, timeout durations control such
 * behaviour as timeouts on script injection, document navigation, and element retrieval.
 * For more information and examples, see [timeouts guide](https://webdriver.io/docs/timeouts.html#selenium-timeouts).
 *
 * <example>
    :setTimeout.js
    it('should change timeout duration for session with long code duration', () => {
        browser.setTimeout({
            'pageLoad': 10000,
            'script': 60000
        });
        // Execute code which takes a long time
        browser.executeAsync((done) => {
            console.log('Wake me up before you go!');
            setTimeout(done, 59000);
        });
    });
 * </example>
 *
 * @param {Object} timeouts  Object containing session timeout values
 * @param {Number} timeouts.implicit  (Optional) Time in milliseconds to retry the element location strategy when finding an element.
 * @param {Number} timeouts.pageLoad  (Optional) Time in milliseconds to wait for the document to finish loading.
 * @param {Number} timeouts.script  (Optional) Scripts injected with [`execute`](https://webdriver.io/docs/api/browser/execute.html) or [`executeAsync`](https://webdriver.io/docs/api/browser/executeAsync.html) will run until they hit the script timeout duration, which is also given in milliseconds.
 * @see https://w3c.github.io/webdriver/#set-timeouts
 *
 */
async function setTimeout(timeouts) {
  if (!(timeouts instanceof Object)) {
    return Promise.reject(new Error('Parameter for "setTimeout" command needs to be an object'));
  } // If value is not an integer, or it is less than 0 or greater than the maximum safe integer, return error with error code invalid argument.


  const timeoutValues = Object.values(timeouts);

  if (timeoutValues.length && timeoutValues.every(timeout => typeof timeout !== 'number' || timeout < 0 || timeout > Number.MAX_SAFE_INTEGER)) {
    return Promise.reject(new Error('Specified timeout values are not valid integer (see https://webdriver.io/docs/api/browser/setTimeout.html for documentation).'));
  }

  let implicit;
  let pageLoad;
  let script;

  if (typeof timeouts.implicit !== 'undefined') {
    implicit = timeouts.implicit;
  } // Previously also known as `page load` with JsonWireProtocol


  if (!this.isW3C && typeof timeouts['page load'] !== 'undefined') {
    pageLoad = timeouts['page load'];
  }

  if (typeof timeouts.pageLoad !== 'undefined') {
    pageLoad = timeouts.pageLoad;
  }

  if (typeof timeouts.script !== 'undefined') {
    script = timeouts.script;
  }
  /**
   * JsonWireProtocol action
   */


  if (!this.isW3C) {
    let setTimeoutsResponse;

    if (typeof implicit === 'number') {
      setTimeoutsResponse = await this.setTimeouts('implicit', implicit);
    }

    if (typeof pageLoad === 'number') {
      setTimeoutsResponse = await this.setTimeouts('page load', pageLoad);
    }

    if (typeof script === 'number') {
      setTimeoutsResponse = await this.setTimeouts('script', script);
    }

    return Promise.resolve(setTimeoutsResponse);
  }

  return this.setTimeouts(implicit, pageLoad, script);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyL3NldFRpbWVvdXQuanMiXSwibmFtZXMiOlsic2V0VGltZW91dCIsInRpbWVvdXRzIiwiT2JqZWN0IiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwidGltZW91dFZhbHVlcyIsInZhbHVlcyIsImxlbmd0aCIsImV2ZXJ5IiwidGltZW91dCIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJpbXBsaWNpdCIsInBhZ2VMb2FkIiwic2NyaXB0IiwiaXNXM0MiLCJzZXRUaW1lb3V0c1Jlc3BvbnNlIiwic2V0VGltZW91dHMiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCZSxlQUFlQSxVQUFmLENBQTBCQyxRQUExQixFQUFvQztBQUMvQyxNQUFJLEVBQUVBLFFBQVEsWUFBWUMsTUFBdEIsQ0FBSixFQUFtQztBQUMvQixXQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZSxJQUFJQyxLQUFKLENBQVUsMERBQVYsQ0FBZixDQUFQO0FBQ0gsR0FIOEMsQ0FJL0M7OztBQUNBLFFBQU1DLGFBQWEsR0FBR0osTUFBTSxDQUFDSyxNQUFQLENBQWNOLFFBQWQsQ0FBdEI7O0FBQ0EsTUFBSUssYUFBYSxDQUFDRSxNQUFkLElBQXdCRixhQUFhLENBQUNHLEtBQWQsQ0FBb0JDLE9BQU8sSUFBSSxPQUFPQSxPQUFQLEtBQW1CLFFBQW5CLElBQStCQSxPQUFPLEdBQUcsQ0FBekMsSUFBOENBLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxnQkFBOUYsQ0FBNUIsRUFBNkk7QUFDekksV0FBT1QsT0FBTyxDQUFDQyxNQUFSLENBQWUsSUFBSUMsS0FBSixDQUFVLCtIQUFWLENBQWYsQ0FBUDtBQUNIOztBQUVELE1BQUlRLFFBQUo7QUFDQSxNQUFJQyxRQUFKO0FBQ0EsTUFBSUMsTUFBSjs7QUFFQSxNQUFJLE9BQU9kLFFBQVEsQ0FBQ1ksUUFBaEIsS0FBNkIsV0FBakMsRUFBOEM7QUFDMUNBLElBQUFBLFFBQVEsR0FBR1osUUFBUSxDQUFDWSxRQUFwQjtBQUNILEdBaEI4QyxDQWlCL0M7OztBQUNBLE1BQUksQ0FBQyxLQUFLRyxLQUFOLElBQWUsT0FBT2YsUUFBUSxDQUFDLFdBQUQsQ0FBZixLQUFpQyxXQUFwRCxFQUFpRTtBQUM3RGEsSUFBQUEsUUFBUSxHQUFHYixRQUFRLENBQUMsV0FBRCxDQUFuQjtBQUNIOztBQUNELE1BQUksT0FBT0EsUUFBUSxDQUFDYSxRQUFoQixLQUE2QixXQUFqQyxFQUE4QztBQUMxQ0EsSUFBQUEsUUFBUSxHQUFHYixRQUFRLENBQUNhLFFBQXBCO0FBQ0g7O0FBQ0QsTUFBSSxPQUFPYixRQUFRLENBQUNjLE1BQWhCLEtBQTJCLFdBQS9CLEVBQTRDO0FBQ3hDQSxJQUFBQSxNQUFNLEdBQUdkLFFBQVEsQ0FBQ2MsTUFBbEI7QUFDSDtBQUVEOzs7OztBQUdBLE1BQUksQ0FBQyxLQUFLQyxLQUFWLEVBQWlCO0FBQ2IsUUFBSUMsbUJBQUo7O0FBQ0EsUUFBSSxPQUFPSixRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQzlCSSxNQUFBQSxtQkFBbUIsR0FBRyxNQUFNLEtBQUtDLFdBQUwsQ0FBaUIsVUFBakIsRUFBNkJMLFFBQTdCLENBQTVCO0FBQ0g7O0FBQ0QsUUFBSSxPQUFPQyxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQzlCRyxNQUFBQSxtQkFBbUIsR0FBRyxNQUFNLEtBQUtDLFdBQUwsQ0FBaUIsV0FBakIsRUFBOEJKLFFBQTlCLENBQTVCO0FBQ0g7O0FBQ0QsUUFBSSxPQUFPQyxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzVCRSxNQUFBQSxtQkFBbUIsR0FBRyxNQUFNLEtBQUtDLFdBQUwsQ0FBaUIsUUFBakIsRUFBMkJILE1BQTNCLENBQTVCO0FBQ0g7O0FBQ0QsV0FBT1osT0FBTyxDQUFDZ0IsT0FBUixDQUFnQkYsbUJBQWhCLENBQVA7QUFDSDs7QUFFRCxTQUFPLEtBQUtDLFdBQUwsQ0FBaUJMLFFBQWpCLEVBQTJCQyxRQUEzQixFQUFxQ0MsTUFBckMsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogU2V0cyB0aGUgdGltZW91dHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IHNlc3Npb24sIHRpbWVvdXQgZHVyYXRpb25zIGNvbnRyb2wgc3VjaFxuICogYmVoYXZpb3VyIGFzIHRpbWVvdXRzIG9uIHNjcmlwdCBpbmplY3Rpb24sIGRvY3VtZW50IG5hdmlnYXRpb24sIGFuZCBlbGVtZW50IHJldHJpZXZhbC5cbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIGFuZCBleGFtcGxlcywgc2VlIFt0aW1lb3V0cyBndWlkZV0oaHR0cHM6Ly93ZWJkcml2ZXIuaW8vZG9jcy90aW1lb3V0cy5odG1sI3NlbGVuaXVtLXRpbWVvdXRzKS5cbiAqXG4gKiA8ZXhhbXBsZT5cbiAgICA6c2V0VGltZW91dC5qc1xuICAgIGl0KCdzaG91bGQgY2hhbmdlIHRpbWVvdXQgZHVyYXRpb24gZm9yIHNlc3Npb24gd2l0aCBsb25nIGNvZGUgZHVyYXRpb24nLCAoKSA9PiB7XG4gICAgICAgIGJyb3dzZXIuc2V0VGltZW91dCh7XG4gICAgICAgICAgICAncGFnZUxvYWQnOiAxMDAwMCxcbiAgICAgICAgICAgICdzY3JpcHQnOiA2MDAwMFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gRXhlY3V0ZSBjb2RlIHdoaWNoIHRha2VzIGEgbG9uZyB0aW1lXG4gICAgICAgIGJyb3dzZXIuZXhlY3V0ZUFzeW5jKChkb25lKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV2FrZSBtZSB1cCBiZWZvcmUgeW91IGdvIScpO1xuICAgICAgICAgICAgc2V0VGltZW91dChkb25lLCA1OTAwMCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICogPC9leGFtcGxlPlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aW1lb3V0cyAgT2JqZWN0IGNvbnRhaW5pbmcgc2Vzc2lvbiB0aW1lb3V0IHZhbHVlc1xuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVvdXRzLmltcGxpY2l0ICAoT3B0aW9uYWwpIFRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHJldHJ5IHRoZSBlbGVtZW50IGxvY2F0aW9uIHN0cmF0ZWd5IHdoZW4gZmluZGluZyBhbiBlbGVtZW50LlxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVvdXRzLnBhZ2VMb2FkICAoT3B0aW9uYWwpIFRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHdhaXQgZm9yIHRoZSBkb2N1bWVudCB0byBmaW5pc2ggbG9hZGluZy5cbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lb3V0cy5zY3JpcHQgIChPcHRpb25hbCkgU2NyaXB0cyBpbmplY3RlZCB3aXRoIFtgZXhlY3V0ZWBdKGh0dHBzOi8vd2ViZHJpdmVyLmlvL2RvY3MvYXBpL2Jyb3dzZXIvZXhlY3V0ZS5odG1sKSBvciBbYGV4ZWN1dGVBc3luY2BdKGh0dHBzOi8vd2ViZHJpdmVyLmlvL2RvY3MvYXBpL2Jyb3dzZXIvZXhlY3V0ZUFzeW5jLmh0bWwpIHdpbGwgcnVuIHVudGlsIHRoZXkgaGl0IHRoZSBzY3JpcHQgdGltZW91dCBkdXJhdGlvbiwgd2hpY2ggaXMgYWxzbyBnaXZlbiBpbiBtaWxsaXNlY29uZHMuXG4gKiBAc2VlIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJkcml2ZXIvI3NldC10aW1lb3V0c1xuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZXRUaW1lb3V0KHRpbWVvdXRzKSB7XG4gICAgaWYgKCEodGltZW91dHMgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1BhcmFtZXRlciBmb3IgXCJzZXRUaW1lb3V0XCIgY29tbWFuZCBuZWVkcyB0byBiZSBhbiBvYmplY3QnKSlcbiAgICB9XG4gICAgLy8gSWYgdmFsdWUgaXMgbm90IGFuIGludGVnZXIsIG9yIGl0IGlzIGxlc3MgdGhhbiAwIG9yIGdyZWF0ZXIgdGhhbiB0aGUgbWF4aW11bSBzYWZlIGludGVnZXIsIHJldHVybiBlcnJvciB3aXRoIGVycm9yIGNvZGUgaW52YWxpZCBhcmd1bWVudC5cbiAgICBjb25zdCB0aW1lb3V0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aW1lb3V0cylcbiAgICBpZiAodGltZW91dFZhbHVlcy5sZW5ndGggJiYgdGltZW91dFZhbHVlcy5ldmVyeSh0aW1lb3V0ID0+IHR5cGVvZiB0aW1lb3V0ICE9PSAnbnVtYmVyJyB8fCB0aW1lb3V0IDwgMCB8fCB0aW1lb3V0ID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1NwZWNpZmllZCB0aW1lb3V0IHZhbHVlcyBhcmUgbm90IHZhbGlkIGludGVnZXIgKHNlZSBodHRwczovL3dlYmRyaXZlci5pby9kb2NzL2FwaS9icm93c2VyL3NldFRpbWVvdXQuaHRtbCBmb3IgZG9jdW1lbnRhdGlvbikuJykpXG4gICAgfVxuXG4gICAgbGV0IGltcGxpY2l0XG4gICAgbGV0IHBhZ2VMb2FkXG4gICAgbGV0IHNjcmlwdFxuXG4gICAgaWYgKHR5cGVvZiB0aW1lb3V0cy5pbXBsaWNpdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaW1wbGljaXQgPSB0aW1lb3V0cy5pbXBsaWNpdFxuICAgIH1cbiAgICAvLyBQcmV2aW91c2x5IGFsc28ga25vd24gYXMgYHBhZ2UgbG9hZGAgd2l0aCBKc29uV2lyZVByb3RvY29sXG4gICAgaWYgKCF0aGlzLmlzVzNDICYmIHR5cGVvZiB0aW1lb3V0c1sncGFnZSBsb2FkJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhZ2VMb2FkID0gdGltZW91dHNbJ3BhZ2UgbG9hZCddXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGltZW91dHMucGFnZUxvYWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhZ2VMb2FkID0gdGltZW91dHMucGFnZUxvYWRcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aW1lb3V0cy5zY3JpcHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNjcmlwdCA9IHRpbWVvdXRzLnNjcmlwdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEpzb25XaXJlUHJvdG9jb2wgYWN0aW9uXG4gICAgICovXG4gICAgaWYgKCF0aGlzLmlzVzNDKSB7XG4gICAgICAgIGxldCBzZXRUaW1lb3V0c1Jlc3BvbnNlXG4gICAgICAgIGlmICh0eXBlb2YgaW1wbGljaXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0c1Jlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXRUaW1lb3V0cygnaW1wbGljaXQnLCBpbXBsaWNpdClcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhZ2VMb2FkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgc2V0VGltZW91dHNSZXNwb25zZSA9IGF3YWl0IHRoaXMuc2V0VGltZW91dHMoJ3BhZ2UgbG9hZCcsIHBhZ2VMb2FkKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2NyaXB0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgc2V0VGltZW91dHNSZXNwb25zZSA9IGF3YWl0IHRoaXMuc2V0VGltZW91dHMoJ3NjcmlwdCcsIHNjcmlwdClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNldFRpbWVvdXRzUmVzcG9uc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2V0VGltZW91dHMoaW1wbGljaXQsIHBhZ2VMb2FkLCBzY3JpcHQpXG59XG4iXX0=