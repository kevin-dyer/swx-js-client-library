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
 * The InvitationPatch model module.
 * @module model/InvitationPatch
 * @version 1.0.0
 */
var InvitationPatch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvitationPatch</code>.
   * @alias module:model/InvitationPatch
   * @param status {module:model/InvitationPatch.StatusEnum} 
   */
  function InvitationPatch(status) {
    _classCallCheck(this, InvitationPatch);

    InvitationPatch.initialize(this, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvitationPatch, null, [{
    key: "initialize",
    value: function initialize(obj, status) {
      obj['status'] = status;
    }
    /**
     * Constructs a <code>InvitationPatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationPatch} obj Optional instance to populate.
     * @return {module:model/InvitationPatch} The populated <code>InvitationPatch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvitationPatch();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InvitationPatch;
}();
/**
 * @member {module:model/InvitationPatch.StatusEnum} status
 */


InvitationPatch.prototype['status'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

InvitationPatch['StatusEnum'] = {
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
var _default = InvitationPatch;
exports["default"] = _default;