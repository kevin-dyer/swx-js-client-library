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
 * The FunctionOptions model module.
 * @module model/FunctionOptions
 * @version 1.0.0
 */
var FunctionOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FunctionOptions</code>.
   * @alias module:model/FunctionOptions
   */
  function FunctionOptions() {
    _classCallCheck(this, FunctionOptions);

    FunctionOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FunctionOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FunctionOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FunctionOptions} obj Optional instance to populate.
     * @return {module:model/FunctionOptions} The populated <code>FunctionOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FunctionOptions();

        if (data.hasOwnProperty('topics')) {
          obj['topics'] = _ApiClient["default"].convertToType(data['topics'], 'String');
        }

        if (data.hasOwnProperty('schedule')) {
          obj['schedule'] = _ApiClient["default"].convertToType(data['schedule'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FunctionOptions;
}();
/**
 * Comma-separated list of topics (see Triggers).
 * @member {String} topics
 */


FunctionOptions.prototype['topics'] = undefined;
/**
 * Cron format string to schedule function invocations (see cron trigger).
 * @member {String} schedule
 */

FunctionOptions.prototype['schedule'] = undefined;
var _default = FunctionOptions;
exports["default"] = _default;