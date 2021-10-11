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
 * The MQTTAccountProperties model module.
 * @module model/MQTTAccountProperties
 * @version 1.0.0
 */
var MQTTAccountProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MQTTAccountProperties</code>.
   * @alias module:model/MQTTAccountProperties
   */
  function MQTTAccountProperties() {
    _classCallCheck(this, MQTTAccountProperties);

    MQTTAccountProperties.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MQTTAccountProperties, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MQTTAccountProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MQTTAccountProperties} obj Optional instance to populate.
     * @return {module:model/MQTTAccountProperties} The populated <code>MQTTAccountProperties</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MQTTAccountProperties();

        if (data.hasOwnProperty('pattern_pub')) {
          obj['pattern_pub'] = _ApiClient["default"].convertToType(data['pattern_pub'], 'String');
        }

        if (data.hasOwnProperty('pattern_sub')) {
          obj['pattern_sub'] = _ApiClient["default"].convertToType(data['pattern_sub'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MQTTAccountProperties;
}();
/**
 * @member {String} pattern_pub
 */


MQTTAccountProperties.prototype['pattern_pub'] = undefined;
/**
 * @member {String} pattern_sub
 */

MQTTAccountProperties.prototype['pattern_sub'] = undefined;
var _default = MQTTAccountProperties;
exports["default"] = _default;