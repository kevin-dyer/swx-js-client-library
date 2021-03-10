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
 * The ThingCreateResponseCredentialsHttp model module.
 * @module model/ThingCreateResponseCredentialsHttp
 * @version 0.8.12
 */
var ThingCreateResponseCredentialsHttp = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingCreateResponseCredentialsHttp</code>.
   * @alias module:model/ThingCreateResponseCredentialsHttp
   */
  function ThingCreateResponseCredentialsHttp() {
    _classCallCheck(this, ThingCreateResponseCredentialsHttp);

    ThingCreateResponseCredentialsHttp.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingCreateResponseCredentialsHttp, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingCreateResponseCredentialsHttp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingCreateResponseCredentialsHttp} obj Optional instance to populate.
     * @return {module:model/ThingCreateResponseCredentialsHttp} The populated <code>ThingCreateResponseCredentialsHttp</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingCreateResponseCredentialsHttp();

        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient["default"].convertToType(data['client_id'], 'String');
        }

        if (data.hasOwnProperty('client_secret')) {
          obj['client_secret'] = _ApiClient["default"].convertToType(data['client_secret'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ThingCreateResponseCredentialsHttp;
}();
/**
 * @member {String} client_id
 */


ThingCreateResponseCredentialsHttp.prototype['client_id'] = undefined;
/**
 * @member {String} client_secret
 */

ThingCreateResponseCredentialsHttp.prototype['client_secret'] = undefined;
var _default = ThingCreateResponseCredentialsHttp;
exports["default"] = _default;