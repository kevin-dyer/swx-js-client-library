# MqttApiReference.MQTTThingsApi

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
import MqttApiReference from 'mqtt_api_reference';
let defaultClient = MqttApiReference.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer (Opaque JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MqttApiReference.MQTTThingsApi();
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

[OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

