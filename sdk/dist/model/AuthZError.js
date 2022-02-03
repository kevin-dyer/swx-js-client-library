"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthZErrorError = _interopRequireDefault(require("./AuthZErrorError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AuthZError model module.
 * @module model/AuthZError
 * @version 1.0.0
 */
var AuthZError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthZError</code>.
   * @alias module:model/AuthZError
   */
  function AuthZError() {
    _classCallCheck(this, AuthZError);

    AuthZError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthZError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthZError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthZError} obj Optional instance to populate.
     * @return {module:model/AuthZError} The populated <code>AuthZError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthZError();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _AuthZErrorError["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return AuthZError;
}();
/**
 * @member {module:model/AuthZErrorError} error
 */


AuthZError.prototype['error'] = undefined;
var _default = AuthZError;
exports["default"] = _default;