# SmartWorksSdk.MQTTLabelsApi

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
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.MQTTLabelsApi();
let space = altair; // String | 
let opts = {
  'createMQTTLabelCredentials': new SmartWorksSdk.CreateMQTTLabelCredentials() // CreateMQTTLabelCredentials | 
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMQTTLabel

> deleteMQTTLabel(space, labelId)

Delete MQTT label

Delete MQTT capabilities for a label

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.MQTTLabelsApi();
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showMQTTLabelInfo

> ShowMQTTLabelResponse showMQTTLabelInfo(space, labelId)

Show MQTT label details

Show MQTT label details for a specific label

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.MQTTLabelsApi();
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMQTTLabel

> CreateMQTTLabelCredentialsResponse updateMQTTLabel(space, labelId, updateMQTTLabelCredentials)

Update MQTT Label

Update the MQTT Label credentials and / or state

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.MQTTLabelsApi();
let space = altair; // String | 
let labelId = 01EDRHEF2Y4ZB7C0EGTAT8RQQS; // String | 
let updateMQTTLabelCredentials = new SmartWorksSdk.UpdateMQTTLabelCredentials(); // UpdateMQTTLabelCredentials | This is the field that you can update
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

