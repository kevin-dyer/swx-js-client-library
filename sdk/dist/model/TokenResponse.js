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
 * The TokenResponse model module.
 * @module model/TokenResponse
 * @version 1.0.0
 */
var TokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TokenResponse</code>.
   * Token Response
   * @alias module:model/TokenResponse
   * @param accessToken {String} 
   * @param expiresIn {Number} 
   * @param scope {String} 
   * @param tokenType {String} 
   */
  function TokenResponse(accessToken, expiresIn, scope, tokenType) {
    _classCallCheck(this, TokenResponse);

    TokenResponse.initialize(this, accessToken, expiresIn, scope, tokenType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj, accessToken, expiresIn, scope, tokenType) {
      obj['access_token'] = accessToken;
      obj['expires_in'] = expiresIn;
      obj['scope'] = scope;
      obj['token_type'] = tokenType;
    }
    /**
     * Constructs a <code>TokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenResponse} obj Optional instance to populate.
     * @return {module:model/TokenResponse} The populated <code>TokenResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TokenResponse();

        if (data.hasOwnProperty('access_token')) {
          obj['access_token'] = _ApiClient["default"].convertToType(data['access_token'], 'String');
        }

        if (data.hasOwnProperty('expires_in')) {
          obj['expires_in'] = _ApiClient["default"].convertToType(data['expires_in'], 'Number');
        }

        if (data.hasOwnProperty('id_token')) {
          obj['id_token'] = _ApiClient["default"].convertToType(data['id_token'], 'String');
        }

        if (data.hasOwnProperty('refresh_token')) {
          obj['refresh_token'] = _ApiClient["default"].convertToType(data['refresh_token'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }

        if (data.hasOwnProperty('token_type')) {
          obj['token_type'] = _ApiClient["default"].convertToType(data['token_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TokenResponse;
}();
/**
 * @member {String} access_token
 */


TokenResponse.prototype['access_token'] = undefined;
/**
 * @member {Number} expires_in
 */

TokenResponse.prototype['expires_in'] = undefined;
/**
 * @member {String} id_token
 */

TokenResponse.prototype['id_token'] = undefined;
/**
 * @member {String} refresh_token
 */

TokenResponse.prototype['refresh_token'] = undefined;
/**
 * @member {String} scope
 */

TokenResponse.prototype['scope'] = undefined;
/**
 * @member {String} token_type
 */

TokenResponse.prototype['token_type'] = undefined;
var _default = TokenResponse;
exports["default"] = _default;