"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionResponseElement = _interopRequireDefault(require("./ActionResponseElement1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActionDelayListResponse model module.
 * @module model/ActionDelayListResponse
 * @version 0.8.12
 */
var ActionDelayListResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionDelayListResponse</code>.
   * @alias module:model/ActionDelayListResponse
   */
  function ActionDelayListResponse() {
    _classCallCheck(this, ActionDelayListResponse);

    ActionDelayListResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionDelayListResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionDelayListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDelayListResponse} obj Optional instance to populate.
     * @return {module:model/ActionDelayListResponse} The populated <code>ActionDelayListResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionDelayListResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_ActionResponseElement["default"]]);
        }

        if (data.hasOwnProperty('paging')) {
          obj['paging'] = _ApiClient["default"].convertToType(data['paging'], Object);
        }
      }

      return obj;
    }
  }]);

  return ActionDelayListResponse;
}();
/**
 * @member {Array.<module:model/ActionResponseElement1>} data
 */


ActionDelayListResponse.prototype['data'] = undefined;
/**
 * @member {Object} paging
 */

ActionDelayListResponse.prototype['paging'] = undefined;
var _default = ActionDelayListResponse;
exports["default"] = _default;