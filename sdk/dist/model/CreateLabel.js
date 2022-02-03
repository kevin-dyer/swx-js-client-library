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
 * The CreateLabel model module.
 * @module model/CreateLabel
 * @version 1.0.0
 */
var CreateLabel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateLabel</code>.
   * @alias module:model/CreateLabel
   */
  function CreateLabel() {
    _classCallCheck(this, CreateLabel);

    CreateLabel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateLabel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateLabel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLabel} obj Optional instance to populate.
     * @return {module:model/CreateLabel} The populated <code>CreateLabel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateLabel();

        if (data.hasOwnProperty('label_name')) {
          obj['label_name'] = _ApiClient["default"].convertToType(data['label_name'], 'String');
        }

        if (data.hasOwnProperty('label_description')) {
          obj['label_description'] = _ApiClient["default"].convertToType(data['label_description'], 'String');
        }

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateLabel;
}();
/**
 * @member {String} label_name
 */


CreateLabel.prototype['label_name'] = undefined;
/**
 * @member {String} label_description
 */

CreateLabel.prototype['label_description'] = undefined;
/**
 * @member {String} color
 */

CreateLabel.prototype['color'] = undefined;
var _default = CreateLabel;
exports["default"] = _default;