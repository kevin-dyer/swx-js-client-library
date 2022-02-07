"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TokenResponse = _interopRequireDefault(require("../model/TokenResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* OAuth service.
* @module api/OAuthApi
* @version 1.0.0
*/
var OAuthApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OAuthApi. 
  * @alias module:api/OAuthApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OAuthApi(apiClient) {
    _classCallCheck(this, OAuthApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * OAuth 2.0 Authorize Endpoint
   * @param {String} clientId Every client (**Website (MVC)**, **Website (SPA)**, **Mobile App**, **Client (Service)**...) is identified by a client ID. <br/> Unlike a client secret, the client ID is a public value that does not have to be protected. 
   * @param {String} responseType Expected response type: - `code` - `token` - `id_token` - ***hybrid*** (The follow keys are admited):   - `code` + `token`   - `code` + `token` + `id_token`   - `code` + `id_token` 
   * @param {String} responseMode Expected response mode (`query`, `form_post`, `fragment`)
   * @param {String} redirectUri It tells the issuer where to redirect the browser back to when the flow is done.
   * @param {String} state The `state` is an value that is carried through the whole flow and returned to the client.<br/> This is used to prevent [CSRF attacks](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29).
   * @param {String} scope Clients can request **additional information** or **'permissions'** via `scopes`.<br/> Additionally, we have pre-defined OAuth 2.0 Scope values: - `offline_access`: Include this scope if you wish to receive a refresh token. - `offline`: alias for `offline_access`. - `openid`: Include this scope if you wish to perform an OpenID Connect request. 
   * @param {String} codeChallengeMethod For [**PKCE**](https://tools.ietf.org/html/rfc7636) is **required**!!, can be `plain` (raw [***code_verifier***](https://tools.ietf.org/html/rfc7636#page-8) **NOT** recommended) or `S256` (***BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))***).
   * @param {String} codeChallenge For [**PKCE**](https://tools.ietf.org/html/rfc7636) is **required**!!, a challenge derived from the [***code_verifier***](https://tools.ietf.org/html/rfc7636#page-8) to be verified against later:       <br/>       - `code_verifier`: ***High-entropy cryptographic random STRING using the unreserved characters [A-Z] / [a-z] / [0-9] / \"-\" / \".\" / \"_\" / \"~\",         <br/>with a minimum length of 43 characters and a maximum length of 128 characters.*** 
   * @param {Object} opts Optional parameters
   * @param {String} opts.nonce A **nonce** (or number used once) is a random value that is used to prevent [replay attacks](https://en.wikipedia.org/wiki/Replay_attack).
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(OAuthApi, [{
    key: "getOauth2AuthWithHttpInfo",
    value: function getOauth2AuthWithHttpInfo(clientId, responseType, responseMode, redirectUri, state, scope, codeChallengeMethod, codeChallenge, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getOauth2Auth");
      } // verify the required parameter 'responseType' is set


      if (responseType === undefined || responseType === null) {
        throw new Error("Missing the required parameter 'responseType' when calling getOauth2Auth");
      } // verify the required parameter 'responseMode' is set


      if (responseMode === undefined || responseMode === null) {
        throw new Error("Missing the required parameter 'responseMode' when calling getOauth2Auth");
      } // verify the required parameter 'redirectUri' is set


      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling getOauth2Auth");
      } // verify the required parameter 'state' is set


      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling getOauth2Auth");
      } // verify the required parameter 'scope' is set


      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling getOauth2Auth");
      } // verify the required parameter 'codeChallengeMethod' is set


      if (codeChallengeMethod === undefined || codeChallengeMethod === null) {
        throw new Error("Missing the required parameter 'codeChallengeMethod' when calling getOauth2Auth");
      } // verify the required parameter 'codeChallenge' is set


      if (codeChallenge === undefined || codeChallenge === null) {
        throw new Error("Missing the required parameter 'codeChallenge' when calling getOauth2Auth");
      }

      var pathParams = {};
      var queryParams = {
        'client_id': clientId,
        'response_type': responseType,
        'response_mode': responseMode,
        'redirect_uri': redirectUri,
        'state': state,
        'scope': scope,
        'nonce': opts['nonce'],
        'code_challenge_method': codeChallengeMethod,
        'code_challenge': codeChallenge
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/oauth2/auth', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * OAuth 2.0 Authorize Endpoint
     * @param {String} clientId Every client (**Website (MVC)**, **Website (SPA)**, **Mobile App**, **Client (Service)**...) is identified by a client ID. <br/> Unlike a client secret, the client ID is a public value that does not have to be protected. 
     * @param {String} responseType Expected response type: - `code` - `token` - `id_token` - ***hybrid*** (The follow keys are admited):   - `code` + `token`   - `code` + `token` + `id_token`   - `code` + `id_token` 
     * @param {String} responseMode Expected response mode (`query`, `form_post`, `fragment`)
     * @param {String} redirectUri It tells the issuer where to redirect the browser back to when the flow is done.
     * @param {String} state The `state` is an value that is carried through the whole flow and returned to the client.<br/> This is used to prevent [CSRF attacks](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29).
     * @param {String} scope Clients can request **additional information** or **'permissions'** via `scopes`.<br/> Additionally, we have pre-defined OAuth 2.0 Scope values: - `offline_access`: Include this scope if you wish to receive a refresh token. - `offline`: alias for `offline_access`. - `openid`: Include this scope if you wish to perform an OpenID Connect request. 
     * @param {String} codeChallengeMethod For [**PKCE**](https://tools.ietf.org/html/rfc7636) is **required**!!, can be `plain` (raw [***code_verifier***](https://tools.ietf.org/html/rfc7636#page-8) **NOT** recommended) or `S256` (***BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))***).
     * @param {String} codeChallenge For [**PKCE**](https://tools.ietf.org/html/rfc7636) is **required**!!, a challenge derived from the [***code_verifier***](https://tools.ietf.org/html/rfc7636#page-8) to be verified against later:       <br/>       - `code_verifier`: ***High-entropy cryptographic random STRING using the unreserved characters [A-Z] / [a-z] / [0-9] / \"-\" / \".\" / \"_\" / \"~\",         <br/>with a minimum length of 43 characters and a maximum length of 128 characters.*** 
     * @param {Object} opts Optional parameters
     * @param {String} opts.nonce A **nonce** (or number used once) is a random value that is used to prevent [replay attacks](https://en.wikipedia.org/wiki/Replay_attack).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "getOauth2Auth",
    value: function getOauth2Auth(clientId, responseType, responseMode, redirectUri, state, scope, codeChallengeMethod, codeChallenge, opts) {
      return this.getOauth2AuthWithHttpInfo(clientId, responseType, responseMode, redirectUri, state, scope, codeChallengeMethod, codeChallenge, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * OAuth 2.0 Token Endpoint
     * The client makes a request to the token endpoint by sending the following parameters using the `application/x-www-form-urlencoded` HTTP request entity-body.<br/> To perform this operation, you must be authenticated by means of one of the following methods: `basic`, `oauth2`. 
     * @param {module:model/String} grantType Grants Types according to Flows: - For **Authorization Code** and **PKCE** is required `authorization_code`.<br/> - For **Client Credentials** is required `client_credentials`.<br/> - For **Refresh Grant** is required `refresh_token`. 
     * @param {String} clientId Need for **Authorization Code**, **PKCE** and **Client Credentials**!!<br/> Every client (**Website (MVC)**, **Website (SPA)**, **Mobile App**, **Client (Service)**...) is identified by a client ID.<br/> Unlike a client secret, the client ID is a public value that does not have to be protected. 
     * @param {String} clientSecret Need for **Client Credentials**!!<br/> The `client_secret` is a secret known only to the application and the authorization server. It must be sufficiently random to not be guessable. 
     * @param {String} code Need for **Authorization Code** and **PKCE**!!<br/> It is the authorization code generated by the authorization server with **\\\"Authorization Code\\\"** & **\\\"PKCE\\\"** flows.<br/> This code is relatively short-lived depending on the OAuth service config. 
     * @param {String} codeVerifier Need for **Authorization Code** and **PKCE**!!<br/> `code_verifier` = ***high-entropy cryptographic random STRING using the                     unreserved characters [A-Z] / [a-z] / [0-9] / \\\"-\\\" / \\\".\\\" / \\\"_\\\" / \\\"~\\\", with a minimum length                     of 43 characters and a maximum length of 128 characters.*** 
     * @param {String} refreshToken Need for **Refresh Grant**!!<br/> The presence of the refresh token means that the access token will expire and you’ll be able to get a new one without the user’s interaction.<br/> To use the refresh token, make a POST request to the service’s token endpoint with `grant_type=refresh_token`, and include the refresh token as well as the client credentials. 
     * @param {String} redirectUri Need for **Authorization Code** and **PKCE**!!<br/> Tells the authorization server where to send the user back to after they approve the request. ***If the client does not have it enabled, an error is returned.*** 
     * @param {String} scope Need for **Authorization Code**, **PKCE** and **Client Credentials**!!<br/> Scope is a way to limit an app’s access to a user’s data. Rather than granting complete access to a user’s account, it is often useful to give apps a way to request a more limited scope of what they are allowed to do on behalf of a user.<br/> Additionally, we have pre-defined OAuth 2.0 Scope values: - `offline_access`: Include this scope if you wish to receive a refresh token. - `offline`: alias for `offline_access`. - `openid`: Include this scope if you wish to perform an OpenID Connect request. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenResponse} and HTTP response
     */

  }, {
    key: "getOauth2TokenWithHttpInfo",
    value: function getOauth2TokenWithHttpInfo(grantType, clientId, clientSecret, code, codeVerifier, refreshToken, redirectUri, scope) {
      var postBody = null; // verify the required parameter 'grantType' is set

      if (grantType === undefined || grantType === null) {
        throw new Error("Missing the required parameter 'grantType' when calling getOauth2Token");
      } // verify the required parameter 'clientId' is set


      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getOauth2Token");
      } // verify the required parameter 'clientSecret' is set


      if (clientSecret === undefined || clientSecret === null) {
        throw new Error("Missing the required parameter 'clientSecret' when calling getOauth2Token");
      } // verify the required parameter 'code' is set


      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getOauth2Token");
      } // verify the required parameter 'codeVerifier' is set


      if (codeVerifier === undefined || codeVerifier === null) {
        throw new Error("Missing the required parameter 'codeVerifier' when calling getOauth2Token");
      } // verify the required parameter 'refreshToken' is set


      if (refreshToken === undefined || refreshToken === null) {
        throw new Error("Missing the required parameter 'refreshToken' when calling getOauth2Token");
      } // verify the required parameter 'redirectUri' is set


      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling getOauth2Token");
      } // verify the required parameter 'scope' is set


      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling getOauth2Token");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'grant_type': grantType,
        'client_id': clientId,
        'client_secret': clientSecret,
        'code': code,
        'code_verifier': codeVerifier,
        'refresh_token': refreshToken,
        'redirect_uri': redirectUri,
        'scope': scope
      };
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _TokenResponse["default"];
      return this.apiClient.callApi('/oauth2/token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * OAuth 2.0 Token Endpoint
     * The client makes a request to the token endpoint by sending the following parameters using the `application/x-www-form-urlencoded` HTTP request entity-body.<br/> To perform this operation, you must be authenticated by means of one of the following methods: `basic`, `oauth2`. 
     * @param {module:model/String} grantType Grants Types according to Flows: - For **Authorization Code** and **PKCE** is required `authorization_code`.<br/> - For **Client Credentials** is required `client_credentials`.<br/> - For **Refresh Grant** is required `refresh_token`. 
     * @param {String} clientId Need for **Authorization Code**, **PKCE** and **Client Credentials**!!<br/> Every client (**Website (MVC)**, **Website (SPA)**, **Mobile App**, **Client (Service)**...) is identified by a client ID.<br/> Unlike a client secret, the client ID is a public value that does not have to be protected. 
     * @param {String} clientSecret Need for **Client Credentials**!!<br/> The `client_secret` is a secret known only to the application and the authorization server. It must be sufficiently random to not be guessable. 
     * @param {String} code Need for **Authorization Code** and **PKCE**!!<br/> It is the authorization code generated by the authorization server with **\\\"Authorization Code\\\"** & **\\\"PKCE\\\"** flows.<br/> This code is relatively short-lived depending on the OAuth service config. 
     * @param {String} codeVerifier Need for **Authorization Code** and **PKCE**!!<br/> `code_verifier` = ***high-entropy cryptographic random STRING using the                     unreserved characters [A-Z] / [a-z] / [0-9] / \\\"-\\\" / \\\".\\\" / \\\"_\\\" / \\\"~\\\", with a minimum length                     of 43 characters and a maximum length of 128 characters.*** 
     * @param {String} refreshToken Need for **Refresh Grant**!!<br/> The presence of the refresh token means that the access token will expire and you’ll be able to get a new one without the user’s interaction.<br/> To use the refresh token, make a POST request to the service’s token endpoint with `grant_type=refresh_token`, and include the refresh token as well as the client credentials. 
     * @param {String} redirectUri Need for **Authorization Code** and **PKCE**!!<br/> Tells the authorization server where to send the user back to after they approve the request. ***If the client does not have it enabled, an error is returned.*** 
     * @param {String} scope Need for **Authorization Code**, **PKCE** and **Client Credentials**!!<br/> Scope is a way to limit an app’s access to a user’s data. Rather than granting complete access to a user’s account, it is often useful to give apps a way to request a more limited scope of what they are allowed to do on behalf of a user.<br/> Additionally, we have pre-defined OAuth 2.0 Scope values: - `offline_access`: Include this scope if you wish to receive a refresh token. - `offline`: alias for `offline_access`. - `openid`: Include this scope if you wish to perform an OpenID Connect request. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenResponse}
     */

  }, {
    key: "getOauth2Token",
    value: function getOauth2Token(grantType, clientId, clientSecret, code, codeVerifier, refreshToken, redirectUri, scope) {
      return this.getOauth2TokenWithHttpInfo(grantType, clientId, clientSecret, code, codeVerifier, refreshToken, redirectUri, scope).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Initialize & Complete User Logout
     * This endpoint initiates and completes user logout and initiates OpenID Connect Front-/Back-channel logout.<br/> A logout request may be initiated by the OpenID Provider (OP - **you**) or by the Relying Party (RP - the OAuth2 Client): - The OP-initiated flow does not need an `id_token_hint`, and it may neither define a state nor a `post_logout_redirect_uri`. (**You need a valid session cookie!!**) - The RP-initiated flow needs an `id_token_hint` and may optionally define state and `post_logout_redirect_uri`.<br/> Before the logout is completed, the user is redirected to the Logout UI to confirm the logout request.<br/> There are several possible pathways for executing this flow, explained in the following diagram:<br/><br/> <center><img width=\"60%\" src=\"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gICAgSVtHRVQgL29hdXRoMi9zZXNzaW9uL2xvZ291dF0tLT58aGFzIGlkX3Rva2VuX2hpbnQqfFJQSVtSUC1pbml0aWF0ZWQgbG9nb3V0XTtcbiAgICBJW0dFVCAvb2F1dGgyL3Nlc3Npb24vbG9nb3V0XS0tPnxkb2VzIG5vdCBoYXZlIGlkX3Rva2VuX2hpbnQqfE9QSVtPUC1pbml0aWF0ZWQgbG9nb3V0XVxuT1BJLS0-fGhhcyBzdGF0ZSp8RVtFcnJvcl1cbk9QSS0tPnxoYXMgcG9zdF9sb2dvdXRfdXJpKnxFW0Vycm9yXVxuT1BJLS0-fGhhcyB2YWxpZCBzZXNzaW9uIGNvb2tpZXxMVUlbTG9nb3V0IFVJIHdpdGggP2xvZ291dF9jaGFsbGVuZ2U9Li4uXVxuT1BJLS0-fGhhcyBubyB2YWxpZCBzZXNpb24gY29va2llfEVuZFtSZXR1cm4gdG8gcG9zdF9sb2dvdXRfdXJsKioqXVxuUlBJLS0-fGhhcyBhY3RpdmUgc2Vzc2lvbioqKip8TFVJXG5SUEktLT58bm8gYWN0aXZlIHNlc3Npb24qKioqfFJQSTJcbkxVSS0tPnx2ZXJpZnkgbG9nb3V0IHJlcXVlc3R8TFVJXG5MVUktLT58cmVkaXJlY3Qgd2l0aCBsb2dvdXRfdmVyaWZpZXIqfFJQSTJbIC9vYXV0aDIvc2Vzc2lvbnMvbG9nb3V0P2xvZ291dF92ZXJpZmllcj0uLi5dXG5SUEkyLS0-fGV4ZWN1dGUgZnJvbnQvYmFja2NoYW5uZWwgbG9nb3V0LCByZXZva2UgY29va2llfFJQSTJcblJQSTItLT58UmVkaXJlY3QgdG98RW5kIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0\"></center><br/> **Legend**: - **\\***: This is a query parameter, for example <b>/oauth2/sessions/logout?id_token_hint=...</b> - **\\*\\*** Here, an **\"active session\"** implies that there has been at least one login request completed with `remember: true` for that user. If that's not the case, the system **\"does not know\"** what to do (because there has never been a session issued that was remembered - hence it's not possible to forget it). - **\\*\\*\\***: Here, the **\"valid session cookies\"** implies that the browser has a valid authentication cookie when calling `/oauth2/sessions/logout`. - **\\*\\*\\*\\***: The `post_logout_redirect` defaults to the configuration value of `urls.post_logout_redirect`. If it's an RP-initiated flow and a `post_logout_redirect_uri` was set and that URL is in the array of the OAuth2 Client's `urls.post_logout_redirect`, the browser will be redirected there instead. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.idTokenHint When the user is redirected to the logout endpoint in a web site or similar, they will be prompted if they really want to sign-out.<br/> This prompt can be bypassed by a client sending the original `id_token` received from authentication.<br/> This is passed as a query string parameter called `id_token_hint`. 
     * @param {String} opts.postLogoutRedirectUri If a valid `id_token_hint` is passed, then the client may also send a `post_logout_redirect_uri` parameter.<br/> This can be used to allow the user to redirect back to the client after sign-out.<br/> The value must match one of the client’s pre-configured `post_logout_redirect_uri`. 
     * @param {String} opts.state The `state` is an value that is carried through the whole flow and returned to the client.<br/> This is used to prevent [CSRF attacks](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "getOpenIdSessionsLogoutWithHttpInfo",
    value: function getOpenIdSessionsLogoutWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'id_token_hint': opts['idTokenHint'],
        'post_logout_redirect_uri': opts['postLogoutRedirectUri'],
        'state': opts['state']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/oauth2/sessions/logout', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Initialize & Complete User Logout
     * This endpoint initiates and completes user logout and initiates OpenID Connect Front-/Back-channel logout.<br/> A logout request may be initiated by the OpenID Provider (OP - **you**) or by the Relying Party (RP - the OAuth2 Client): - The OP-initiated flow does not need an `id_token_hint`, and it may neither define a state nor a `post_logout_redirect_uri`. (**You need a valid session cookie!!**) - The RP-initiated flow needs an `id_token_hint` and may optionally define state and `post_logout_redirect_uri`.<br/> Before the logout is completed, the user is redirected to the Logout UI to confirm the logout request.<br/> There are several possible pathways for executing this flow, explained in the following diagram:<br/><br/> <center><img width=\"60%\" src=\"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gICAgSVtHRVQgL29hdXRoMi9zZXNzaW9uL2xvZ291dF0tLT58aGFzIGlkX3Rva2VuX2hpbnQqfFJQSVtSUC1pbml0aWF0ZWQgbG9nb3V0XTtcbiAgICBJW0dFVCAvb2F1dGgyL3Nlc3Npb24vbG9nb3V0XS0tPnxkb2VzIG5vdCBoYXZlIGlkX3Rva2VuX2hpbnQqfE9QSVtPUC1pbml0aWF0ZWQgbG9nb3V0XVxuT1BJLS0-fGhhcyBzdGF0ZSp8RVtFcnJvcl1cbk9QSS0tPnxoYXMgcG9zdF9sb2dvdXRfdXJpKnxFW0Vycm9yXVxuT1BJLS0-fGhhcyB2YWxpZCBzZXNzaW9uIGNvb2tpZXxMVUlbTG9nb3V0IFVJIHdpdGggP2xvZ291dF9jaGFsbGVuZ2U9Li4uXVxuT1BJLS0-fGhhcyBubyB2YWxpZCBzZXNpb24gY29va2llfEVuZFtSZXR1cm4gdG8gcG9zdF9sb2dvdXRfdXJsKioqXVxuUlBJLS0-fGhhcyBhY3RpdmUgc2Vzc2lvbioqKip8TFVJXG5SUEktLT58bm8gYWN0aXZlIHNlc3Npb24qKioqfFJQSTJcbkxVSS0tPnx2ZXJpZnkgbG9nb3V0IHJlcXVlc3R8TFVJXG5MVUktLT58cmVkaXJlY3Qgd2l0aCBsb2dvdXRfdmVyaWZpZXIqfFJQSTJbIC9vYXV0aDIvc2Vzc2lvbnMvbG9nb3V0P2xvZ291dF92ZXJpZmllcj0uLi5dXG5SUEkyLS0-fGV4ZWN1dGUgZnJvbnQvYmFja2NoYW5uZWwgbG9nb3V0LCByZXZva2UgY29va2llfFJQSTJcblJQSTItLT58UmVkaXJlY3QgdG98RW5kIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0\"></center><br/> **Legend**: - **\\***: This is a query parameter, for example <b>/oauth2/sessions/logout?id_token_hint=...</b> - **\\*\\*** Here, an **\"active session\"** implies that there has been at least one login request completed with `remember: true` for that user. If that's not the case, the system **\"does not know\"** what to do (because there has never been a session issued that was remembered - hence it's not possible to forget it). - **\\*\\*\\***: Here, the **\"valid session cookies\"** implies that the browser has a valid authentication cookie when calling `/oauth2/sessions/logout`. - **\\*\\*\\*\\***: The `post_logout_redirect` defaults to the configuration value of `urls.post_logout_redirect`. If it's an RP-initiated flow and a `post_logout_redirect_uri` was set and that URL is in the array of the OAuth2 Client's `urls.post_logout_redirect`, the browser will be redirected there instead. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.idTokenHint When the user is redirected to the logout endpoint in a web site or similar, they will be prompted if they really want to sign-out.<br/> This prompt can be bypassed by a client sending the original `id_token` received from authentication.<br/> This is passed as a query string parameter called `id_token_hint`. 
     * @param {String} opts.postLogoutRedirectUri If a valid `id_token_hint` is passed, then the client may also send a `post_logout_redirect_uri` parameter.<br/> This can be used to allow the user to redirect back to the client after sign-out.<br/> The value must match one of the client’s pre-configured `post_logout_redirect_uri`. 
     * @param {String} opts.state The `state` is an value that is carried through the whole flow and returned to the client.<br/> This is used to prevent [CSRF attacks](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "getOpenIdSessionsLogout",
    value: function getOpenIdSessionsLogout(opts) {
      return this.getOpenIdSessionsLogoutWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the Payload of the ID Token.
     * This endpoint returns the payload of the ID Token, including the idTokenExtra values, of the provided OAuth 2.0 Access Token.<br/> **NOT all info of this example is really included, this endpoint is high customizable, this is need added in the backend!** 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "getOpenIdUserInfoWithHttpInfo",
    value: function getOpenIdUserInfoWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/jwt', 'application/json'];
      var returnType = null;
      return this.apiClient.callApi('/userinfo', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the Payload of the ID Token.
     * This endpoint returns the payload of the ID Token, including the idTokenExtra values, of the provided OAuth 2.0 Access Token.<br/> **NOT all info of this example is really included, this endpoint is high customizable, this is need added in the backend!** 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "getOpenIdUserInfo",
    value: function getOpenIdUserInfo() {
      return this.getOpenIdUserInfoWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Revoke a token (Access or Refresh)
     * Revoking a token (both `access` and `refresh`) means that the tokens will be ***invalid***.<br/> A revoked access token can no longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token.<br/> Revoking a refresh token also invalidates the access token that was created with it.<br/><br/> **A token may only be revoked by the client the token was generated for!!**: <br/> - This mean that you need put also in the body the keys `client_id` y `client secret`.' 
     * @param {String} token Token to revoke and invalidate. 
     * @param {String} clientId Identifier of the client that generated the token to revoke. 
     * @param {String} clientSecret Secret of the client that generated the token to revoke. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "postOauth2RevokeWithHttpInfo",
    value: function postOauth2RevokeWithHttpInfo(token, clientId, clientSecret) {
      var postBody = null; // verify the required parameter 'token' is set

      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling postOauth2Revoke");
      } // verify the required parameter 'clientId' is set


      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling postOauth2Revoke");
      } // verify the required parameter 'clientSecret' is set


      if (clientSecret === undefined || clientSecret === null) {
        throw new Error("Missing the required parameter 'clientSecret' when calling postOauth2Revoke");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'token': token,
        'client_id': clientId,
        'client_secret': clientSecret
      };
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/oauth2/revoke', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Revoke a token (Access or Refresh)
     * Revoking a token (both `access` and `refresh`) means that the tokens will be ***invalid***.<br/> A revoked access token can no longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token.<br/> Revoking a refresh token also invalidates the access token that was created with it.<br/><br/> **A token may only be revoked by the client the token was generated for!!**: <br/> - This mean that you need put also in the body the keys `client_id` y `client secret`.' 
     * @param {String} token Token to revoke and invalidate. 
     * @param {String} clientId Identifier of the client that generated the token to revoke. 
     * @param {String} clientSecret Secret of the client that generated the token to revoke. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "postOauth2Revoke",
    value: function postOauth2Revoke(token, clientId, clientSecret) {
      return this.postOauth2RevokeWithHttpInfo(token, clientId, clientSecret).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return OAuthApi;
}();

exports["default"] = OAuthApi;