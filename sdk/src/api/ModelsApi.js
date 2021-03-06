/**
 * Users API reference
 * Users OpenAPI endpoints - OpenAPI 3.0
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
import ErrorResponse from '../model/ErrorResponse';
import ModelListResponse from '../model/ModelListResponse';
import ModelResponse from '../model/ModelResponse';
import ModelUpdateResponse from '../model/ModelUpdateResponse';

/**
* Models service.
* @module api/ModelsApi
* @version 1.0.0
*/
export default class ModelsApi {

    /**
    * Constructs a new ModelsApi. 
    * @alias module:api/ModelsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {Object.<String, {String: Object}>} requestBody Create a new collection in the platform
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelResponse} and HTTP response
     */
    addModelWithHttpInfo(space, collectionName, requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling addModel");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling addModel");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling addModel");
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

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', '*/*'];
      let returnType = ModelResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/models', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {Object.<String, {String: Object}>} requestBody Create a new collection in the platform
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelResponse}
     */
    addModel(space, collectionName, requestBody) {
      return this.addModelWithHttpInfo(space, collectionName, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteModelWithHttpInfo(space, collectionName, modelName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteModel");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling deleteModel");
      }
      // verify the required parameter 'modelName' is set
      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling deleteModel");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName,
        'model-name': modelName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = null;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/models/{model-name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteModel(space, collectionName, modelName) {
      return this.deleteModelWithHttpInfo(space, collectionName, modelName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List models
     * @param {String} space 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelListResponse} and HTTP response
     */
    listModelsWithHttpInfo(space, collectionName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listModels");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listModels");
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

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = ModelListResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/models', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List models
     * @param {String} space 
     * @param {String} collectionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelListResponse}
     */
    listModels(space, collectionName) {
      return this.listModelsWithHttpInfo(space, collectionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Show model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelResponse} and HTTP response
     */
    showModelWithHttpInfo(space, collectionName, modelName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showModel");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showModel");
      }
      // verify the required parameter 'modelName' is set
      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling showModel");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName,
        'model-name': modelName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = ModelResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/models/{model-name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Show model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelResponse}
     */
    showModel(space, collectionName, modelName) {
      return this.showModelWithHttpInfo(space, collectionName, modelName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @param {Object.<String, {String: Object}>} requestBody Update an existent model by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelUpdateResponse} and HTTP response
     */
    updateModelWithHttpInfo(space, collectionName, modelName, requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateModel");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling updateModel");
      }
      // verify the required parameter 'modelName' is set
      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling updateModel");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling updateModel");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName,
        'model-name': modelName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', '*/*'];
      let returnType = ModelUpdateResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/models/{model-name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update model
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @param {Object.<String, {String: Object}>} requestBody Update an existent model by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelUpdateResponse}
     */
    updateModel(space, collectionName, modelName, requestBody) {
      return this.updateModelWithHttpInfo(space, collectionName, modelName, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
