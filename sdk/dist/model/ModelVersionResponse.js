"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelVersionRequest = _interopRequireDefault(require("./ModelVersionRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModelVersionResponse model module.
 * @module model/ModelVersionResponse
 * @version 1.0.0
 */
var ModelVersionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelVersionResponse</code>.
   * @alias module:model/ModelVersionResponse
   */
  function ModelVersionResponse() {
    _classCallCheck(this, ModelVersionResponse);

    ModelVersionResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelVersionResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModelVersionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelVersionResponse} obj Optional instance to populate.
     * @return {module:model/ModelVersionResponse} The populated <code>ModelVersionResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelVersionResponse();

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('template')) {
          obj['template'] = _ModelVersionRequest["default"].constructFromObject(data['template']);
        }
      }

      return obj;
    }
  }]);

  return ModelVersionResponse;
}();
/**
 * @member {Number} version
 */


ModelVersionResponse.prototype['version'] = undefined;
/**
 * @member {module:model/ModelVersionRequest} template
 */

ModelVersionResponse.prototype['template'] = undefined;
var _default = ModelVersionResponse;
exports["default"] = _default;