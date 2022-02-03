"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionRequestDelay = _interopRequireDefault(require("./ActionRequestDelay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ActionRequest model module.
 * @module model/ActionRequest
 * @version 1.0.0
 */
var ActionRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionRequest</code>.
   * @alias module:model/ActionRequest
   * @extends Object
   */
  function ActionRequest() {
    _classCallCheck(this, ActionRequest);

    ActionRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionRequest} obj Optional instance to populate.
     * @return {module:model/ActionRequest} The populated <code>ActionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionRequest();

        _ApiClient["default"].constructFromObject(data, obj, 'Object');

        if (data.hasOwnProperty('delay')) {
          obj['delay'] = _ActionRequestDelay["default"].constructFromObject(data['delay']);
        }
      }

      return obj;
    }
  }]);

  return ActionRequest;
}();
/**
 * @member {module:model/ActionRequestDelay} delay
 */


ActionRequest.prototype['delay'] = undefined;
var _default = ActionRequest;
exports["default"] = _default;