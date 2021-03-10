"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PropertyCPUResponse = _interopRequireDefault(require("./PropertyCPUResponse"));

var _PropertyDiskResponse = _interopRequireDefault(require("./PropertyDiskResponse"));

var _PropertyMemoryResponse = _interopRequireDefault(require("./PropertyMemoryResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ThingCreateResponseProperties model module.
 * @module model/ThingCreateResponseProperties
 * @version 0.8.12
 */
var ThingCreateResponseProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingCreateResponseProperties</code>.
   * @alias module:model/ThingCreateResponseProperties
   */
  function ThingCreateResponseProperties() {
    _classCallCheck(this, ThingCreateResponseProperties);

    ThingCreateResponseProperties.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingCreateResponseProperties, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingCreateResponseProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingCreateResponseProperties} obj Optional instance to populate.
     * @return {module:model/ThingCreateResponseProperties} The populated <code>ThingCreateResponseProperties</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingCreateResponseProperties();

        if (data.hasOwnProperty('cpu')) {
          obj['cpu'] = _PropertyCPUResponse["default"].constructFromObject(data['cpu']);
        }

        if (data.hasOwnProperty('disk')) {
          obj['disk'] = _PropertyDiskResponse["default"].constructFromObject(data['disk']);
        }

        if (data.hasOwnProperty('memory')) {
          obj['memory'] = _PropertyMemoryResponse["default"].constructFromObject(data['memory']);
        }
      }

      return obj;
    }
  }]);

  return ThingCreateResponseProperties;
}();
/**
 * @member {module:model/PropertyCPUResponse} cpu
 */


ThingCreateResponseProperties.prototype['cpu'] = undefined;
/**
 * @member {module:model/PropertyDiskResponse} disk
 */

ThingCreateResponseProperties.prototype['disk'] = undefined;
/**
 * @member {module:model/PropertyMemoryResponse} memory
 */

ThingCreateResponseProperties.prototype['memory'] = undefined;
var _default = ThingCreateResponseProperties;
exports["default"] = _default;