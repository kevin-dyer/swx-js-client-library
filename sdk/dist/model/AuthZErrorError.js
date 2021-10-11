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
 * The AuthZErrorError model module.
 * @module model/AuthZErrorError
 * @version 1.0.0
 */
var AuthZErrorError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthZErrorError</code>.
   * @alias module:model/AuthZErrorError
   */
  function AuthZErrorError() {
    _classCallCheck(this, AuthZErrorError);

    AuthZErrorError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthZErrorError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthZErrorError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthZErrorError} obj Optional instance to populate.
     * @return {module:model/AuthZErrorError} The populated <code>AuthZErrorError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthZErrorError();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'Number');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthZErrorError;
}();
/**
 * @member {Number} code
 */


AuthZErrorError.prototype['code'] = undefined;
/**
 * @member {String} message
 */

AuthZErrorError.prototype['message'] = undefined;
/**
 * @member {String} reason
 */

AuthZErrorError.prototype['reason'] = undefined;
/**
 * @member {String} status
 */

AuthZErrorError.prototype['status'] = undefined;
var _default = AuthZErrorError;
exports["default"] = _default;