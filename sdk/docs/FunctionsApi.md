# SmartWorksSdk.FunctionsApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFunction**](FunctionsApi.md#createFunction) | **POST** /spaces/{space}/functions | Create and deploy a function
[**deleteFunction**](FunctionsApi.md#deleteFunction) | **DELETE** /spaces/{space}/functions/{function_name} | Delete a function
[**getFunction**](FunctionsApi.md#getFunction) | **GET** /spaces/{space}/functions/{function_name} | Get a function
[**getFunctionCode**](FunctionsApi.md#getFunctionCode) | **GET** /spaces/{space}/functions/{function_name}/code | Get the last version of the function code
[**getFunctionLogs**](FunctionsApi.md#getFunctionLogs) | **GET** /spaces/{space}/functions/{function_name}/logs | Get a list of the logs for a specific function
[**invokeFunction**](FunctionsApi.md#invokeFunction) | **POST** /spaces/{space}/functions/{function_name}/invoke | Invoke a function
[**invokeFunctionAsync**](FunctionsApi.md#invokeFunctionAsync) | **POST** /spaces/{space}/functions/{function_name}/async-invoke | Invoke a function asynchronously
[**listFunctions**](FunctionsApi.md#listFunctions) | **GET** /spaces/{space}/functions | List Functions
[**updateFunction**](FunctionsApi.md#updateFunction) | **PUT** /spaces/{space}/functions/{function_name} | Update a function



## createFunction

> Function createFunction(space, _function)

Create and deploy a function

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.FunctionsApi();
let space = "space_example"; // String | 
let _function = {"name":"motion-detected","description":"This function will be invoked when motion is detected.","template":"python3-http","env":{"MIN_DETECTION_EVENTS":"2","RESET_AFTER_SECONDS":"15"},"options":{"topics":"living-room/motion,floor1/bathroom/light","schedule":"*/5 * * * *"},"source":{"code":"ZGVmIGhhbmRsZShyZXEpOgogICAgcmV0dXJuIHsKICAgICAgICAic3RhdHVzQ29kZSI6IDIwMSwKICAgICAgICAiYm9keSI6IHJlcS5ib2R5LmRlY29kZSgidXRmLTgiKQogICAgfQo="}}; // Function | Body of a new function
apiInstance.createFunction(space, _function).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **_function** | [**Function**](Function.md)| Body of a new function | 

### Return type

[**Function**](Function.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFunction

> deleteFunction(space, functionName)

Delete a function

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.FunctionsApi();
let space = "space_example"; // String | 
let functionName = "functionName_example"; // String | 
apiInstance.deleteFunction(space, functionName).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **functionName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFunction

> Function getFunction(space, functionName)

Get a function

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.FunctionsApi();
let space = "space_example"; // String | 
let functionName = "functionName_example"; // String | 
apiInstance.getFunction(space, functionName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **functionName** | **String**|  | 

### Return type

[**Function**](Function.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFunctionCode

> SourceCode getFunctionCode(space, functionName)

Get the last version of the function code

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.FunctionsApi();
let space = "space_example"; // String | 
let functionName = "functionName_example"; // String | 
apiInstance.getFunctionCode(space, functionName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **functionName** | **String**|  | 

### Return type

[**SourceCode**](SourceCode.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/x-ndjson, application/json


## getFunctionLogs

> [LogEntry] getFunctionLogs(space, functionName, opts)

Get a list of the logs for a specific function

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.FunctionsApi();
let space = "space_example"; // String | 
let functionName = "functionName_example"; // String | 
let opts = {
  'since': "since_example", // String | Only return logs after a specific date (RFC3339)
  'tail': 56 // Number | Sets the maximum number of log messages to return, <=0 means unlimited
};
apiInstance.getFunctionLogs(space, functionName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **functionName** | **String**|  | 
 **since** | **String**| Only return logs after a specific date (RFC3339) | [optional] 
 **tail** | **Number**| Sets the maximum number of log messages to return, &lt;&#x3D;0 means unlimited | [optional] 

### Return type

[**[LogEntry]**](LogEntry.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/x-ndjson, application/json


## invokeFunction

> invokeFunction(space, functionName, opts)

Invoke a function

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.FunctionsApi();
let space = "space_example"; // String | 
let functionName = "functionName_example"; // String | 
let opts = {
  'body': "/path/to/file" // File | Optional data to pass to the function
};
apiInstance.invokeFunction(space, functionName, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **functionName** | **String**|  | 
 **body** | **File**| Optional data to pass to the function | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invokeFunctionAsync

> InfoResponse invokeFunctionAsync(space, functionName, xCallbackUrl, opts)

Invoke a function asynchronously

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.FunctionsApi();
let space = "space_example"; // String | 
let functionName = "functionName_example"; // String | 
let xCallbackUrl = "xCallbackUrl_example"; // String | 
let opts = {
  'body': "/path/to/file" // File | Optional data to pass to the function
};
apiInstance.invokeFunctionAsync(space, functionName, xCallbackUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **functionName** | **String**|  | 
 **xCallbackUrl** | **String**|  | 
 **body** | **File**| Optional data to pass to the function | [optional] 

### Return type

[**InfoResponse**](InfoResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFunctions

> Functions listFunctions(space)

List Functions

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.FunctionsApi();
let space = "space_example"; // String | 
apiInstance.listFunctions(space).then((data) => {
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

[**Functions**](Functions.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFunction

> Function updateFunction(space, functionName, _function)

Update a function

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.FunctionsApi();
let space = "space_example"; // String | 
let functionName = "functionName_example"; // String | 
let _function = {"id":"01EPEF6NB562TTT0C3XQ8VTXVG","name":"motion-detected","description":"This function will be invoked when motion is detected.","template":"python3-http","env":{"MIN_DETECTION_EVENTS":"2","RESET_AFTER_SECONDS":"15"},"options":{"topics":"living-room/motion,floor1/bathroom/light","schedule":"*/5 * * * *"},"source":{"code":"ZGVmIGhhbmRsZShyZXEpOgogICAgcmV0dXJuIHsKICAgICAgICAic3RhdHVzQ29kZSI6IDIwMSwKICAgICAgICAiYm9keSI6IHJlcS5ib2R5LmRlY29kZSgidXRmLTgiKQogICAgfQo="}}; // Function | Body of the updated function
apiInstance.updateFunction(space, functionName, _function).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **String**|  | 
 **functionName** | **String**|  | 
 **_function** | [**Function**](Function.md)| Body of the updated function | 

### Return type

[**Function**](Function.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

