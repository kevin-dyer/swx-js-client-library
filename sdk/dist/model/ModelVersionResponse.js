"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelVersionRequest = _interopRequireDefault(require("./ModelVersionRequest"));

var _ModelVersionRequestProperties = _interopRequireDefault(require("./ModelVersionRequestProperties"));

var _ModelVersionResponseAllOf = _interopRequireDefault(require("./ModelVersionResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ModelVersionResponse model module.
 * @module model/ModelVersionResponse
 * @version 1.0.0
 */
var ModelVersionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelVersionResponse</code>.
   * @alias module:model/ModelVersionResponse
   * @implements module:model/ModelVersionResponseAllOf
   * @implements module:model/ModelVersionRequest
   */
  function ModelVersionResponse() {
    _classCallCheck(this, ModelVersionResponse);

    _ModelVersionResponseAllOf["default"].initialize(this);

    _ModelVersionRequest["default"].initialize(this);

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

        _ModelVersionResponseAllOf["default"].constructFromObject(data, obj);

        _ModelVersionRequest["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('template')) {
          obj['template'] = _ModelVersionRequest["default"].constructFromObject(data['template']);
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ModelVersionRequestProperties["default"].constructFromObject(data['properties']);
        }

        if (data.hasOwnProperty('actions')) {
          obj['actions'] = _ApiClient["default"].convertToType(data['actions'], Object);
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], Object);
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
/**
 * @member {String} title
 */

ModelVersionResponse.prototype['title'] = undefined;
/**
 * @member {String} description
 */

ModelVersionResponse.prototype['description'] = undefined;
/**
 * @member {module:model/ModelVersionRequestProperties} properties
 */

ModelVersionResponse.prototype['properties'] = undefined;
/**
 * @member {Object} actions
 */

ModelVersionResponse.prototype['actions'] = undefined;
/**
 * @member {Object} events
 */

ModelVersionResponse.prototype['events'] = undefined; // Implement ModelVersionResponseAllOf interface:

/**
 * @member {Number} version
 */

_ModelVersionResponseAllOf["default"].prototype['version'] = undefined; // Implement ModelVersionRequest interface:

/**
 * @member {Object} template
 */

_ModelVersionRequest["default"].prototype['template'] = undefined;
/**
 * @member {String} title
 */

_ModelVersionRequest["default"].prototype['title'] = undefined;
/**
 * @member {String} description
 */

_ModelVersionRequest["default"].prototype['description'] = undefined;
/**
 * @member {module:model/ModelVersionRequestProperties} properties
 */

_ModelVersionRequest["default"].prototype['properties'] = undefined;
/**
 * @member {Object} actions
 */

_ModelVersionRequest["default"].prototype['actions'] = undefined;
/**
 * @member {Object} events
 */

_ModelVersionRequest["default"].prototype['events'] = undefined;
var _default = ModelVersionResponse;
exports["default"] = _default;