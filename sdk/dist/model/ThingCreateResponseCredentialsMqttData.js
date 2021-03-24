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
 * The ThingCreateResponseCredentialsMqttData model module.
 * @module model/ThingCreateResponseCredentialsMqttData
 * @version 1.0.0
 */
var ThingCreateResponseCredentialsMqttData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingCreateResponseCredentialsMqttData</code>.
   * @alias module:model/ThingCreateResponseCredentialsMqttData
   */
  function ThingCreateResponseCredentialsMqttData() {
    _classCallCheck(this, ThingCreateResponseCredentialsMqttData);

    ThingCreateResponseCredentialsMqttData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingCreateResponseCredentialsMqttData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingCreateResponseCredentialsMqttData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingCreateResponseCredentialsMqttData} obj Optional instance to populate.
     * @return {module:model/ThingCreateResponseCredentialsMqttData} The populated <code>ThingCreateResponseCredentialsMqttData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingCreateResponseCredentialsMqttData();

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('pwd')) {
          obj['pwd'] = _ApiClient["default"].convertToType(data['pwd'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ThingCreateResponseCredentialsMqttData;
}();
/**
 * @member {String} username
 */


ThingCreateResponseCredentialsMqttData.prototype['username'] = undefined;
/**
 * @member {String} pwd
 */

ThingCreateResponseCredentialsMqttData.prototype['pwd'] = undefined;
var _default = ThingCreateResponseCredentialsMqttData;
exports["default"] = _default;