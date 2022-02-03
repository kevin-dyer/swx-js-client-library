"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ThingDeleteResponseErrorClusterBackend = _interopRequireDefault(require("./ThingDeleteResponseErrorClusterBackend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The LabelDeleteResponse model module.
 * @module model/LabelDeleteResponse
 * @version 1.0.0
 */
var LabelDeleteResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LabelDeleteResponse</code>.
   * @alias module:model/LabelDeleteResponse
   */
  function LabelDeleteResponse() {
    _classCallCheck(this, LabelDeleteResponse);

    LabelDeleteResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LabelDeleteResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LabelDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelDeleteResponse} obj Optional instance to populate.
     * @return {module:model/LabelDeleteResponse} The populated <code>LabelDeleteResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LabelDeleteResponse();

        if (data.hasOwnProperty('error_label_backend')) {
          obj['error_label_backend'] = _ThingDeleteResponseErrorClusterBackend["default"].constructFromObject(data['error_label_backend']);
        }
      }

      return obj;
    }
  }]);

  return LabelDeleteResponse;
}();
/**
 * @member {module:model/ThingDeleteResponseErrorClusterBackend} error_label_backend
 */


LabelDeleteResponse.prototype['error_label_backend'] = undefined;
var _default = LabelDeleteResponse;
exports["default"] = _default;