"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionResponseElement1Delay = _interopRequireDefault(require("./ActionResponseElement1Delay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActionResponseElement1 model module.
 * @module model/ActionResponseElement1
 * @version 0.8.12
 */
var ActionResponseElement1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionResponseElement1</code>.
   * @alias module:model/ActionResponseElement1
   */
  function ActionResponseElement1() {
    _classCallCheck(this, ActionResponseElement1);

    ActionResponseElement1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionResponseElement1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionResponseElement1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionResponseElement1} obj Optional instance to populate.
     * @return {module:model/ActionResponseElement1} The populated <code>ActionResponseElement1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionResponseElement1();

        if (data.hasOwnProperty('delay')) {
          obj['delay'] = _ActionResponseElement1Delay["default"].constructFromObject(data['delay']);
        }
      }

      return obj;
    }
  }]);

  return ActionResponseElement1;
}();
/**
 * @member {module:model/ActionResponseElement1Delay} delay
 */


ActionResponseElement1.prototype['delay'] = undefined;
var _default = ActionResponseElement1;
exports["default"] = _default;