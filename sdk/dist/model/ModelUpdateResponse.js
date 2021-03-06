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
 * The ModelUpdateResponse model module.
 * @module model/ModelUpdateResponse
 * @version 1.0.0
 */
var ModelUpdateResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelUpdateResponse</code>.
   * @alias module:model/ModelUpdateResponse
   * @extends Object
   */
  function ModelUpdateResponse() {
    _classCallCheck(this, ModelUpdateResponse);

    ModelUpdateResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelUpdateResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModelUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelUpdateResponse} obj Optional instance to populate.
     * @return {module:model/ModelUpdateResponse} The populated <code>ModelUpdateResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelUpdateResponse();

        _ApiClient["default"].constructFromObject(data, obj, 'Object');

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('collection')) {
          obj['collection'] = _ApiClient["default"].convertToType(data['collection'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModelUpdateResponse;
}();
/**
 * @member {String} name
 */


ModelUpdateResponse.prototype['name'] = undefined;
/**
 * @member {String} description
 */

ModelUpdateResponse.prototype['description'] = undefined;
/**
 * @member {String} collection
 */

ModelUpdateResponse.prototype['collection'] = undefined;
/**
 * @member {String} title
 */

ModelUpdateResponse.prototype['title'] = undefined;
var _default = ModelUpdateResponse;
exports["default"] = _default;