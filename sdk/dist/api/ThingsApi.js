"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseError = _interopRequireDefault(require("../model/BaseError"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _Secret = _interopRequireDefault(require("../model/Secret"));

var _ThingCreateResponse = _interopRequireDefault(require("../model/ThingCreateResponse"));

var _ThingDeleteResponse = _interopRequireDefault(require("../model/ThingDeleteResponse"));

var _ThingListResponse = _interopRequireDefault(require("../model/ThingListResponse"));

var _ThingRequest = _interopRequireDefault(require("../model/ThingRequest"));

var _ThingResponse = _interopRequireDefault(require("../model/ThingResponse"));

var _ThingUpdateRequest = _interopRequireDefault(require("../model/ThingUpdateRequest"));

var _ThingUpdateResponse = _interopRequireDefault(require("../model/ThingUpdateResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Things service.
* @module api/ThingsApi
* @version 1.0.0
*/
var ThingsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ThingsApi. 
  * @alias module:api/ThingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ThingsApi(apiClient) {
    _classCallCheck(this, ThingsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Add a thing description
   * Add a new thing description to the platform according to WoT specification
   * @param {String} space 
   * @param {String} collectionName 
   * @param {module:model/ThingRequest} thingRequest Create a new thing description in the platform
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ThingCreateResponse} and HTTP response
   */


  _createClass(ThingsApi, [{
    key: "addThingWithHttpInfo",
    value: function addThingWithHttpInfo(space, collectionName, thingRequest) {
      var postBody = thingRequest; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling addThing");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling addThing");
      } // verify the required parameter 'thingRequest' is set


      if (thingRequest === undefined || thingRequest === null) {
        throw new Error("Missing the required parameter 'thingRequest' when calling addThing");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', '*/*'];
      var returnType = _ThingCreateResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add a thing description
     * Add a new thing description to the platform according to WoT specification
     * @param {String} space 
     * @param {String} collectionName 
     * @param {module:model/ThingRequest} thingRequest Create a new thing description in the platform
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ThingCreateResponse}
     */

  }, {
    key: "addThing",
    value: function addThing(space, collectionName, thingRequest) {
      return this.addThingWithHttpInfo(space, collectionName, thingRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete thing
     * Deletes all the existing information from a thing by Id. It deletes the thing description and the data.
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ThingDeleteResponse} and HTTP response
     */

  }, {
    key: "deleteThingWithHttpInfo",
    value: function deleteThingWithHttpInfo(space, collectionName, thingId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteThing");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling deleteThing");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling deleteThing");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = _ThingDeleteResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete thing
     * Deletes all the existing information from a thing by Id. It deletes the thing description and the data.
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ThingDeleteResponse}
     */

  }, {
    key: "deleteThing",
    value: function deleteThing(space, collectionName, thingId) {
      return this.deleteThingWithHttpInfo(space, collectionName, thingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List thing descriptions
     * List all thing descriptions in an array
     * @param {String} space 
     * @param {String} collectionName 
     * @param {Object} opts Optional parameters
     * @param {String} opts.title Filter by title
     * @param {String} opts.type Filter by @type
     * @param {Array.<String>} opts.thingID Filter by multiple thing ids
     * @param {String} opts.nextCursor next cursor used to go to the next page of results
     * @param {String} opts.previousCursor previous cursor used to go to the previous page of results
     * @param {Number} opts.limit The numbers of items to return (default to 50)
     * @param {Array.<String>} opts.sort sort items by field asc or desc
     * @param {Object} opts.property Schema:      {\"property:<property_name>\":\"<operator>:<value>\"}  Supported value operators:   * eq  == (operator by default)   * neq !=   * gt  >   * gte >=   * lt  <   * lte <= 
     * @param {String} opts.linksRel Filter by type of link relationship
     * @param {String} opts.linksHref Filter by link href
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ThingListResponse} and HTTP response
     */

  }, {
    key: "listThingsWithHttpInfo",
    value: function listThingsWithHttpInfo(space, collectionName, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listThings");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listThings");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName
      };
      var queryParams = {
        'title': opts['title'],
        '@type': opts['type'],
        'thingID[]': this.apiClient.buildCollectionParam(opts['thingID'], 'multi'),
        'next_cursor': opts['nextCursor'],
        'previous_cursor': opts['previousCursor'],
        'limit': opts['limit'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv'),
        'property': opts['property'],
        'links.rel': opts['linksRel'],
        'links.href': opts['linksHref']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ThingListResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List thing descriptions
     * List all thing descriptions in an array
     * @param {String} space 
     * @param {String} collectionName 
     * @param {Object} opts Optional parameters
     * @param {String} opts.title Filter by title
     * @param {String} opts.type Filter by @type
     * @param {Array.<String>} opts.thingID Filter by multiple thing ids
     * @param {String} opts.nextCursor next cursor used to go to the next page of results
     * @param {String} opts.previousCursor previous cursor used to go to the previous page of results
     * @param {Number} opts.limit The numbers of items to return (default to 50)
     * @param {Array.<String>} opts.sort sort items by field asc or desc
     * @param {Object} opts.property Schema:      {\"property:<property_name>\":\"<operator>:<value>\"}  Supported value operators:   * eq  == (operator by default)   * neq !=   * gt  >   * gte >=   * lt  <   * lte <= 
     * @param {String} opts.linksRel Filter by type of link relationship
     * @param {String} opts.linksHref Filter by link href
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ThingListResponse}
     */

  }, {
    key: "listThings",
    value: function listThings(space, collectionName, opts) {
      return this.listThingsWithHttpInfo(space, collectionName, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Reset Client Secret
     * Reset the Client Secret for a specific thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Secret} and HTTP response
     */

  }, {
    key: "resetClientSecretWithHttpInfo",
    value: function resetClientSecretWithHttpInfo(space, collectionName, thingId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling resetClientSecret");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling resetClientSecret");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling resetClientSecret");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Secret["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/reset-secret', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Reset Client Secret
     * Reset the Client Secret for a specific thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Secret}
     */

  }, {
    key: "resetClientSecret",
    value: function resetClientSecret(space, collectionName, thingId) {
      return this.resetClientSecretWithHttpInfo(space, collectionName, thingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show thing
     * Show the thing description from a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ThingResponse} and HTTP response
     */

  }, {
    key: "showThingWithHttpInfo",
    value: function showThingWithHttpInfo(space, collectionName, thingId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showThing");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showThing");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling showThing");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = _ThingResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show thing
     * Show the thing description from a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ThingResponse}
     */

  }, {
    key: "showThing",
    value: function showThing(space, collectionName, thingId) {
      return this.showThingWithHttpInfo(space, collectionName, thingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update thing description
     * Update the thing description from a thing by Id. You need to include the whole thing description with the modifications to update it.
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {module:model/ThingUpdateRequest} thingUpdateRequest Update an existent thing description by Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ThingUpdateResponse} and HTTP response
     */

  }, {
    key: "updateThingWithHttpInfo",
    value: function updateThingWithHttpInfo(space, collectionName, thingId, thingUpdateRequest) {
      var postBody = thingUpdateRequest; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateThing");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling updateThing");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling updateThing");
      } // verify the required parameter 'thingUpdateRequest' is set


      if (thingUpdateRequest === undefined || thingUpdateRequest === null) {
        throw new Error("Missing the required parameter 'thingUpdateRequest' when calling updateThing");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ThingUpdateResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update thing description
     * Update the thing description from a thing by Id. You need to include the whole thing description with the modifications to update it.
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {module:model/ThingUpdateRequest} thingUpdateRequest Update an existent thing description by Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ThingUpdateResponse}
     */

  }, {
    key: "updateThing",
    value: function updateThing(space, collectionName, thingId, thingUpdateRequest) {
      return this.updateThingWithHttpInfo(space, collectionName, thingId, thingUpdateRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ThingsApi;
}();

exports["default"] = ThingsApi;