"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfTriggerMqttConfigTriggerRabbitMQConfig = _interopRequireDefault(require("./OneOfTriggerMqttConfigTriggerRabbitMQConfig"));

var _TriggerStatusEnum = _interopRequireDefault(require("./TriggerStatusEnum"));

var _TriggerTypeEnum = _interopRequireDefault(require("./TriggerTypeEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Trigger model module.
 * @module model/Trigger
 * @version 1.0.0
 */
var Trigger = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Trigger</code>.
   * @alias module:model/Trigger
   */
  function Trigger() {
    _classCallCheck(this, Trigger);

    Trigger.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Trigger, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Trigger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Trigger} obj Optional instance to populate.
     * @return {module:model/Trigger} The populated <code>Trigger</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Trigger();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TriggerTypeEnum["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('config')) {
          obj['config'] = _ApiClient["default"].convertToType(data['config'], _OneOfTriggerMqttConfigTriggerRabbitMQConfig["default"]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _TriggerStatusEnum["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('error_message')) {
          obj['error_message'] = _ApiClient["default"].convertToType(data['error_message'], 'String');
        }

        if (data.hasOwnProperty('callback_url')) {
          obj['callback_url'] = _ApiClient["default"].convertToType(data['callback_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Trigger;
}();
/**
 * @member {String} id
 */


Trigger.prototype['id'] = undefined;
/**
 * @member {String} description
 */

Trigger.prototype['description'] = undefined;
/**
 * @member {module:model/TriggerTypeEnum} type
 */

Trigger.prototype['type'] = undefined;
/**
 * @member {module:model/OneOfTriggerMqttConfigTriggerRabbitMQConfig} config
 */

Trigger.prototype['config'] = undefined;
/**
 * @member {module:model/TriggerStatusEnum} status
 */

Trigger.prototype['status'] = undefined;
/**
 * If the Trigger failed (status = `Failed`), this attribute will contain the error message.
 * @member {String} error_message
 */

Trigger.prototype['error_message'] = undefined;
/**
 * Optional callback URL to send the function response to.
 * @member {String} callback_url
 */

Trigger.prototype['callback_url'] = undefined;
var _default = Trigger;
exports["default"] = _default;