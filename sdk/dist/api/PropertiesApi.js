"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Properties = _interopRequireDefault(require("../model/Properties"));

var _Property = _interopRequireDefault(require("../model/Property"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Properties service.
* @module api/PropertiesApi
* @version 0.8.12
*/
var PropertiesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PropertiesApi. 
  * @alias module:api/PropertiesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PropertiesApi(apiClient) {
    _classCallCheck(this, PropertiesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * List properties
   * List all the properties from one thing in array
   * @param {String} space 
   * @param {String} collectionName 
   * @param {String} thingId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Properties} and HTTP response
   */


  _createClass(PropertiesApi, [{
    key: "listPropertiesWithHttpInfo",
    value: function listPropertiesWithHttpInfo(space, collectionName, thingId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listProperties");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listProperties");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling listProperties");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Properties["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/properties', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List properties
     * List all the properties from one thing in array
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Properties}
     */

  }, {
    key: "listProperties",
    value: function listProperties(space, collectionName, thingId) {
      return this.listPropertiesWithHttpInfo(space, collectionName, thingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show property
     * Show a property from one thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} property 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Property} and HTTP response
     */

  }, {
    key: "showPropertyWithHttpInfo",
    value: function showPropertyWithHttpInfo(space, collectionName, thingId, property) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showProperty");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showProperty");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling showProperty");
      } // verify the required parameter 'property' is set


      if (property === undefined || property === null) {
        throw new Error("Missing the required parameter 'property' when calling showProperty");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'property': property
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Property["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/properties/{property}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show property
     * Show a property from one thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} property 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Property}
     */

  }, {
    key: "showProperty",
    value: function showProperty(space, collectionName, thingId, property) {
      return this.showPropertyWithHttpInfo(space, collectionName, thingId, property).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update property
     * Update the value of a property
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} property 
     * @param {module:model/Property} property2 Update an existent thing by Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Property} and HTTP response
     */

  }, {
    key: "updatePropertyWithHttpInfo",
    value: function updatePropertyWithHttpInfo(space, collectionName, thingId, property, property2) {
      var postBody = property2; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateProperty");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling updateProperty");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling updateProperty");
      } // verify the required parameter 'property' is set


      if (property === undefined || property === null) {
        throw new Error("Missing the required parameter 'property' when calling updateProperty");
      } // verify the required parameter 'property2' is set


      if (property2 === undefined || property2 === null) {
        throw new Error("Missing the required parameter 'property2' when calling updateProperty");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'property': property
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Property["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/properties/{property}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update property
     * Update the value of a property
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} property 
     * @param {module:model/Property} property2 Update an existent thing by Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Property}
     */

  }, {
    key: "updateProperty",
    value: function updateProperty(space, collectionName, thingId, property, property2) {
      return this.updatePropertyWithHttpInfo(space, collectionName, thingId, property, property2).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PropertiesApi;
}();

exports["default"] = PropertiesApi;