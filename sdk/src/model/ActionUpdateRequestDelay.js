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
 * The ActionUpdateRequestDelay model module.
 * @module model/ActionUpdateRequestDelay
 * @version 1.0.0
 */
class ActionUpdateRequestDelay {
    /**
     * Constructs a new <code>ActionUpdateRequestDelay</code>.
     * @alias module:model/ActionUpdateRequestDelay
     */
    constructor() { 
        
        ActionUpdateRequestDelay.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionUpdateRequestDelay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionUpdateRequestDelay} obj Optional instance to populate.
     * @return {module:model/ActionUpdateRequestDelay} The populated <code>ActionUpdateRequestDelay</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionUpdateRequestDelay();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} status
 */
ActionUpdateRequestDelay.prototype['status'] = undefined;






export default ActionUpdateRequestDelay;
