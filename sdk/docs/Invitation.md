# UsersApiReference.Invitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**from** | [**SpaceUserInfo**](SpaceUserInfo.md) |  | [optional] 
**toUser** | **String** | User ID of the invited user. It will be null until the invitation is accepted or rejected. | [optional] 
**toEmail** | **String** |  | [optional] 
**roles** | **String** | Comma-separated list of roles of the future user. | [optional] 
**status** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 



## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `ACCEPTED` (value: `"ACCEPTED"`)

* `REJECTED` (value: `"REJECTED"`)




