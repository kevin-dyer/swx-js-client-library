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
import BaseError from '../model/BaseError';
import Properties from '../model/Properties';
import Property from '../model/Property';

/**
* Properties service.
* @module api/PropertiesApi
* @version 1.0.0
*/
export default class PropertiesApi {

    /**
    * Constructs a new PropertiesApi. 
    * @alias module:api/PropertiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List properties
     * List all the properties from one thing in array
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Properties} and HTTP response
     */
    listPropertiesWithHttpInfo(space, collectionName, thingId) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listProperties");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listProperties");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling listProperties");
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Properties;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things/{thing-id}/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List properties
     * List all the properties from one thing in array
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Properties}
     */
    listProperties(space, collectionName, thingId) {
      return this.listPropertiesWithHttpInfo(space, collectionName, thingId)
        .then(function(response_and_data) {
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
    showPropertyWithHttpInfo(space, collectionName, thingId, property) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showProperty");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showProperty");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling showProperty");
      }
      // verify the required parameter 'property' is set
      if (property === undefined || property === null) {
        throw new Error("Missing the required parameter 'property' when calling showProperty");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'property': property
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
      let returnType = Property;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things/{thing-id}/properties/{property}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    showProperty(space, collectionName, thingId, property) {
      return this.showPropertyWithHttpInfo(space, collectionName, thingId, property)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update properties
     * Update the value of one or more properties of a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {module:model/Properties} properties Property values by property key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Properties} and HTTP response
     */
    updatePropertiesWithHttpInfo(space, collectionName, thingId, properties) {
      let postBody = properties;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateProperties");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling updateProperties");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling updateProperties");
      }
      // verify the required parameter 'properties' is set
      if (properties === undefined || properties === null) {
        throw new Error("Missing the required parameter 'properties' when calling updateProperties");
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

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Properties;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things/{thing-id}/properties', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update properties
     * Update the value of one or more properties of a thing
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {module:model/Properties} properties Property values by property key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Properties}
     */
    updateProperties(space, collectionName, thingId, properties) {
      return this.updatePropertiesWithHttpInfo(space, collectionName, thingId, properties)
        .then(function(response_and_data) {
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
    updatePropertyWithHttpInfo(space, collectionName, thingId, property, property2) {
      let postBody = property2;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateProperty");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling updateProperty");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling updateProperty");
      }
      // verify the required parameter 'property' is set
      if (property === undefined || property === null) {
        throw new Error("Missing the required parameter 'property' when calling updateProperty");
      }
      // verify the required parameter 'property2' is set
      if (property2 === undefined || property2 === null) {
        throw new Error("Missing the required parameter 'property2' when calling updateProperty");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'property': property
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
      let returnType = Property;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/things/{thing-id}/properties/{property}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    updateProperty(space, collectionName, thingId, property, property2) {
      return this.updatePropertyWithHttpInfo(space, collectionName, thingId, property, property2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
