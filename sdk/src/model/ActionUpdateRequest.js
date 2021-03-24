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
import ActionUpdateRequestDelay from './ActionUpdateRequestDelay';

/**
 * The ActionUpdateRequest model module.
 * @module model/ActionUpdateRequest
 * @version 1.0.0
 */
class ActionUpdateRequest {
    /**
     * Constructs a new <code>ActionUpdateRequest</code>.
     * @alias module:model/ActionUpdateRequest
     */
    constructor() { 
        
        ActionUpdateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionUpdateRequest} obj Optional instance to populate.
     * @return {module:model/ActionUpdateRequest} The populated <code>ActionUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionUpdateRequest();

            if (data.hasOwnProperty('delay')) {
                obj['delay'] = ActionUpdateRequestDelay.constructFromObject(data['delay']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ActionUpdateRequestDelay} delay
 */
ActionUpdateRequest.prototype['delay'] = undefined;






export default ActionUpdateRequest;

