"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _Function = _interopRequireDefault(require("../model/Function"));

var _Functions = _interopRequireDefault(require("../model/Functions"));

var _InfoResponse = _interopRequireDefault(require("../model/InfoResponse"));

var _LogEntry = _interopRequireDefault(require("../model/LogEntry"));

var _SourceCode = _interopRequireDefault(require("../model/SourceCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Functions service.
* @module api/FunctionsApi
* @version 1.0.0
*/
var FunctionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FunctionsApi. 
  * @alias module:api/FunctionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FunctionsApi(apiClient) {
    _classCallCheck(this, FunctionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create and deploy a function
   * @param {String} space 
   * @param {module:model/Function} _function Body of a new function
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Function} and HTTP response
   */


  _createClass(FunctionsApi, [{
    key: "createFunctionWithHttpInfo",
    value: function createFunctionWithHttpInfo(space, _function) {
      var postBody = _function; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling createFunction");
      } // verify the required parameter '_function' is set


      if (_function === undefined || _function === null) {
        throw new Error("Missing the required parameter '_function' when calling createFunction");
      }

      var pathParams = {
        'space': space
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Function["default"];
      return this.apiClient.callApi('/spaces/{space}/functions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create and deploy a function
     * @param {String} space 
     * @param {module:model/Function} _function Body of a new function
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Function}
     */

  }, {
    key: "createFunction",
    value: function createFunction(space, _function) {
      return this.createFunctionWithHttpInfo(space, _function).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a function
     * @param {String} space 
     * @param {String} functionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteFunctionWithHttpInfo",
    value: function deleteFunctionWithHttpInfo(space, functionName) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteFunction");
      } // verify the required parameter 'functionName' is set


      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling deleteFunction");
      }

      var pathParams = {
        'space': space,
        'function_name': functionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/spaces/{space}/functions/{function_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a function
     * @param {String} space 
     * @param {String} functionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteFunction",
    value: function deleteFunction(space, functionName) {
      return this.deleteFunctionWithHttpInfo(space, functionName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a function
     * @param {String} space 
     * @param {String} functionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Function} and HTTP response
     */

  }, {
    key: "getFunctionWithHttpInfo",
    value: function getFunctionWithHttpInfo(space, functionName) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling getFunction");
      } // verify the required parameter 'functionName' is set


      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling getFunction");
      }

      var pathParams = {
        'space': space,
        'function_name': functionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Function["default"];
      return this.apiClient.callApi('/spaces/{space}/functions/{function_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a function
     * @param {String} space 
     * @param {String} functionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Function}
     */

  }, {
    key: "getFunction",
    value: function getFunction(space, functionName) {
      return this.getFunctionWithHttpInfo(space, functionName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the last version of the function code
     * @param {String} space 
     * @param {String} functionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SourceCode} and HTTP response
     */

  }, {
    key: "getFunctionCodeWithHttpInfo",
    value: function getFunctionCodeWithHttpInfo(space, functionName) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling getFunctionCode");
      } // verify the required parameter 'functionName' is set


      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling getFunctionCode");
      }

      var pathParams = {
        'space': space,
        'function_name': functionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/x-ndjson', 'application/json'];
      var returnType = _SourceCode["default"];
      return this.apiClient.callApi('/spaces/{space}/functions/{function_name}/code', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the last version of the function code
     * @param {String} space 
     * @param {String} functionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SourceCode}
     */

  }, {
    key: "getFunctionCode",
    value: function getFunctionCode(space, functionName) {
      return this.getFunctionCodeWithHttpInfo(space, functionName).then(function (response_and_data) {
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

  }, {
    key: "getFunctionLogsWithHttpInfo",
    value: function getFunctionLogsWithHttpInfo(space, functionName, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling getFunctionLogs");
      } // verify the required parameter 'functionName' is set


      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling getFunctionLogs");
      }

      var pathParams = {
        'space': space,
        'function_name': functionName
      };
      var queryParams = {
        'since': opts['since'],
        'tail': opts['tail']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/x-ndjson', 'application/json'];
      var returnType = [_LogEntry["default"]];
      return this.apiClient.callApi('/spaces/{space}/functions/{function_name}/logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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

  }, {
    key: "getFunctionLogs",
    value: function getFunctionLogs(space, functionName, opts) {
      return this.getFunctionLogsWithHttpInfo(space, functionName, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Invoke a function
     * @param {String} space 
     * @param {String} functionName 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: String}>} opts.params 
     * @param {File} opts.body Optional data to pass to the function
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "invokeFunctionWithHttpInfo",
    value: function invokeFunctionWithHttpInfo(space, functionName, opts) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling invokeFunction");
      } // verify the required parameter 'functionName' is set


      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling invokeFunction");
      }

      var pathParams = {
        'space': space,
        'function_name': functionName
      };
      var queryParams = {
        'params': opts['params']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/spaces/{space}/functions/{function_name}/invoke', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Invoke a function
     * @param {String} space 
     * @param {String} functionName 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: String}>} opts.params 
     * @param {File} opts.body Optional data to pass to the function
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "invokeFunction",
    value: function invokeFunction(space, functionName, opts) {
      return this.invokeFunctionWithHttpInfo(space, functionName, opts).then(function (response_and_data) {
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

  }, {
    key: "invokeFunctionAsyncWithHttpInfo",
    value: function invokeFunctionAsyncWithHttpInfo(space, functionName, xCallbackUrl, opts) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling invokeFunctionAsync");
      } // verify the required parameter 'functionName' is set


      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling invokeFunctionAsync");
      } // verify the required parameter 'xCallbackUrl' is set


      if (xCallbackUrl === undefined || xCallbackUrl === null) {
        throw new Error("Missing the required parameter 'xCallbackUrl' when calling invokeFunctionAsync");
      }

      var pathParams = {
        'space': space,
        'function_name': functionName
      };
      var queryParams = {};
      var headerParams = {
        'X-Callback-Url': xCallbackUrl
      };
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InfoResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/functions/{function_name}/async-invoke', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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

  }, {
    key: "invokeFunctionAsync",
    value: function invokeFunctionAsync(space, functionName, xCallbackUrl, opts) {
      return this.invokeFunctionAsyncWithHttpInfo(space, functionName, xCallbackUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Functions
     * @param {String} space 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Functions} and HTTP response
     */

  }, {
    key: "listFunctionsWithHttpInfo",
    value: function listFunctionsWithHttpInfo(space) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listFunctions");
      }

      var pathParams = {
        'space': space
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Functions["default"];
      return this.apiClient.callApi('/spaces/{space}/functions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Functions
     * @param {String} space 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Functions}
     */

  }, {
    key: "listFunctions",
    value: function listFunctions(space) {
      return this.listFunctionsWithHttpInfo(space).then(function (response_and_data) {
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

  }, {
    key: "updateFunctionWithHttpInfo",
    value: function updateFunctionWithHttpInfo(space, functionName, _function) {
      var postBody = _function; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateFunction");
      } // verify the required parameter 'functionName' is set


      if (functionName === undefined || functionName === null) {
        throw new Error("Missing the required parameter 'functionName' when calling updateFunction");
      } // verify the required parameter '_function' is set


      if (_function === undefined || _function === null) {
        throw new Error("Missing the required parameter '_function' when calling updateFunction");
      }

      var pathParams = {
        'space': space,
        'function_name': functionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Function["default"];
      return this.apiClient.callApi('/spaces/{space}/functions/{function_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a function
     * @param {String} space 
     * @param {String} functionName 
     * @param {module:model/Function} _function Body of the updated function
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Function}
     */

  }, {
    key: "updateFunction",
    value: function updateFunction(space, functionName, _function) {
      return this.updateFunctionWithHttpInfo(space, functionName, _function).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return FunctionsApi;
}();

exports["default"] = FunctionsApi;