"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionDelayInput = _interopRequireDefault(require("./ActionDelayInput"));

var _PropertyCPUResponseLinks = _interopRequireDefault(require("./PropertyCPUResponseLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActionDelayResponse model module.
 * @module model/ActionDelayResponse
 * @version 0.8.12
 */
var ActionDelayResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionDelayResponse</code>.
   * @alias module:model/ActionDelayResponse
   */
  function ActionDelayResponse() {
    _classCallCheck(this, ActionDelayResponse);

    ActionDelayResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionDelayResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionDelayResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDelayResponse} obj Optional instance to populate.
     * @return {module:model/ActionDelayResponse} The populated <code>ActionDelayResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionDelayResponse();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('input')) {
          obj['input'] = _ActionDelayInput["default"].constructFromObject(data['input']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PropertyCPUResponseLinks["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ActionDelayResponse;
}();
/**
 * @member {String} title
 */


ActionDelayResponse.prototype['title'] = undefined;
/**
 * @member {String} description
 */

ActionDelayResponse.prototype['description'] = undefined;
/**
 * @member {module:model/ActionDelayInput} input
 */

ActionDelayResponse.prototype['input'] = undefined;
/**
 * @member {Array.<module:model/PropertyCPUResponseLinks>} links
 */

ActionDelayResponse.prototype['links'] = undefined;
var _default = ActionDelayResponse;
exports["default"] = _default;