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
 * The TriggerMqttConfig model module.
 * @module model/TriggerMqttConfig
 * @version 1.0.0
 */
var TriggerMqttConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TriggerMqttConfig</code>.
   * @alias module:model/TriggerMqttConfig
   */
  function TriggerMqttConfig() {
    _classCallCheck(this, TriggerMqttConfig);

    TriggerMqttConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TriggerMqttConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TriggerMqttConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerMqttConfig} obj Optional instance to populate.
     * @return {module:model/TriggerMqttConfig} The populated <code>TriggerMqttConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TriggerMqttConfig();

        if (data.hasOwnProperty('host')) {
          obj['host'] = _ApiClient["default"].convertToType(data['host'], 'String');
        }

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], 'Number');
        }

        if (data.hasOwnProperty('topics')) {
          obj['topics'] = _ApiClient["default"].convertToType(data['topics'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('qos')) {
          obj['qos'] = _ApiClient["default"].convertToType(data['qos'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TriggerMqttConfig;
}();
/**
 * Host of the MQTT broker. Do not set any scheme.
 * @member {String} host
 */


TriggerMqttConfig.prototype['host'] = undefined;
/**
 * Port of the MQTT broker. If not set, defaults to 1883.
 * @member {Number} port
 */

TriggerMqttConfig.prototype['port'] = undefined;
/**
 * @member {String} topics
 */

TriggerMqttConfig.prototype['topics'] = undefined;
/**
 * MQTT broker username.
 * @member {String} username
 */

TriggerMqttConfig.prototype['username'] = undefined;
/**
 * MQTT broker password.
 * @member {String} password
 */

TriggerMqttConfig.prototype['password'] = undefined;
/**
 * @member {Number} qos
 */

TriggerMqttConfig.prototype['qos'] = undefined;
var _default = TriggerMqttConfig;
exports["default"] = _default;