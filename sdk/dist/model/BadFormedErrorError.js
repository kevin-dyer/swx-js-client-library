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
 * The BadFormedErrorError model module.
 * @module model/BadFormedErrorError
 * @version 1.0.0
 */
var BadFormedErrorError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BadFormedErrorError</code>.
   * @alias module:model/BadFormedErrorError
   */
  function BadFormedErrorError() {
    _classCallCheck(this, BadFormedErrorError);

    BadFormedErrorError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BadFormedErrorError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BadFormedErrorError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BadFormedErrorError} obj Optional instance to populate.
     * @return {module:model/BadFormedErrorError} The populated <code>BadFormedErrorError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BadFormedErrorError();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BadFormedErrorError;
}();
/**
 * @member {String} message
 */


BadFormedErrorError.prototype['message'] = undefined;
/**
 * @member {Number} status
 */

BadFormedErrorError.prototype['status'] = undefined;
var _default = BadFormedErrorError;
exports["default"] = _default;