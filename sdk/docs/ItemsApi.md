# UsersApiReference.ItemsApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listItems**](ItemsApi.md#listItems) | **GET** /spaces/{space}/collections/{collection-name}/things-status | List items
[**showItem**](ItemsApi.md#showItem) | **GET** /spaces/{space}/collections/{collection-name}/things-status/{thing-id} | Show item



## listItems

> ThingStatusListResponse listItems(space, collectionName, opts)

List items

### Example

```javascript
import UsersApiReference from 'users_api_reference';
let defaultClient = UsersApiReference.ApiClient.instance;
// Configure Bearer (Opaque JWT) access token for authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: OAuth2AuthorizationCode
let OAuth2AuthorizationCode = defaultClient.authentications['OAuth2AuthorizationCode'];
OAuth2AuthorizationCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2ClientCredentials
let OAuth2ClientCredentials = defaultClient.authentications['OAuth2ClientCredentials'];
OAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer (Opaque JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new UsersApiReference.ItemsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let opts = {
  'title': MainThing, // String | Filter by title
  'thingID': ["01EDVJEMFD24360JT7434A6GS8"], // [String] | Filter by multiple thing ids
  'nextCursor': WyIwMUY1M1BNSEpHQ1BTWlg5NVFGSkpFQURTNCJd, // String | next cursor used to go to the next page of results
  'previousCursor': WyIwMUY1M1BNSEpHQ1BTWlg5NVFGSkpFQURTNCJd, // String | previous cursor used to go to the previous page of results
  'limit': 50, // Number | The numbers of items to return
  'sort': ["+title"], // [String] | sort items by field asc or desc
  'property': {"property:temp":"gt:20", "property:dim": 80} // Object | Schema:      {\"property:<property_name>\":\"<operator>:<value>\"}  Supported value operators:   * eq  == (operator by default)   * neq !=   * gt  >   * gte >=   * lt  <   * lte <= 
};
apiInstance.listItems(space, collectionName, opts).then((data) => {
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
 **title** | **String**| Filter by title | [optional] 
 **thingID** | [**[String]**](String.md)| Filter by multiple thing ids | [optional] 
 **nextCursor** | **String**| next cursor used to go to the next page of results | [optional] 
 **previousCursor** | **String**| previous cursor used to go to the previous page of results | [optional] 
 **limit** | **Number**| The numbers of items to return | [optional] [default to 50]
 **sort** | [**[String]**](String.md)| sort items by field asc or desc | [optional] 
 **property** | [**Object**](.md)| Schema:      {\&quot;property:&lt;property_name&gt;\&quot;:\&quot;&lt;operator&gt;:&lt;value&gt;\&quot;}  Supported value operators:   * eq  &#x3D;&#x3D; (operator by default)   * neq !&#x3D;   * gt  &gt;   * gte &gt;&#x3D;   * lt  &lt;   * lte &lt;&#x3D;  | [optional] 

### Return type

[**ThingStatusListResponse**](ThingStatusListResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, */*


## showItem

> ThingStatusResponse showItem(space, collectionName, thingId)

Show item

### Example

```javascript
import UsersApiReference from 'users_api_reference';
let defaultClient = UsersApiReference.ApiClient.instance;
// Configure Bearer (Opaque JWT) access token for authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: OAuth2AuthorizationCode
let OAuth2AuthorizationCode = defaultClient.authentications['OAuth2AuthorizationCode'];
OAuth2AuthorizationCode.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2ClientCredentials
let OAuth2ClientCredentials = defaultClient.authentications['OAuth2ClientCredentials'];
OAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: OAuth2Security
let OAuth2Security = defaultClient.authentications['OAuth2Security'];
OAuth2Security.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer (Opaque JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new UsersApiReference.ItemsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01ed9jencjshpv374k15k1w2gr; // String | 
apiInstance.showItem(space, collectionName, thingId).then((data) => {
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

[**ThingStatusResponse**](ThingStatusResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, */*

