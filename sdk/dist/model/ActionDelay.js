"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionDelayInput = _interopRequireDefault(require("./ActionDelayInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActionDelay model module.
 * @module model/ActionDelay
 * @version 0.8.12
 */
var ActionDelay = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionDelay</code>.
   * @alias module:model/ActionDelay
   */
  function ActionDelay() {
    _classCallCheck(this, ActionDelay);

    ActionDelay.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionDelay, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionDelay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDelay} obj Optional instance to populate.
     * @return {module:model/ActionDelay} The populated <code>ActionDelay</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionDelay();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('input')) {
          obj['input'] = _ActionDelayInput["default"].constructFromObject(data['input']);
        }
      }

      return obj;
    }
  }]);

  return ActionDelay;
}();
/**
 * @member {String} title
 */


ActionDelay.prototype['title'] = undefined;
/**
 * @member {String} description
 */

ActionDelay.prototype['description'] = undefined;
/**
 * @member {module:model/ActionDelayInput} input
 */

ActionDelay.prototype['input'] = undefined;
var _default = ActionDelay;
exports["default"] = _default;