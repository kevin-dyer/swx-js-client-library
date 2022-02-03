"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CollectionListResponsePaging = _interopRequireDefault(require("./CollectionListResponsePaging"));

var _ThingResponse = _interopRequireDefault(require("./ThingResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ThingListResponse model module.
 * @module model/ThingListResponse
 * @version 1.0.0
 */
var ThingListResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingListResponse</code>.
   * @alias module:model/ThingListResponse
   */
  function ThingListResponse() {
    _classCallCheck(this, ThingListResponse);

    ThingListResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingListResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingListResponse} obj Optional instance to populate.
     * @return {module:model/ThingListResponse} The populated <code>ThingListResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingListResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_ThingResponse["default"]]);
        }

        if (data.hasOwnProperty('paging')) {
          obj['paging'] = _CollectionListResponsePaging["default"].constructFromObject(data['paging']);
        }
      }

      return obj;
    }
  }]);

  return ThingListResponse;
}();
/**
 * @member {Array.<module:model/ThingResponse>} data
 */


ThingListResponse.prototype['data'] = undefined;
/**
 * @member {module:model/CollectionListResponsePaging} paging
 */

ThingListResponse.prototype['paging'] = undefined;
var _default = ThingListResponse;
exports["default"] = _default;