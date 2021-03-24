"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionDelayResponse = _interopRequireDefault(require("./ActionDelayResponse"));

var _ActionRebootResponse = _interopRequireDefault(require("./ActionRebootResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ThingCreateResponseActions model module.
 * @module model/ThingCreateResponseActions
 * @version 1.0.0
 */
var ThingCreateResponseActions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingCreateResponseActions</code>.
   * @alias module:model/ThingCreateResponseActions
   */
  function ThingCreateResponseActions() {
    _classCallCheck(this, ThingCreateResponseActions);

    ThingCreateResponseActions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingCreateResponseActions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingCreateResponseActions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingCreateResponseActions} obj Optional instance to populate.
     * @return {module:model/ThingCreateResponseActions} The populated <code>ThingCreateResponseActions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingCreateResponseActions();

        if (data.hasOwnProperty('delay')) {
          obj['delay'] = _ActionDelayResponse["default"].constructFromObject(data['delay']);
        }

        if (data.hasOwnProperty('reboot')) {
          obj['reboot'] = _ActionRebootResponse["default"].constructFromObject(data['reboot']);
        }
      }

      return obj;
    }
  }]);

  return ThingCreateResponseActions;
}();
/**
 * @member {module:model/ActionDelayResponse} delay
 */


ThingCreateResponseActions.prototype['delay'] = undefined;
/**
 * @member {module:model/ActionRebootResponse} reboot
 */

ThingCreateResponseActions.prototype['reboot'] = undefined;
var _default = ThingCreateResponseActions;
exports["default"] = _default;