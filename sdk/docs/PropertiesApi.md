# SmartWorksSdk.PropertiesApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listProperties**](PropertiesApi.md#listProperties) | **GET** /spaces/{space}/collections/{collection-name}/things/{thing-id}/properties | List properties
[**showProperty**](PropertiesApi.md#showProperty) | **GET** /spaces/{space}/collections/{collection-name}/things/{thing-id}/properties/{property} | Show property
[**updateProperties**](PropertiesApi.md#updateProperties) | **PUT** /spaces/{space}/collections/{collection-name}/things/{thing-id}/properties | Update properties
[**updateProperty**](PropertiesApi.md#updateProperty) | **PUT** /spaces/{space}/collections/{collection-name}/things/{thing-id}/properties/{property} | Update property



## listProperties

> Properties listProperties(space, collectionName, thingId)

List properties

List all the properties from one thing in array

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.PropertiesApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
apiInstance.listProperties(space, collectionName, thingId).then((data) => {
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

[**Properties**](Properties.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showProperty

> Property showProperty(space, collectionName, thingId, property)

Show property

Show a property from one thing

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.PropertiesApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let property = memory; // String | 
apiInstance.showProperty(space, collectionName, thingId, property).then((data) => {
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
 **property** | **String**|  | 

### Return type

[**Property**](Property.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProperties

> Properties updateProperties(space, collectionName, thingId, properties)

Update properties

Update the value of one or more properties of a thing

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.PropertiesApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let properties = new SmartWorksSdk.Properties(); // Properties | Property values by property key
apiInstance.updateProperties(space, collectionName, thingId, properties).then((data) => {
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
 **properties** | [**Properties**](Properties.md)| Property values by property key | 

### Return type

[**Properties**](Properties.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProperty

> Property updateProperty(space, collectionName, thingId, property, property2)

Update property

Update the value of a property

### Example

```javascript
import SmartWorksSdk from 'smart_works_sdk';
let defaultClient = SmartWorksSdk.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SmartWorksSdk.PropertiesApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01edb9j75vymj8p7qppm19h8nx; // String | 
let property = memory; // String | 
let property2 = new SmartWorksSdk.Property(); // Property | Update an existent thing by Id
apiInstance.updateProperty(space, collectionName, thingId, property, property2).then((data) => {
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
 **property** | **String**|  | 
 **property2** | [**Property**](Property.md)| Update an existent thing by Id | 

### Return type

[**Property**](Property.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

