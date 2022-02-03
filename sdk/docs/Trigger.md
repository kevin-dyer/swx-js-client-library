# MqttApiReference.Trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**type** | [**TriggerTypeEnum**](TriggerTypeEnum.md) |  | [optional] 
**config** | [**OneOfTriggerMqttConfigTriggerRabbitMQConfig**](OneOfTriggerMqttConfigTriggerRabbitMQConfig.md) |  | [optional] 
**status** | [**TriggerStatusEnum**](TriggerStatusEnum.md) |  | [optional] 
**errorMessage** | **String** | If the Trigger failed (status &#x3D; &#x60;Failed&#x60;), this attribute will contain the error message. | [optional] 
**callbackUrl** | **String** | Optional callback URL to send the function response to. | [optional] 


