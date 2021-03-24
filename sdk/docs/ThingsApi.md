# SmartWorksSdk.ThingsApi

All URIs are relative to *https://api.swx.altairsc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addThing**](ThingsApi.md#addThing) | **POST** /spaces/{space}/collections/{collection-name}/things | Add a thing description
[**deleteThing**](ThingsApi.md#deleteThing) | **DELETE** /spaces/{space}/collections/{collection-name}/things/{thing-id} | Delete thing
[**listThings**](ThingsApi.md#listThings) | **GET** /spaces/{space}/collections/{collection-name}/things | List thing descriptions
[**resetClientSecret**](ThingsApi.md#resetClientSecret) | **POST** /spaces/{space}/collections/{collection-name}/things/{thing-id}/reset-secret | Reset Client Secret
[**showThing**](ThingsApi.md#showThing) | **GET** /spaces/{space}/collections/{collection-name}/things/{thing-id} | Show thing
[**updateThing**](ThingsApi.md#updateThing) | **PUT** /spaces/{space}/collections/{collection-name}/things/{thing-id} | Update thing description



## addThing

> ThingCreateResponse addThing(space, collectionName, thingRequest)

Add a thing description

Add a new thing description to the platform according to WoT specification

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ThingsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingRequest = new SmartWorksSdk.ThingRequest(); // ThingRequest | Create a new thing description in the platform
apiInstance.addThing(space, collectionName, thingRequest).then((data) => {
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
 **thingRequest** | [**ThingRequest**](ThingRequest.md)| Create a new thing description in the platform | 

### Return type

[**ThingCreateResponse**](ThingCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteThing

> ThingDeleteResponse deleteThing(space, thingId, collectionName)

Delete thing

Deletes all the existing information from a thing by Id. It deletes the thing description and the data.

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ThingsApi();
let space = altair; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let collectionName = ElectronicBoards; // String | 
apiInstance.deleteThing(space, thingId, collectionName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **thingId** | **String**|  | 
 **collectionName** | **String**|  | 

### Return type

[**ThingDeleteResponse**](ThingDeleteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listThings

> ThingListResponse listThings(space, collectionName)

List thing descriptions

List all thing descriptions in an array

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ThingsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
apiInstance.listThings(space, collectionName).then((data) => {
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

[**ThingListResponse**](ThingListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resetClientSecret

> Secret resetClientSecret(space, thingId, collectionName)

Reset Client Secret

Reset the Client Secret for a specific thing

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ThingsApi();
let space = altair; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let collectionName = ElectronicBoards; // String | 
apiInstance.resetClientSecret(space, thingId, collectionName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **thingId** | **String**|  | 
 **collectionName** | **String**|  | 

### Return type

[**Secret**](Secret.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showThing

> ThingResponse showThing(space, thingId, collectionName)

Show thing

Show the thing description from a thing

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ThingsApi();
let space = altair; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let collectionName = ElectronicBoards; // String | 
apiInstance.showThing(space, thingId, collectionName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **thingId** | **String**|  | 
 **collectionName** | **String**|  | 

### Return type

[**ThingResponse**](ThingResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateThing

> ThingUpdateResponse updateThing(space, thingId, collectionName, thingUpdateRequest)

Update thing description

Update the thing description from a thing by Id. You need to include the whole thing description with the modifications to update it.

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ThingsApi();
let space = altair; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let collectionName = ElectronicBoards; // String | 
let thingUpdateRequest = new SmartWorksSdk.ThingUpdateRequest(); // ThingUpdateRequest | Update an existent thing description by Id
apiInstance.updateThing(space, thingId, collectionName, thingUpdateRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **thingId** | **String**|  | 
 **collectionName** | **String**|  | 
 **thingUpdateRequest** | [**ThingUpdateRequest**](ThingUpdateRequest.md)| Update an existent thing description by Id | 

### Return type

[**ThingUpdateResponse**](ThingUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

