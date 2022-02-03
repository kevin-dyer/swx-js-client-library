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
 * The TriggerRabbitMQConfig model module.
 * @module model/TriggerRabbitMQConfig
 * @version 1.0.0
 */
var TriggerRabbitMQConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TriggerRabbitMQConfig</code>.
   * @alias module:model/TriggerRabbitMQConfig
   */
  function TriggerRabbitMQConfig() {
    _classCallCheck(this, TriggerRabbitMQConfig);

    TriggerRabbitMQConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TriggerRabbitMQConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TriggerRabbitMQConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerRabbitMQConfig} obj Optional instance to populate.
     * @return {module:model/TriggerRabbitMQConfig} The populated <code>TriggerRabbitMQConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TriggerRabbitMQConfig();

        if (data.hasOwnProperty('host')) {
          obj['host'] = _ApiClient["default"].convertToType(data['host'], 'String');
        }

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], 'Number');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('exchange')) {
          obj['exchange'] = _ApiClient["default"].convertToType(data['exchange'], 'String');
        }

        if (data.hasOwnProperty('queue')) {
          obj['queue'] = _ApiClient["default"].convertToType(data['queue'], 'String');
        }

        if (data.hasOwnProperty('topics')) {
          obj['topics'] = _ApiClient["default"].convertToType(data['topics'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TriggerRabbitMQConfig;
}();
/**
 * @member {String} host
 */


TriggerRabbitMQConfig.prototype['host'] = undefined;
/**
 * @member {Number} port
 */

TriggerRabbitMQConfig.prototype['port'] = undefined;
/**
 * RabbitMQ username.
 * @member {String} username
 */

TriggerRabbitMQConfig.prototype['username'] = undefined;
/**
 * RabbitMQ password.
 * @member {String} password
 */

TriggerRabbitMQConfig.prototype['password'] = undefined;
/**
 * @member {String} exchange
 */

TriggerRabbitMQConfig.prototype['exchange'] = undefined;
/**
 * @member {String} queue
 */

TriggerRabbitMQConfig.prototype['queue'] = undefined;
/**
 * Comma-separated routing keys of the messages this trigger will listen to.
 * @member {String} topics
 */

TriggerRabbitMQConfig.prototype['topics'] = undefined;
var _default = TriggerRabbitMQConfig;
exports["default"] = _default;