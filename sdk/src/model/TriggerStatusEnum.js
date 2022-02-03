/**
 * MQTT API reference
 * MQTT OpenAPI endpoints - OpenAPI 3.0
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class TriggerStatusEnum.
* @enum {}
* @readonly
*/
export default class TriggerStatusEnum {
    
        /**
         * value: "Pending"
         * @const
         */
        "Pending" = "Pending";

    
        /**
         * value: "Running"
         * @const
         */
        "Running" = "Running";

    
        /**
         * value: "Failed"
         * @const
         */
        "Failed" = "Failed";

    

    /**
    * Returns a <code>TriggerStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TriggerStatusEnum} The enum <code>TriggerStatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

