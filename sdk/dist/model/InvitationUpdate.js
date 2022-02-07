"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvitationCreate = _interopRequireDefault(require("./InvitationCreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InvitationUpdate model module.
 * @module model/InvitationUpdate
 * @version 1.0.0
 */
var InvitationUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvitationUpdate</code>.
   * @alias module:model/InvitationUpdate
   * @implements module:model/InvitationCreate
   * @param toEmail {String} 
   * @param roles {String} Comma-separated list of roles of the future user.
   */
  function InvitationUpdate(toEmail, roles) {
    _classCallCheck(this, InvitationUpdate);

    _InvitationCreate["default"].initialize(this, toEmail, roles);

    InvitationUpdate.initialize(this, toEmail, roles);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvitationUpdate, null, [{
    key: "initialize",
    value: function initialize(obj, toEmail, roles) {
      obj['to_email'] = toEmail;
      obj['roles'] = roles;
    }
    /**
     * Constructs a <code>InvitationUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationUpdate} obj Optional instance to populate.
     * @return {module:model/InvitationUpdate} The populated <code>InvitationUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvitationUpdate();

        _InvitationCreate["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('to_email')) {
          obj['to_email'] = _ApiClient["default"].convertToType(data['to_email'], 'String');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InvitationUpdate;
}();
/**
 * @member {String} to_email
 */


InvitationUpdate.prototype['to_email'] = undefined;
/**
 * Comma-separated list of roles of the future user.
 * @member {String} roles
 */

InvitationUpdate.prototype['roles'] = undefined; // Implement InvitationCreate interface:

/**
 * @member {String} to_email
 */

_InvitationCreate["default"].prototype['to_email'] = undefined;
/**
 * Comma-separated list of roles of the future user.
 * @member {String} roles
 */

_InvitationCreate["default"].prototype['roles'] = undefined;
var _default = InvitationUpdate;
exports["default"] = _default;