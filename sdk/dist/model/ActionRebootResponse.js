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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActionRebootResponse model module.
 * @module model/ActionRebootResponse
 * @version 0.8.12
 */
var ActionRebootResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionRebootResponse</code>.
   * @alias module:model/ActionRebootResponse
   */
  function ActionRebootResponse() {
    _classCallCheck(this, ActionRebootResponse);

    ActionRebootResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionRebootResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionRebootResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionRebootResponse} obj Optional instance to populate.
     * @return {module:model/ActionRebootResponse} The populated <code>ActionRebootResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionRebootResponse();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PropertyCPUResponseLinks["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ActionRebootResponse;
}();
/**
 * @member {String} title
 */


ActionRebootResponse.prototype['title'] = undefined;
/**
 * @member {String} description
 */

ActionRebootResponse.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/PropertyCPUResponseLinks>} links
 */

ActionRebootResponse.prototype['links'] = undefined;
var _default = ActionRebootResponse;
exports["default"] = _default;