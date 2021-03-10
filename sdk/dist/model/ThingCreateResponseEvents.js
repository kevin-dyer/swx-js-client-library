"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventHighCPUResponse = _interopRequireDefault(require("./EventHighCPUResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ThingCreateResponseEvents model module.
 * @module model/ThingCreateResponseEvents
 * @version 0.8.12
 */
var ThingCreateResponseEvents = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingCreateResponseEvents</code>.
   * @alias module:model/ThingCreateResponseEvents
   */
  function ThingCreateResponseEvents() {
    _classCallCheck(this, ThingCreateResponseEvents);

    ThingCreateResponseEvents.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingCreateResponseEvents, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingCreateResponseEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingCreateResponseEvents} obj Optional instance to populate.
     * @return {module:model/ThingCreateResponseEvents} The populated <code>ThingCreateResponseEvents</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingCreateResponseEvents();

        if (data.hasOwnProperty('highCPU')) {
          obj['highCPU'] = _EventHighCPUResponse["default"].constructFromObject(data['highCPU']);
        }
      }

      return obj;
    }
  }]);

  return ThingCreateResponseEvents;
}();
/**
 * @member {module:model/EventHighCPUResponse} highCPU
 */


ThingCreateResponseEvents.prototype['highCPU'] = undefined;
var _default = ThingCreateResponseEvents;
exports["default"] = _default;