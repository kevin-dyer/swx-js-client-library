"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MQTTAccountPattern = _interopRequireDefault(require("./MQTTAccountPattern1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CredentialsStudio model module.
 * @module model/CredentialsStudio
 * @version 1.0.0
 */
var CredentialsStudio = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CredentialsStudio</code>.
   * @alias module:model/CredentialsStudio
   */
  function CredentialsStudio() {
    _classCallCheck(this, CredentialsStudio);

    CredentialsStudio.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CredentialsStudio, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CredentialsStudio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CredentialsStudio} obj Optional instance to populate.
     * @return {module:model/CredentialsStudio} The populated <code>CredentialsStudio</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CredentialsStudio();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('expired_at')) {
          obj['expired_at'] = _ApiClient["default"].convertToType(data['expired_at'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('topics')) {
          obj['topics'] = _ApiClient["default"].convertToType(data['topics'], [_MQTTAccountPattern["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CredentialsStudio;
}();
/**
 * @member {String} id
 */


CredentialsStudio.prototype['id'] = undefined;
/**
 * @member {String} username
 */

CredentialsStudio.prototype['username'] = undefined;
/**
 * @member {String} description
 */

CredentialsStudio.prototype['description'] = undefined;
/**
 * @member {Boolean} enabled
 */

CredentialsStudio.prototype['enabled'] = undefined;
/**
 * @member {String} type
 */

CredentialsStudio.prototype['type'] = undefined;
/**
 * @member {Number} expired_at
 */

CredentialsStudio.prototype['expired_at'] = undefined;
/**
 * @member {Date} created_at
 */

CredentialsStudio.prototype['created_at'] = undefined;
/**
 * @member {Array.<module:model/MQTTAccountPattern1>} topics
 */

CredentialsStudio.prototype['topics'] = undefined;
var _default = CredentialsStudio;
exports["default"] = _default;