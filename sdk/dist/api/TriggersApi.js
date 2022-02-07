"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _Trigger = _interopRequireDefault(require("../model/Trigger"));

var _Triggers = _interopRequireDefault(require("../model/Triggers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Triggers service.
* @module api/TriggersApi
* @version 1.0.0
*/
var TriggersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TriggersApi. 
  * @alias module:api/TriggersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TriggersApi(apiClient) {
    _classCallCheck(this, TriggersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create and deploy a trigger
   * @param {String} space 
   * @param {module:model/Trigger} trigger Body of a new trigger
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Trigger} and HTTP response
   */


  _createClass(TriggersApi, [{
    key: "createTriggerWithHttpInfo",
    value: function createTriggerWithHttpInfo(space, trigger) {
      var postBody = trigger; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling createTrigger");
      } // verify the required parameter 'trigger' is set


      if (trigger === undefined || trigger === null) {
        throw new Error("Missing the required parameter 'trigger' when calling createTrigger");
      }

      var pathParams = {
        'space': space
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Trigger["default"];
      return this.apiClient.callApi('/spaces/{space}/triggers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create and deploy a trigger
     * @param {String} space 
     * @param {module:model/Trigger} trigger Body of a new trigger
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Trigger}
     */

  }, {
    key: "createTrigger",
    value: function createTrigger(space, trigger) {
      return this.createTriggerWithHttpInfo(space, trigger).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a trigger
     * @param {String} space 
     * @param {String} triggerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteTriggerWithHttpInfo",
    value: function deleteTriggerWithHttpInfo(space, triggerId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteTrigger");
      } // verify the required parameter 'triggerId' is set


      if (triggerId === undefined || triggerId === null) {
        throw new Error("Missing the required parameter 'triggerId' when calling deleteTrigger");
      }

      var pathParams = {
        'space': space,
        'trigger_id': triggerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/spaces/{space}/triggers/{trigger_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a trigger
     * @param {String} space 
     * @param {String} triggerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteTrigger",
    value: function deleteTrigger(space, triggerId) {
      return this.deleteTriggerWithHttpInfo(space, triggerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a trigger
     * @param {String} space 
     * @param {String} triggerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Trigger} and HTTP response
     */

  }, {
    key: "getTriggerWithHttpInfo",
    value: function getTriggerWithHttpInfo(space, triggerId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling getTrigger");
      } // verify the required parameter 'triggerId' is set


      if (triggerId === undefined || triggerId === null) {
        throw new Error("Missing the required parameter 'triggerId' when calling getTrigger");
      }

      var pathParams = {
        'space': space,
        'trigger_id': triggerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Trigger["default"];
      return this.apiClient.callApi('/spaces/{space}/triggers/{trigger_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a trigger
     * @param {String} space 
     * @param {String} triggerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Trigger}
     */

  }, {
    key: "getTrigger",
    value: function getTrigger(space, triggerId) {
      return this.getTriggerWithHttpInfo(space, triggerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Triggers
     * @param {String} space 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Triggers} and HTTP response
     */

  }, {
    key: "listTriggersWithHttpInfo",
    value: function listTriggersWithHttpInfo(space, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listTriggers");
      }

      var pathParams = {
        'space': space
      };
      var queryParams = {
        'type': opts['type']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Triggers["default"];
      return this.apiClient.callApi('/spaces/{space}/triggers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Triggers
     * @param {String} space 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Triggers}
     */

  }, {
    key: "listTriggers",
    value: function listTriggers(space, opts) {
      return this.listTriggersWithHttpInfo(space, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a trigger
     * @param {String} space 
     * @param {String} triggerId 
     * @param {module:model/Trigger} trigger Body of the updated trigger
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Trigger} and HTTP response
     */

  }, {
    key: "updateTriggerWithHttpInfo",
    value: function updateTriggerWithHttpInfo(space, triggerId, trigger) {
      var postBody = trigger; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateTrigger");
      } // verify the required parameter 'triggerId' is set


      if (triggerId === undefined || triggerId === null) {
        throw new Error("Missing the required parameter 'triggerId' when calling updateTrigger");
      } // verify the required parameter 'trigger' is set


      if (trigger === undefined || trigger === null) {
        throw new Error("Missing the required parameter 'trigger' when calling updateTrigger");
      }

      var pathParams = {
        'space': space,
        'trigger_id': triggerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Trigger["default"];
      return this.apiClient.callApi('/spaces/{space}/triggers/{trigger_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a trigger
     * @param {String} space 
     * @param {String} triggerId 
     * @param {module:model/Trigger} trigger Body of the updated trigger
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Trigger}
     */

  }, {
    key: "updateTrigger",
    value: function updateTrigger(space, triggerId, trigger) {
      return this.updateTriggerWithHttpInfo(space, triggerId, trigger).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TriggersApi;
}();

exports["default"] = TriggersApi;