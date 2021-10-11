"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MQTTLabel = _interopRequireDefault(require("./MQTTLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ShowMQTTLabelResponse model module.
 * @module model/ShowMQTTLabelResponse
 * @version 1.0.0
 */
var ShowMQTTLabelResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShowMQTTLabelResponse</code>.
   * @alias module:model/ShowMQTTLabelResponse
   */
  function ShowMQTTLabelResponse() {
    _classCallCheck(this, ShowMQTTLabelResponse);

    ShowMQTTLabelResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ShowMQTTLabelResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ShowMQTTLabelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShowMQTTLabelResponse} obj Optional instance to populate.
     * @return {module:model/ShowMQTTLabelResponse} The populated <code>ShowMQTTLabelResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShowMQTTLabelResponse();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('expired_at')) {
          obj['expired_at'] = _ApiClient["default"].convertToType(data['expired_at'], 'Number');
        }

        if (data.hasOwnProperty('topics')) {
          obj['topics'] = _ApiClient["default"].convertToType(data['topics'], [_MQTTLabel["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ShowMQTTLabelResponse;
}();
/**
 * @member {String} id
 */


ShowMQTTLabelResponse.prototype['id'] = undefined;
/**
 * @member {String} description
 */

ShowMQTTLabelResponse.prototype['description'] = undefined;
/**
 * @member {String} type
 */

ShowMQTTLabelResponse.prototype['type'] = undefined;
/**
 * @member {String} username
 */

ShowMQTTLabelResponse.prototype['username'] = undefined;
/**
 * @member {Boolean} enabled
 */

ShowMQTTLabelResponse.prototype['enabled'] = undefined;
/**
 * @member {Date} created_at
 */

ShowMQTTLabelResponse.prototype['created_at'] = undefined;
/**
 * @member {Number} expired_at
 */

ShowMQTTLabelResponse.prototype['expired_at'] = undefined;
/**
 * @member {Array.<module:model/MQTTLabel>} topics
 */

ShowMQTTLabelResponse.prototype['topics'] = undefined;
var _default = ShowMQTTLabelResponse;
exports["default"] = _default;