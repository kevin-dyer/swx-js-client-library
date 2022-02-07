# UsersApiReference.Function

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**space** | **String** |  | [optional] 
**name** | **String** | Function name. Must be unique and can only contain lowercase letters, numbers and hyphens. | [optional] 
**description** | **String** |  | [optional] 
**template** | **String** |  | [optional] 
**env** | **Object** | Environment variables used by the function. All values must be strings. | [optional] 
**options** | [**FunctionOptions**](FunctionOptions.md) |  | [optional] 
**source** | [**SourceCode**](SourceCode.md) |  | [optional] 
**status** | [**FunctionStatusEnum**](FunctionStatusEnum.md) |  | [optional] 
**metrics** | [**FunctionMetrics**](FunctionMetrics.md) |  | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 


