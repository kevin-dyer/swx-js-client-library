/**
 * Digital Model API (WIP)
 * Digital Model API documentation
 *
 * The version of the OpenAPI document: 0.8.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ThingResponse from './ThingResponse';

/**
 * The ThingListResponse model module.
 * @module model/ThingListResponse
 * @version 0.8.12
 */
class ThingListResponse {
    /**
     * Constructs a new <code>ThingListResponse</code>.
     * @alias module:model/ThingListResponse
     */
    constructor() { 
        
        ThingListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThingListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingListResponse} obj Optional instance to populate.
     * @return {module:model/ThingListResponse} The populated <code>ThingListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingListResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ThingResponse]);
            }
            if (data.hasOwnProperty('paging')) {
                obj['paging'] = ApiClient.convertToType(data['paging'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ThingResponse>} data
 */
ThingListResponse.prototype['data'] = undefined;

/**
 * @member {Object} paging
 */
ThingListResponse.prototype['paging'] = undefined;






export default ThingListResponse;

