"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventHighCPUListResponse = _interopRequireDefault(require("../model/EventHighCPUListResponse"));

var _EventRequest = _interopRequireDefault(require("../model/EventRequest"));

var _EventResponse = _interopRequireDefault(require("../model/EventResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Events service.
* @module api/EventsApi
* @version 0.8.12
*/
var EventsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EventsApi. 
  * @alias module:api/EventsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EventsApi(apiClient) {
    _classCallCheck(this, EventsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Add event
   * Add a new event to the event history of a thing
   * @param {String} space 
   * @param {String} collectionName 
   * @param {String} thingId 
   * @param {String} event 
   * @param {module:model/EventRequest} eventRequest Create a new action
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EventResponse} and HTTP response
   */


  _createClass(EventsApi, [{
    key: "addEventWithHttpInfo",
    value: function addEventWithHttpInfo(space, collectionName, thingId, event, eventRequest) {
      var postBody = eventRequest; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling addEvent");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling addEvent");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling addEvent");
      } // verify the required parameter 'event' is set


      if (event === undefined || event === null) {
        throw new Error("Missing the required parameter 'event' when calling addEvent");
      } // verify the required parameter 'eventRequest' is set


      if (eventRequest === undefined || eventRequest === null) {
        throw new Error("Missing the required parameter 'eventRequest' when calling addEvent");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'event': event
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EventResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/events/{event}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add event
     * Add a new event to the event history of a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} event 
     * @param {module:model/EventRequest} eventRequest Create a new action
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventResponse}
     */

  }, {
    key: "addEvent",
    value: function addEvent(space, collectionName, thingId, event, eventRequest) {
      return this.addEventWithHttpInfo(space, collectionName, thingId, event, eventRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List history of all events
     * List all history of all the events of a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EventHighCPUListResponse} and HTTP response
     */

  }, {
    key: "listEventsWithHttpInfo",
    value: function listEventsWithHttpInfo(space, collectionName, thingId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listEvents");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listEvents");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling listEvents");
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
      var returnType = _EventHighCPUListResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List history of all events
     * List all history of all the events of a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventHighCPUListResponse}
     */

  }, {
    key: "listEvents",
    value: function listEvents(space, collectionName, thingId) {
      return this.listEventsWithHttpInfo(space, collectionName, thingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List history of one type of event
     * List all history of one concrete event inside a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} event 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EventHighCPUListResponse} and HTTP response
     */

  }, {
    key: "listEventsByNameWithHttpInfo",
    value: function listEventsByNameWithHttpInfo(space, collectionName, thingId, event) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listEventsByName");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listEventsByName");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling listEventsByName");
      } // verify the required parameter 'event' is set


      if (event === undefined || event === null) {
        throw new Error("Missing the required parameter 'event' when calling listEventsByName");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'event': event
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EventHighCPUListResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/events/{event}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List history of one type of event
     * List all history of one concrete event inside a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} event 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventHighCPUListResponse}
     */

  }, {
    key: "listEventsByName",
    value: function listEventsByName(space, collectionName, thingId, event) {
      return this.listEventsByNameWithHttpInfo(space, collectionName, thingId, event).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show event
     * Show one specific event form a thing by Id
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} event 
     * @param {String} eventId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EventResponse} and HTTP response
     */

  }, {
    key: "showEventWithHttpInfo",
    value: function showEventWithHttpInfo(space, collectionName, thingId, event, eventId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showEvent");
      } // verify the required parameter 'collectionName' is set


      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showEvent");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling showEvent");
      } // verify the required parameter 'event' is set


      if (event === undefined || event === null) {
        throw new Error("Missing the required parameter 'event' when calling showEvent");
      } // verify the required parameter 'eventId' is set


      if (eventId === undefined || eventId === null) {
        throw new Error("Missing the required parameter 'eventId' when calling showEvent");
      }

      var pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'event': event,
        'event-id': eventId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EventResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/collections/{collection-name}/things/{thing-id}/events/{event}/{event-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show event
     * Show one specific event form a thing by Id
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} event 
     * @param {String} eventId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventResponse}
     */

  }, {
    key: "showEvent",
    value: function showEvent(space, collectionName, thingId, event, eventId) {
      return this.showEventWithHttpInfo(space, collectionName, thingId, event, eventId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EventsApi;
}();

exports["default"] = EventsApi;