/**
 * Users API reference
 * Users OpenAPI endpoints - OpenAPI 3.0
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
* Enum class TriggerTypeEnum.
* @enum {}
* @readonly
*/
export default class TriggerTypeEnum {
    
        /**
         * value: "cron"
         * @const
         */
        "cron" = "cron";

    
        /**
         * value: "mqtt"
         * @const
         */
        "mqtt" = "mqtt";

    
        /**
         * value: "rabbitmq"
         * @const
         */
        "rabbitmq" = "rabbitmq";

    

    /**
    * Returns a <code>TriggerTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TriggerTypeEnum} The enum <code>TriggerTypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

