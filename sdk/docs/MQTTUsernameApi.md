# UsersApiReference.MQTTUsernameApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateMQTTpassword**](MQTTUsernameApi.md#updateMQTTpassword) | **PATCH** /spaces/{space}/mqtt/credentials-username/{mqtt-username} | Update MQTT password



## updateMQTTpassword

> UpdateMQTTCredentialsResponse updateMQTTpassword(space, mqttUsername, opts)

Update MQTT password

Update the MQTT password for a specific mqtt-username.  If you send an empty body, a random password will be generated

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

let apiInstance = new UsersApiReference.MQTTUsernameApi();
let space = altair; // String | 
let mqttUsername = newUsername@altair; // String | 
let opts = {
  'updateMQTTPassword': new UsersApiReference.UpdateMQTTPassword() // UpdateMQTTPassword | This is the field that you can update
};
apiInstance.updateMQTTpassword(space, mqttUsername, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **mqttUsername** | **String**|  | 
 **updateMQTTPassword** | [**UpdateMQTTPassword**](UpdateMQTTPassword.md)| This is the field that you can update | [optional] 

### Return type

[**UpdateMQTTCredentialsResponse**](UpdateMQTTCredentialsResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

