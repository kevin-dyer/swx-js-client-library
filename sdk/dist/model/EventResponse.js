"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventResponseHighCPU = _interopRequireDefault(require("./EventResponseHighCPU"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EventResponse model module.
 * @module model/EventResponse
 * @version 1.0.0
 */
var EventResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventResponse</code>.
   * @alias module:model/EventResponse
   */
  function EventResponse() {
    _classCallCheck(this, EventResponse);

    EventResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EventResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventResponse} obj Optional instance to populate.
     * @return {module:model/EventResponse} The populated <code>EventResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventResponse();

        if (data.hasOwnProperty('highCPU')) {
          obj['highCPU'] = _EventResponseHighCPU["default"].constructFromObject(data['highCPU']);
        }
      }

      return obj;
    }
  }]);

  return EventResponse;
}();
/**
 * @member {module:model/EventResponseHighCPU} highCPU
 */


EventResponse.prototype['highCPU'] = undefined;
var _default = EventResponse;
exports["default"] = _default;