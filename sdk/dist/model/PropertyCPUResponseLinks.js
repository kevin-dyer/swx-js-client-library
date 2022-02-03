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
 * The PropertyCPUResponseLinks model module.
 * @module model/PropertyCPUResponseLinks
 * @version 1.0.0
 */
var PropertyCPUResponseLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PropertyCPUResponseLinks</code>.
   * @alias module:model/PropertyCPUResponseLinks
   */
  function PropertyCPUResponseLinks() {
    _classCallCheck(this, PropertyCPUResponseLinks);

    PropertyCPUResponseLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PropertyCPUResponseLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PropertyCPUResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertyCPUResponseLinks} obj Optional instance to populate.
     * @return {module:model/PropertyCPUResponseLinks} The populated <code>PropertyCPUResponseLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PropertyCPUResponseLinks();

        if (data.hasOwnProperty('href')) {
          obj['href'] = _ApiClient["default"].convertToType(data['href'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PropertyCPUResponseLinks;
}();
/**
 * @member {String} href
 */


PropertyCPUResponseLinks.prototype['href'] = undefined;
var _default = PropertyCPUResponseLinks;
exports["default"] = _default;