"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PropertyCPUResponseLinks = _interopRequireDefault(require("./PropertyCPUResponseLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PropertyDiskResponse model module.
 * @module model/PropertyDiskResponse
 * @version 1.0.0
 */
var PropertyDiskResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PropertyDiskResponse</code>.
   * @alias module:model/PropertyDiskResponse
   */
  function PropertyDiskResponse() {
    _classCallCheck(this, PropertyDiskResponse);

    PropertyDiskResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PropertyDiskResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PropertyDiskResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertyDiskResponse} obj Optional instance to populate.
     * @return {module:model/PropertyDiskResponse} The populated <code>PropertyDiskResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PropertyDiskResponse();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }

        if (data.hasOwnProperty('readOnly')) {
          obj['readOnly'] = _ApiClient["default"].convertToType(data['readOnly'], 'Boolean');
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PropertyCPUResponseLinks["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PropertyDiskResponse;
}();
/**
 * @member {String} title
 */


PropertyDiskResponse.prototype['title'] = undefined;
/**
 * @member {String} description
 */

PropertyDiskResponse.prototype['description'] = undefined;
/**
 * @member {String} type
 */

PropertyDiskResponse.prototype['type'] = undefined;
/**
 * @member {String} unit
 */

PropertyDiskResponse.prototype['unit'] = undefined;
/**
 * @member {Boolean} readOnly
 */

PropertyDiskResponse.prototype['readOnly'] = undefined;
/**
 * @member {Array.<module:model/PropertyCPUResponseLinks>} links
 */

PropertyDiskResponse.prototype['links'] = undefined;
var _default = PropertyDiskResponse;
exports["default"] = _default;