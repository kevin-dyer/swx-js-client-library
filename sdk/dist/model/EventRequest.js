"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventRequestHighCPU = _interopRequireDefault(require("./EventRequestHighCPU"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EventRequest model module.
 * @module model/EventRequest
 * @version 1.0.0
 */
var EventRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventRequest</code>.
   * @alias module:model/EventRequest
   * @extends Object
   */
  function EventRequest() {
    _classCallCheck(this, EventRequest);

    EventRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EventRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventRequest} obj Optional instance to populate.
     * @return {module:model/EventRequest} The populated <code>EventRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventRequest();

        _ApiClient["default"].constructFromObject(data, obj, 'Object');

        if (data.hasOwnProperty('highCPU')) {
          obj['highCPU'] = _EventRequestHighCPU["default"].constructFromObject(data['highCPU']);
        }
      }

      return obj;
    }
  }]);

  return EventRequest;
}();
/**
 * @member {module:model/EventRequestHighCPU} highCPU
 */


EventRequest.prototype['highCPU'] = undefined;
var _default = EventRequest;
exports["default"] = _default;