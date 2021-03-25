"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ThingRequestProperties = _interopRequireDefault(require("./ThingRequestProperties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModelVersionRequest model module.
 * @module model/ModelVersionRequest
 * @version 1.0.0
 */
var ModelVersionRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelVersionRequest</code>.
   * @alias module:model/ModelVersionRequest
   */
  function ModelVersionRequest() {
    _classCallCheck(this, ModelVersionRequest);

    ModelVersionRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelVersionRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModelVersionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelVersionRequest} obj Optional instance to populate.
     * @return {module:model/ModelVersionRequest} The populated <code>ModelVersionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelVersionRequest();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ThingRequestProperties["default"].constructFromObject(data['properties']);
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

  return ModelVersionRequest;
}();
/**
 * @member {String} title
 */


ModelVersionRequest.prototype['title'] = undefined;
/**
 * @member {String} description
 */

ModelVersionRequest.prototype['description'] = undefined;
/**
 * @member {module:model/ThingRequestProperties} properties
 */

ModelVersionRequest.prototype['properties'] = undefined;
/**
 * @member {Object} actions
 */

ModelVersionRequest.prototype['actions'] = undefined;
/**
 * @member {Object} events
 */

ModelVersionRequest.prototype['events'] = undefined;
var _default = ModelVersionRequest;
exports["default"] = _default;