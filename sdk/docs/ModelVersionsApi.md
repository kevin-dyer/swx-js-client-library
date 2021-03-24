# SmartWorksSdk.ModelVersionsApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVersion**](ModelVersionsApi.md#addVersion) | **POST** /spaces/{space}/collections/{collection-name}/models/{model-name}/versions | Create version
[**deleteVersion**](ModelVersionsApi.md#deleteVersion) | **DELETE** /spaces/{space}/collections/{collection-name}/models/{model-name}/versions/{version-name} | Delete version
[**listVersion**](ModelVersionsApi.md#listVersion) | **GET** /spaces/{space}/collections/{collection-name}/models/{model-name}/versions | List version
[**showVersion**](ModelVersionsApi.md#showVersion) | **GET** /spaces/{space}/collections/{collection-name}/models/{model-name}/versions/{version-name} | Show version
[**updateVersion**](ModelVersionsApi.md#updateVersion) | **PUT** /spaces/{space}/collections/{collection-name}/models/{model-name}/versions/{version-name} | Update version



## addVersion

> ModelVersionResponse addVersion(space, collectionName, modelName, modelVersionRequest)

Create version

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ModelVersionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let modelName = RaspberryPiModel; // String | 
let modelVersionRequest = new SmartWorksSdk.ModelVersionRequest(); // ModelVersionRequest | Create a new collection in the platform
apiInstance.addVersion(space, collectionName, modelName, modelVersionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **collectionName** | **String**|  | 
 **modelName** | **String**|  | 
 **modelVersionRequest** | [**ModelVersionRequest**](ModelVersionRequest.md)| Create a new collection in the platform | 

### Return type

[**ModelVersionResponse**](ModelVersionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVersion

> deleteVersion(space, collectionName, modelName, versionName)

Delete version

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ModelVersionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let modelName = RaspberryPiModel; // String | 
let versionName = RasPiv1; // String | 
apiInstance.deleteVersion(space, collectionName, modelName, versionName).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **collectionName** | **String**|  | 
 **modelName** | **String**|  | 
 **versionName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listVersion

> ModelVersionListResponse listVersion(space, collectionName, modelName)

List version

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ModelVersionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let modelName = RaspberryPiModel; // String | 
apiInstance.listVersion(space, collectionName, modelName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **collectionName** | **String**|  | 
 **modelName** | **String**|  | 

### Return type

[**ModelVersionListResponse**](ModelVersionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showVersion

> ModelVersionResponse showVersion(space, collectionName, modelName, versionName)

Show version

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ModelVersionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let modelName = RaspberryPiModel; // String | 
let versionName = RasPiv1; // String | 
apiInstance.showVersion(space, collectionName, modelName, versionName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **collectionName** | **String**|  | 
 **modelName** | **String**|  | 
 **versionName** | **String**|  | 

### Return type

[**ModelVersionResponse**](ModelVersionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateVersion

> ModelVersionResponse updateVersion(space, collectionName, modelName, versionName, modelVersionResponse)

Update version

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ModelVersionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let modelName = RaspberryPiModel; // String | 
let versionName = RasPiv1; // String | 
let modelVersionResponse = new SmartWorksSdk.ModelVersionResponse(); // ModelVersionResponse | Update an existent model by name
apiInstance.updateVersion(space, collectionName, modelName, versionName, modelVersionResponse).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **collectionName** | **String**|  | 
 **modelName** | **String**|  | 
 **versionName** | **String**|  | 
 **modelVersionResponse** | [**ModelVersionResponse**](ModelVersionResponse.md)| Update an existent model by name | 

### Return type

[**ModelVersionResponse**](ModelVersionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

