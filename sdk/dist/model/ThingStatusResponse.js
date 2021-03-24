"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Properties = _interopRequireDefault(require("./Properties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ThingStatusResponse model module.
 * @module model/ThingStatusResponse
 * @version 1.0.0
 */
var ThingStatusResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingStatusResponse</code>.
   * @alias module:model/ThingStatusResponse
   */
  function ThingStatusResponse() {
    _classCallCheck(this, ThingStatusResponse);

    ThingStatusResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingStatusResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingStatusResponse} obj Optional instance to populate.
     * @return {module:model/ThingStatusResponse} The populated <code>ThingStatusResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingStatusResponse();

        if (data.hasOwnProperty('uid')) {
          obj['uid'] = _ApiClient["default"].convertToType(data['uid'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('space')) {
          obj['space'] = _ApiClient["default"].convertToType(data['space'], 'String');
        }

        if (data.hasOwnProperty('collection')) {
          obj['collection'] = _ApiClient["default"].convertToType(data['collection'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _Properties["default"].constructFromObject(data['properties']);
        }
      }

      return obj;
    }
  }]);

  return ThingStatusResponse;
}();
/**
 * @member {String} uid
 */


ThingStatusResponse.prototype['uid'] = undefined;
/**
 * @member {String} title
 */

ThingStatusResponse.prototype['title'] = undefined;
/**
 * @member {String} space
 */

ThingStatusResponse.prototype['space'] = undefined;
/**
 * @member {String} collection
 */

ThingStatusResponse.prototype['collection'] = undefined;
/**
 * @member {module:model/Properties} properties
 */

ThingStatusResponse.prototype['properties'] = undefined;
var _default = ThingStatusResponse;
exports["default"] = _default;