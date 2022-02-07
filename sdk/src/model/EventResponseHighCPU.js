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
 * The EventResponseHighCPU model module.
 * @module model/EventResponseHighCPU
 * @version 1.0.0
 */
class EventResponseHighCPU {
    /**
     * Constructs a new <code>EventResponseHighCPU</code>.
     * @alias module:model/EventResponseHighCPU
     */
    constructor() { 
        
        EventResponseHighCPU.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventResponseHighCPU</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventResponseHighCPU} obj Optional instance to populate.
     * @return {module:model/EventResponseHighCPU} The populated <code>EventResponseHighCPU</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventResponseHighCPU();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'Number');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} data
 */
EventResponseHighCPU.prototype['data'] = undefined;

/**
 * @member {String} href
 */
EventResponseHighCPU.prototype['href'] = undefined;

/**
 * @member {Date} timestamp
 */
EventResponseHighCPU.prototype['timestamp'] = undefined;






export default EventResponseHighCPU;

