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
 * The ActionUpdateResponseDelay model module.
 * @module model/ActionUpdateResponseDelay
 * @version 1.0.0
 */
var ActionUpdateResponseDelay = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionUpdateResponseDelay</code>.
   * @alias module:model/ActionUpdateResponseDelay
   */
  function ActionUpdateResponseDelay() {
    _classCallCheck(this, ActionUpdateResponseDelay);

    ActionUpdateResponseDelay.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionUpdateResponseDelay, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionUpdateResponseDelay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionUpdateResponseDelay} obj Optional instance to populate.
     * @return {module:model/ActionUpdateResponseDelay} The populated <code>ActionUpdateResponseDelay</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionUpdateResponseDelay();

        if (data.hasOwnProperty('input')) {
          obj['input'] = _ActionRequestDelayInput["default"].constructFromObject(data['input']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('timeRequested')) {
          obj['timeRequested'] = _ApiClient["default"].convertToType(data['timeRequested'], 'Date');
        }

        if (data.hasOwnProperty('timeCompleted')) {
          obj['timeCompleted'] = _ApiClient["default"].convertToType(data['timeCompleted'], 'Date');
        }

        if (data.hasOwnProperty('href')) {
          obj['href'] = _ApiClient["default"].convertToType(data['href'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ActionUpdateResponseDelay;
}();
/**
 * @member {module:model/ActionRequestDelayInput} input
 */


ActionUpdateResponseDelay.prototype['input'] = undefined;
/**
 * @member {String} status
 */

ActionUpdateResponseDelay.prototype['status'] = undefined;
/**
 * @member {Date} timeRequested
 */

ActionUpdateResponseDelay.prototype['timeRequested'] = undefined;
/**
 * @member {Date} timeCompleted
 */

ActionUpdateResponseDelay.prototype['timeCompleted'] = undefined;
/**
 * @member {String} href
 */

ActionUpdateResponseDelay.prototype['href'] = undefined;
var _default = ActionUpdateResponseDelay;
exports["default"] = _default;