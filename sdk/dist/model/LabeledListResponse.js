"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyOfLabeledListItem1LabeledListItem = _interopRequireDefault(require("./AnyOfLabeledListItem1LabeledListItem1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The LabeledListResponse model module.
 * @module model/LabeledListResponse
 * @version 1.0.0
 */
var LabeledListResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LabeledListResponse</code>.
   * @alias module:model/LabeledListResponse
   */
  function LabeledListResponse() {
    _classCallCheck(this, LabeledListResponse);

    LabeledListResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LabeledListResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LabeledListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabeledListResponse} obj Optional instance to populate.
     * @return {module:model/LabeledListResponse} The populated <code>LabeledListResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LabeledListResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_AnyOfLabeledListItem1LabeledListItem["default"]]);
        }

        if (data.hasOwnProperty('paging')) {
          obj['paging'] = _ApiClient["default"].convertToType(data['paging'], Object);
        }
      }

      return obj;
    }
  }]);

  return LabeledListResponse;
}();
/**
 * @member {Array.<module:model/AnyOfLabeledListItem1LabeledListItem1>} data
 */


LabeledListResponse.prototype['data'] = undefined;
/**
 * @member {Object} paging
 */

LabeledListResponse.prototype['paging'] = undefined;
var _default = LabeledListResponse;
exports["default"] = _default;