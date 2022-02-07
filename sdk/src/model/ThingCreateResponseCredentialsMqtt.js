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
import ThingCreateResponseCredentialsMqttData from './ThingCreateResponseCredentialsMqttData';
import ThingCreateResponseCredentialsMqttThing from './ThingCreateResponseCredentialsMqttThing';

/**
 * The ThingCreateResponseCredentialsMqtt model module.
 * @module model/ThingCreateResponseCredentialsMqtt
 * @version 1.0.0
 */
class ThingCreateResponseCredentialsMqtt {
    /**
     * Constructs a new <code>ThingCreateResponseCredentialsMqtt</code>.
     * @alias module:model/ThingCreateResponseCredentialsMqtt
     */
    constructor() { 
        
        ThingCreateResponseCredentialsMqtt.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThingCreateResponseCredentialsMqtt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingCreateResponseCredentialsMqtt} obj Optional instance to populate.
     * @return {module:model/ThingCreateResponseCredentialsMqtt} The populated <code>ThingCreateResponseCredentialsMqtt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingCreateResponseCredentialsMqtt();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ThingCreateResponseCredentialsMqttData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('thing')) {
                obj['thing'] = ThingCreateResponseCredentialsMqttThing.constructFromObject(data['thing']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ThingCreateResponseCredentialsMqttData} data
 */
ThingCreateResponseCredentialsMqtt.prototype['data'] = undefined;

/**
 * @member {module:model/ThingCreateResponseCredentialsMqttThing} thing
 */
ThingCreateResponseCredentialsMqtt.prototype['thing'] = undefined;






export default ThingCreateResponseCredentialsMqtt;

