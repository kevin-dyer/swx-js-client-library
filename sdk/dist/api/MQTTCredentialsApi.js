"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthZError = _interopRequireDefault(require("../model/AuthZError"));

var _BadFormedError = _interopRequireDefault(require("../model/BadFormedError"));

var _BaseError = _interopRequireDefault(require("../model/BaseError"));

var _CredentialsError = _interopRequireDefault(require("../model/CredentialsError"));

var _ListCredentialsResponse = _interopRequireDefault(require("../model/ListCredentialsResponse"));

var _ShowCredentialsThingResponse = _interopRequireDefault(require("../model/ShowCredentialsThingResponse"));

var _UpdateMQTTCredentials = _interopRequireDefault(require("../model/UpdateMQTTCredentials"));

var _UpdateMQTTCredentialsResponse = _interopRequireDefault(require("../model/UpdateMQTTCredentialsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* MQTTCredentials service.
* @module api/MQTTCredentialsApi
* @version 1.0.0
*/
var MQTTCredentialsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MQTTCredentialsApi. 
  * @alias module:api/MQTTCredentialsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MQTTCredentialsApi(apiClient) {
    _classCallCheck(this, MQTTCredentialsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * List MQTT credentials
   * List of all MQTT credentials for an space
   * @param {String} space 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCredentialsResponse} and HTTP response
   */


  _createClass(MQTTCredentialsApi, [{
    key: "listMQTTcredentialsWithHttpInfo",
    value: function listMQTTcredentialsWithHttpInfo(space) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listMQTTcredentials");
      }

      var pathParams = {
        'space': space
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListCredentialsResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/mqtt/credentials', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List MQTT credentials
     * List of all MQTT credentials for an space
     * @param {String} space 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCredentialsResponse}
     */

  }, {
    key: "listMQTTcredentials",
    value: function listMQTTcredentials(space) {
      return this.listMQTTcredentialsWithHttpInfo(space).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show MQTT credentials
     * Show an specific MQTT credentials by id
     * @param {String} space 
     * @param {String} credentialsId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShowCredentialsThingResponse} and HTTP response
     */

  }, {
    key: "showMQTTcredentialsWithHttpInfo",
    value: function showMQTTcredentialsWithHttpInfo(space, credentialsId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showMQTTcredentials");
      } // verify the required parameter 'credentialsId' is set


      if (credentialsId === undefined || credentialsId === null) {
        throw new Error("Missing the required parameter 'credentialsId' when calling showMQTTcredentials");
      }

      var pathParams = {
        'space': space,
        'credentials-id': credentialsId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ShowCredentialsThingResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/mqtt/credentials/{credentials-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show MQTT credentials
     * Show an specific MQTT credentials by id
     * @param {String} space 
     * @param {String} credentialsId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShowCredentialsThingResponse}
     */

  }, {
    key: "showMQTTcredentials",
    value: function showMQTTcredentials(space, credentialsId) {
      return this.showMQTTcredentialsWithHttpInfo(space, credentialsId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update MQTT credentials
     * Update an existing MQTT credentials. If you send an empty body, a random password will be generated
     * @param {String} space 
     * @param {String} credentialsId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateMQTTCredentials} opts.updateMQTTCredentials 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateMQTTCredentialsResponse} and HTTP response
     */

  }, {
    key: "updateMQTTcredentialsWithHttpInfo",
    value: function updateMQTTcredentialsWithHttpInfo(space, credentialsId, opts) {
      opts = opts || {};
      var postBody = opts['updateMQTTCredentials']; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateMQTTcredentials");
      } // verify the required parameter 'credentialsId' is set


      if (credentialsId === undefined || credentialsId === null) {
        throw new Error("Missing the required parameter 'credentialsId' when calling updateMQTTcredentials");
      }

      var pathParams = {
        'space': space,
        'credentials-id': credentialsId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateMQTTCredentialsResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/mqtt/credentials/{credentials-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update MQTT credentials
     * Update an existing MQTT credentials. If you send an empty body, a random password will be generated
     * @param {String} space 
     * @param {String} credentialsId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateMQTTCredentials} opts.updateMQTTCredentials 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateMQTTCredentialsResponse}
     */

  }, {
    key: "updateMQTTcredentials",
    value: function updateMQTTcredentials(space, credentialsId, opts) {
      return this.updateMQTTcredentialsWithHttpInfo(space, credentialsId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MQTTCredentialsApi;
}();

exports["default"] = MQTTCredentialsApi;