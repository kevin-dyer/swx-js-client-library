"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseError = _interopRequireDefault(require("../model/BaseError"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _ModelVersionListResponse = _interopRequireDefault(require("../model/ModelVersionListResponse"));

var _ModelVersionRequest = _interopRequireDefault(require("../model/ModelVersionRequest"));

var _ModelVersionResponse = _interopRequireDefault(require("../model/ModelVersionResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ModelVersions service.
* @module api/ModelVersionsApi
* @version 1.0.0
*/
var ModelVersionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ModelVersionsApi. 
  * @alias module:api/ModelVersionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ModelVersionsApi(apiClient) {
    _classCallCheck(this, ModelVersionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create version
   * @param {String} space 
   * @param {String} collectionName 
   * @param {String} modelName 
   * @param {module:model/ModelVersionRequest} modelVersionRequest Create a new collection in the platform
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelVersionResponse} and HTTP response
   */


  _createClass(ModelVersionsApi, [{
    key: "addVersionWithHttpInfo",
    value: function addVersionWithHttpInfo(space, collectionName, modelName, modelVersionRequest) {
      var postBody = modelVersionRequest; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling addVersion");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling addVersion");
      } // verify the required parameter 'modelName' is set


      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling addVersion");
      } // verify the required parameter 'modelVersionRequest' is set


      if (modelVersionRequest === undefined || modelVersionRequest === null) {
        throw new Error("Missing the required parameter 'modelVersionRequest' when calling addVersion");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'model-name': modelName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', '*/*'];
      var returnType = _ModelVersionResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/models/{model-name}/versions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @param {module:model/ModelVersionRequest} modelVersionRequest Create a new collection in the platform
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelVersionResponse}
     */

  }, {
    key: "addVersion",
    value: function addVersion(space, collectionName, modelName, modelVersionRequest) {
      return this.addVersionWithHttpInfo(space, collectionName, modelName, modelVersionRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} modelName 
     * @param {String} versionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteVersionWithHttpInfo",
    value: function deleteVersionWithHttpInfo(space, collectionName, thingId, modelName, versionName) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteVersion");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling deleteVersion");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling deleteVersion");
      } // verify the required parameter 'modelName' is set


      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling deleteVersion");
      } // verify the required parameter 'versionName' is set


      if (versionName === undefined || versionName === null) {
        throw new Error("Missing the required parameter 'versionName' when calling deleteVersion");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'model-name': modelName,
        'version-name': versionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = null;
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/models/{model-name}/versions/{version-name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} modelName 
     * @param {String} versionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteVersion",
    value: function deleteVersion(space, collectionName, thingId, modelName, versionName) {
      return this.deleteVersionWithHttpInfo(space, collectionName, thingId, modelName, versionName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelVersionListResponse} and HTTP response
     */

  }, {
    key: "listVersionWithHttpInfo",
    value: function listVersionWithHttpInfo(space, collectionName, modelName) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listVersion");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listVersion");
      } // verify the required parameter 'modelName' is set


      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling listVersion");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'model-name': modelName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = _ModelVersionListResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/models/{model-name}/versions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelVersionListResponse}
     */

  }, {
    key: "listVersion",
    value: function listVersion(space, collectionName, modelName) {
      return this.listVersionWithHttpInfo(space, collectionName, modelName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} modelName 
     * @param {String} versionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelVersionResponse} and HTTP response
     */

  }, {
    key: "showVersionWithHttpInfo",
    value: function showVersionWithHttpInfo(space, collectionName, thingId, modelName, versionName) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showVersion");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showVersion");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling showVersion");
      } // verify the required parameter 'modelName' is set


      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling showVersion");
      } // verify the required parameter 'versionName' is set


      if (versionName === undefined || versionName === null) {
        throw new Error("Missing the required parameter 'versionName' when calling showVersion");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'model-name': modelName,
        'version-name': versionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = _ModelVersionResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/models/{model-name}/versions/{version-name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} modelName 
     * @param {String} versionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelVersionResponse}
     */

  }, {
    key: "showVersion",
    value: function showVersion(space, collectionName, thingId, modelName, versionName) {
      return this.showVersionWithHttpInfo(space, collectionName, thingId, modelName, versionName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} modelName 
     * @param {String} versionName 
     * @param {module:model/ModelVersionResponse} modelVersionResponse Update an existent model by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelVersionResponse} and HTTP response
     */

  }, {
    key: "updateVersionWithHttpInfo",
    value: function updateVersionWithHttpInfo(space, collectionName, thingId, modelName, versionName, modelVersionResponse) {
      var postBody = modelVersionResponse; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateVersion");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling updateVersion");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling updateVersion");
      } // verify the required parameter 'modelName' is set


      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling updateVersion");
      } // verify the required parameter 'versionName' is set


      if (versionName === undefined || versionName === null) {
        throw new Error("Missing the required parameter 'versionName' when calling updateVersion");
      } // verify the required parameter 'modelVersionResponse' is set


      if (modelVersionResponse === undefined || modelVersionResponse === null) {
        throw new Error("Missing the required parameter 'modelVersionResponse' when calling updateVersion");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'model-name': modelName,
        'version-name': versionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', '*/*'];
      var returnType = _ModelVersionResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/models/{model-name}/versions/{version-name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} modelName 
     * @param {String} versionName 
     * @param {module:model/ModelVersionResponse} modelVersionResponse Update an existent model by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelVersionResponse}
     */

  }, {
    key: "updateVersion",
    value: function updateVersion(space, collectionName, thingId, modelName, versionName, modelVersionResponse) {
      return this.updateVersionWithHttpInfo(space, collectionName, thingId, modelName, versionName, modelVersionResponse).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ModelVersionsApi;
}();

exports["default"] = ModelVersionsApi;