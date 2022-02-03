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
 * The LabelListElement1 model module.
 * @module model/LabelListElement1
 * @version 1.0.0
 */
var LabelListElement1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LabelListElement1</code>.
   * @alias module:model/LabelListElement1
   */
  function LabelListElement1() {
    _classCallCheck(this, LabelListElement1);

    LabelListElement1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LabelListElement1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LabelListElement1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelListElement1} obj Optional instance to populate.
     * @return {module:model/LabelListElement1} The populated <code>LabelListElement1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LabelListElement1();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('space')) {
          obj['space'] = _ApiClient["default"].convertToType(data['space'], 'String');
        }

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('label_name')) {
          obj['label_name'] = _ApiClient["default"].convertToType(data['label_name'], 'String');
        }

        if (data.hasOwnProperty('label_description')) {
          obj['label_description'] = _ApiClient["default"].convertToType(data['label_description'], 'String');
        }

        if (data.hasOwnProperty('mqtt')) {
          obj['mqtt'] = _ApiClient["default"].convertToType(data['mqtt'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LabelListElement1;
}();
/**
 * @member {String} id
 */


LabelListElement1.prototype['id'] = undefined;
/**
 * @member {String} space
 */

LabelListElement1.prototype['space'] = undefined;
/**
 * @member {String} color
 */

LabelListElement1.prototype['color'] = undefined;
/**
 * @member {String} label_name
 */

LabelListElement1.prototype['label_name'] = undefined;
/**
 * @member {String} label_description
 */

LabelListElement1.prototype['label_description'] = undefined;
/**
 * @member {Boolean} mqtt
 */

LabelListElement1.prototype['mqtt'] = undefined;
var _default = LabelListElement1;
exports["default"] = _default;