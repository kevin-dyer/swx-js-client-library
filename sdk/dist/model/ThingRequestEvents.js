"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventHighCPU = _interopRequireDefault(require("./EventHighCPU"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ThingRequestEvents model module.
 * @module model/ThingRequestEvents
 * @version 1.0.0
 */
var ThingRequestEvents = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingRequestEvents</code>.
   * @alias module:model/ThingRequestEvents
   */
  function ThingRequestEvents() {
    _classCallCheck(this, ThingRequestEvents);

    ThingRequestEvents.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingRequestEvents, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingRequestEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingRequestEvents} obj Optional instance to populate.
     * @return {module:model/ThingRequestEvents} The populated <code>ThingRequestEvents</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingRequestEvents();

        if (data.hasOwnProperty('highCPU')) {
          obj['highCPU'] = _EventHighCPU["default"].constructFromObject(data['highCPU']);
        }
      }

      return obj;
    }
  }]);

  return ThingRequestEvents;
}();
/**
 * @member {module:model/EventHighCPU} highCPU
 */


ThingRequestEvents.prototype['highCPU'] = undefined;
var _default = ThingRequestEvents;
exports["default"] = _default;