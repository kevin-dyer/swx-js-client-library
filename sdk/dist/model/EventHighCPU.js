"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventHighCPUData = _interopRequireDefault(require("./EventHighCPUData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EventHighCPU model module.
 * @module model/EventHighCPU
 * @version 1.0.0
 */
var EventHighCPU = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventHighCPU</code>.
   * @alias module:model/EventHighCPU
   */
  function EventHighCPU() {
    _classCallCheck(this, EventHighCPU);

    EventHighCPU.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventHighCPU, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EventHighCPU</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventHighCPU} obj Optional instance to populate.
     * @return {module:model/EventHighCPU} The populated <code>EventHighCPU</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventHighCPU();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _EventHighCPUData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return EventHighCPU;
}();
/**
 * @member {String} title
 */


EventHighCPU.prototype['title'] = undefined;
/**
 * @member {String} description
 */

EventHighCPU.prototype['description'] = undefined;
/**
 * @member {module:model/EventHighCPUData} data
 */

EventHighCPU.prototype['data'] = undefined;
var _default = EventHighCPU;
exports["default"] = _default;