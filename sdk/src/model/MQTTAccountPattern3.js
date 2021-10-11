/**
 * SmartWorks SDK
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
 * The MQTTAccountPattern3 model module.
 * @module model/MQTTAccountPattern3
 * @version 1.0.0
 */
class MQTTAccountPattern3 {
    /**
     * Constructs a new <code>MQTTAccountPattern3</code>.
     * @alias module:model/MQTTAccountPattern3
     */
    constructor() { 
        
        MQTTAccountPattern3.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MQTTAccountPattern3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MQTTAccountPattern3} obj Optional instance to populate.
     * @return {module:model/MQTTAccountPattern3} The populated <code>MQTTAccountPattern3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MQTTAccountPattern3();

            if (data.hasOwnProperty('pattern_pub')) {
                obj['pattern_pub'] = ApiClient.convertToType(data['pattern_pub'], 'String');
            }
            if (data.hasOwnProperty('pattern_sub')) {
                obj['pattern_sub'] = ApiClient.convertToType(data['pattern_sub'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} pattern_pub
 */
MQTTAccountPattern3.prototype['pattern_pub'] = undefined;

/**
 * @member {String} pattern_sub
 */
MQTTAccountPattern3.prototype['pattern_sub'] = undefined;






export default MQTTAccountPattern3;
