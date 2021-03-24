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
import ActionRequestDelayInput from './ActionRequestDelayInput';

/**
 * The ActionRequestDelay model module.
 * @module model/ActionRequestDelay
 * @version 1.0.0
 */
class ActionRequestDelay {
    /**
     * Constructs a new <code>ActionRequestDelay</code>.
     * @alias module:model/ActionRequestDelay
     */
    constructor() { 
        
        ActionRequestDelay.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionRequestDelay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionRequestDelay} obj Optional instance to populate.
     * @return {module:model/ActionRequestDelay} The populated <code>ActionRequestDelay</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionRequestDelay();

            if (data.hasOwnProperty('input')) {
                obj['input'] = ActionRequestDelayInput.constructFromObject(data['input']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ActionRequestDelayInput} input
 */
ActionRequestDelay.prototype['input'] = undefined;






export default ActionRequestDelay;
