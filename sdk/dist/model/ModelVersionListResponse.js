"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CollectionListResponsePaging = _interopRequireDefault(require("./CollectionListResponsePaging"));

var _ModelVersionResponse = _interopRequireDefault(require("./ModelVersionResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ModelVersionListResponse model module.
 * @module model/ModelVersionListResponse
 * @version 1.0.0
 */
var ModelVersionListResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelVersionListResponse</code>.
   * @alias module:model/ModelVersionListResponse
   */
  function ModelVersionListResponse() {
    _classCallCheck(this, ModelVersionListResponse);

    ModelVersionListResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelVersionListResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModelVersionListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelVersionListResponse} obj Optional instance to populate.
     * @return {module:model/ModelVersionListResponse} The populated <code>ModelVersionListResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelVersionListResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_ModelVersionResponse["default"]]);
        }

        if (data.hasOwnProperty('paging')) {
          obj['paging'] = _CollectionListResponsePaging["default"].constructFromObject(data['paging']);
        }
      }

      return obj;
    }
  }]);

  return ModelVersionListResponse;
}();
/**
 * @member {Array.<module:model/ModelVersionResponse>} data
 */


ModelVersionListResponse.prototype['data'] = undefined;
/**
 * @member {module:model/CollectionListResponsePaging} paging
 */

ModelVersionListResponse.prototype['paging'] = undefined;
var _default = ModelVersionListResponse;
exports["default"] = _default;