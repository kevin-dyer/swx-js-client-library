"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ThingRequestActions = _interopRequireDefault(require("./ThingRequestActions"));

var _ThingRequestEvents = _interopRequireDefault(require("./ThingRequestEvents"));

var _ThingRequestProperties = _interopRequireDefault(require("./ThingRequestProperties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ThingRequest model module.
 * @module model/ThingRequest
 * @version 1.0.0
 */
var ThingRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingRequest</code>.
   * @alias module:model/ThingRequest
   */
  function ThingRequest() {
    _classCallCheck(this, ThingRequest);

    ThingRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingRequest} obj Optional instance to populate.
     * @return {module:model/ThingRequest} The populated <code>ThingRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingRequest();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ThingRequestProperties["default"].constructFromObject(data['properties']);
        }

        if (data.hasOwnProperty('actions')) {
          obj['actions'] = _ThingRequestActions["default"].constructFromObject(data['actions']);
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ThingRequestEvents["default"].constructFromObject(data['events']);
        }
      }

      return obj;
    }
  }]);

  return ThingRequest;
}();
/**
 * @member {String} title
 */


ThingRequest.prototype['title'] = undefined;
/**
 * @member {String} description
 */

ThingRequest.prototype['description'] = undefined;
/**
 * @member {module:model/ThingRequestProperties} properties
 */

ThingRequest.prototype['properties'] = undefined;
/**
 * @member {module:model/ThingRequestActions} actions
 */

ThingRequest.prototype['actions'] = undefined;
/**
 * @member {module:model/ThingRequestEvents} events
 */

ThingRequest.prototype['events'] = undefined;
var _default = ThingRequest;
exports["default"] = _default;