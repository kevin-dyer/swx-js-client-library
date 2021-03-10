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
 * The ActionRequestDelay model module.
 * @module model/ActionRequestDelay
 * @version 0.8.12
 */
var ActionRequestDelay = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionRequestDelay</code>.
   * @alias module:model/ActionRequestDelay
   */
  function ActionRequestDelay() {
    _classCallCheck(this, ActionRequestDelay);

    ActionRequestDelay.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionRequestDelay, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionRequestDelay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionRequestDelay} obj Optional instance to populate.
     * @return {module:model/ActionRequestDelay} The populated <code>ActionRequestDelay</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionRequestDelay();

        if (data.hasOwnProperty('input')) {
          obj['input'] = _ActionRequestDelayInput["default"].constructFromObject(data['input']);
        }
      }

      return obj;
    }
  }]);

  return ActionRequestDelay;
}();
/**
 * @member {module:model/ActionRequestDelayInput} input
 */


ActionRequestDelay.prototype['input'] = undefined;
var _default = ActionRequestDelay;
exports["default"] = _default;