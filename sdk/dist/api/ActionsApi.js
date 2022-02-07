"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionDelayListResponse = _interopRequireDefault(require("../model/ActionDelayListResponse"));

var _ActionDeleteResponse = _interopRequireDefault(require("../model/ActionDeleteResponse"));

var _ActionListResponse = _interopRequireDefault(require("../model/ActionListResponse"));

var _ActionResponseElement = _interopRequireDefault(require("../model/ActionResponseElement1"));

var _ActionUpdateResponse = _interopRequireDefault(require("../model/ActionUpdateResponse"));

var _BaseError = _interopRequireDefault(require("../model/BaseError"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Actions service.
* @module api/ActionsApi
* @version 1.0.0
*/
var ActionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ActionsApi. 
  * @alias module:api/ActionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ActionsApi(apiClient) {
    _classCallCheck(this, ActionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Request action
   * Request action and add it to the action queue from a thing
   * @param {String} space 
   * @param {String} collectionName 
   * @param {String} thingId 
   * @param {String} action 
   * @param {Object.<String, {String: Object}>} requestBody Create a new action
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActionResponseElement1} and HTTP response
   */


  _createClass(ActionsApi, [{
    key: "addActionWithHttpInfo",
    value: function addActionWithHttpInfo(space, collectionName, thingId, action, requestBody) {
      var postBody = requestBody; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling addAction");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling addAction");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling addAction");
      } // verify the required parameter 'action' is set


      if (action === undefined || action === null) {
        throw new Error("Missing the required parameter 'action' when calling addAction");
      } // verify the required parameter 'requestBody' is set


      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling addAction");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'action': action
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', '*/*'];
      var returnType = _ActionResponseElement["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/actions/{action}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Request action
     * Request action and add it to the action queue from a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} action 
     * @param {Object.<String, {String: Object}>} requestBody Create a new action
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActionResponseElement1}
     */

  }, {
    key: "addAction",
    value: function addAction(space, collectionName, thingId, action, requestBody) {
      return this.addActionWithHttpInfo(space, collectionName, thingId, action, requestBody).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete Action
     * Deletes an existing action by Id
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} action 
     * @param {String} actionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActionDeleteResponse} and HTTP response
     */

  }, {
    key: "deleteActionWithHttpInfo",
    value: function deleteActionWithHttpInfo(space, collectionName, thingId, action, actionId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteAction");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling deleteAction");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling deleteAction");
      } // verify the required parameter 'action' is set


      if (action === undefined || action === null) {
        throw new Error("Missing the required parameter 'action' when calling deleteAction");
      } // verify the required parameter 'actionId' is set


      if (actionId === undefined || actionId === null) {
        throw new Error("Missing the required parameter 'actionId' when calling deleteAction");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'action': action,
        'action-id': actionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = _ActionDeleteResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/actions/{action}/{action-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete Action
     * Deletes an existing action by Id
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} action 
     * @param {String} actionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActionDeleteResponse}
     */

  }, {
    key: "deleteAction",
    value: function deleteAction(space, collectionName, thingId, action, actionId) {
      return this.deleteActionWithHttpInfo(space, collectionName, thingId, action, actionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Lists all the action queues for a thing
     * Lists all the queues for the different actions within a thing.
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActionListResponse} and HTTP response
     */

  }, {
    key: "listActionsWithHttpInfo",
    value: function listActionsWithHttpInfo(space, collectionName, thingId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listActions");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listActions");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling listActions");
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
      var returnType = _ActionListResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/actions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Lists all the action queues for a thing
     * Lists all the queues for the different actions within a thing.
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActionListResponse}
     */

  }, {
    key: "listActions",
    value: function listActions(space, collectionName, thingId) {
      return this.listActionsWithHttpInfo(space, collectionName, thingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List the queue of actions from a thing
     * Lists the current queue of a specific action from a Thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} action 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActionDelayListResponse} and HTTP response
     */

  }, {
    key: "listActionsByNameWithHttpInfo",
    value: function listActionsByNameWithHttpInfo(space, collectionName, thingId, action) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listActionsByName");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listActionsByName");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling listActionsByName");
      } // verify the required parameter 'action' is set


      if (action === undefined || action === null) {
        throw new Error("Missing the required parameter 'action' when calling listActionsByName");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'action': action
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = _ActionDelayListResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/actions/{action}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List the queue of actions from a thing
     * Lists the current queue of a specific action from a Thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} action 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActionDelayListResponse}
     */

  }, {
    key: "listActionsByName",
    value: function listActionsByName(space, collectionName, thingId, action) {
      return this.listActionsByNameWithHttpInfo(space, collectionName, thingId, action).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show action requested
     * Shows a requested action from the action queues of a thing.
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} action 
     * @param {String} actionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActionResponseElement1} and HTTP response
     */

  }, {
    key: "showActionWithHttpInfo",
    value: function showActionWithHttpInfo(space, collectionName, thingId, action, actionId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showAction");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showAction");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling showAction");
      } // verify the required parameter 'action' is set


      if (action === undefined || action === null) {
        throw new Error("Missing the required parameter 'action' when calling showAction");
      } // verify the required parameter 'actionId' is set


      if (actionId === undefined || actionId === null) {
        throw new Error("Missing the required parameter 'actionId' when calling showAction");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'action': action,
        'action-id': actionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json', '*/*'];
      var returnType = _ActionResponseElement["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/actions/{action}/{action-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show action requested
     * Shows a requested action from the action queues of a thing.
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} action 
     * @param {String} actionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActionResponseElement1}
     */

  }, {
    key: "showAction",
    value: function showAction(space, collectionName, thingId, action, actionId) {
      return this.showActionWithHttpInfo(space, collectionName, thingId, action, actionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update action inside a queue
     * Update the status of an existing action by Id inside of the action queue from a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} action 
     * @param {String} actionId 
     * @param {Object.<String, {String: Object}>} requestBody Update an existent thing by Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActionUpdateResponse} and HTTP response
     */

  }, {
    key: "updateActionWithHttpInfo",
    value: function updateActionWithHttpInfo(space, collectionName, thingId, action, actionId, requestBody) {
      var postBody = requestBody; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateAction");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling updateAction");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling updateAction");
      } // verify the required parameter 'action' is set


      if (action === undefined || action === null) {
        throw new Error("Missing the required parameter 'action' when calling updateAction");
      } // verify the required parameter 'actionId' is set


      if (actionId === undefined || actionId === null) {
        throw new Error("Missing the required parameter 'actionId' when calling updateAction");
      } // verify the required parameter 'requestBody' is set


      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling updateAction");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'action': action,
        'action-id': actionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ActionUpdateResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/actions/{action}/{action-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update action inside a queue
     * Update the status of an existing action by Id inside of the action queue from a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} action 
     * @param {String} actionId 
     * @param {Object.<String, {String: Object}>} requestBody Update an existent thing by Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActionUpdateResponse}
     */

  }, {
    key: "updateAction",
    value: function updateAction(space, collectionName, thingId, action, actionId, requestBody) {
      return this.updateActionWithHttpInfo(space, collectionName, thingId, action, actionId, requestBody).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ActionsApi;
}();

exports["default"] = ActionsApi;