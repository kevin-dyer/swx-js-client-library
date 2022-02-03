/**
 * MQTT API reference
 * MQTT OpenAPI endpoints - OpenAPI 3.0
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BaseError from '../model/BaseError';
import EventHighCPUListResponse from '../model/EventHighCPUListResponse';
import EventResponse from '../model/EventResponse';

/**
* Events service.
* @module api/EventsApi
* @version 1.0.0
*/
export default class EventsApi {

    /**
    * Constructs a new EventsApi. 
    * @alias module:api/EventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add event
     * Add a new event to the event history of a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} event 
     * @param {Object.<String, {String: Object}>} requestBody Create a new action
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EventResponse} and HTTP response
     */
    addEventWithHttpInfo(space, collectionName, thingId, event, requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling addEvent");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling addEvent");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling addEvent");
      }
      // verify the required parameter 'event' is set
      if (event === undefined || event === null) {
        throw new Error("Missing the required parameter 'event' when calling addEvent");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling addEvent");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'event': event
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', '*/*'];
      let returnType = EventResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things/{thing-id}/events/{event}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add event
     * Add a new event to the event history of a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} event 
     * @param {Object.<String, {String: Object}>} requestBody Create a new action
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventResponse}
     */
    addEvent(space, collectionName, thingId, event, requestBody) {
      return this.addEventWithHttpInfo(space, collectionName, thingId, event, requestBody)
        .then(function(response_and_data) {
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
    listEventsWithHttpInfo(space, collectionName, thingId) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listEvents");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listEvents");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling listEvents");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = EventHighCPUListResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things/{thing-id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List history of all events
     * List all history of all the events of a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventHighCPUListResponse}
     */
    listEvents(space, collectionName, thingId) {
      return this.listEventsWithHttpInfo(space, collectionName, thingId)
        .then(function(response_and_data) {
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
    listEventsByNameWithHttpInfo(space, collectionName, thingId, event) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listEventsByName");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listEventsByName");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling listEventsByName");
      }
      // verify the required parameter 'event' is set
      if (event === undefined || event === null) {
        throw new Error("Missing the required parameter 'event' when calling listEventsByName");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'event': event
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EventHighCPUListResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things/{thing-id}/events/{event}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    listEventsByName(space, collectionName, thingId, event) {
      return this.listEventsByNameWithHttpInfo(space, collectionName, thingId, event)
        .then(function(response_and_data) {
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
    showEventWithHttpInfo(space, collectionName, thingId, event, eventId) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showEvent");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showEvent");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling showEvent");
      }
      // verify the required parameter 'event' is set
      if (event === undefined || event === null) {
        throw new Error("Missing the required parameter 'event' when calling showEvent");
      }
      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw new Error("Missing the required parameter 'eventId' when calling showEvent");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'event': event,
        'event-id': eventId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EventResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things/{thing-id}/events/{event}/{event-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    showEvent(space, collectionName, thingId, event, eventId) {
      return this.showEventWithHttpInfo(space, collectionName, thingId, event, eventId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
