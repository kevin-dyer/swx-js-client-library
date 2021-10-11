"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UpdateMQTTCredentials model module.
 * @module model/UpdateMQTTCredentials
 * @version 1.0.0
 */
var UpdateMQTTCredentials = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateMQTTCredentials</code>.
   * @alias module:model/UpdateMQTTCredentials
   */
  function UpdateMQTTCredentials() {
    _classCallCheck(this, UpdateMQTTCredentials);

    UpdateMQTTCredentials.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateMQTTCredentials, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdateMQTTCredentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMQTTCredentials} obj Optional instance to populate.
     * @return {module:model/UpdateMQTTCredentials} The populated <code>UpdateMQTTCredentials</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateMQTTCredentials();

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('expired_at')) {
          obj['expired_at'] = _ApiClient["default"].convertToType(data['expired_at'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UpdateMQTTCredentials;
}();
/**
 * @member {String} username
 */


UpdateMQTTCredentials.prototype['username'] = undefined;
/**
 * @member {String} password
 */

UpdateMQTTCredentials.prototype['password'] = undefined;
/**
 * @member {Boolean} enabled
 */

UpdateMQTTCredentials.prototype['enabled'] = undefined;
/**
 * @member {Number} expired_at
 */

UpdateMQTTCredentials.prototype['expired_at'] = undefined;
/**
 * @member {String} description
 */

UpdateMQTTCredentials.prototype['description'] = undefined;
var _default = UpdateMQTTCredentials;
exports["default"] = _default;