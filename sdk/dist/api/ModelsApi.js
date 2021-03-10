"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelListResponse = _interopRequireDefault(require("../model/ModelListResponse"));

var _ModelRequest = _interopRequireDefault(require("../model/ModelRequest"));

var _ModelResponse = _interopRequireDefault(require("../model/ModelResponse"));

var _ModelUpdateRequest = _interopRequireDefault(require("../model/ModelUpdateRequest"));

var _ModelUpdateResponse = _interopRequireDefault(require("../model/ModelUpdateResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Models service.
* @module api/ModelsApi
* @version 0.8.12
*/
var ModelsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ModelsApi. 
  * @alias module:api/ModelsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ModelsApi(apiClient) {
    _classCallCheck(this, ModelsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create model
   * @param {String} space 
   * @param {String} collectionName 
   * @param {module:model/ModelRequest} modelRequest Create a new collection in the platform
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelResponse} and HTTP response
   */


  _createClass(ModelsApi, [{
    key: "addModelWithHttpInfo",
    value: function addModelWithHttpInfo(space, collectionName, modelRequest) {
      var postBody = modelRequest; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling addModel");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling addModel");
      } // verify the required parameter 'modelRequest' is set


      if (modelRequest === undefined || modelRequest === null) {
        throw new Error("Missing the required parameter 'modelRequest' when calling addModel");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ModelResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/models', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {module:model/ModelRequest} modelRequest Create a new collection in the platform
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelResponse}
     */

  }, {
    key: "addModel",
    value: function addModel(space, collectionName, modelRequest) {
      return this.addModelWithHttpInfo(space, collectionName, modelRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteModelWithHttpInfo",
    value: function deleteModelWithHttpInfo(space, collectionName, modelName) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteModel");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling deleteModel");
      } // verify the required parameter 'modelName' is set


      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling deleteModel");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'model-name': modelName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/models/{model-name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteModel",
    value: function deleteModel(space, collectionName, modelName) {
      return this.deleteModelWithHttpInfo(space, collectionName, modelName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List models
     * @param {String} space 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelListResponse} and HTTP response
     */

  }, {
    key: "listModelsWithHttpInfo",
    value: function listModelsWithHttpInfo(space, collectionName) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listModels");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listModels");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelListResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/models', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List models
     * @param {String} space 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelListResponse}
     */

  }, {
    key: "listModels",
    value: function listModels(space, collectionName) {
      return this.listModelsWithHttpInfo(space, collectionName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelResponse} and HTTP response
     */

  }, {
    key: "showModelWithHttpInfo",
    value: function showModelWithHttpInfo(space, collectionName, modelName) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showModel");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showModel");
      } // verify the required parameter 'modelName' is set


      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling showModel");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'model-name': modelName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/models/{model-name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelResponse}
     */

  }, {
    key: "showModel",
    value: function showModel(space, collectionName, modelName) {
      return this.showModelWithHttpInfo(space, collectionName, modelName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @param {module:model/ModelUpdateRequest} modelUpdateRequest Update an existent model by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelUpdateResponse} and HTTP response
     */

  }, {
    key: "updateModelWithHttpInfo",
    value: function updateModelWithHttpInfo(space, collectionName, modelName, modelUpdateRequest) {
      var postBody = modelUpdateRequest; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateModel");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling updateModel");
      } // verify the required parameter 'modelName' is set


      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling updateModel");
      } // verify the required parameter 'modelUpdateRequest' is set


      if (modelUpdateRequest === undefined || modelUpdateRequest === null) {
        throw new Error("Missing the required parameter 'modelUpdateRequest' when calling updateModel");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'model-name': modelName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ModelUpdateResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/models/{model-name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @param {module:model/ModelUpdateRequest} modelUpdateRequest Update an existent model by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelUpdateResponse}
     */

  }, {
    key: "updateModel",
    value: function updateModel(space, collectionName, modelName, modelUpdateRequest) {
      return this.updateModelWithHttpInfo(space, collectionName, modelName, modelUpdateRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ModelsApi;
}();

exports["default"] = ModelsApi;