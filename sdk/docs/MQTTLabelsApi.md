# UsersApiReference.MQTTLabelsApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMQTTLabelCredentials**](MQTTLabelsApi.md#createMQTTLabelCredentials) | **POST** /spaces/{space}/mqtt/labels | Create MQTT credentials for label
[**deleteMQTTLabel**](MQTTLabelsApi.md#deleteMQTTLabel) | **DELETE** /spaces/{space}/mqtt/labels/{label-id} | Delete MQTT label
[**showMQTTLabelInfo**](MQTTLabelsApi.md#showMQTTLabelInfo) | **GET** /spaces/{space}/mqtt/labels/{label-id} | Show MQTT label details
[**updateMQTTLabel**](MQTTLabelsApi.md#updateMQTTLabel) | **PUT** /spaces/{space}/mqtt/labels/{label-id} | Update MQTT Label



## createMQTTLabelCredentials

> CreateMQTTLabelCredentialsResponse createMQTTLabelCredentials(space, opts)

Create MQTT credentials for label

Create MQTT credentials for a specific label

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

let apiInstance = new UsersApiReference.MQTTLabelsApi();
let space = altair; // String | 
let opts = {
  'createMQTTLabelCredentials': new UsersApiReference.CreateMQTTLabelCredentials() // CreateMQTTLabelCredentials | 
};
apiInstance.createMQTTLabelCredentials(space, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **createMQTTLabelCredentials** | [**CreateMQTTLabelCredentials**](CreateMQTTLabelCredentials.md)|  | [optional] 

### Return type

[**CreateMQTTLabelCredentialsResponse**](CreateMQTTLabelCredentialsResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMQTTLabel

> deleteMQTTLabel(space, labelId)

Delete MQTT label

Delete MQTT capabilities for a label

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

let apiInstance = new UsersApiReference.MQTTLabelsApi();
let space = altair; // String | 
let labelId = 01EDRHEF2Y4ZB7C0EGTAT8RQQS; // String | 
apiInstance.deleteMQTTLabel(space, labelId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **labelId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showMQTTLabelInfo

> ShowMQTTLabelResponse showMQTTLabelInfo(space, labelId)

Show MQTT label details

Show MQTT label details for a specific label

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

let apiInstance = new UsersApiReference.MQTTLabelsApi();
let space = altair; // String | 
let labelId = 01EDRHEF2Y4ZB7C0EGTAT8RQQS; // String | 
apiInstance.showMQTTLabelInfo(space, labelId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **labelId** | **String**|  | 

### Return type

[**ShowMQTTLabelResponse**](ShowMQTTLabelResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMQTTLabel

> CreateMQTTLabelCredentialsResponse updateMQTTLabel(space, labelId, updateMQTTLabelCredentials)

Update MQTT Label

Update the MQTT Label credentials and / or state

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

let apiInstance = new UsersApiReference.MQTTLabelsApi();
let space = altair; // String | 
let labelId = 01EDRHEF2Y4ZB7C0EGTAT8RQQS; // String | 
let updateMQTTLabelCredentials = new UsersApiReference.UpdateMQTTLabelCredentials(); // UpdateMQTTLabelCredentials | This is the field that you can update
apiInstance.updateMQTTLabel(space, labelId, updateMQTTLabelCredentials).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **labelId** | **String**|  | 
 **updateMQTTLabelCredentials** | [**UpdateMQTTLabelCredentials**](UpdateMQTTLabelCredentials.md)| This is the field that you can update | 

### Return type

[**CreateMQTTLabelCredentialsResponse**](CreateMQTTLabelCredentialsResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

