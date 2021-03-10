# DigitalModelApiWip.ModelsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addModel**](ModelsApi.md#addModel) | **POST** /spaces/{space}/collections/{collection-name}/models | Create model
[**deleteModel**](ModelsApi.md#deleteModel) | **DELETE** /spaces/{space}/collections/{collection-name}/models/{model-name} | Delete model
[**listModels**](ModelsApi.md#listModels) | **GET** /spaces/{space}/collections/{collection-name}/models | List models
[**showModel**](ModelsApi.md#showModel) | **GET** /spaces/{space}/collections/{collection-name}/models/{model-name} | Show model
[**updateModel**](ModelsApi.md#updateModel) | **PUT** /spaces/{space}/collections/{collection-name}/models/{model-name} | Update model



## addModel

> ModelResponse addModel(space, collectionName, modelRequest)

Create model

### Example

```javascript
import DigitalModelApiWip from 'digital_model_api__wip';
let defaultClient = DigitalModelApiWip.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DigitalModelApiWip.ModelsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let modelRequest = new DigitalModelApiWip.ModelRequest(); // ModelRequest | Create a new collection in the platform
apiInstance.addModel(space, collectionName, modelRequest).then((data) => {
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
 **modelRequest** | [**ModelRequest**](ModelRequest.md)| Create a new collection in the platform | 

### Return type

[**ModelResponse**](ModelResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteModel

> deleteModel(space, collectionName, modelName)

Delete model

### Example

```javascript
import DigitalModelApiWip from 'digital_model_api__wip';
let defaultClient = DigitalModelApiWip.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DigitalModelApiWip.ModelsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let modelName = RaspberryPiModel; // String | 
apiInstance.deleteModel(space, collectionName, modelName).then(() => {
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

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listModels

> ModelListResponse listModels(space, collectionName)

List models

### Example

```javascript
import DigitalModelApiWip from 'digital_model_api__wip';
let defaultClient = DigitalModelApiWip.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DigitalModelApiWip.ModelsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
apiInstance.listModels(space, collectionName).then((data) => {
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

### Return type

[**ModelListResponse**](ModelListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showModel

> ModelResponse showModel(space, collectionName, modelName)

Show model

### Example

```javascript
import DigitalModelApiWip from 'digital_model_api__wip';
let defaultClient = DigitalModelApiWip.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DigitalModelApiWip.ModelsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let modelName = RaspberryPiModel; // String | 
apiInstance.showModel(space, collectionName, modelName).then((data) => {
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

[**ModelResponse**](ModelResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateModel

> ModelUpdateResponse updateModel(space, collectionName, modelName, modelUpdateRequest)

Update model

### Example

```javascript
import DigitalModelApiWip from 'digital_model_api__wip';
let defaultClient = DigitalModelApiWip.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DigitalModelApiWip.ModelsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let modelName = RaspberryPiModel; // String | 
let modelUpdateRequest = new DigitalModelApiWip.ModelUpdateRequest(); // ModelUpdateRequest | Update an existent model by name
apiInstance.updateModel(space, collectionName, modelName, modelUpdateRequest).then((data) => {
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
 **modelUpdateRequest** | [**ModelUpdateRequest**](ModelUpdateRequest.md)| Update an existent model by name | 

### Return type

[**ModelUpdateResponse**](ModelUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

