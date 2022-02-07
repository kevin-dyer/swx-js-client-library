"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _User = _interopRequireDefault(require("../model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 1.0.0
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete a User from a Space
   * @param {String} space 
   * @param {String} user User ID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(UsersApi, [{
    key: "deleteUserFromSpaceWithHttpInfo",
    value: function deleteUserFromSpaceWithHttpInfo(space, user) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteUserFromSpace");
      } // verify the required parameter 'user' is set


      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling deleteUserFromSpace");
      }

      var pathParams = {
        'space': space,
        'user': user
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/spaces/{space}/users/{user}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a User from a Space
     * @param {String} space 
     * @param {String} user User ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteUserFromSpace",
    value: function deleteUserFromSpace(space, user) {
      return this.deleteUserFromSpaceWithHttpInfo(space, user).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a User from a Space
     * @param {String} space 
     * @param {String} user User ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */

  }, {
    key: "getUserFromSpaceWithHttpInfo",
    value: function getUserFromSpaceWithHttpInfo(space, user) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling getUserFromSpace");
      } // verify the required parameter 'user' is set


      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling getUserFromSpace");
      }

      var pathParams = {
        'space': space,
        'user': user
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/spaces/{space}/users/{user}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a User from a Space
     * @param {String} space 
     * @param {String} user User ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */

  }, {
    key: "getUserFromSpace",
    value: function getUserFromSpace(space, user) {
      return this.getUserFromSpaceWithHttpInfo(space, user).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Users from a Space
     * @param {String} space 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/User>} and HTTP response
     */

  }, {
    key: "listUsersFromSpaceWithHttpInfo",
    value: function listUsersFromSpaceWithHttpInfo(space) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listUsersFromSpace");
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
      var returnType = [_User["default"]];
      return this.apiClient.callApi('/spaces/{space}/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Users from a Space
     * @param {String} space 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/User>}
     */

  }, {
    key: "listUsersFromSpace",
    value: function listUsersFromSpace(space) {
      return this.listUsersFromSpaceWithHttpInfo(space).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;