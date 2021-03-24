"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionRequestDelayInput = _interopRequireDefault(require("./ActionRequestDelayInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActionResponseElement1Delay model module.
 * @module model/ActionResponseElement1Delay
 * @version 1.0.0
 */
var ActionResponseElement1Delay = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionResponseElement1Delay</code>.
   * @alias module:model/ActionResponseElement1Delay
   */
  function ActionResponseElement1Delay() {
    _classCallCheck(this, ActionResponseElement1Delay);

    ActionResponseElement1Delay.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionResponseElement1Delay, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionResponseElement1Delay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionResponseElement1Delay} obj Optional instance to populate.
     * @return {module:model/ActionResponseElement1Delay} The populated <code>ActionResponseElement1Delay</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionResponseElement1Delay();

        if (data.hasOwnProperty('input')) {
          obj['input'] = _ActionRequestDelayInput["default"].constructFromObject(data['input']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('timeRequested')) {
          obj['timeRequested'] = _ApiClient["default"].convertToType(data['timeRequested'], 'Date');
        }

        if (data.hasOwnProperty('href')) {
          obj['href'] = _ApiClient["default"].convertToType(data['href'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ActionResponseElement1Delay;
}();
/**
 * @member {module:model/ActionRequestDelayInput} input
 */


ActionResponseElement1Delay.prototype['input'] = undefined;
/**
 * @member {String} status
 */

ActionResponseElement1Delay.prototype['status'] = undefined;
/**
 * @member {Date} timeRequested
 */

ActionResponseElement1Delay.prototype['timeRequested'] = undefined;
/**
 * @member {String} href
 */

ActionResponseElement1Delay.prototype['href'] = undefined;
var _default = ActionResponseElement1Delay;
exports["default"] = _default;