"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _Invitation = _interopRequireDefault(require("../model/Invitation"));

var _InvitationUpdate = _interopRequireDefault(require("../model/InvitationUpdate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Invitations service.
* @module api/InvitationsApi
* @version 1.0.0
*/
var InvitationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InvitationsApi. 
  * @alias module:api/InvitationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InvitationsApi(apiClient) {
    _classCallCheck(this, InvitationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete an Invitation sent from Space
   * @param {String} space 
   * @param {String} invitationId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(InvitationsApi, [{
    key: "deleteSentInvitationWithHttpInfo",
    value: function deleteSentInvitationWithHttpInfo(space, invitationId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling deleteSentInvitation");
      } // verify the required parameter 'invitationId' is set


      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling deleteSentInvitation");
      }

      var pathParams = {
        'space': space,
        'invitation_id': invitationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/spaces/{space}/invitations/{invitation_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete an Invitation sent from Space
     * @param {String} space 
     * @param {String} invitationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteSentInvitation",
    value: function deleteSentInvitation(space, invitationId) {
      return this.deleteSentInvitationWithHttpInfo(space, invitationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get an Invitation sent from a Space
     * @param {String} space 
     * @param {String} invitationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Invitation} and HTTP response
     */

  }, {
    key: "getSentInvitationWithHttpInfo",
    value: function getSentInvitationWithHttpInfo(space, invitationId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling getSentInvitation");
      } // verify the required parameter 'invitationId' is set


      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling getSentInvitation");
      }

      var pathParams = {
        'space': space,
        'invitation_id': invitationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Invitation["default"];
      return this.apiClient.callApi('/spaces/{space}/invitations/{invitation_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get an Invitation sent from a Space
     * @param {String} space 
     * @param {String} invitationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Invitation}
     */

  }, {
    key: "getSentInvitation",
    value: function getSentInvitation(space, invitationId) {
      return this.getSentInvitationWithHttpInfo(space, invitationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Invitations sent from a Space
     * @param {String} space 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Invitation>} and HTTP response
     */

  }, {
    key: "listSentInvitationsWithHttpInfo",
    value: function listSentInvitationsWithHttpInfo(space) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listSentInvitations");
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
      var returnType = [_Invitation["default"]];
      return this.apiClient.callApi('/spaces/{space}/invitations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Invitations sent from a Space
     * @param {String} space 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Invitation>}
     */

  }, {
    key: "listSentInvitations",
    value: function listSentInvitations(space) {
      return this.listSentInvitationsWithHttpInfo(space).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an Invitation
     * @param {String} space 
     * @param {String} invitationId 
     * @param {module:model/InvitationUpdate} invitationUpdate Body of a the updated Invitation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Invitation} and HTTP response
     */

  }, {
    key: "updateSentInvitationWithHttpInfo",
    value: function updateSentInvitationWithHttpInfo(space, invitationId, invitationUpdate) {
      var postBody = invitationUpdate; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling updateSentInvitation");
      } // verify the required parameter 'invitationId' is set


      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling updateSentInvitation");
      } // verify the required parameter 'invitationUpdate' is set


      if (invitationUpdate === undefined || invitationUpdate === null) {
        throw new Error("Missing the required parameter 'invitationUpdate' when calling updateSentInvitation");
      }

      var pathParams = {
        'space': space,
        'invitation_id': invitationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Invitation["default"];
      return this.apiClient.callApi('/spaces/{space}/invitations/{invitation_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update an Invitation
     * @param {String} space 
     * @param {String} invitationId 
     * @param {module:model/InvitationUpdate} invitationUpdate Body of a the updated Invitation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Invitation}
     */

  }, {
    key: "updateSentInvitation",
    value: function updateSentInvitation(space, invitationId, invitationUpdate) {
      return this.updateSentInvitationWithHttpInfo(space, invitationId, invitationUpdate).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return InvitationsApi;
}();

exports["default"] = InvitationsApi;