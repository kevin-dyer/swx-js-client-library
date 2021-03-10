"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CollectionResponse = _interopRequireDefault(require("./CollectionResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CollectionListResponse model module.
 * @module model/CollectionListResponse
 * @version 0.8.12
 */
var CollectionListResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CollectionListResponse</code>.
   * @alias module:model/CollectionListResponse
   */
  function CollectionListResponse() {
    _classCallCheck(this, CollectionListResponse);

    CollectionListResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CollectionListResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CollectionListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionListResponse} obj Optional instance to populate.
     * @return {module:model/CollectionListResponse} The populated <code>CollectionListResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CollectionListResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_CollectionResponse["default"]]);
        }

        if (data.hasOwnProperty('paging')) {
          obj['paging'] = _ApiClient["default"].convertToType(data['paging'], Object);
        }
      }

      return obj;
    }
  }]);

  return CollectionListResponse;
}();
/**
 * @member {Array.<module:model/CollectionResponse>} data
 */


CollectionListResponse.prototype['data'] = undefined;
/**
 * @member {Object} paging
 */

CollectionListResponse.prototype['paging'] = undefined;
var _default = CollectionListResponse;
exports["default"] = _default;