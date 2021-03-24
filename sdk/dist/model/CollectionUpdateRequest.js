"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CollectionUpdateRequest model module.
 * @module model/CollectionUpdateRequest
 * @version 1.0.0
 */
var CollectionUpdateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CollectionUpdateRequest</code>.
   * @alias module:model/CollectionUpdateRequest
   */
  function CollectionUpdateRequest() {
    _classCallCheck(this, CollectionUpdateRequest);

    CollectionUpdateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CollectionUpdateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CollectionUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionUpdateRequest} obj Optional instance to populate.
     * @return {module:model/CollectionUpdateRequest} The populated <code>CollectionUpdateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CollectionUpdateRequest();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CollectionUpdateRequest;
}();
/**
 * @member {String} title
 */


CollectionUpdateRequest.prototype['title'] = undefined;
/**
 * @member {String} description
 */

CollectionUpdateRequest.prototype['description'] = undefined;
var _default = CollectionUpdateRequest;
exports["default"] = _default;