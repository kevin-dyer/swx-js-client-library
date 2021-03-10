"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionUpdateResponseDelay = _interopRequireDefault(require("./ActionUpdateResponseDelay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActionUpdateResponse model module.
 * @module model/ActionUpdateResponse
 * @version 0.8.12
 */
var ActionUpdateResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionUpdateResponse</code>.
   * @alias module:model/ActionUpdateResponse
   */
  function ActionUpdateResponse() {
    _classCallCheck(this, ActionUpdateResponse);

    ActionUpdateResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionUpdateResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionUpdateResponse} obj Optional instance to populate.
     * @return {module:model/ActionUpdateResponse} The populated <code>ActionUpdateResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionUpdateResponse();

        if (data.hasOwnProperty('delay')) {
          obj['delay'] = _ActionUpdateResponseDelay["default"].constructFromObject(data['delay']);
        }
      }

      return obj;
    }
  }]);

  return ActionUpdateResponse;
}();
/**
 * @member {module:model/ActionUpdateResponseDelay} delay
 */


ActionUpdateResponse.prototype['delay'] = undefined;
var _default = ActionUpdateResponse;
exports["default"] = _default;