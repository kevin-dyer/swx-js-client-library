/**
 * SmartWorks SDK
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
import ErrorResponse from '../model/ErrorResponse';
import Secret from '../model/Secret';
import ThingCreateResponse from '../model/ThingCreateResponse';
import ThingDeleteResponse from '../model/ThingDeleteResponse';
import ThingListResponse from '../model/ThingListResponse';
import ThingRequest from '../model/ThingRequest';
import ThingResponse from '../model/ThingResponse';
import ThingUpdateRequest from '../model/ThingUpdateRequest';
import ThingUpdateResponse from '../model/ThingUpdateResponse';

/**
* Things service.
* @module api/ThingsApi
* @version 1.0.0
*/
export default class ThingsApi {

    /**
    * Constructs a new ThingsApi. 
    * @alias module:api/ThingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a thing description
     * Add a new thing description to the platform according to WoT specification
     * @param {String} space 
     * @param {String} collectionName 
     * @param {module:model/ThingRequest} thingRequest Create a new thing description in the platform
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ThingCreateResponse} and HTTP response
     */
    addThingWithHttpInfo(space, collectionName, thingRequest) {
      let postBody = thingRequest;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling addThing");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling addThing");
      }
      // verify the required parameter 'thingRequest' is set
      if (thingRequest === undefined || thingRequest === null) {
        throw new Error("Missing the required parameter 'thingRequest' when calling addThing");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ThingCreateResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a thing description
     * Add a new thing description to the platform according to WoT specification
     * @param {String} space 
     * @param {String} collectionName 
     * @param {module:model/ThingRequest} thingRequest Create a new thing description in the platform
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ThingCreateResponse}
     */
    addThing(space, collectionName, thingRequest) {
      return this.addThingWithHttpInfo(space, collectionName, thingRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete thing
     * Deletes all the existing information from a thing by Id. It deletes the thing description and the data.
     * @param {String} space 
     * @param {String} thingId 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ThingDeleteResponse} and HTTP response
     */
    deleteThingWithHttpInfo(space, thingId, collectionName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteThing");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling deleteThing");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling deleteThing");
      }

      let pathParams = {
        'space': space,
        'thing-id': thingId,
        'collection-name': collectionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ThingDeleteResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things/{thing-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete thing
     * Deletes all the existing information from a thing by Id. It deletes the thing description and the data.
     * @param {String} space 
     * @param {String} thingId 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ThingDeleteResponse}
     */
    deleteThing(space, thingId, collectionName) {
      return this.deleteThingWithHttpInfo(space, thingId, collectionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List thing descriptions
     * List all thing descriptions in an array
     * @param {String} space 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ThingListResponse} and HTTP response
     */
    listThingsWithHttpInfo(space, collectionName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listThings");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listThings");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ThingListResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List thing descriptions
     * List all thing descriptions in an array
     * @param {String} space 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ThingListResponse}
     */
    listThings(space, collectionName) {
      return this.listThingsWithHttpInfo(space, collectionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reset Client Secret
     * Reset the Client Secret for a specific thing
     * @param {String} space 
     * @param {String} thingId 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Secret} and HTTP response
     */
    resetClientSecretWithHttpInfo(space, thingId, collectionName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling resetClientSecret");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling resetClientSecret");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling resetClientSecret");
      }

      let pathParams = {
        'space': space,
        'thing-id': thingId,
        'collection-name': collectionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Secret;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things/{thing-id}/reset-secret', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Reset Client Secret
     * Reset the Client Secret for a specific thing
     * @param {String} space 
     * @param {String} thingId 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Secret}
     */
    resetClientSecret(space, thingId, collectionName) {
      return this.resetClientSecretWithHttpInfo(space, thingId, collectionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Show thing
     * Show the thing description from a thing
     * @param {String} space 
     * @param {String} thingId 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ThingResponse} and HTTP response
     */
    showThingWithHttpInfo(space, thingId, collectionName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showThing");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling showThing");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showThing");
      }

      let pathParams = {
        'space': space,
        'thing-id': thingId,
        'collection-name': collectionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ThingResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things/{thing-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Show thing
     * Show the thing description from a thing
     * @param {String} space 
     * @param {String} thingId 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ThingResponse}
     */
    showThing(space, thingId, collectionName) {
      return this.showThingWithHttpInfo(space, thingId, collectionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update thing description
     * Update the thing description from a thing by Id. You need to include the whole thing description with the modifications to update it.
     * @param {String} space 
     * @param {String} thingId 
     * @param {String} collectionName 
     * @param {module:model/ThingUpdateRequest} thingUpdateRequest Update an existent thing description by Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ThingUpdateResponse} and HTTP response
     */
    updateThingWithHttpInfo(space, thingId, collectionName, thingUpdateRequest) {
      let postBody = thingUpdateRequest;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateThing");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling updateThing");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling updateThing");
      }
      // verify the required parameter 'thingUpdateRequest' is set
      if (thingUpdateRequest === undefined || thingUpdateRequest === null) {
        throw new Error("Missing the required parameter 'thingUpdateRequest' when calling updateThing");
      }

      let pathParams = {
        'space': space,
        'thing-id': thingId,
        'collection-name': collectionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ThingUpdateResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things/{thing-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update thing description
     * Update the thing description from a thing by Id. You need to include the whole thing description with the modifications to update it.
     * @param {String} space 
     * @param {String} thingId 
     * @param {String} collectionName 
     * @param {module:model/ThingUpdateRequest} thingUpdateRequest Update an existent thing description by Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ThingUpdateResponse}
     */
    updateThing(space, thingId, collectionName, thingUpdateRequest) {
      return this.updateThingWithHttpInfo(space, thingId, collectionName, thingUpdateRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
