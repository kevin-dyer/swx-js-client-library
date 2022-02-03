"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseError = _interopRequireDefault(require("../model/BaseError"));

var _ThingStatusListResponse = _interopRequireDefault(require("../model/ThingStatusListResponse"));

var _ThingStatusResponse = _interopRequireDefault(require("../model/ThingStatusResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Items service.
* @module api/ItemsApi
* @version 1.0.0
*/
var ItemsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ItemsApi. 
  * @alias module:api/ItemsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ItemsApi(apiClient) {
    _classCallCheck(this, ItemsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * List items
   * @param {String} space 
   * @param {String} collectionName 
   * @param {Object} opts Optional parameters
   * @param {String} opts.title Filter by title
   * @param {Array.<String>} opts.thingID Filter by multiple thing ids
   * @param {String} opts.nextCursor next cursor used to go to the next page of results
   * @param {String} opts.previousCursor previous cursor used to go to the previous page of results
   * @param {Number} opts.limit The numbers of items to return (default to 50)
   * @param {Array.<String>} opts.sort sort items by field asc or desc
   * @param {Object} opts.property Schema:      {\"property:<property_name>\":\"<operator>:<value>\"}  Supported value operators:   * eq  == (operator by default)   * neq !=   * gt  >   * gte >=   * lt  <   * lte <= 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ThingStatusListResponse} and HTTP response
   */


  _createClass(ItemsApi, [{
    key: "listItemsWithHttpInfo",
    value: function listItemsWithHttpInfo(space, collectionName, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listItems");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listItems");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName
      };
      var queryParams = {
        'title': opts['title'],
        'thingID[]': this.apiClient.buildCollectionParam(opts['thingID'], 'multi'),
        'next_cursor': opts['nextCursor'],
        'previous_cursor': opts['previousCursor'],
        'limit': opts['limit'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv'),
        'property': opts['property']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = _ThingStatusListResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things-status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List items
     * @param {String} space 
     * @param {String} collectionName 
     * @param {Object} opts Optional parameters
     * @param {String} opts.title Filter by title
     * @param {Array.<String>} opts.thingID Filter by multiple thing ids
     * @param {String} opts.nextCursor next cursor used to go to the next page of results
     * @param {String} opts.previousCursor previous cursor used to go to the previous page of results
     * @param {Number} opts.limit The numbers of items to return (default to 50)
     * @param {Array.<String>} opts.sort sort items by field asc or desc
     * @param {Object} opts.property Schema:      {\"property:<property_name>\":\"<operator>:<value>\"}  Supported value operators:   * eq  == (operator by default)   * neq !=   * gt  >   * gte >=   * lt  <   * lte <= 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ThingStatusListResponse}
     */

  }, {
    key: "listItems",
    value: function listItems(space, collectionName, opts) {
      return this.listItemsWithHttpInfo(space, collectionName, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show item
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ThingStatusResponse} and HTTP response
     */

  }, {
    key: "showItemWithHttpInfo",
    value: function showItemWithHttpInfo(space, collectionName, thingId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showItem");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showItem");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling showItem");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = _ThingStatusResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things-status/{thing-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show item
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ThingStatusResponse}
     */

  }, {
    key: "showItem",
    value: function showItem(space, collectionName, thingId) {
      return this.showItemWithHttpInfo(space, collectionName, thingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ItemsApi;
}();

exports["default"] = ItemsApi;