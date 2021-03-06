# UsersApiReference.LabeledEntitiesApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**spacesSpaceLabeledEntitiesGet**](LabeledEntitiesApi.md#spacesSpaceLabeledEntitiesGet) | **GET** /spaces/{space}/labeled-entities | 



## spacesSpaceLabeledEntitiesGet

> LabeledListResponse spacesSpaceLabeledEntitiesGet(space, entityId, labelId, labelName, entityType, opts)



Show entity_ids and their labels. At least one of the following parameters must be present **entity_id, entity_type, label_id, label_name**

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

let apiInstance = new UsersApiReference.LabeledEntitiesApi();
let space = altair; // String | 
let entityId = ["01EDVJEMFD24360JT7434A6GS8","01EDVJEMFD24360JT7434A6GS8"]; // [String] | 
let labelId = ["01EDVJEMFD24360JT7434A6GS8","01EDVJEMFD24360JT7434A6GS8"]; // [String] | 
let labelName = ["color:red","my-label"]; // [String] | 
let entityType = thing; // String | filter that shows only a certain type of entity
let opts = {
  'collectionName': my-collection // String | filter that shows entities and their labels of a certain collection. **Only available for thing entity type**
};
apiInstance.spacesSpaceLabeledEntitiesGet(space, entityId, labelId, labelName, entityType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **entityId** | [**[String]**](String.md)|  | 
 **labelId** | [**[String]**](String.md)|  | 
 **labelName** | [**[String]**](String.md)|  | 
 **entityType** | **String**| filter that shows only a certain type of entity | 
 **collectionName** | **String**| filter that shows entities and their labels of a certain collection. **Only available for thing entity type** | [optional] 

### Return type

[**LabeledListResponse**](LabeledListResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

