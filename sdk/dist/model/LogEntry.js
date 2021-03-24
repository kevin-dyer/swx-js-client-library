"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LogEntry model module.
 * @module model/LogEntry
 * @version 1.0.0
 */
var LogEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LogEntry</code>.
   * @alias module:model/LogEntry
   */
  function LogEntry() {
    _classCallCheck(this, LogEntry);

    LogEntry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LogEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogEntry} obj Optional instance to populate.
     * @return {module:model/LogEntry} The populated <code>LogEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LogEntry();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('instance')) {
          obj['instance'] = _ApiClient["default"].convertToType(data['instance'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Date');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LogEntry;
}();
/**
 * the function name
 * @member {String} name
 */


LogEntry.prototype['name'] = undefined;
/**
 * the name/id of the specific function instance
 * @member {String} instance
 */

LogEntry.prototype['instance'] = undefined;
/**
 * the timestamp of when the log message was recorded
 * @member {Date} timestamp
 */

LogEntry.prototype['timestamp'] = undefined;
/**
 * raw log message content
 * @member {String} text
 */

LogEntry.prototype['text'] = undefined;
var _default = LogEntry;
exports["default"] = _default;