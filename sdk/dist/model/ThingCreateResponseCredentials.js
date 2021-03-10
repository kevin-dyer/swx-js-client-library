"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ThingCreateResponseCredentialsHttp = _interopRequireDefault(require("./ThingCreateResponseCredentialsHttp"));

var _ThingCreateResponseCredentialsMqtt = _interopRequireDefault(require("./ThingCreateResponseCredentialsMqtt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ThingCreateResponseCredentials model module.
 * @module model/ThingCreateResponseCredentials
 * @version 0.8.12
 */
var ThingCreateResponseCredentials = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingCreateResponseCredentials</code>.
   * @alias module:model/ThingCreateResponseCredentials
   */
  function ThingCreateResponseCredentials() {
    _classCallCheck(this, ThingCreateResponseCredentials);

    ThingCreateResponseCredentials.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingCreateResponseCredentials, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingCreateResponseCredentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingCreateResponseCredentials} obj Optional instance to populate.
     * @return {module:model/ThingCreateResponseCredentials} The populated <code>ThingCreateResponseCredentials</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingCreateResponseCredentials();

        if (data.hasOwnProperty('http')) {
          obj['http'] = _ThingCreateResponseCredentialsHttp["default"].constructFromObject(data['http']);
        }

        if (data.hasOwnProperty('mqtt')) {
          obj['mqtt'] = _ThingCreateResponseCredentialsMqtt["default"].constructFromObject(data['mqtt']);
        }
      }

      return obj;
    }
  }]);

  return ThingCreateResponseCredentials;
}();
/**
 * @member {module:model/ThingCreateResponseCredentialsHttp} http
 */


ThingCreateResponseCredentials.prototype['http'] = undefined;
/**
 * @member {module:model/ThingCreateResponseCredentialsMqtt} mqtt
 */

ThingCreateResponseCredentials.prototype['mqtt'] = undefined;
var _default = ThingCreateResponseCredentials;
exports["default"] = _default;