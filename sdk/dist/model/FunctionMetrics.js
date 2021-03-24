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
 * The FunctionMetrics model module.
 * @module model/FunctionMetrics
 * @version 1.0.0
 */
var FunctionMetrics = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FunctionMetrics</code>.
   * Function metrics. Only present in responses.
   * @alias module:model/FunctionMetrics
   */
  function FunctionMetrics() {
    _classCallCheck(this, FunctionMetrics);

    FunctionMetrics.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FunctionMetrics, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FunctionMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FunctionMetrics} obj Optional instance to populate.
     * @return {module:model/FunctionMetrics} The populated <code>FunctionMetrics</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FunctionMetrics();

        if (data.hasOwnProperty('invocations')) {
          obj['invocations'] = _ApiClient["default"].convertToType(data['invocations'], 'Number');
        }

        if (data.hasOwnProperty('replicas')) {
          obj['replicas'] = _ApiClient["default"].convertToType(data['replicas'], 'Number');
        }

        if (data.hasOwnProperty('available_replicas')) {
          obj['available_replicas'] = _ApiClient["default"].convertToType(data['available_replicas'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FunctionMetrics;
}();
/**
 * @member {Number} invocations
 */


FunctionMetrics.prototype['invocations'] = undefined;
/**
 * @member {Number} replicas
 */

FunctionMetrics.prototype['replicas'] = undefined;
/**
 * @member {Number} available_replicas
 */

FunctionMetrics.prototype['available_replicas'] = undefined;
var _default = FunctionMetrics;
exports["default"] = _default;