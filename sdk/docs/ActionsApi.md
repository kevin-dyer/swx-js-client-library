# SmartWorksSdk.ActionsApi

All URIs are relative to *https://api.swx.altairsc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAction**](ActionsApi.md#addAction) | **POST** /spaces/{space}/collections/{collection-name}/things/{thing-id}/actions/{action} | Request action
[**deleteAction**](ActionsApi.md#deleteAction) | **DELETE** /spaces/{space}/collections/{collection-name}/things/{thing-id}/actions/{action}/{action-id} | Delete Action
[**listActions**](ActionsApi.md#listActions) | **GET** /spaces/{space}/collections/{collection-name}/things/{thing-id}/actions | Lists all the action queues for a thing
[**listActionsByName**](ActionsApi.md#listActionsByName) | **GET** /spaces/{space}/collections/{collection-name}/things/{thing-id}/actions/{action} | List the queue of actions from a thing
[**showAction**](ActionsApi.md#showAction) | **GET** /spaces/{space}/collections/{collection-name}/things/{thing-id}/actions/{action}/{action-id} | Show action requested
[**updateAction**](ActionsApi.md#updateAction) | **PUT** /spaces/{space}/collections/{collection-name}/things/{thing-id}/actions/{action}/{action-id} | Update action inside a queue



## addAction

> ActionResponseElement1 addAction(space, collectionName, thingId, action, actionRequest)

Request action

Request action and add it to the action queue from a thing

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ActionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let action = delay; // String | 
let actionRequest = new SmartWorksSdk.ActionRequest(); // ActionRequest | Create a new action
apiInstance.addAction(space, collectionName, thingId, action, actionRequest).then((data) => {
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
 **action** | **String**|  | 
 **actionRequest** | [**ActionRequest**](ActionRequest.md)| Create a new action | 

### Return type

[**ActionResponseElement1**](ActionResponseElement1.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAction

> ActionDeleteResponse deleteAction(space, collectionName, thingId, action, actionId)

Delete Action

Deletes an existing action by Id

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ActionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let action = delay; // String | 
let actionId = 01EDCAQE78A7CP6REXV5J8BAKR; // String | 
apiInstance.deleteAction(space, collectionName, thingId, action, actionId).then((data) => {
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
 **action** | **String**|  | 
 **actionId** | **String**|  | 

### Return type

[**ActionDeleteResponse**](ActionDeleteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listActions

> ActionListResponse listActions(space, collectionName, thingId)

Lists all the action queues for a thing

Lists all the queues for the different actions within a thing.

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ActionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 56; // Number | 
apiInstance.listActions(space, collectionName, thingId).then((data) => {
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
 **thingId** | **Number**|  | 

### Return type

[**ActionListResponse**](ActionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listActionsByName

> ActionDelayListResponse listActionsByName(space, collectionName, thingId, action)

List the queue of actions from a thing

Lists the current queue of a specific action from a Thing

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ActionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let action = delay; // String | 
apiInstance.listActionsByName(space, collectionName, thingId, action).then((data) => {
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
 **action** | **String**|  | 

### Return type

[**ActionDelayListResponse**](ActionDelayListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showAction

> ActionResponseElement1 showAction(space, collectionName, thingId, action, actionId)

Show action requested

Shows a requested action from the action queues of a thing.

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ActionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let action = delay; // String | 
let actionId = 01EDCAQE78A7CP6REXV5J8BAKR; // String | 
apiInstance.showAction(space, collectionName, thingId, action, actionId).then((data) => {
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
 **action** | **String**|  | 
 **actionId** | **String**|  | 

### Return type

[**ActionResponseElement1**](ActionResponseElement1.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAction

> ActionUpdateResponse updateAction(space, collectionName, thingId, action, actionId, actionUpdateRequest)

Update action inside a queue

Update the status of an existing action by Id inside of the action queue from a thing

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.ActionsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let action = delay; // String | 
let actionId = 01EDCAQE78A7CP6REXV5J8BAKR; // String | 
let actionUpdateRequest = new SmartWorksSdk.ActionUpdateRequest(); // ActionUpdateRequest | Update an existent thing by Id
apiInstance.updateAction(space, collectionName, thingId, action, actionId, actionUpdateRequest).then((data) => {
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
 **action** | **String**|  | 
 **actionId** | **String**|  | 
 **actionUpdateRequest** | [**ActionUpdateRequest**](ActionUpdateRequest.md)| Update an existent thing by Id | 

### Return type

[**ActionUpdateResponse**](ActionUpdateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

