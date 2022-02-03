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
 * The LabeledListItem1 model module.
 * @module model/LabeledListItem1
 * @version 1.0.0
 */
var LabeledListItem1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LabeledListItem1</code>.
   * @alias module:model/LabeledListItem1
   */
  function LabeledListItem1() {
    _classCallCheck(this, LabeledListItem1);

    LabeledListItem1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LabeledListItem1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LabeledListItem1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabeledListItem1} obj Optional instance to populate.
     * @return {module:model/LabeledListItem1} The populated <code>LabeledListItem1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LabeledListItem1();

        if (data.hasOwnProperty('entity_id')) {
          obj['entity_id'] = _ApiClient["default"].convertToType(data['entity_id'], 'String');
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], Array);
        }
      }

      return obj;
    }
  }]);

  return LabeledListItem1;
}();
/**
 * @member {String} entity_id
 */


LabeledListItem1.prototype['entity_id'] = undefined;
/**
 * @member {Array} labels
 */

LabeledListItem1.prototype['labels'] = undefined;
var _default = LabeledListItem1;
exports["default"] = _default;