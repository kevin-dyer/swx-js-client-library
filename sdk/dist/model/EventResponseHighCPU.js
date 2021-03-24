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
 * The EventResponseHighCPU model module.
 * @module model/EventResponseHighCPU
 * @version 1.0.0
 */
var EventResponseHighCPU = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventResponseHighCPU</code>.
   * @alias module:model/EventResponseHighCPU
   */
  function EventResponseHighCPU() {
    _classCallCheck(this, EventResponseHighCPU);

    EventResponseHighCPU.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventResponseHighCPU, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EventResponseHighCPU</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventResponseHighCPU} obj Optional instance to populate.
     * @return {module:model/EventResponseHighCPU} The populated <code>EventResponseHighCPU</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventResponseHighCPU();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'Number');
        }

        if (data.hasOwnProperty('href')) {
          obj['href'] = _ApiClient["default"].convertToType(data['href'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return EventResponseHighCPU;
}();
/**
 * @member {Number} data
 */


EventResponseHighCPU.prototype['data'] = undefined;
/**
 * @member {String} href
 */

EventResponseHighCPU.prototype['href'] = undefined;
/**
 * @member {Date} timestamp
 */

EventResponseHighCPU.prototype['timestamp'] = undefined;
var _default = EventResponseHighCPU;
exports["default"] = _default;