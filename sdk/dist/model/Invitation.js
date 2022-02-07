"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SpaceUserInfo = _interopRequireDefault(require("./SpaceUserInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Invitation model module.
 * @module model/Invitation
 * @version 1.0.0
 */
var Invitation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Invitation</code>.
   * @alias module:model/Invitation
   */
  function Invitation() {
    _classCallCheck(this, Invitation);

    Invitation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Invitation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Invitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Invitation} obj Optional instance to populate.
     * @return {module:model/Invitation} The populated <code>Invitation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Invitation();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _SpaceUserInfo["default"].constructFromObject(data['from']);
        }

        if (data.hasOwnProperty('to_user')) {
          obj['to_user'] = _ApiClient["default"].convertToType(data['to_user'], 'String');
        }

        if (data.hasOwnProperty('to_email')) {
          obj['to_email'] = _ApiClient["default"].convertToType(data['to_email'], 'String');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Invitation;
}();
/**
 * @member {String} id
 */


Invitation.prototype['id'] = undefined;
/**
 * @member {module:model/SpaceUserInfo} from
 */

Invitation.prototype['from'] = undefined;
/**
 * User ID of the invited user. It will be null until the invitation is accepted or rejected.
 * @member {String} to_user
 */

Invitation.prototype['to_user'] = undefined;
/**
 * @member {String} to_email
 */

Invitation.prototype['to_email'] = undefined;
/**
 * Comma-separated list of roles of the future user.
 * @member {String} roles
 */

Invitation.prototype['roles'] = undefined;
/**
 * @member {module:model/Invitation.StatusEnum} status
 */

Invitation.prototype['status'] = undefined;
/**
 * @member {String} created_at
 */

Invitation.prototype['created_at'] = undefined;
/**
 * @member {String} updated_at
 */

Invitation.prototype['updated_at'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

Invitation['StatusEnum'] = {
  /**
   * value: "PENDING"
   * @const
   */
  "PENDING": "PENDING",

  /**
   * value: "ACCEPTED"
   * @const
   */
  "ACCEPTED": "ACCEPTED",

  /**
   * value: "REJECTED"
   * @const
   */
  "REJECTED": "REJECTED"
};
var _default = Invitation;
exports["default"] = _default;