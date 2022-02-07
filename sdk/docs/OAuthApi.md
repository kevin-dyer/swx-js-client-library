# UsersApiReference.OAuthApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOauth2Auth**](OAuthApi.md#getOauth2Auth) | **GET** /oauth2/auth | OAuth 2.0 Authorize Endpoint
[**getOauth2Token**](OAuthApi.md#getOauth2Token) | **POST** /oauth2/token | OAuth 2.0 Token Endpoint
[**getOpenIdSessionsLogout**](OAuthApi.md#getOpenIdSessionsLogout) | **GET** /oauth2/sessions/logout | Initialize &amp; Complete User Logout
[**getOpenIdUserInfo**](OAuthApi.md#getOpenIdUserInfo) | **GET** /userinfo | Get the Payload of the ID Token.
[**postOauth2Revoke**](OAuthApi.md#postOauth2Revoke) | **POST** /oauth2/revoke | Revoke a token (Access or Refresh)



## getOauth2Auth

> getOauth2Auth(clientId, responseType, responseMode, redirectUri, state, scope, codeChallengeMethod, codeChallenge, opts)

OAuth 2.0 Authorize Endpoint

### Example

```javascript
import UsersApiReference from 'users_api_reference';
let defaultClient = UsersApiReference.ApiClient.instance;
// Configure Bearer (Opaque JWT) access token for authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: OAuth2AuthorizationCode
let OAuth2AuthorizationCode = defaultClient.authentications['OAuth2AuthorizationCode'];
OAuth2AuthorizationCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2ClientCredentials
let OAuth2ClientCredentials = defaultClient.authentications['OAuth2ClientCredentials'];
OAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer (Opaque JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new UsersApiReference.OAuthApi();
let clientId = my-client-id; // String | Every client (**Website (MVC)**, **Website (SPA)**, **Mobile App**, **Client (Service)**...) is identified by a client ID. <br/> Unlike a client secret, the client ID is a public value that does not have to be protected. 
let responseType = code; // String | Expected response type: - `code` - `token` - `id_token` - ***hybrid*** (The follow keys are admited):   - `code` + `token`   - `code` + `token` + `id_token`   - `code` + `id_token` 
let responseMode = form_post; // String | Expected response mode (`query`, `form_post`, `fragment`)
let redirectUri = https://oauthdebugger.com/debug; // String | It tells the issuer where to redirect the browser back to when the flow is done.
let state = 44f8343d-6f33-4f1e-b247-e91c535e3296; // String | The `state` is an value that is carried through the whole flow and returned to the client.<br/> This is used to prevent [CSRF attacks](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29).
let scope = openid offline; // String | Clients can request **additional information** or **'permissions'** via `scopes`.<br/> Additionally, we have pre-defined OAuth 2.0 Scope values: - `offline_access`: Include this scope if you wish to receive a refresh token. - `offline`: alias for `offline_access`. - `openid`: Include this scope if you wish to perform an OpenID Connect request. 
let codeChallengeMethod = S256; // String | For [**PKCE**](https://tools.ietf.org/html/rfc7636) is **required**!!, can be `plain` (raw [***code_verifier***](https://tools.ietf.org/html/rfc7636#page-8) **NOT** recommended) or `S256` (***BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))***).
let codeChallenge = E3gptgCg6douTv-FoV2tEbTulu0F9yCLURgDX-flOZM; // String | For [**PKCE**](https://tools.ietf.org/html/rfc7636) is **required**!!, a challenge derived from the [***code_verifier***](https://tools.ietf.org/html/rfc7636#page-8) to be verified against later:       <br/>       - `code_verifier`: ***High-entropy cryptographic random STRING using the unreserved characters [A-Z] / [a-z] / [0-9] / \"-\" / \".\" / \"_\" / \"~\",         <br/>with a minimum length of 43 characters and a maximum length of 128 characters.*** 
let opts = {
  'nonce': 4g7fvh6lhli // String | A **nonce** (or number used once) is a random value that is used to prevent [replay attacks](https://en.wikipedia.org/wiki/Replay_attack).
};
apiInstance.getOauth2Auth(clientId, responseType, responseMode, redirectUri, state, scope, codeChallengeMethod, codeChallenge, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Every client (**Website (MVC)**, **Website (SPA)**, **Mobile App**, **Client (Service)**...) is identified by a client ID. &lt;br/&gt; Unlike a client secret, the client ID is a public value that does not have to be protected.  | 
 **responseType** | **String**| Expected response type: - &#x60;code&#x60; - &#x60;token&#x60; - &#x60;id_token&#x60; - ***hybrid*** (The follow keys are admited):   - &#x60;code&#x60; + &#x60;token&#x60;   - &#x60;code&#x60; + &#x60;token&#x60; + &#x60;id_token&#x60;   - &#x60;code&#x60; + &#x60;id_token&#x60;  | 
 **responseMode** | **String**| Expected response mode (&#x60;query&#x60;, &#x60;form_post&#x60;, &#x60;fragment&#x60;) | 
 **redirectUri** | **String**| It tells the issuer where to redirect the browser back to when the flow is done. | 
 **state** | **String**| The &#x60;state&#x60; is an value that is carried through the whole flow and returned to the client.&lt;br/&gt; This is used to prevent [CSRF attacks](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29). | 
 **scope** | **String**| Clients can request **additional information** or **&#39;permissions&#39;** via &#x60;scopes&#x60;.&lt;br/&gt; Additionally, we have pre-defined OAuth 2.0 Scope values: - &#x60;offline_access&#x60;: Include this scope if you wish to receive a refresh token. - &#x60;offline&#x60;: alias for &#x60;offline_access&#x60;. - &#x60;openid&#x60;: Include this scope if you wish to perform an OpenID Connect request.  | 
 **codeChallengeMethod** | **String**| For [**PKCE**](https://tools.ietf.org/html/rfc7636) is **required**!!, can be &#x60;plain&#x60; (raw [***code_verifier***](https://tools.ietf.org/html/rfc7636#page-8) **NOT** recommended) or &#x60;S256&#x60; (***BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))***). | 
 **codeChallenge** | **String**| For [**PKCE**](https://tools.ietf.org/html/rfc7636) is **required**!!, a challenge derived from the [***code_verifier***](https://tools.ietf.org/html/rfc7636#page-8) to be verified against later:       &lt;br/&gt;       - &#x60;code_verifier&#x60;: ***High-entropy cryptographic random STRING using the unreserved characters [A-Z] / [a-z] / [0-9] / \&quot;-\&quot; / \&quot;.\&quot; / \&quot;_\&quot; / \&quot;~\&quot;,         &lt;br/&gt;with a minimum length of 43 characters and a maximum length of 128 characters.***  | 
 **nonce** | **String**| A **nonce** (or number used once) is a random value that is used to prevent [replay attacks](https://en.wikipedia.org/wiki/Replay_attack). | [optional] 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getOauth2Token

> TokenResponse getOauth2Token(grantType, clientId, clientSecret, code, codeVerifier, refreshToken, redirectUri, scope)

OAuth 2.0 Token Endpoint

The client makes a request to the token endpoint by sending the following parameters using the &#x60;application/x-www-form-urlencoded&#x60; HTTP request entity-body.&lt;br/&gt; To perform this operation, you must be authenticated by means of one of the following methods: &#x60;basic&#x60;, &#x60;oauth2&#x60;. 

### Example

```javascript
import UsersApiReference from 'users_api_reference';
let defaultClient = UsersApiReference.ApiClient.instance;
// Configure Bearer (Opaque JWT) access token for authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: OAuth2AuthorizationCode
let OAuth2AuthorizationCode = defaultClient.authentications['OAuth2AuthorizationCode'];
OAuth2AuthorizationCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2ClientCredentials
let OAuth2ClientCredentials = defaultClient.authentications['OAuth2ClientCredentials'];
OAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer (Opaque JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new UsersApiReference.OAuthApi();
let grantType = "grantType_example"; // String | Grants Types according to Flows: - For **Authorization Code** and **PKCE** is required `authorization_code`.<br/> - For **Client Credentials** is required `client_credentials`.<br/> - For **Refresh Grant** is required `refresh_token`. 
let clientId = "clientId_example"; // String | Need for **Authorization Code**, **PKCE** and **Client Credentials**!!<br/> Every client (**Website (MVC)**, **Website (SPA)**, **Mobile App**, **Client (Service)**...) is identified by a client ID.<br/> Unlike a client secret, the client ID is a public value that does not have to be protected. 
let clientSecret = "clientSecret_example"; // String | Need for **Client Credentials**!!<br/> The `client_secret` is a secret known only to the application and the authorization server. It must be sufficiently random to not be guessable. 
let code = "code_example"; // String | Need for **Authorization Code** and **PKCE**!!<br/> It is the authorization code generated by the authorization server with **\\\"Authorization Code\\\"** & **\\\"PKCE\\\"** flows.<br/> This code is relatively short-lived depending on the OAuth service config. 
let codeVerifier = "codeVerifier_example"; // String | Need for **Authorization Code** and **PKCE**!!<br/> `code_verifier` = ***high-entropy cryptographic random STRING using the                     unreserved characters [A-Z] / [a-z] / [0-9] / \\\"-\\\" / \\\".\\\" / \\\"_\\\" / \\\"~\\\", with a minimum length                     of 43 characters and a maximum length of 128 characters.*** 
let refreshToken = "refreshToken_example"; // String | Need for **Refresh Grant**!!<br/> The presence of the refresh token means that the access token will expire and you’ll be able to get a new one without the user’s interaction.<br/> To use the refresh token, make a POST request to the service’s token endpoint with `grant_type=refresh_token`, and include the refresh token as well as the client credentials. 
let redirectUri = "redirectUri_example"; // String | Need for **Authorization Code** and **PKCE**!!<br/> Tells the authorization server where to send the user back to after they approve the request. ***If the client does not have it enabled, an error is returned.*** 
let scope = "scope_example"; // String | Need for **Authorization Code**, **PKCE** and **Client Credentials**!!<br/> Scope is a way to limit an app’s access to a user’s data. Rather than granting complete access to a user’s account, it is often useful to give apps a way to request a more limited scope of what they are allowed to do on behalf of a user.<br/> Additionally, we have pre-defined OAuth 2.0 Scope values: - `offline_access`: Include this scope if you wish to receive a refresh token. - `offline`: alias for `offline_access`. - `openid`: Include this scope if you wish to perform an OpenID Connect request. 
apiInstance.getOauth2Token(grantType, clientId, clientSecret, code, codeVerifier, refreshToken, redirectUri, scope).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| Grants Types according to Flows: - For **Authorization Code** and **PKCE** is required &#x60;authorization_code&#x60;.&lt;br/&gt; - For **Client Credentials** is required &#x60;client_credentials&#x60;.&lt;br/&gt; - For **Refresh Grant** is required &#x60;refresh_token&#x60;.  | 
 **clientId** | **String**| Need for **Authorization Code**, **PKCE** and **Client Credentials**!!&lt;br/&gt; Every client (**Website (MVC)**, **Website (SPA)**, **Mobile App**, **Client (Service)**...) is identified by a client ID.&lt;br/&gt; Unlike a client secret, the client ID is a public value that does not have to be protected.  | 
 **clientSecret** | **String**| Need for **Client Credentials**!!&lt;br/&gt; The &#x60;client_secret&#x60; is a secret known only to the application and the authorization server. It must be sufficiently random to not be guessable.  | 
 **code** | **String**| Need for **Authorization Code** and **PKCE**!!&lt;br/&gt; It is the authorization code generated by the authorization server with **\\\&quot;Authorization Code\\\&quot;** &amp; **\\\&quot;PKCE\\\&quot;** flows.&lt;br/&gt; This code is relatively short-lived depending on the OAuth service config.  | 
 **codeVerifier** | **String**| Need for **Authorization Code** and **PKCE**!!&lt;br/&gt; &#x60;code_verifier&#x60; &#x3D; ***high-entropy cryptographic random STRING using the                     unreserved characters [A-Z] / [a-z] / [0-9] / \\\&quot;-\\\&quot; / \\\&quot;.\\\&quot; / \\\&quot;_\\\&quot; / \\\&quot;~\\\&quot;, with a minimum length                     of 43 characters and a maximum length of 128 characters.***  | 
 **refreshToken** | **String**| Need for **Refresh Grant**!!&lt;br/&gt; The presence of the refresh token means that the access token will expire and you’ll be able to get a new one without the user’s interaction.&lt;br/&gt; To use the refresh token, make a POST request to the service’s token endpoint with &#x60;grant_type&#x3D;refresh_token&#x60;, and include the refresh token as well as the client credentials.  | 
 **redirectUri** | **String**| Need for **Authorization Code** and **PKCE**!!&lt;br/&gt; Tells the authorization server where to send the user back to after they approve the request. ***If the client does not have it enabled, an error is returned.***  | 
 **scope** | **String**| Need for **Authorization Code**, **PKCE** and **Client Credentials**!!&lt;br/&gt; Scope is a way to limit an app’s access to a user’s data. Rather than granting complete access to a user’s account, it is often useful to give apps a way to request a more limited scope of what they are allowed to do on behalf of a user.&lt;br/&gt; Additionally, we have pre-defined OAuth 2.0 Scope values: - &#x60;offline_access&#x60;: Include this scope if you wish to receive a refresh token. - &#x60;offline&#x60;: alias for &#x60;offline_access&#x60;. - &#x60;openid&#x60;: Include this scope if you wish to perform an OpenID Connect request.  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## getOpenIdSessionsLogout

> getOpenIdSessionsLogout(opts)

Initialize &amp; Complete User Logout

This endpoint initiates and completes user logout and initiates OpenID Connect Front-/Back-channel logout.&lt;br/&gt; A logout request may be initiated by the OpenID Provider (OP - **you**) or by the Relying Party (RP - the OAuth2 Client): - The OP-initiated flow does not need an &#x60;id_token_hint&#x60;, and it may neither define a state nor a &#x60;post_logout_redirect_uri&#x60;. (**You need a valid session cookie!!**) - The RP-initiated flow needs an &#x60;id_token_hint&#x60; and may optionally define state and &#x60;post_logout_redirect_uri&#x60;.&lt;br/&gt; Before the logout is completed, the user is redirected to the Logout UI to confirm the logout request.&lt;br/&gt; There are several possible pathways for executing this flow, explained in the following diagram:&lt;br/&gt;&lt;br/&gt; &lt;center&gt;&lt;img width&#x3D;\&quot;60%\&quot; src&#x3D;\&quot;https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gICAgSVtHRVQgL29hdXRoMi9zZXNzaW9uL2xvZ291dF0tLT58aGFzIGlkX3Rva2VuX2hpbnQqfFJQSVtSUC1pbml0aWF0ZWQgbG9nb3V0XTtcbiAgICBJW0dFVCAvb2F1dGgyL3Nlc3Npb24vbG9nb3V0XS0tPnxkb2VzIG5vdCBoYXZlIGlkX3Rva2VuX2hpbnQqfE9QSVtPUC1pbml0aWF0ZWQgbG9nb3V0XVxuT1BJLS0-fGhhcyBzdGF0ZSp8RVtFcnJvcl1cbk9QSS0tPnxoYXMgcG9zdF9sb2dvdXRfdXJpKnxFW0Vycm9yXVxuT1BJLS0-fGhhcyB2YWxpZCBzZXNzaW9uIGNvb2tpZXxMVUlbTG9nb3V0IFVJIHdpdGggP2xvZ291dF9jaGFsbGVuZ2U9Li4uXVxuT1BJLS0-fGhhcyBubyB2YWxpZCBzZXNpb24gY29va2llfEVuZFtSZXR1cm4gdG8gcG9zdF9sb2dvdXRfdXJsKioqXVxuUlBJLS0-fGhhcyBhY3RpdmUgc2Vzc2lvbioqKip8TFVJXG5SUEktLT58bm8gYWN0aXZlIHNlc3Npb24qKioqfFJQSTJcbkxVSS0tPnx2ZXJpZnkgbG9nb3V0IHJlcXVlc3R8TFVJXG5MVUktLT58cmVkaXJlY3Qgd2l0aCBsb2dvdXRfdmVyaWZpZXIqfFJQSTJbIC9vYXV0aDIvc2Vzc2lvbnMvbG9nb3V0P2xvZ291dF92ZXJpZmllcj0uLi5dXG5SUEkyLS0-fGV4ZWN1dGUgZnJvbnQvYmFja2NoYW5uZWwgbG9nb3V0LCByZXZva2UgY29va2llfFJQSTJcblJQSTItLT58UmVkaXJlY3QgdG98RW5kIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0\&quot;&gt;&lt;/center&gt;&lt;br/&gt; **Legend**: - **\\***: This is a query parameter, for example &lt;b&gt;/oauth2/sessions/logout?id_token_hint&#x3D;...&lt;/b&gt; - **\\*\\*** Here, an **\&quot;active session\&quot;** implies that there has been at least one login request completed with &#x60;remember: true&#x60; for that user. If that&#39;s not the case, the system **\&quot;does not know\&quot;** what to do (because there has never been a session issued that was remembered - hence it&#39;s not possible to forget it). - **\\*\\*\\***: Here, the **\&quot;valid session cookies\&quot;** implies that the browser has a valid authentication cookie when calling &#x60;/oauth2/sessions/logout&#x60;. - **\\*\\*\\*\\***: The &#x60;post_logout_redirect&#x60; defaults to the configuration value of &#x60;urls.post_logout_redirect&#x60;. If it&#39;s an RP-initiated flow and a &#x60;post_logout_redirect_uri&#x60; was set and that URL is in the array of the OAuth2 Client&#39;s &#x60;urls.post_logout_redirect&#x60;, the browser will be redirected there instead. 

### Example

```javascript
import UsersApiReference from 'users_api_reference';
let defaultClient = UsersApiReference.ApiClient.instance;
// Configure Bearer (Opaque JWT) access token for authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: OAuth2AuthorizationCode
let OAuth2AuthorizationCode = defaultClient.authentications['OAuth2AuthorizationCode'];
OAuth2AuthorizationCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2ClientCredentials
let OAuth2ClientCredentials = defaultClient.authentications['OAuth2ClientCredentials'];
OAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer (Opaque JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new UsersApiReference.OAuthApi();
let opts = {
  'idTokenHint': eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOWdkazcifQ.ewogImlzcyI6ICJodHRw Oi8vc2VydmVyLmV4YW1wbGUuY29tIiwKICJzdWIiOiAiMjQ4Mjg5NzYxMDAxIiw KICJhdWQiOiAiczZCaGRSa3F0MyIsCiAibm9uY2UiOiAibi0wUzZfV3pBMk1qIi wKICJleHAiOiAxMzExMjgxOTcwLAogImlhdCI6IDEzMTEyODA5NzAKfQ.ggW8hZ 1EuVLuxNuuIJKX_V8a_OMXzR0EHR9R6jgdqrOOF4daGU96Sr_P6qJp6IcmD3HP9 9Obi1PRs-cwh3LO-p146waJ8IhehcwL7F09JdijmBqkvPeB2T9CJNqeGpe-gccM g4vfKjkM8FcGvnzZUN4_KSP0aAp1tOJ1zZwgjxqGByKHiOtX7TpdQyHE5lcMiKP XfEIQILVq0pc_E2DzL7emopWoaoZTF_m0_N0YzFC6g6EJbOEoRoSK5hoDalrcvR YLSrQAZZKflyuVCyixEoV9GfNQC3_osjzw2PAithfubEEBLuVVk4XUVrWOLrLl0 nx7RkKU8NXNHq-rvKMzqg, // String | When the user is redirected to the logout endpoint in a web site or similar, they will be prompted if they really want to sign-out.<br/> This prompt can be bypassed by a client sending the original `id_token` received from authentication.<br/> This is passed as a query string parameter called `id_token_hint`. 
  'postLogoutRedirectUri': http://localhost:8080/index.html, // String | If a valid `id_token_hint` is passed, then the client may also send a `post_logout_redirect_uri` parameter.<br/> This can be used to allow the user to redirect back to the client after sign-out.<br/> The value must match one of the client’s pre-configured `post_logout_redirect_uri`. 
  'state': 44f8343d-6f33-4f1e-b247-e91c535e3296 // String | The `state` is an value that is carried through the whole flow and returned to the client.<br/> This is used to prevent [CSRF attacks](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29).
};
apiInstance.getOpenIdSessionsLogout(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTokenHint** | **String**| When the user is redirected to the logout endpoint in a web site or similar, they will be prompted if they really want to sign-out.&lt;br/&gt; This prompt can be bypassed by a client sending the original &#x60;id_token&#x60; received from authentication.&lt;br/&gt; This is passed as a query string parameter called &#x60;id_token_hint&#x60;.  | [optional] 
 **postLogoutRedirectUri** | **String**| If a valid &#x60;id_token_hint&#x60; is passed, then the client may also send a &#x60;post_logout_redirect_uri&#x60; parameter.&lt;br/&gt; This can be used to allow the user to redirect back to the client after sign-out.&lt;br/&gt; The value must match one of the client’s pre-configured &#x60;post_logout_redirect_uri&#x60;.  | [optional] 
 **state** | **String**| The &#x60;state&#x60; is an value that is carried through the whole flow and returned to the client.&lt;br/&gt; This is used to prevent [CSRF attacks](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29). | [optional] 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getOpenIdUserInfo

> getOpenIdUserInfo()

Get the Payload of the ID Token.

This endpoint returns the payload of the ID Token, including the idTokenExtra values, of the provided OAuth 2.0 Access Token.&lt;br/&gt; **NOT all info of this example is really included, this endpoint is high customizable, this is need added in the backend!** 

### Example

```javascript
import UsersApiReference from 'users_api_reference';
let defaultClient = UsersApiReference.ApiClient.instance;
// Configure Bearer (Opaque JWT) access token for authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: OAuth2AuthorizationCode
let OAuth2AuthorizationCode = defaultClient.authentications['OAuth2AuthorizationCode'];
OAuth2AuthorizationCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2ClientCredentials
let OAuth2ClientCredentials = defaultClient.authentications['OAuth2ClientCredentials'];
OAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer (Opaque JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new UsersApiReference.OAuthApi();
apiInstance.getOpenIdUserInfo().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/jwt, application/json


## postOauth2Revoke

> postOauth2Revoke(token, clientId, clientSecret)

Revoke a token (Access or Refresh)

Revoking a token (both &#x60;access&#x60; and &#x60;refresh&#x60;) means that the tokens will be ***invalid***.&lt;br/&gt; A revoked access token can no longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token.&lt;br/&gt; Revoking a refresh token also invalidates the access token that was created with it.&lt;br/&gt;&lt;br/&gt; **A token may only be revoked by the client the token was generated for!!**: &lt;br/&gt; - This mean that you need put also in the body the keys &#x60;client_id&#x60; y &#x60;client secret&#x60;.&#39; 

### Example

```javascript
import UsersApiReference from 'users_api_reference';
let defaultClient = UsersApiReference.ApiClient.instance;
// Configure Bearer (Opaque JWT) access token for authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: OAuth2AuthorizationCode
let OAuth2AuthorizationCode = defaultClient.authentications['OAuth2AuthorizationCode'];
OAuth2AuthorizationCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2ClientCredentials
let OAuth2ClientCredentials = defaultClient.authentications['OAuth2ClientCredentials'];
OAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer (Opaque JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new UsersApiReference.OAuthApi();
let token = "token_example"; // String | Token to revoke and invalidate. 
let clientId = "clientId_example"; // String | Identifier of the client that generated the token to revoke. 
let clientSecret = "clientSecret_example"; // String | Secret of the client that generated the token to revoke. 
apiInstance.postOauth2Revoke(token, clientId, clientSecret).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token to revoke and invalidate.  | 
 **clientId** | **String**| Identifier of the client that generated the token to revoke.  | 
 **clientSecret** | **String**| Secret of the client that generated the token to revoke.  | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

