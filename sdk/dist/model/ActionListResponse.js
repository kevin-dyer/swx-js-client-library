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
 * The ActionListResponse model module.
 * @module model/ActionListResponse
 * @version 0.8.12
 */
var ActionListResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionListResponse</code>.
   * @alias module:model/ActionListResponse
   */
  function ActionListResponse() {
    _classCallCheck(this, ActionListResponse);

    ActionListResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionListResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionListResponse} obj Optional instance to populate.
     * @return {module:model/ActionListResponse} The populated <code>ActionListResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionListResponse();

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

  return ActionListResponse;
}();
/**
 * @member {Array.<module:model/ActionResponseElement1>} data
 */


ActionListResponse.prototype['data'] = undefined;
/**
 * @member {Object} paging
 */

ActionListResponse.prototype['paging'] = undefined;
var _default = ActionListResponse;
exports["default"] = _default;