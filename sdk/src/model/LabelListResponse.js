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
import AnyOfLabelListElement1 from './AnyOfLabelListElement1';

/**
 * The LabelListResponse model module.
 * @module model/LabelListResponse
 * @version 1.0.0
 */
class LabelListResponse {
    /**
     * Constructs a new <code>LabelListResponse</code>.
     * @alias module:model/LabelListResponse
     */
    constructor() { 
        
        LabelListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LabelListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelListResponse} obj Optional instance to populate.
     * @return {module:model/LabelListResponse} The populated <code>LabelListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LabelListResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [AnyOfLabelListElement1]);
            }
            if (data.hasOwnProperty('paging')) {
                obj['paging'] = ApiClient.convertToType(data['paging'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AnyOfLabelListElement1>} data
 */
LabelListResponse.prototype['data'] = undefined;

/**
 * @member {Object} paging
 */
LabelListResponse.prototype['paging'] = undefined;






export default LabelListResponse;

