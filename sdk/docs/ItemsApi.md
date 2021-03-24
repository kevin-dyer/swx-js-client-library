# SmartWorksSdk.ItemsApi

All URIs are relative to *https://api.swx.altairsc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listItems**](ItemsApi.md#listItems) | **GET** /spaces/{space}/collections/{collection-name}/things-status | List items
[**showItem**](ItemsApi.md#showItem) | **GET** /spaces/{space}/collections/{collection-name}/things-status/{thing-id} | Show item



## listItems

> ThingStatusListResponse listItems(space, collectionName)

List items

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ItemsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
apiInstance.listItems(space, collectionName).then((data) => {
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

[**ThingStatusListResponse**](ThingStatusListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showItem

> ThingStatusResponse showItem(space, collectionName, thingId)

Show item

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ItemsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 87f87df8dfjhjdsksdsdk8fkff; // String | 
apiInstance.showItem(space, collectionName, thingId).then((data) => {
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
 **thingId** | **String**|  | 

### Return type

[**ThingStatusResponse**](ThingStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

