"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LabeledListResponse = _interopRequireDefault(require("../model/LabeledListResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* LabeledEntities service.
* @module api/LabeledEntitiesApi
* @version 1.0.0
*/
var LabeledEntitiesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LabeledEntitiesApi. 
  * @alias module:api/LabeledEntitiesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LabeledEntitiesApi(apiClient) {
    _classCallCheck(this, LabeledEntitiesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Show entity_ids and their labels. At least one of the following parameters must be present **entity_id, entity_type, label_id, label_name**
   * @param {String} space 
   * @param {Array.<String>} entityId 
   * @param {Array.<String>} labelId 
   * @param {Array.<String>} labelName 
   * @param {module:model/String} entityType filter that shows only a certain type of entity
   * @param {Object} opts Optional parameters
   * @param {String} opts.collectionName filter that shows entities and their labels of a certain collection. **Only available for thing entity type**
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabeledListResponse} and HTTP response
   */


  _createClass(LabeledEntitiesApi, [{
    key: "spacesSpaceLabeledEntitiesGetWithHttpInfo",
    value: function spacesSpaceLabeledEntitiesGetWithHttpInfo(space, entityId, labelId, labelName, entityType, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling spacesSpaceLabeledEntitiesGet");
      } // verify the required parameter 'entityId' is set


      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling spacesSpaceLabeledEntitiesGet");
      } // verify the required parameter 'labelId' is set


      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling spacesSpaceLabeledEntitiesGet");
      } // verify the required parameter 'labelName' is set


      if (labelName === undefined || labelName === null) {
        throw new Error("Missing the required parameter 'labelName' when calling spacesSpaceLabeledEntitiesGet");
      } // verify the required parameter 'entityType' is set


      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling spacesSpaceLabeledEntitiesGet");
      }

      var pathParams = {
        'space': space
      };
      var queryParams = {
        'entity_id': this.apiClient.buildCollectionParam(entityId, 'multi'),
        'label_id': this.apiClient.buildCollectionParam(labelId, 'multi'),
        'label_name': this.apiClient.buildCollectionParam(labelName, 'multi'),
        'entity_type': entityType,
        'collection_name': opts['collectionName']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LabeledListResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/labeled-entities', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show entity_ids and their labels. At least one of the following parameters must be present **entity_id, entity_type, label_id, label_name**
     * @param {String} space 
     * @param {Array.<String>} entityId 
     * @param {Array.<String>} labelId 
     * @param {Array.<String>} labelName 
     * @param {module:model/String} entityType filter that shows only a certain type of entity
     * @param {Object} opts Optional parameters
     * @param {String} opts.collectionName filter that shows entities and their labels of a certain collection. **Only available for thing entity type**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabeledListResponse}
     */

  }, {
    key: "spacesSpaceLabeledEntitiesGet",
    value: function spacesSpaceLabeledEntitiesGet(space, entityId, labelId, labelName, entityType, opts) {
      return this.spacesSpaceLabeledEntitiesGetWithHttpInfo(space, entityId, labelId, labelName, entityType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LabeledEntitiesApi;
}();

exports["default"] = LabeledEntitiesApi;