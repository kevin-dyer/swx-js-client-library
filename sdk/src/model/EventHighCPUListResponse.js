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
import EventResponse from './EventResponse';

/**
 * The EventHighCPUListResponse model module.
 * @module model/EventHighCPUListResponse
 * @version 1.0.0
 */
class EventHighCPUListResponse {
    /**
     * Constructs a new <code>EventHighCPUListResponse</code>.
     * @alias module:model/EventHighCPUListResponse
     */
    constructor() { 
        
        EventHighCPUListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventHighCPUListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventHighCPUListResponse} obj Optional instance to populate.
     * @return {module:model/EventHighCPUListResponse} The populated <code>EventHighCPUListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventHighCPUListResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [EventResponse]);
            }
            if (data.hasOwnProperty('paging')) {
                obj['paging'] = ApiClient.convertToType(data['paging'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/EventResponse>} data
 */
EventHighCPUListResponse.prototype['data'] = undefined;

/**
 * @member {Object} paging
 */
EventHighCPUListResponse.prototype['paging'] = undefined;






export default EventHighCPUListResponse;

