"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FunctionMetrics = _interopRequireDefault(require("./FunctionMetrics"));

var _FunctionOptions = _interopRequireDefault(require("./FunctionOptions"));

var _FunctionStatusEnum = _interopRequireDefault(require("./FunctionStatusEnum"));

var _SourceCode = _interopRequireDefault(require("./SourceCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Function model module.
 * @module model/Function
 * @version 1.0.0
 */
var Function = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Function</code>.
   * @alias module:model/Function
   */
  function Function() {
    _classCallCheck(this, Function);

    Function.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Function, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Function</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Function} obj Optional instance to populate.
     * @return {module:model/Function} The populated <code>Function</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Function();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('space')) {
          obj['space'] = _ApiClient["default"].convertToType(data['space'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('template')) {
          obj['template'] = _ApiClient["default"].convertToType(data['template'], 'String');
        }

        if (data.hasOwnProperty('env')) {
          obj['env'] = _ApiClient["default"].convertToType(data['env'], Object);
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _FunctionOptions["default"].constructFromObject(data['options']);
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _SourceCode["default"].constructFromObject(data['source']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _FunctionStatusEnum["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('metrics')) {
          obj['metrics'] = _FunctionMetrics["default"].constructFromObject(data['metrics']);
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

  return Function;
}();
/**
 * @member {String} id
 */


Function.prototype['id'] = undefined;
/**
 * @member {String} space
 */

Function.prototype['space'] = undefined;
/**
 * Function name. Must be unique and can only contain lowercase letters, numbers and hyphens.
 * @member {String} name
 */

Function.prototype['name'] = undefined;
/**
 * @member {String} description
 */

Function.prototype['description'] = undefined;
/**
 * @member {String} template
 */

Function.prototype['template'] = undefined;
/**
 * Environment variables used by the function. All values must be strings.
 * @member {Object} env
 */

Function.prototype['env'] = undefined;
/**
 * @member {module:model/FunctionOptions} options
 */

Function.prototype['options'] = undefined;
/**
 * @member {module:model/SourceCode} source
 */

Function.prototype['source'] = undefined;
/**
 * @member {module:model/FunctionStatusEnum} status
 */

Function.prototype['status'] = undefined;
/**
 * @member {module:model/FunctionMetrics} metrics
 */

Function.prototype['metrics'] = undefined;
/**
 * @member {String} created_at
 */

Function.prototype['created_at'] = undefined;
/**
 * @member {String} updated_at
 */

Function.prototype['updated_at'] = undefined;
var _default = Function;
exports["default"] = _default;