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
 * The SpaceUserInfo model module.
 * @module model/SpaceUserInfo
 * @version 1.0.0
 */
var SpaceUserInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SpaceUserInfo</code>.
   * @alias module:model/SpaceUserInfo
   */
  function SpaceUserInfo() {
    _classCallCheck(this, SpaceUserInfo);

    SpaceUserInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpaceUserInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SpaceUserInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpaceUserInfo} obj Optional instance to populate.
     * @return {module:model/SpaceUserInfo} The populated <code>SpaceUserInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpaceUserInfo();

        if (data.hasOwnProperty('space')) {
          obj['space'] = _ApiClient["default"].convertToType(data['space'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SpaceUserInfo;
}();
/**
 * @member {String} space
 */


SpaceUserInfo.prototype['space'] = undefined;
/**
 * @member {String} user
 */

SpaceUserInfo.prototype['user'] = undefined;
var _default = SpaceUserInfo;
exports["default"] = _default;