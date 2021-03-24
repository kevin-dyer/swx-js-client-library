"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FunctionsPaging = _interopRequireDefault(require("./FunctionsPaging"));

var _Trigger = _interopRequireDefault(require("./Trigger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Triggers model module.
 * @module model/Triggers
 * @version 1.0.0
 */
var Triggers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Triggers</code>.
   * @alias module:model/Triggers
   */
  function Triggers() {
    _classCallCheck(this, Triggers);

    Triggers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Triggers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Triggers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Triggers} obj Optional instance to populate.
     * @return {module:model/Triggers} The populated <code>Triggers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Triggers();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Trigger["default"]]);
        }

        if (data.hasOwnProperty('paging')) {
          obj['paging'] = _FunctionsPaging["default"].constructFromObject(data['paging']);
        }
      }

      return obj;
    }
  }]);

  return Triggers;
}();
/**
 * @member {Array.<module:model/Trigger>} data
 */


Triggers.prototype['data'] = undefined;
/**
 * @member {module:model/FunctionsPaging} paging
 */

Triggers.prototype['paging'] = undefined;
var _default = Triggers;
exports["default"] = _default;