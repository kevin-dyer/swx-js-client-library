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
 * The ActionRequestDelayInput model module.
 * @module model/ActionRequestDelayInput
 * @version 0.8.12
 */
var ActionRequestDelayInput = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionRequestDelayInput</code>.
   * @alias module:model/ActionRequestDelayInput
   */
  function ActionRequestDelayInput() {
    _classCallCheck(this, ActionRequestDelayInput);

    ActionRequestDelayInput.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionRequestDelayInput, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionRequestDelayInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionRequestDelayInput} obj Optional instance to populate.
     * @return {module:model/ActionRequestDelayInput} The populated <code>ActionRequestDelayInput</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionRequestDelayInput();

        if (data.hasOwnProperty('delay')) {
          obj['delay'] = _ApiClient["default"].convertToType(data['delay'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ActionRequestDelayInput;
}();
/**
 * @member {Number} delay
 */


ActionRequestDelayInput.prototype['delay'] = undefined;
var _default = ActionRequestDelayInput;
exports["default"] = _default;