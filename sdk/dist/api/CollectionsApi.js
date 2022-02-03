"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseError = _interopRequireDefault(require("../model/BaseError"));

var _CollectionListResponse = _interopRequireDefault(require("../model/CollectionListResponse"));

var _CollectionRequest = _interopRequireDefault(require("../model/CollectionRequest"));

var _CollectionResponse = _interopRequireDefault(require("../model/CollectionResponse"));

var _CollectionUpdateRequest = _interopRequireDefault(require("../model/CollectionUpdateRequest"));

var _CollectionUpdateResponse = _interopRequireDefault(require("../model/CollectionUpdateResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Collections service.
* @module api/CollectionsApi
* @version 1.0.0
*/
var CollectionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CollectionsApi. 
  * @alias module:api/CollectionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CollectionsApi(apiClient) {
    _classCallCheck(this, CollectionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create collection
   * @param {String} space 
   * @param {module:model/CollectionRequest} collectionRequest Create a new collection in the platform
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionResponse} and HTTP response
   */


  _createClass(CollectionsApi, [{
    key: "addCollectionWithHttpInfo",
    value: function addCollectionWithHttpInfo(space, collectionRequest) {
      var postBody = collectionRequest; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling addCollection");
      } // verify the required parameter 'collectionRequest' is set


      if (collectionRequest === undefined || collectionRequest === null) {
        throw new Error("Missing the required parameter 'collectionRequest' when calling addCollection");
      }

      var pathParams = {
        'space': space
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', '*/*'];
      var returnType = _CollectionResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create collection
     * @param {String} space 
     * @param {module:model/CollectionRequest} collectionRequest Create a new collection in the platform
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionResponse}
     */

  }, {
    key: "addCollection",
    value: function addCollection(space, collectionRequest) {
      return this.addCollectionWithHttpInfo(space, collectionRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete collection
     * @param {String} space 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteCollectionWithHttpInfo",
    value: function deleteCollectionWithHttpInfo(space, collectionName) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteCollection");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling deleteCollection");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = null;
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete collection
     * @param {String} space 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteCollection",
    value: function deleteCollection(space, collectionName) {
      return this.deleteCollectionWithHttpInfo(space, collectionName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List collections
     * @param {String} space 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionListResponse} and HTTP response
     */

  }, {
    key: "listCollectionsWithHttpInfo",
    value: function listCollectionsWithHttpInfo(space) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listCollections");
      }

      var pathParams = {
        'space': space
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = _CollectionListResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List collections
     * @param {String} space 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionListResponse}
     */

  }, {
    key: "listCollections",
    value: function listCollections(space) {
      return this.listCollectionsWithHttpInfo(space).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show collection
     * @param {String} space 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionResponse} and HTTP response
     */

  }, {
    key: "showCollectionWithHttpInfo",
    value: function showCollectionWithHttpInfo(space, collectionName) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showCollection");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showCollection");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = _CollectionResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show collection
     * @param {String} space 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionResponse}
     */

  }, {
    key: "showCollection",
    value: function showCollection(space, collectionName) {
      return this.showCollectionWithHttpInfo(space, collectionName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update collection
     * @param {String} space 
     * @param {String} collectionName 
     * @param {module:model/CollectionUpdateRequest} collectionUpdateRequest Update an existent collection by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionUpdateResponse} and HTTP response
     */

  }, {
    key: "updateCollectionWithHttpInfo",
    value: function updateCollectionWithHttpInfo(space, collectionName, collectionUpdateRequest) {
      var postBody = collectionUpdateRequest; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateCollection");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling updateCollection");
      } // verify the required parameter 'collectionUpdateRequest' is set


      if (collectionUpdateRequest === undefined || collectionUpdateRequest === null) {
        throw new Error("Missing the required parameter 'collectionUpdateRequest' when calling updateCollection");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CollectionUpdateResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update collection
     * @param {String} space 
     * @param {String} collectionName 
     * @param {module:model/CollectionUpdateRequest} collectionUpdateRequest Update an existent collection by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionUpdateResponse}
     */

  }, {
    key: "updateCollection",
    value: function updateCollection(space, collectionName, collectionUpdateRequest) {
      return this.updateCollectionWithHttpInfo(space, collectionName, collectionUpdateRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CollectionsApi;
}();

exports["default"] = CollectionsApi;