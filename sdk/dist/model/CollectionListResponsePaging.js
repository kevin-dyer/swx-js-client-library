"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CollectionListResponsePaging model module.
 * @module model/CollectionListResponsePaging
 * @version 1.0.0
 */
var CollectionListResponsePaging = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CollectionListResponsePaging</code>.
   * @alias module:model/CollectionListResponsePaging
   */
  function CollectionListResponsePaging() {
    _classCallCheck(this, CollectionListResponsePaging);

    CollectionListResponsePaging.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CollectionListResponsePaging, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CollectionListResponsePaging</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionListResponsePaging} obj Optional instance to populate.
     * @return {module:model/CollectionListResponsePaging} The populated <code>CollectionListResponsePaging</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CollectionListResponsePaging();

        if (data.hasOwnProperty('next_cursor')) {
          obj['next_cursor'] = _ApiClient["default"].convertToType(data['next_cursor'], 'String');
        }

        if (data.hasOwnProperty('previous_cursor')) {
          obj['previous_cursor'] = _ApiClient["default"].convertToType(data['previous_cursor'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CollectionListResponsePaging;
}();
/**
 * @member {String} next_cursor
 */


CollectionListResponsePaging.prototype['next_cursor'] = undefined;
/**
 * @member {String} previous_cursor
 */

CollectionListResponsePaging.prototype['previous_cursor'] = undefined;
var _default = CollectionListResponsePaging;
exports["default"] = _default;