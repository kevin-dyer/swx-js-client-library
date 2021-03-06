"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventHighCPUData = _interopRequireDefault(require("./EventHighCPUData"));

var _PropertyCPUResponseLinks = _interopRequireDefault(require("./PropertyCPUResponseLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EventHighCPUResponse model module.
 * @module model/EventHighCPUResponse
 * @version 1.0.0
 */
var EventHighCPUResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventHighCPUResponse</code>.
   * @alias module:model/EventHighCPUResponse
   */
  function EventHighCPUResponse() {
    _classCallCheck(this, EventHighCPUResponse);

    EventHighCPUResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventHighCPUResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EventHighCPUResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventHighCPUResponse} obj Optional instance to populate.
     * @return {module:model/EventHighCPUResponse} The populated <code>EventHighCPUResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventHighCPUResponse();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _EventHighCPUData["default"].constructFromObject(data['data']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PropertyCPUResponseLinks["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EventHighCPUResponse;
}();
/**
 * @member {String} title
 */


EventHighCPUResponse.prototype['title'] = undefined;
/**
 * @member {String} description
 */

EventHighCPUResponse.prototype['description'] = undefined;
/**
 * @member {module:model/EventHighCPUData} data
 */

EventHighCPUResponse.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/PropertyCPUResponseLinks>} links
 */

EventHighCPUResponse.prototype['links'] = undefined;
var _default = EventHighCPUResponse;
exports["default"] = _default;