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
 * The EventHighCPUData model module.
 * @module model/EventHighCPUData
 * @version 1.0.0
 */
class EventHighCPUData {
    /**
     * Constructs a new <code>EventHighCPUData</code>.
     * @alias module:model/EventHighCPUData
     */
    constructor() { 
        
        EventHighCPUData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventHighCPUData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventHighCPUData} obj Optional instance to populate.
     * @return {module:model/EventHighCPUData} The populated <code>EventHighCPUData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventHighCPUData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
EventHighCPUData.prototype['type'] = undefined;

/**
 * @member {String} unit
 */
EventHighCPUData.prototype['unit'] = undefined;






export default EventHighCPUData;

