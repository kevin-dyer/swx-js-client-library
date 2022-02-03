"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PropertyCPU = _interopRequireDefault(require("./PropertyCPU"));

var _PropertyDisk = _interopRequireDefault(require("./PropertyDisk"));

var _PropertyMemory = _interopRequireDefault(require("./PropertyMemory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ModelVersionRequestProperties model module.
 * @module model/ModelVersionRequestProperties
 * @version 1.0.0
 */
var ModelVersionRequestProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelVersionRequestProperties</code>.
   * @alias module:model/ModelVersionRequestProperties
   */
  function ModelVersionRequestProperties() {
    _classCallCheck(this, ModelVersionRequestProperties);

    ModelVersionRequestProperties.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelVersionRequestProperties, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModelVersionRequestProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelVersionRequestProperties} obj Optional instance to populate.
     * @return {module:model/ModelVersionRequestProperties} The populated <code>ModelVersionRequestProperties</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelVersionRequestProperties();

        if (data.hasOwnProperty('cpu')) {
          obj['cpu'] = _PropertyCPU["default"].constructFromObject(data['cpu']);
        }

        if (data.hasOwnProperty('disk')) {
          obj['disk'] = _PropertyDisk["default"].constructFromObject(data['disk']);
        }

        if (data.hasOwnProperty('memory')) {
          obj['memory'] = _PropertyMemory["default"].constructFromObject(data['memory']);
        }
      }

      return obj;
    }
  }]);

  return ModelVersionRequestProperties;
}();
/**
 * @member {module:model/PropertyCPU} cpu
 */


ModelVersionRequestProperties.prototype['cpu'] = undefined;
/**
 * @member {module:model/PropertyDisk} disk
 */

ModelVersionRequestProperties.prototype['disk'] = undefined;
/**
 * @member {module:model/PropertyMemory} memory
 */

ModelVersionRequestProperties.prototype['memory'] = undefined;
var _default = ModelVersionRequestProperties;
exports["default"] = _default;