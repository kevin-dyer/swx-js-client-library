"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PropertyCPU = _interopRequireDefault(require("./PropertyCPU"));

var _PropertyDisk = _interopRequireDefault(require("./PropertyDisk"));

var _PropertyMemory = _interopRequireDefault(require("./PropertyMemory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ThingRequestProperties model module.
 * @module model/ThingRequestProperties
 * @version 1.0.0
 */
var ThingRequestProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingRequestProperties</code>.
   * @alias module:model/ThingRequestProperties
   */
  function ThingRequestProperties() {
    _classCallCheck(this, ThingRequestProperties);

    ThingRequestProperties.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingRequestProperties, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingRequestProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingRequestProperties} obj Optional instance to populate.
     * @return {module:model/ThingRequestProperties} The populated <code>ThingRequestProperties</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingRequestProperties();

        if (data.hasOwnProperty('cpu')) {
          obj['cpu'] = _PropertyCPU["default"].constructFromObject(data['cpu']);
        }

        if (data.hasOwnProperty('disk')) {
          obj['disk'] = _PropertyDisk["default"].constructFromObject(data['disk']);
        }

        if (data.hasOwnProperty('memory')) {
          obj['memory'] = _PropertyMemory["default"].constructFromObject(data['memory']);
        }
      }

      return obj;
    }
  }]);

  return ThingRequestProperties;
}();
/**
 * @member {module:model/PropertyCPU} cpu
 */


ThingRequestProperties.prototype['cpu'] = undefined;
/**
 * @member {module:model/PropertyDisk} disk
 */

ThingRequestProperties.prototype['disk'] = undefined;
/**
 * @member {module:model/PropertyMemory} memory
 */

ThingRequestProperties.prototype['memory'] = undefined;
var _default = ThingRequestProperties;
exports["default"] = _default;