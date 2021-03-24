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
import ActionResponseElement1 from './ActionResponseElement1';

/**
 * The ActionListResponse model module.
 * @module model/ActionListResponse
 * @version 1.0.0
 */
class ActionListResponse {
    /**
     * Constructs a new <code>ActionListResponse</code>.
     * @alias module:model/ActionListResponse
     */
    constructor() { 
        
        ActionListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionListResponse} obj Optional instance to populate.
     * @return {module:model/ActionListResponse} The populated <code>ActionListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionListResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ActionResponseElement1]);
            }
            if (data.hasOwnProperty('paging')) {
                obj['paging'] = ApiClient.convertToType(data['paging'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ActionResponseElement1>} data
 */
ActionListResponse.prototype['data'] = undefined;

/**
 * @member {Object} paging
 */
ActionListResponse.prototype['paging'] = undefined;






export default ActionListResponse;

