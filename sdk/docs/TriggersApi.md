# SmartWorksSdk.TriggersApi

All URIs are relative to *https://api.swx.altairsc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTrigger**](TriggersApi.md#createTrigger) | **POST** /spaces/{space}/triggers | Create and deploy a trigger
[**deleteTrigger**](TriggersApi.md#deleteTrigger) | **DELETE** /spaces/{space}/triggers/{trigger_id} | Delete a trigger
[**getTrigger**](TriggersApi.md#getTrigger) | **GET** /spaces/{space}/triggers/{trigger_id} | Get a trigger
[**listTriggers**](TriggersApi.md#listTriggers) | **GET** /spaces/{space}/triggers | List Triggers
[**updateTrigger**](TriggersApi.md#updateTrigger) | **PUT** /spaces/{space}/triggers/{trigger_id} | Update a trigger



## createTrigger

> Trigger createTrigger(space, trigger)

Create and deploy a trigger

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.TriggersApi();
let space = "space_example"; // String | 
let trigger = {"description":"This trigger will subscribe to \"https://mqtt-broker.com\" broker.","type":"mqtt","config":{"host":"mqtt-broker.com","port":1883,"topics":"room1/temperature,room2/humidity","username":"admin","password":"secret","qos":1},"callback_url":"https://my-website.com/trigger-callback"}; // Trigger | Body of a new trigger
apiInstance.createTrigger(space, trigger).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **trigger** | [**Trigger**](Trigger.md)| Body of a new trigger | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTrigger

> deleteTrigger(space, triggerId)

Delete a trigger

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.TriggersApi();
let space = "space_example"; // String | 
let triggerId = "triggerId_example"; // String | 
apiInstance.deleteTrigger(space, triggerId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **triggerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTrigger

> Trigger getTrigger(space, triggerId)

Get a trigger

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.TriggersApi();
let space = "space_example"; // String | 
let triggerId = "triggerId_example"; // String | 
apiInstance.getTrigger(space, triggerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **triggerId** | **String**|  | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTriggers

> Triggers listTriggers(space, opts)

List Triggers

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.TriggersApi();
let space = "space_example"; // String | 
let opts = {
  'type': "type_example" // String | 
};
apiInstance.listTriggers(space, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **type** | **String**|  | [optional] 

### Return type

[**Triggers**](Triggers.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTrigger

> Trigger updateTrigger(space, triggerId, trigger)

Update a trigger

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.TriggersApi();
let space = "space_example"; // String | 
let triggerId = "triggerId_example"; // String | 
let trigger = {"id":"01ESGG55SK6861Y9B6HFVBQK54","description":"This trigger will subscribe to \"https://mqtt-broker.com\" broker.","type":"mqtt","config":{"host":"mqtt-broker.com","port":1883,"topics":"room1/temperature,room2/humidity","username":"admin","password":"secret","qos":1},"callback_url":"https://my-website.com/trigger-callback"}; // Trigger | Body of the updated trigger
apiInstance.updateTrigger(space, triggerId, trigger).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **triggerId** | **String**|  | 
 **trigger** | [**Trigger**](Trigger.md)| Body of the updated trigger | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
