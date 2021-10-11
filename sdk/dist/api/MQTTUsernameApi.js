"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthZError = _interopRequireDefault(require("../model/AuthZError"));

var _BadFormedError = _interopRequireDefault(require("../model/BadFormedError"));

var _BaseError = _interopRequireDefault(require("../model/BaseError"));

var _UpdateMQTTCredentialsResponse = _interopRequireDefault(require("../model/UpdateMQTTCredentialsResponse"));

var _UpdateMQTTPassword = _interopRequireDefault(require("../model/UpdateMQTTPassword"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* MQTTUsername service.
* @module api/MQTTUsernameApi
* @version 1.0.0
*/
var MQTTUsernameApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MQTTUsernameApi. 
  * @alias module:api/MQTTUsernameApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MQTTUsernameApi(apiClient) {
    _classCallCheck(this, MQTTUsernameApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Update MQTT password
   * Update the MQTT password for a specific mqtt-username.  If you send an empty body, a random password will be generated
   * @param {String} space 
   * @param {String} mqttUsername 
   * @param {Object} opts Optional parameters
   * @param {module:model/UpdateMQTTPassword} opts.updateMQTTPassword This is the field that you can update
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateMQTTCredentialsResponse} and HTTP response
   */


  _createClass(MQTTUsernameApi, [{
    key: "updateMQTTpasswordWithHttpInfo",
    value: function updateMQTTpasswordWithHttpInfo(space, mqttUsername, opts) {
      opts = opts || {};
      var postBody = opts['updateMQTTPassword']; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateMQTTpassword");
      } // verify the required parameter 'mqttUsername' is set


      if (mqttUsername === undefined || mqttUsername === null) {
        throw new Error("Missing the required parameter 'mqttUsername' when calling updateMQTTpassword");
      }

      var pathParams = {
        'space': space,
        'mqtt-username': mqttUsername
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateMQTTCredentialsResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/mqtt/credentials-username/{mqtt-username}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update MQTT password
     * Update the MQTT password for a specific mqtt-username.  If you send an empty body, a random password will be generated
     * @param {String} space 
     * @param {String} mqttUsername 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateMQTTPassword} opts.updateMQTTPassword This is the field that you can update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateMQTTCredentialsResponse}
     */

  }, {
    key: "updateMQTTpassword",
    value: function updateMQTTpassword(space, mqttUsername, opts) {
      return this.updateMQTTpasswordWithHttpInfo(space, mqttUsername, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MQTTUsernameApi;
}();

exports["default"] = MQTTUsernameApi;