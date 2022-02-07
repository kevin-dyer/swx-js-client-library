# UsersApiReference.ThingsApi

All URIs are relative to *https://api.swx.altairone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addThing**](ThingsApi.md#addThing) | **POST** /spaces/{space}/collections/{collection-name}/things | Add a thing description
[**deleteThing**](ThingsApi.md#deleteThing) | **DELETE** /spaces/{space}/collections/{collection-name}/things/{thing-id} | Delete thing
[**listThings**](ThingsApi.md#listThings) | **GET** /spaces/{space}/collections/{collection-name}/things | List thing descriptions
[**resetClientSecret**](ThingsApi.md#resetClientSecret) | **POST** /spaces/{space}/collections/{collection-name}/things/{thing-id}/reset-secret | Reset Client Secret
[**showThing**](ThingsApi.md#showThing) | **GET** /spaces/{space}/collections/{collection-name}/things/{thing-id} | Show thing
[**updateThing**](ThingsApi.md#updateThing) | **PUT** /spaces/{space}/collections/{collection-name}/things/{thing-id} | Update thing description



## addThing

> ThingCreateResponse addThing(space, collectionName, thingRequest)

Add a thing description

Add a new thing description to the platform according to WoT specification

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

let apiInstance = new UsersApiReference.ThingsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingRequest = new UsersApiReference.ThingRequest(); // ThingRequest | Create a new thing description in the platform
apiInstance.addThing(space, collectionName, thingRequest).then((data) => {
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
 **thingRequest** | [**ThingRequest**](ThingRequest.md)| Create a new thing description in the platform | 

### Return type

[**ThingCreateResponse**](ThingCreateResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, */*


## deleteThing

> ThingDeleteResponse deleteThing(space, collectionName, thingId)

Delete thing

Deletes all the existing information from a thing by Id. It deletes the thing description and the data.

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

let apiInstance = new UsersApiReference.ThingsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01ed9jencjshpv374k15k1w2gr; // String | 
apiInstance.deleteThing(space, collectionName, thingId).then((data) => {
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

[**ThingDeleteResponse**](ThingDeleteResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, */*


## listThings

> ThingListResponse listThings(space, collectionName, opts)

List thing descriptions

List all thing descriptions in an array

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

let apiInstance = new UsersApiReference.ThingsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let opts = {
  'title': MainThing, // String | Filter by title
  'type': cluster, // String | Filter by @type
  'thingID': ["01EDVJEMFD24360JT7434A6GS8"], // [String] | Filter by multiple thing ids
  'nextCursor': WyIwMUY1M1BNSEpHQ1BTWlg5NVFGSkpFQURTNCJd, // String | next cursor used to go to the next page of results
  'previousCursor': WyIwMUY1M1BNSEpHQ1BTWlg5NVFGSkpFQURTNCJd, // String | previous cursor used to go to the previous page of results
  'limit': 50, // Number | The numbers of items to return
  'sort': ["+title"], // [String] | sort items by field asc or desc
  'property': {"property:temp":"gt:20", "property:dim": 80}, // Object | Schema:      {\"property:<property_name>\":\"<operator>:<value>\"}  Supported value operators:   * eq  == (operator by default)   * neq !=   * gt  >   * gte >=   * lt  <   * lte <= 
  'linksRel': controlledBy, // String | Filter by type of link relationship
  'linksHref': https://www.w3.org/TR/wot-thing-description/ // String | Filter by link href
};
apiInstance.listThings(space, collectionName, opts).then((data) => {
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
 **type** | **String**| Filter by @type | [optional] 
 **thingID** | [**[String]**](String.md)| Filter by multiple thing ids | [optional] 
 **nextCursor** | **String**| next cursor used to go to the next page of results | [optional] 
 **previousCursor** | **String**| previous cursor used to go to the previous page of results | [optional] 
 **limit** | **Number**| The numbers of items to return | [optional] [default to 50]
 **sort** | [**[String]**](String.md)| sort items by field asc or desc | [optional] 
 **property** | [**Object**](.md)| Schema:      {\&quot;property:&lt;property_name&gt;\&quot;:\&quot;&lt;operator&gt;:&lt;value&gt;\&quot;}  Supported value operators:   * eq  &#x3D;&#x3D; (operator by default)   * neq !&#x3D;   * gt  &gt;   * gte &gt;&#x3D;   * lt  &lt;   * lte &lt;&#x3D;  | [optional] 
 **linksRel** | **String**| Filter by type of link relationship | [optional] 
 **linksHref** | **String**| Filter by link href | [optional] 

### Return type

[**ThingListResponse**](ThingListResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resetClientSecret

> Secret resetClientSecret(space, collectionName, thingId)

Reset Client Secret

Reset the Client Secret for a specific thing

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

let apiInstance = new UsersApiReference.ThingsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01ed9jencjshpv374k15k1w2gr; // String | 
apiInstance.resetClientSecret(space, collectionName, thingId).then((data) => {
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

[**Secret**](Secret.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showThing

> ThingResponse showThing(space, collectionName, thingId)

Show thing

Show the thing description from a thing

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

let apiInstance = new UsersApiReference.ThingsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01ed9jencjshpv374k15k1w2gr; // String | 
apiInstance.showThing(space, collectionName, thingId).then((data) => {
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

[**ThingResponse**](ThingResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, */*


## updateThing

> ThingUpdateResponse updateThing(space, collectionName, thingId, thingUpdateRequest)

Update thing description

Update the thing description from a thing by Id. You need to include the whole thing description with the modifications to update it.

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

let apiInstance = new UsersApiReference.ThingsApi();
let space = altair; // String | 
let collectionName = ElectronicBoards; // String | 
let thingId = 01ed9jencjshpv374k15k1w2gr; // String | 
let thingUpdateRequest = new UsersApiReference.ThingUpdateRequest(); // ThingUpdateRequest | Update an existent thing description by Id
apiInstance.updateThing(space, collectionName, thingId, thingUpdateRequest).then((data) => {
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
 **thingUpdateRequest** | [**ThingUpdateRequest**](ThingUpdateRequest.md)| Update an existent thing description by Id | 

### Return type

[**ThingUpdateResponse**](ThingUpdateResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [OAuth2AuthorizationCode](../README.md#OAuth2AuthorizationCode), [OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials), [OAuth2Security](../README.md#OAuth2Security), [OAuth2Security](../README.md#OAuth2Security), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

