"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ThingCreateResponseActions = _interopRequireDefault(require("./ThingCreateResponseActions"));

var _ThingCreateResponseEvents = _interopRequireDefault(require("./ThingCreateResponseEvents"));

var _ThingCreateResponseLinks = _interopRequireDefault(require("./ThingCreateResponseLinks"));

var _ThingCreateResponseProperties = _interopRequireDefault(require("./ThingCreateResponseProperties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ThingResponse model module.
 * @module model/ThingResponse
 * @version 0.8.12
 */
var ThingResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThingResponse</code>.
   * @alias module:model/ThingResponse
   */
  function ThingResponse() {
    _classCallCheck(this, ThingResponse);

    ThingResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThingResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingResponse} obj Optional instance to populate.
     * @return {module:model/ThingResponse} The populated <code>ThingResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThingResponse();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('uid')) {
          obj['uid'] = _ApiClient["default"].convertToType(data['uid'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('space')) {
          obj['space'] = _ApiClient["default"].convertToType(data['space'], 'String');
        }

        if (data.hasOwnProperty('collection')) {
          obj['collection'] = _ApiClient["default"].convertToType(data['collection'], 'String');
        }

        if (data.hasOwnProperty('model')) {
          obj['model'] = _ApiClient["default"].convertToType(data['model'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ThingCreateResponseProperties["default"].constructFromObject(data['properties']);
        }

        if (data.hasOwnProperty('actions')) {
          obj['actions'] = _ThingCreateResponseActions["default"].constructFromObject(data['actions']);
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ThingCreateResponseEvents["default"].constructFromObject(data['events']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_ThingCreateResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('href')) {
          obj['href'] = _ApiClient["default"].convertToType(data['href'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ThingResponse;
}();
/**
 * @member {String} id
 */


ThingResponse.prototype['id'] = undefined;
/**
 * @member {String} uid
 */

ThingResponse.prototype['uid'] = undefined;
/**
 * @member {String} title
 */

ThingResponse.prototype['title'] = undefined;
/**
 * @member {String} description
 */

ThingResponse.prototype['description'] = undefined;
/**
 * @member {String} space
 */

ThingResponse.prototype['space'] = undefined;
/**
 * @member {String} collection
 */

ThingResponse.prototype['collection'] = undefined;
/**
 * @member {String} model
 */

ThingResponse.prototype['model'] = undefined;
/**
 * @member {String} version
 */

ThingResponse.prototype['version'] = undefined;
/**
 * @member {module:model/ThingCreateResponseProperties} properties
 */

ThingResponse.prototype['properties'] = undefined;
/**
 * @member {module:model/ThingCreateResponseActions} actions
 */

ThingResponse.prototype['actions'] = undefined;
/**
 * @member {module:model/ThingCreateResponseEvents} events
 */

ThingResponse.prototype['events'] = undefined;
/**
 * @member {Array.<module:model/ThingCreateResponseLinks>} links
 */

ThingResponse.prototype['links'] = undefined;
/**
 * @member {String} href
 */

ThingResponse.prototype['href'] = undefined;
var _default = ThingResponse;
exports["default"] = _default;