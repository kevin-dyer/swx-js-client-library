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
import ActionDelayInputPropertiesInput from './ActionDelayInputPropertiesInput';

/**
 * The ActionDelayInputProperties model module.
 * @module model/ActionDelayInputProperties
 * @version 1.0.0
 */
class ActionDelayInputProperties {
    /**
     * Constructs a new <code>ActionDelayInputProperties</code>.
     * @alias module:model/ActionDelayInputProperties
     */
    constructor() { 
        
        ActionDelayInputProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionDelayInputProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDelayInputProperties} obj Optional instance to populate.
     * @return {module:model/ActionDelayInputProperties} The populated <code>ActionDelayInputProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionDelayInputProperties();

            if (data.hasOwnProperty('input')) {
                obj['input'] = ActionDelayInputPropertiesInput.constructFromObject(data['input']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ActionDelayInputPropertiesInput} input
 */
ActionDelayInputProperties.prototype['input'] = undefined;






export default ActionDelayInputProperties;

