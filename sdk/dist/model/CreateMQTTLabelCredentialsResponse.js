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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CreateMQTTLabelCredentialsResponse model module.
 * @module model/CreateMQTTLabelCredentialsResponse
 * @version 1.0.0
 */
var CreateMQTTLabelCredentialsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateMQTTLabelCredentialsResponse</code>.
   * @alias module:model/CreateMQTTLabelCredentialsResponse
   */
  function CreateMQTTLabelCredentialsResponse() {
    _classCallCheck(this, CreateMQTTLabelCredentialsResponse);

    CreateMQTTLabelCredentialsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateMQTTLabelCredentialsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateMQTTLabelCredentialsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMQTTLabelCredentialsResponse} obj Optional instance to populate.
     * @return {module:model/CreateMQTTLabelCredentialsResponse} The populated <code>CreateMQTTLabelCredentialsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateMQTTLabelCredentialsResponse();

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

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
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

  return CreateMQTTLabelCredentialsResponse;
}();
/**
 * @member {String} id
 */


CreateMQTTLabelCredentialsResponse.prototype['id'] = undefined;
/**
 * @member {String} description
 */

CreateMQTTLabelCredentialsResponse.prototype['description'] = undefined;
/**
 * @member {String} type
 */

CreateMQTTLabelCredentialsResponse.prototype['type'] = undefined;
/**
 * @member {String} username
 */

CreateMQTTLabelCredentialsResponse.prototype['username'] = undefined;
/**
 * @member {String} password
 */

CreateMQTTLabelCredentialsResponse.prototype['password'] = undefined;
/**
 * @member {Boolean} enabled
 */

CreateMQTTLabelCredentialsResponse.prototype['enabled'] = undefined;
/**
 * @member {Date} created_at
 */

CreateMQTTLabelCredentialsResponse.prototype['created_at'] = undefined;
/**
 * @member {Number} expired_at
 */

CreateMQTTLabelCredentialsResponse.prototype['expired_at'] = undefined;
/**
 * @member {Array.<module:model/MQTTLabel>} topics
 */

CreateMQTTLabelCredentialsResponse.prototype['topics'] = undefined;
var _default = CreateMQTTLabelCredentialsResponse;
exports["default"] = _default;