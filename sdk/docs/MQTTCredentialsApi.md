# UsersApiReference.MQTTCredentialsApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMQTTcredentials**](MQTTCredentialsApi.md#listMQTTcredentials) | **GET** /spaces/{space}/mqtt/credentials | List MQTT credentials
[**showMQTTcredentials**](MQTTCredentialsApi.md#showMQTTcredentials) | **GET** /spaces/{space}/mqtt/credentials/{credentials-id} | Show MQTT credentials
[**updateMQTTcredentials**](MQTTCredentialsApi.md#updateMQTTcredentials) | **PUT** /spaces/{space}/mqtt/credentials/{credentials-id} | Update MQTT credentials



## listMQTTcredentials

> ListCredentialsResponse listMQTTcredentials(space)

List MQTT credentials

List of all MQTT credentials for an space

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

let apiInstance = new UsersApiReference.MQTTCredentialsApi();
let space = altair; // String | 
apiInstance.listMQTTcredentials(space).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 

### Return type

[**ListCredentialsResponse**](ListCredentialsResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showMQTTcredentials

> ShowCredentialsThingResponse showMQTTcredentials(space, credentialsId)

Show MQTT credentials

Show an specific MQTT credentials by id

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

let apiInstance = new UsersApiReference.MQTTCredentialsApi();
let space = altair; // String | 
let credentialsId = 01EDRMFZXHPEBGGHZBYVV1W0Y9; // String | 
apiInstance.showMQTTcredentials(space, credentialsId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **credentialsId** | **String**|  | 

### Return type

[**ShowCredentialsThingResponse**](ShowCredentialsThingResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMQTTcredentials

> UpdateMQTTCredentialsResponse updateMQTTcredentials(space, credentialsId, opts)

Update MQTT credentials

Update an existing MQTT credentials. If you send an empty body, a random password will be generated

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

let apiInstance = new UsersApiReference.MQTTCredentialsApi();
let space = altair; // String | 
let credentialsId = 01EDRMFZXHPEBGGHZBYVV1W0Y9; // String | 
let opts = {
  'updateMQTTCredentials': new UsersApiReference.UpdateMQTTCredentials() // UpdateMQTTCredentials | 
};
apiInstance.updateMQTTcredentials(space, credentialsId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **credentialsId** | **String**|  | 
 **updateMQTTCredentials** | [**UpdateMQTTCredentials**](UpdateMQTTCredentials.md)|  | [optional] 

### Return type

[**UpdateMQTTCredentialsResponse**](UpdateMQTTCredentialsResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

