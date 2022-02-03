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
 * The LabelRelationElement1 model module.
 * @module model/LabelRelationElement1
 * @version 1.0.0
 */
var LabelRelationElement1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LabelRelationElement1</code>.
   * @alias module:model/LabelRelationElement1
   */
  function LabelRelationElement1() {
    _classCallCheck(this, LabelRelationElement1);

    LabelRelationElement1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LabelRelationElement1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LabelRelationElement1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelRelationElement1} obj Optional instance to populate.
     * @return {module:model/LabelRelationElement1} The populated <code>LabelRelationElement1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LabelRelationElement1();

        if (data.hasOwnProperty('collection_name')) {
          obj['collection_name'] = _ApiClient["default"].convertToType(data['collection_name'], 'String');
        }

        if (data.hasOwnProperty('entity_id')) {
          obj['entity_id'] = _ApiClient["default"].convertToType(data['entity_id'], 'String');
        }

        if (data.hasOwnProperty('entity_name')) {
          obj['entity_name'] = _ApiClient["default"].convertToType(data['entity_name'], 'String');
        }

        if (data.hasOwnProperty('entity_type')) {
          obj['entity_type'] = _ApiClient["default"].convertToType(data['entity_type'], 'String');
        }

        if (data.hasOwnProperty('label_id')) {
          obj['label_id'] = _ApiClient["default"].convertToType(data['label_id'], 'String');
        }

        if (data.hasOwnProperty('space')) {
          obj['space'] = _ApiClient["default"].convertToType(data['space'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LabelRelationElement1;
}();
/**
 * @member {String} collection_name
 */


LabelRelationElement1.prototype['collection_name'] = undefined;
/**
 * @member {String} entity_id
 */

LabelRelationElement1.prototype['entity_id'] = undefined;
/**
 * @member {String} entity_name
 */

LabelRelationElement1.prototype['entity_name'] = undefined;
/**
 * @member {String} entity_type
 */

LabelRelationElement1.prototype['entity_type'] = undefined;
/**
 * @member {String} label_id
 */

LabelRelationElement1.prototype['label_id'] = undefined;
/**
 * @member {String} space
 */

LabelRelationElement1.prototype['space'] = undefined;
var _default = LabelRelationElement1;
exports["default"] = _default;