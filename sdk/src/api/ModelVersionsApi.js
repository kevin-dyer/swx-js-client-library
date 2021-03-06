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
import ModelVersionListResponse from '../model/ModelVersionListResponse';
import ModelVersionRequest from '../model/ModelVersionRequest';
import ModelVersionResponse from '../model/ModelVersionResponse';

/**
* ModelVersions service.
* @module api/ModelVersionsApi
* @version 1.0.0
*/
export default class ModelVersionsApi {

    /**
    * Constructs a new ModelVersionsApi. 
    * @alias module:api/ModelVersionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @param {module:model/ModelVersionRequest} modelVersionRequest Create a new collection in the platform
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelVersionResponse} and HTTP response
     */
    addVersionWithHttpInfo(space, collectionName, modelName, modelVersionRequest) {
      let postBody = modelVersionRequest;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling addVersion");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling addVersion");
      }
      // verify the required parameter 'modelName' is set
      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling addVersion");
      }
      // verify the required parameter 'modelVersionRequest' is set
      if (modelVersionRequest === undefined || modelVersionRequest === null) {
        throw new Error("Missing the required parameter 'modelVersionRequest' when calling addVersion");
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
      let returnType = ModelVersionResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/models/{model-name}/versions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @param {module:model/ModelVersionRequest} modelVersionRequest Create a new collection in the platform
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelVersionResponse}
     */
    addVersion(space, collectionName, modelName, modelVersionRequest) {
      return this.addVersionWithHttpInfo(space, collectionName, modelName, modelVersionRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} modelName 
     * @param {String} versionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteVersionWithHttpInfo(space, collectionName, thingId, modelName, versionName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteVersion");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling deleteVersion");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling deleteVersion");
      }
      // verify the required parameter 'modelName' is set
      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling deleteVersion");
      }
      // verify the required parameter 'versionName' is set
      if (versionName === undefined || versionName === null) {
        throw new Error("Missing the required parameter 'versionName' when calling deleteVersion");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'model-name': modelName,
        'version-name': versionName
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
        '/spaces/{space}/collections/{collection-name}/models/{model-name}/versions/{version-name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} modelName 
     * @param {String} versionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteVersion(space, collectionName, thingId, modelName, versionName) {
      return this.deleteVersionWithHttpInfo(space, collectionName, thingId, modelName, versionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelVersionListResponse} and HTTP response
     */
    listVersionWithHttpInfo(space, collectionName, modelName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listVersion");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling listVersion");
      }
      // verify the required parameter 'modelName' is set
      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling listVersion");
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
      let returnType = ModelVersionListResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/models/{model-name}/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} modelName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelVersionListResponse}
     */
    listVersion(space, collectionName, modelName) {
      return this.listVersionWithHttpInfo(space, collectionName, modelName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Show version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} modelName 
     * @param {String} versionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelVersionResponse} and HTTP response
     */
    showVersionWithHttpInfo(space, collectionName, thingId, modelName, versionName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling showVersion");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling showVersion");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling showVersion");
      }
      // verify the required parameter 'modelName' is set
      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling showVersion");
      }
      // verify the required parameter 'versionName' is set
      if (versionName === undefined || versionName === null) {
        throw new Error("Missing the required parameter 'versionName' when calling showVersion");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'model-name': modelName,
        'version-name': versionName
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
      let returnType = ModelVersionResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/models/{model-name}/versions/{version-name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Show version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} modelName 
     * @param {String} versionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelVersionResponse}
     */
    showVersion(space, collectionName, thingId, modelName, versionName) {
      return this.showVersionWithHttpInfo(space, collectionName, thingId, modelName, versionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} modelName 
     * @param {String} versionName 
     * @param {module:model/ModelVersionResponse} modelVersionResponse Update an existent model by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelVersionResponse} and HTTP response
     */
    updateVersionWithHttpInfo(space, collectionName, thingId, modelName, versionName, modelVersionResponse) {
      let postBody = modelVersionResponse;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateVersion");
      }
      // verify the required parameter 'collectionName' is set
      if (collectionName === undefined || collectionName === null) {
        throw new Error("Missing the required parameter 'collectionName' when calling updateVersion");
      }
      // verify the required parameter 'thingId' is set
      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling updateVersion");
      }
      // verify the required parameter 'modelName' is set
      if (modelName === undefined || modelName === null) {
        throw new Error("Missing the required parameter 'modelName' when calling updateVersion");
      }
      // verify the required parameter 'versionName' is set
      if (versionName === undefined || versionName === null) {
        throw new Error("Missing the required parameter 'versionName' when calling updateVersion");
      }
      // verify the required parameter 'modelVersionResponse' is set
      if (modelVersionResponse === undefined || modelVersionResponse === null) {
        throw new Error("Missing the required parameter 'modelVersionResponse' when calling updateVersion");
      }

      let pathParams = {
        'space': space,
        'collection-name': collectionName,
        'thing-id': thingId,
        'model-name': modelName,
        'version-name': versionName
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
      let returnType = ModelVersionResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/collections/{collection-name}/models/{model-name}/versions/{version-name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update version
     * @param {String} space 
     * @param {String} collectionName 
     * @param {String} thingId 
     * @param {String} modelName 
     * @param {String} versionName 
     * @param {module:model/ModelVersionResponse} modelVersionResponse Update an existent model by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelVersionResponse}
     */
    updateVersion(space, collectionName, thingId, modelName, versionName, modelVersionResponse) {
      return this.updateVersionWithHttpInfo(space, collectionName, thingId, modelName, versionName, modelVersionResponse)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
