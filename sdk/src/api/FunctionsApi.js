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
import ErrorResponse from '../model/ErrorResponse';
import Function from '../model/Function';
import Functions from '../model/Functions';
import InfoResponse from '../model/InfoResponse';
import LogEntry from '../model/LogEntry';
import SourceCode from '../model/SourceCode';

/**
* Functions service.
* @module api/FunctionsApi
* @version 1.0.0
*/
export default class FunctionsApi {

    /**
    * Constructs a new FunctionsApi. 
    * @alias module:api/FunctionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create and deploy a function
     * @param {String} space 
     * @param {module:model/Function} _function Body of a new function
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Function} and HTTP response
     */
    createFunctionWithHttpInfo(space, _function) {
      let postBody = _function;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling createFunction");
      }
      // verify the required parameter '_function' is set
      if (_function === undefined || _function === null) {
        throw new Error("Missing the required parameter '_function' when calling createFunction");
      }

      let pathParams = {
        'space': space
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Function;
      return this.apiClient.callApi(
        '/spaces/{space}/functions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create and deploy a function
     * @param {String} space 
     * @param {module:model/Function} _function Body of a new function
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Function}
     */
    createFunction(space, _function) {
      return this.createFunctionWithHttpInfo(space, _function)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a function
     * @param {String} space 
     * @param {String} functionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteFunctionWithHttpInfo(space, functionName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteFunction");
      }
      // verify the required parameter 'functionName' is set
      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling deleteFunction");
      }

      let pathParams = {
        'space': space,
        'function_name': functionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/spaces/{space}/functions/{function_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a function
     * @param {String} space 
     * @param {String} functionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteFunction(space, functionName) {
      return this.deleteFunctionWithHttpInfo(space, functionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a function
     * @param {String} space 
     * @param {String} functionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Function} and HTTP response
     */
    getFunctionWithHttpInfo(space, functionName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling getFunction");
      }
      // verify the required parameter 'functionName' is set
      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling getFunction");
      }

      let pathParams = {
        'space': space,
        'function_name': functionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Function;
      return this.apiClient.callApi(
        '/spaces/{space}/functions/{function_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a function
     * @param {String} space 
     * @param {String} functionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Function}
     */
    getFunction(space, functionName) {
      return this.getFunctionWithHttpInfo(space, functionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the last version of the function code
     * @param {String} space 
     * @param {String} functionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SourceCode} and HTTP response
     */
    getFunctionCodeWithHttpInfo(space, functionName) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling getFunctionCode");
      }
      // verify the required parameter 'functionName' is set
      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling getFunctionCode");
      }

      let pathParams = {
        'space': space,
        'function_name': functionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/x-ndjson', 'application/json'];
      let returnType = SourceCode;
      return this.apiClient.callApi(
        '/spaces/{space}/functions/{function_name}/code', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the last version of the function code
     * @param {String} space 
     * @param {String} functionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SourceCode}
     */
    getFunctionCode(space, functionName) {
      return this.getFunctionCodeWithHttpInfo(space, functionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of the logs for a specific function
     * @param {String} space 
     * @param {String} functionName 
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Only return logs after a specific date (RFC3339)
     * @param {Number} opts.tail Sets the maximum number of log messages to return, <=0 means unlimited
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LogEntry>} and HTTP response
     */
    getFunctionLogsWithHttpInfo(space, functionName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling getFunctionLogs");
      }
      // verify the required parameter 'functionName' is set
      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling getFunctionLogs");
      }

      let pathParams = {
        'space': space,
        'function_name': functionName
      };
      let queryParams = {
        'since': opts['since'],
        'tail': opts['tail']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/x-ndjson', 'application/json'];
      let returnType = [LogEntry];
      return this.apiClient.callApi(
        '/spaces/{space}/functions/{function_name}/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a list of the logs for a specific function
     * @param {String} space 
     * @param {String} functionName 
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Only return logs after a specific date (RFC3339)
     * @param {Number} opts.tail Sets the maximum number of log messages to return, <=0 means unlimited
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LogEntry>}
     */
    getFunctionLogs(space, functionName, opts) {
      return this.getFunctionLogsWithHttpInfo(space, functionName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Invoke a function
     * @param {String} space 
     * @param {String} functionName 
     * @param {Object} opts Optional parameters
     * @param {File} opts.body Optional data to pass to the function
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    invokeFunctionWithHttpInfo(space, functionName, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling invokeFunction");
      }
      // verify the required parameter 'functionName' is set
      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling invokeFunction");
      }

      let pathParams = {
        'space': space,
        'function_name': functionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/spaces/{space}/functions/{function_name}/invoke', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Invoke a function
     * @param {String} space 
     * @param {String} functionName 
     * @param {Object} opts Optional parameters
     * @param {File} opts.body Optional data to pass to the function
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    invokeFunction(space, functionName, opts) {
      return this.invokeFunctionWithHttpInfo(space, functionName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Invoke a function asynchronously
     * @param {String} space 
     * @param {String} functionName 
     * @param {String} xCallbackUrl 
     * @param {Object} opts Optional parameters
     * @param {File} opts.body Optional data to pass to the function
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InfoResponse} and HTTP response
     */
    invokeFunctionAsyncWithHttpInfo(space, functionName, xCallbackUrl, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling invokeFunctionAsync");
      }
      // verify the required parameter 'functionName' is set
      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling invokeFunctionAsync");
      }
      // verify the required parameter 'xCallbackUrl' is set
      if (xCallbackUrl === undefined || xCallbackUrl === null) {
        throw new Error("Missing the required parameter 'xCallbackUrl' when calling invokeFunctionAsync");
      }

      let pathParams = {
        'space': space,
        'function_name': functionName
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Callback-Url': xCallbackUrl
      };
      let formParams = {
      };

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InfoResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/functions/{function_name}/async-invoke', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Invoke a function asynchronously
     * @param {String} space 
     * @param {String} functionName 
     * @param {String} xCallbackUrl 
     * @param {Object} opts Optional parameters
     * @param {File} opts.body Optional data to pass to the function
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InfoResponse}
     */
    invokeFunctionAsync(space, functionName, xCallbackUrl, opts) {
      return this.invokeFunctionAsyncWithHttpInfo(space, functionName, xCallbackUrl, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Functions
     * @param {String} space 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Functions} and HTTP response
     */
    listFunctionsWithHttpInfo(space) {
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listFunctions");
      }

      let pathParams = {
        'space': space
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Functions;
      return this.apiClient.callApi(
        '/spaces/{space}/functions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Functions
     * @param {String} space 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Functions}
     */
    listFunctions(space) {
      return this.listFunctionsWithHttpInfo(space)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a function
     * @param {String} space 
     * @param {String} functionName 
     * @param {module:model/Function} _function Body of the updated function
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Function} and HTTP response
     */
    updateFunctionWithHttpInfo(space, functionName, _function) {
      let postBody = _function;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateFunction");
      }
      // verify the required parameter 'functionName' is set
      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling updateFunction");
      }
      // verify the required parameter '_function' is set
      if (_function === undefined || _function === null) {
        throw new Error("Missing the required parameter '_function' when calling updateFunction");
      }

      let pathParams = {
        'space': space,
        'function_name': functionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Function;
      return this.apiClient.callApi(
        '/spaces/{space}/functions/{function_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a function
     * @param {String} space 
     * @param {String} functionName 
     * @param {module:model/Function} _function Body of the updated function
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Function}
     */
    updateFunction(space, functionName, _function) {
      return this.updateFunctionWithHttpInfo(space, functionName, _function)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
