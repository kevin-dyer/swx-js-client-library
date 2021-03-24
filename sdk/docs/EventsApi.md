# SmartWorksSdk.EventsApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEvent**](EventsApi.md#addEvent) | **POST** /spaces/{space}/collections/{collection-name}/things/{thing-id}/events/{event} | Add event
[**listEvents**](EventsApi.md#listEvents) | **GET** /spaces/{space}/collections/{collection-name}/things/{thing-id}/events | List history of all events
[**listEventsByName**](EventsApi.md#listEventsByName) | **GET** /spaces/{space}/collections/{collection-name}/things/{thing-id}/events/{event} | List history of one type of event
[**showEvent**](EventsApi.md#showEvent) | **GET** /spaces/{space}/collections/{collection-name}/things/{thing-id}/events/{event}/{event-id} | Show event



## addEvent

> EventResponse addEvent(space, collectionName, thingId, event, eventRequest)

Add event

Add a new event to the event history of a thing

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.EventsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let event = highCPU; // String | 
let eventRequest = new SmartWorksSdk.EventRequest(); // EventRequest | Create a new action
apiInstance.addEvent(space, collectionName, thingId, event, eventRequest).then((data) => {
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
 **event** | **String**|  | 
 **eventRequest** | [**EventRequest**](EventRequest.md)| Create a new action | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listEvents

> EventHighCPUListResponse listEvents(space, collectionName, thingId)

List history of all events

List all history of all the events of a thing

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.EventsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
apiInstance.listEvents(space, collectionName, thingId).then((data) => {
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

[**EventHighCPUListResponse**](EventHighCPUListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEventsByName

> EventHighCPUListResponse listEventsByName(space, collectionName, thingId, event)

List history of one type of event

List all history of one concrete event inside a thing

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.EventsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let event = highCPU; // String | 
apiInstance.listEventsByName(space, collectionName, thingId, event).then((data) => {
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
 **event** | **String**|  | 

### Return type

[**EventHighCPUListResponse**](EventHighCPUListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showEvent

> EventResponse showEvent(space, collectionName, thingId, event, eventId)

Show event

Show one specific event form a thing by Id

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.EventsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let event = highCPU; // String | 
let eventId = 01EDCEZDTJX50SQTCJST5EW5NX; // String | 
apiInstance.showEvent(space, collectionName, thingId, event, eventId).then((data) => {
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
 **event** | **String**|  | 
 **eventId** | **String**|  | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

