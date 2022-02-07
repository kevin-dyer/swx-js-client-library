"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateLabel = _interopRequireDefault(require("../model/CreateLabel"));

var _CreateLabelRelation = _interopRequireDefault(require("../model/CreateLabelRelation"));

var _CreateLabelResponse = _interopRequireDefault(require("../model/CreateLabelResponse"));

var _LabelDeleteResponse = _interopRequireDefault(require("../model/LabelDeleteResponse"));

var _LabelListElement = _interopRequireDefault(require("../model/LabelListElement1"));

var _LabelListElementRelations = _interopRequireDefault(require("../model/LabelListElementRelations"));

var _LabelListResponse = _interopRequireDefault(require("../model/LabelListResponse"));

var _LabelRelationElement = _interopRequireDefault(require("../model/LabelRelationElement1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Label service.
* @module api/LabelApi
* @version 1.0.0
*/
var LabelApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LabelApi. 
  * @alias module:api/LabelApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LabelApi(apiClient) {
    _classCallCheck(this, LabelApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete Label relation
   * Delete a Label assignation for an specific entity
   * @param {String} space 
   * @param {String} labelId 
   * @param {String} entityId Removes label assigned to this entity_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabelDeleteResponse} and HTTP response
   */


  _createClass(LabelApi, [{
    key: "callDeleteWithHttpInfo",
    value: function callDeleteWithHttpInfo(space, labelId, entityId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling callDelete");
      } // verify the required parameter 'labelId' is set


      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling callDelete");
      } // verify the required parameter 'entityId' is set


      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling callDelete");
      }

      var pathParams = {
        'space': space,
        'label-id': labelId
      };
      var queryParams = {
        'entity_id': entityId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LabelDeleteResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/labels/{label-id}/relations', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete Label relation
     * Delete a Label assignation for an specific entity
     * @param {String} space 
     * @param {String} labelId 
     * @param {String} entityId Removes label assigned to this entity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabelDeleteResponse}
     */

  }, {
    key: "callDelete",
    value: function callDelete(space, labelId, entityId) {
      return this.callDeleteWithHttpInfo(space, labelId, entityId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create label
     * Send a new label to the platform
     * @param {String} space 
     * @param {module:model/CreateLabel} createLabel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateLabelResponse} and HTTP response
     */

  }, {
    key: "createLabelWithHttpInfo",
    value: function createLabelWithHttpInfo(space, createLabel) {
      var postBody = createLabel; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling createLabel");
      } // verify the required parameter 'createLabel' is set


      if (createLabel === undefined || createLabel === null) {
        throw new Error("Missing the required parameter 'createLabel' when calling createLabel");
      }

      var pathParams = {
        'space': space
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CreateLabelResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/labels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create label
     * Send a new label to the platform
     * @param {String} space 
     * @param {module:model/CreateLabel} createLabel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateLabelResponse}
     */

  }, {
    key: "createLabel",
    value: function createLabel(space, _createLabel) {
      return this.createLabelWithHttpInfo(space, _createLabel).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create label relation
     * Assign an existing label to an existing entity by id
     * @param {String} space 
     * @param {String} labelId 
     * @param {module:model/CreateLabelRelation} createLabelRelation 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabelRelationElement1} and HTTP response
     */

  }, {
    key: "createLabelRelationWithHttpInfo",
    value: function createLabelRelationWithHttpInfo(space, labelId, createLabelRelation) {
      var postBody = createLabelRelation; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling createLabelRelation");
      } // verify the required parameter 'labelId' is set


      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling createLabelRelation");
      } // verify the required parameter 'createLabelRelation' is set


      if (createLabelRelation === undefined || createLabelRelation === null) {
        throw new Error("Missing the required parameter 'createLabelRelation' when calling createLabelRelation");
      }

      var pathParams = {
        'space': space,
        'label-id': labelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LabelRelationElement["default"];
      return this.apiClient.callApi('/spaces/{space}/labels/{label-id}/relations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create label relation
     * Assign an existing label to an existing entity by id
     * @param {String} space 
     * @param {String} labelId 
     * @param {module:model/CreateLabelRelation} createLabelRelation 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabelRelationElement1}
     */

  }, {
    key: "createLabelRelation",
    value: function createLabelRelation(space, labelId, _createLabelRelation) {
      return this.createLabelRelationWithHttpInfo(space, labelId, _createLabelRelation).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete Label
     * Deletes an existing label by id
     * @param {String} space 
     * @param {String} labelId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabelDeleteResponse} and HTTP response
     */

  }, {
    key: "deleteLabelWithHttpInfo",
    value: function deleteLabelWithHttpInfo(space, labelId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteLabel");
      } // verify the required parameter 'labelId' is set


      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling deleteLabel");
      }

      var pathParams = {
        'space': space,
        'label-id': labelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LabelDeleteResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/labels/{label-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete Label
     * Deletes an existing label by id
     * @param {String} space 
     * @param {String} labelId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabelDeleteResponse}
     */

  }, {
    key: "deleteLabel",
    value: function deleteLabel(space, labelId) {
      return this.deleteLabelWithHttpInfo(space, labelId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Labels
     * List of all the labels for an space
     * @param {String} space 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.mqtt filter by labels with mqtt enabled
     * @param {String} opts.entityId filter that shows labels of a certain entity
     * @param {String} opts.entityType filter that shows labels of a certain entity type
     * @param {String} opts.collectionName filter that shows labels of a certain collection. **Only available for thing entities**
     * @param {String} opts.labelName filter that shows labels by label_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabelListResponse} and HTTP response
     */

  }, {
    key: "listLabelWithHttpInfo",
    value: function listLabelWithHttpInfo(space, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listLabel");
      }

      var pathParams = {
        'space': space
      };
      var queryParams = {
        'mqtt': opts['mqtt'],
        'entity_id': opts['entityId'],
        'entity_type': opts['entityType'],
        'collection_name': opts['collectionName'],
        'label_name': opts['labelName']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LabelListResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/labels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Labels
     * List of all the labels for an space
     * @param {String} space 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.mqtt filter by labels with mqtt enabled
     * @param {String} opts.entityId filter that shows labels of a certain entity
     * @param {String} opts.entityType filter that shows labels of a certain entity type
     * @param {String} opts.collectionName filter that shows labels of a certain collection. **Only available for thing entities**
     * @param {String} opts.labelName filter that shows labels by label_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabelListResponse}
     */

  }, {
    key: "listLabel",
    value: function listLabel(space, opts) {
      return this.listLabelWithHttpInfo(space, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show Label
     * Show an existing label by id
     * @param {String} space 
     * @param {String} labelId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabelListElement1} and HTTP response
     */

  }, {
    key: "showLabelWithHttpInfo",
    value: function showLabelWithHttpInfo(space, labelId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showLabel");
      } // verify the required parameter 'labelId' is set


      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling showLabel");
      }

      var pathParams = {
        'space': space,
        'label-id': labelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LabelListElement["default"];
      return this.apiClient.callApi('/spaces/{space}/labels/{label-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show Label
     * Show an existing label by id
     * @param {String} space 
     * @param {String} labelId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabelListElement1}
     */

  }, {
    key: "showLabel",
    value: function showLabel(space, labelId) {
      return this.showLabelWithHttpInfo(space, labelId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show Label Items
     * Show an existing label by name and entities associated to it
     * @param {String} space 
     * @param {String} labelId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.entityType filter that shows only entities of a certain type
     * @param {String} opts.collectionName filter that shows only entities from a certain collection. **Only available for thing entities**
     * @param {String} opts.entityId filter that shows only the entities that have this label
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabelListElementRelations} and HTTP response
     */

  }, {
    key: "showLabelItemsWithHttpInfo",
    value: function showLabelItemsWithHttpInfo(space, labelId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showLabelItems");
      } // verify the required parameter 'labelId' is set


      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling showLabelItems");
      }

      var pathParams = {
        'space': space,
        'label-id': labelId
      };
      var queryParams = {
        'entity_type': opts['entityType'],
        'collection_name': opts['collectionName'],
        'entity_id': opts['entityId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LabelListElementRelations["default"];
      return this.apiClient.callApi('/spaces/{space}/labels/{label-id}/relations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show Label Items
     * Show an existing label by name and entities associated to it
     * @param {String} space 
     * @param {String} labelId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.entityType filter that shows only entities of a certain type
     * @param {String} opts.collectionName filter that shows only entities from a certain collection. **Only available for thing entities**
     * @param {String} opts.entityId filter that shows only the entities that have this label
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabelListElementRelations}
     */

  }, {
    key: "showLabelItems",
    value: function showLabelItems(space, labelId, opts) {
      return this.showLabelItemsWithHttpInfo(space, labelId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update label
     * Update an existing label
     * @param {String} space 
     * @param {String} labelId 
     * @param {module:model/CreateLabel} createLabel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateLabelResponse} and HTTP response
     */

  }, {
    key: "updateLabelWithHttpInfo",
    value: function updateLabelWithHttpInfo(space, labelId, createLabel) {
      var postBody = createLabel; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateLabel");
      } // verify the required parameter 'labelId' is set


      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling updateLabel");
      } // verify the required parameter 'createLabel' is set


      if (createLabel === undefined || createLabel === null) {
        throw new Error("Missing the required parameter 'createLabel' when calling updateLabel");
      }

      var pathParams = {
        'space': space,
        'label-id': labelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CreateLabelResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/labels/{label-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update label
     * Update an existing label
     * @param {String} space 
     * @param {String} labelId 
     * @param {module:model/CreateLabel} createLabel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateLabelResponse}
     */

  }, {
    key: "updateLabel",
    value: function updateLabel(space, labelId, createLabel) {
      return this.updateLabelWithHttpInfo(space, labelId, createLabel).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LabelApi;
}();

exports["default"] = LabelApi;