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
 * The CreateLabelRelation model module.
 * @module model/CreateLabelRelation
 * @version 1.0.0
 */
var CreateLabelRelation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateLabelRelation</code>.
   * @alias module:model/CreateLabelRelation
   */
  function CreateLabelRelation() {
    _classCallCheck(this, CreateLabelRelation);

    CreateLabelRelation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateLabelRelation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateLabelRelation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLabelRelation} obj Optional instance to populate.
     * @return {module:model/CreateLabelRelation} The populated <code>CreateLabelRelation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateLabelRelation();

        if (data.hasOwnProperty('entity_type')) {
          obj['entity_type'] = _ApiClient["default"].convertToType(data['entity_type'], 'String');
        }

        if (data.hasOwnProperty('entity_id')) {
          obj['entity_id'] = _ApiClient["default"].convertToType(data['entity_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateLabelRelation;
}();
/**
 * @member {String} entity_type
 */


CreateLabelRelation.prototype['entity_type'] = undefined;
/**
 * @member {String} entity_id
 */

CreateLabelRelation.prototype['entity_id'] = undefined;
var _default = CreateLabelRelation;
exports["default"] = _default;