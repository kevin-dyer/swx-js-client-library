# SmartWorksSdk.MQTTThingsApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listThingMQTTcredentials**](MQTTThingsApi.md#listThingMQTTcredentials) | **GET** /spaces/{space}/mqtt/things/{thing-id} | List Thing MQTT credentials



## listThingMQTTcredentials

> ShowCredentialsThingResponse listThingMQTTcredentials(space, thingId)

List Thing MQTT credentials

Shiw an specific MQTT credentials for a specific thing

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.MQTTThingsApi();
let space = altair; // String | 
let thingId = 01ed9jencjshpv374k15k1w2gr; // String | 
apiInstance.listThingMQTTcredentials(space, thingId).then((data) => {
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

### Return type

[**ShowCredentialsThingResponse**](ShowCredentialsThingResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

