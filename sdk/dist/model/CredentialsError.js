"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CredentialsErrorError = _interopRequireDefault(require("./CredentialsErrorError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CredentialsError model module.
 * @module model/CredentialsError
 * @version 1.0.0
 */
var CredentialsError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CredentialsError</code>.
   * @alias module:model/CredentialsError
   */
  function CredentialsError() {
    _classCallCheck(this, CredentialsError);

    CredentialsError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CredentialsError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CredentialsError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CredentialsError} obj Optional instance to populate.
     * @return {module:model/CredentialsError} The populated <code>CredentialsError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CredentialsError();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _CredentialsErrorError["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return CredentialsError;
}();
/**
 * @member {module:model/CredentialsErrorError} error
 */


CredentialsError.prototype['error'] = undefined;
var _default = CredentialsError;
exports["default"] = _default;