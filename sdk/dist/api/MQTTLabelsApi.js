"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthZError = _interopRequireDefault(require("../model/AuthZError"));

var _BadFormedError = _interopRequireDefault(require("../model/BadFormedError"));

var _BaseError = _interopRequireDefault(require("../model/BaseError"));

var _CreateMQTTLabelCredentials = _interopRequireDefault(require("../model/CreateMQTTLabelCredentials"));

var _CreateMQTTLabelCredentialsResponse = _interopRequireDefault(require("../model/CreateMQTTLabelCredentialsResponse"));

var _CredentialsError = _interopRequireDefault(require("../model/CredentialsError"));

var _ShowMQTTLabelResponse = _interopRequireDefault(require("../model/ShowMQTTLabelResponse"));

var _UpdateMQTTLabelCredentials = _interopRequireDefault(require("../model/UpdateMQTTLabelCredentials"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* MQTTLabels service.
* @module api/MQTTLabelsApi
* @version 1.0.0
*/
var MQTTLabelsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MQTTLabelsApi. 
  * @alias module:api/MQTTLabelsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MQTTLabelsApi(apiClient) {
    _classCallCheck(this, MQTTLabelsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create MQTT credentials for label
   * Create MQTT credentials for a specific label
   * @param {String} space 
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateMQTTLabelCredentials} opts.createMQTTLabelCredentials 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateMQTTLabelCredentialsResponse} and HTTP response
   */


  _createClass(MQTTLabelsApi, [{
    key: "createMQTTLabelCredentialsWithHttpInfo",
    value: function createMQTTLabelCredentialsWithHttpInfo(space, opts) {
      opts = opts || {};
      var postBody = opts['createMQTTLabelCredentials']; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling createMQTTLabelCredentials");
      }

      var pathParams = {
        'space': space
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateMQTTLabelCredentialsResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/mqtt/labels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create MQTT credentials for label
     * Create MQTT credentials for a specific label
     * @param {String} space 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateMQTTLabelCredentials} opts.createMQTTLabelCredentials 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateMQTTLabelCredentialsResponse}
     */

  }, {
    key: "createMQTTLabelCredentials",
    value: function createMQTTLabelCredentials(space, opts) {
      return this.createMQTTLabelCredentialsWithHttpInfo(space, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete MQTT label
     * Delete MQTT capabilities for a label
     * @param {String} space 
     * @param {String} labelId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteMQTTLabelWithHttpInfo",
    value: function deleteMQTTLabelWithHttpInfo(space, labelId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteMQTTLabel");
      } // verify the required parameter 'labelId' is set


      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling deleteMQTTLabel");
      }

      var pathParams = {
        'space': space,
        'label-id': labelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/spaces/{space}/mqtt/labels/{label-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete MQTT label
     * Delete MQTT capabilities for a label
     * @param {String} space 
     * @param {String} labelId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteMQTTLabel",
    value: function deleteMQTTLabel(space, labelId) {
      return this.deleteMQTTLabelWithHttpInfo(space, labelId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show MQTT label details
     * Show MQTT label details for a specific label
     * @param {String} space 
     * @param {String} labelId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShowMQTTLabelResponse} and HTTP response
     */

  }, {
    key: "showMQTTLabelInfoWithHttpInfo",
    value: function showMQTTLabelInfoWithHttpInfo(space, labelId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showMQTTLabelInfo");
      } // verify the required parameter 'labelId' is set


      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling showMQTTLabelInfo");
      }

      var pathParams = {
        'space': space,
        'label-id': labelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ShowMQTTLabelResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/mqtt/labels/{label-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show MQTT label details
     * Show MQTT label details for a specific label
     * @param {String} space 
     * @param {String} labelId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShowMQTTLabelResponse}
     */

  }, {
    key: "showMQTTLabelInfo",
    value: function showMQTTLabelInfo(space, labelId) {
      return this.showMQTTLabelInfoWithHttpInfo(space, labelId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update MQTT Label
     * Update the MQTT Label credentials and / or state
     * @param {String} space 
     * @param {String} labelId 
     * @param {module:model/UpdateMQTTLabelCredentials} updateMQTTLabelCredentials This is the field that you can update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateMQTTLabelCredentialsResponse} and HTTP response
     */

  }, {
    key: "updateMQTTLabelWithHttpInfo",
    value: function updateMQTTLabelWithHttpInfo(space, labelId, updateMQTTLabelCredentials) {
      var postBody = updateMQTTLabelCredentials; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateMQTTLabel");
      } // verify the required parameter 'labelId' is set


      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling updateMQTTLabel");
      } // verify the required parameter 'updateMQTTLabelCredentials' is set


      if (updateMQTTLabelCredentials === undefined || updateMQTTLabelCredentials === null) {
        throw new Error("Missing the required parameter 'updateMQTTLabelCredentials' when calling updateMQTTLabel");
      }

      var pathParams = {
        'space': space,
        'label-id': labelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateMQTTLabelCredentialsResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/mqtt/labels/{label-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update MQTT Label
     * Update the MQTT Label credentials and / or state
     * @param {String} space 
     * @param {String} labelId 
     * @param {module:model/UpdateMQTTLabelCredentials} updateMQTTLabelCredentials This is the field that you can update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateMQTTLabelCredentialsResponse}
     */

  }, {
    key: "updateMQTTLabel",
    value: function updateMQTTLabel(space, labelId, updateMQTTLabelCredentials) {
      return this.updateMQTTLabelWithHttpInfo(space, labelId, updateMQTTLabelCredentials).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MQTTLabelsApi;
}();

exports["default"] = MQTTLabelsApi;