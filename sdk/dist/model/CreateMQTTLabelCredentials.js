"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CreateMQTTLabelCredentials model module.
 * @module model/CreateMQTTLabelCredentials
 * @version 1.0.0
 */
var CreateMQTTLabelCredentials = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateMQTTLabelCredentials</code>.
   * @alias module:model/CreateMQTTLabelCredentials
   */
  function CreateMQTTLabelCredentials() {
    _classCallCheck(this, CreateMQTTLabelCredentials);

    CreateMQTTLabelCredentials.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateMQTTLabelCredentials, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateMQTTLabelCredentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMQTTLabelCredentials} obj Optional instance to populate.
     * @return {module:model/CreateMQTTLabelCredentials} The populated <code>CreateMQTTLabelCredentials</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateMQTTLabelCredentials();

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateMQTTLabelCredentials;
}();
/**
 * @member {String} label
 */


CreateMQTTLabelCredentials.prototype['label'] = undefined;
/**
 * @member {String} username
 */

CreateMQTTLabelCredentials.prototype['username'] = undefined;
/**
 * @member {String} password
 */

CreateMQTTLabelCredentials.prototype['password'] = undefined;
var _default = CreateMQTTLabelCredentials;
exports["default"] = _default;