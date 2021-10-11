# SmartWorksSdk.MQTTUsernameApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateMQTTpassword**](MQTTUsernameApi.md#updateMQTTpassword) | **PATCH** /spaces/{space}/mqtt/credentials-username/{mqtt-username} | Update MQTT password



## updateMQTTpassword

> UpdateMQTTCredentialsResponse updateMQTTpassword(space, mqttUsername, opts)

Update MQTT password

Update the MQTT password for a specific mqtt-username.  If you send an empty body, a random password will be generated

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.MQTTUsernameApi();
let space = altair; // String | 
let mqttUsername = newUsername@altair; // String | 
let opts = {
  'updateMQTTPassword': new SmartWorksSdk.UpdateMQTTPassword() // UpdateMQTTPassword | This is the field that you can update
};
apiInstance.updateMQTTpassword(space, mqttUsername, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **mqttUsername** | **String**|  | 
 **updateMQTTPassword** | [**UpdateMQTTPassword**](UpdateMQTTPassword.md)| This is the field that you can update | [optional] 

### Return type

[**UpdateMQTTCredentialsResponse**](UpdateMQTTCredentialsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

