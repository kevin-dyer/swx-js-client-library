# SmartWorksSdk.CollectionsApi

All URIs are relative to *https://api.swx.altairsc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCollection**](CollectionsApi.md#addCollection) | **POST** /spaces/{space}/collections | Create collection
[**deleteCollection**](CollectionsApi.md#deleteCollection) | **DELETE** /spaces/{space}/collections/{collection-name} | Delete collection
[**listCollections**](CollectionsApi.md#listCollections) | **GET** /spaces/{space}/collections | List collections
[**showCollection**](CollectionsApi.md#showCollection) | **GET** /spaces/{space}/collections/{collection-name} | Show collection
[**updateCollection**](CollectionsApi.md#updateCollection) | **PUT** /spaces/{space}/collections/{collection-name} | Update collection



## addCollection

> CollectionResponse addCollection(space, collectionRequest)

Create collection

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.CollectionsApi();
let space = altair; // String | 
let collectionRequest = new SmartWorksSdk.CollectionRequest(); // CollectionRequest | Create a new collection in the platform
apiInstance.addCollection(space, collectionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **collectionRequest** | [**CollectionRequest**](CollectionRequest.md)| Create a new collection in the platform | 

### Return type

[**CollectionResponse**](CollectionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCollection

> deleteCollection(space, collectionName)

Delete collection

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.CollectionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
apiInstance.deleteCollection(space, collectionName).then(() => {
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

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listCollections

> CollectionListResponse listCollections(space)

List collections

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.CollectionsApi();
let space = altair; // String | 
apiInstance.listCollections(space).then((data) => {
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

[**CollectionListResponse**](CollectionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showCollection

> CollectionResponse showCollection(space, collectionName)

Show collection

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.CollectionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
apiInstance.showCollection(space, collectionName).then((data) => {
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

[**CollectionResponse**](CollectionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCollection

> CollectionUpdateResponse updateCollection(space, collectionName, collectionUpdateRequest)

Update collection

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.CollectionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let collectionUpdateRequest = new SmartWorksSdk.CollectionUpdateRequest(); // CollectionUpdateRequest | Update an existent collection by name
apiInstance.updateCollection(space, collectionName, collectionUpdateRequest).then((data) => {
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
 **collectionUpdateRequest** | [**CollectionUpdateRequest**](CollectionUpdateRequest.md)| Update an existent collection by name | 

### Return type

[**CollectionUpdateResponse**](CollectionUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

