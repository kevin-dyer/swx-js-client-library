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
 * The ThingCreateResponseLinks model module.
 * @module model/ThingCreateResponseLinks
 * @version 1.0.0
 */
var ThingCreateResponseLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingCreateResponseLinks</code>.
   * @alias module:model/ThingCreateResponseLinks
   */
  function ThingCreateResponseLinks() {
    _classCallCheck(this, ThingCreateResponseLinks);

    ThingCreateResponseLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingCreateResponseLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingCreateResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingCreateResponseLinks} obj Optional instance to populate.
     * @return {module:model/ThingCreateResponseLinks} The populated <code>ThingCreateResponseLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingCreateResponseLinks();

        if (data.hasOwnProperty('href')) {
          obj['href'] = _ApiClient["default"].convertToType(data['href'], 'String');
        }

        if (data.hasOwnProperty('rel')) {
          obj['rel'] = _ApiClient["default"].convertToType(data['rel'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ThingCreateResponseLinks;
}();
/**
 * @member {String} href
 */


ThingCreateResponseLinks.prototype['href'] = undefined;
/**
 * @member {String} rel
 */

ThingCreateResponseLinks.prototype['rel'] = undefined;
var _default = ThingCreateResponseLinks;
exports["default"] = _default;