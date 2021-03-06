"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ThingCreateResponseCredentialsMqttData = _interopRequireDefault(require("./ThingCreateResponseCredentialsMqttData"));

var _ThingCreateResponseCredentialsMqttThing = _interopRequireDefault(require("./ThingCreateResponseCredentialsMqttThing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ThingCreateResponseCredentialsMqtt model module.
 * @module model/ThingCreateResponseCredentialsMqtt
 * @version 1.0.0
 */
var ThingCreateResponseCredentialsMqtt = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingCreateResponseCredentialsMqtt</code>.
   * @alias module:model/ThingCreateResponseCredentialsMqtt
   */
  function ThingCreateResponseCredentialsMqtt() {
    _classCallCheck(this, ThingCreateResponseCredentialsMqtt);

    ThingCreateResponseCredentialsMqtt.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingCreateResponseCredentialsMqtt, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingCreateResponseCredentialsMqtt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingCreateResponseCredentialsMqtt} obj Optional instance to populate.
     * @return {module:model/ThingCreateResponseCredentialsMqtt} The populated <code>ThingCreateResponseCredentialsMqtt</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingCreateResponseCredentialsMqtt();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ThingCreateResponseCredentialsMqttData["default"].constructFromObject(data['data']);
        }

        if (data.hasOwnProperty('thing')) {
          obj['thing'] = _ThingCreateResponseCredentialsMqttThing["default"].constructFromObject(data['thing']);
        }
      }

      return obj;
    }
  }]);

  return ThingCreateResponseCredentialsMqtt;
}();
/**
 * @member {module:model/ThingCreateResponseCredentialsMqttData} data
 */


ThingCreateResponseCredentialsMqtt.prototype['data'] = undefined;
/**
 * @member {module:model/ThingCreateResponseCredentialsMqttThing} thing
 */

ThingCreateResponseCredentialsMqtt.prototype['thing'] = undefined;
var _default = ThingCreateResponseCredentialsMqtt;
exports["default"] = _default;