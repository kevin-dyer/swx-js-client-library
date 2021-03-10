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
 * The ThingUpdateRequest model module.
 * @module model/ThingUpdateRequest
 * @version 0.8.12
 */
var ThingUpdateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingUpdateRequest</code>.
   * @alias module:model/ThingUpdateRequest
   */
  function ThingUpdateRequest() {
    _classCallCheck(this, ThingUpdateRequest);

    ThingUpdateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingUpdateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingUpdateRequest} obj Optional instance to populate.
     * @return {module:model/ThingUpdateRequest} The populated <code>ThingUpdateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingUpdateRequest();

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

  return ThingUpdateRequest;
}();
/**
 * @member {String} title
 */


ThingUpdateRequest.prototype['title'] = undefined;
/**
 * @member {String} description
 */

ThingUpdateRequest.prototype['description'] = undefined;
/**
 * @member {module:model/ThingRequestProperties} properties
 */

ThingUpdateRequest.prototype['properties'] = undefined;
/**
 * @member {module:model/ThingRequestActions} actions
 */

ThingUpdateRequest.prototype['actions'] = undefined;
/**
 * @member {module:model/ThingRequestEvents} events
 */

ThingUpdateRequest.prototype['events'] = undefined;
var _default = ThingUpdateRequest;
exports["default"] = _default;