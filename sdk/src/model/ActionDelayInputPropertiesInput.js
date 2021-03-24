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
 * The ActionDelayInputPropertiesInput model module.
 * @module model/ActionDelayInputPropertiesInput
 * @version 1.0.0
 */
class ActionDelayInputPropertiesInput {
    /**
     * Constructs a new <code>ActionDelayInputPropertiesInput</code>.
     * @alias module:model/ActionDelayInputPropertiesInput
     */
    constructor() { 
        
        ActionDelayInputPropertiesInput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionDelayInputPropertiesInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDelayInputPropertiesInput} obj Optional instance to populate.
     * @return {module:model/ActionDelayInputPropertiesInput} The populated <code>ActionDelayInputPropertiesInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionDelayInputPropertiesInput();

            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = ApiClient.convertToType(data['maximum'], 'Number');
            }
            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = ApiClient.convertToType(data['minimum'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} maximum
 */
ActionDelayInputPropertiesInput.prototype['maximum'] = undefined;

/**
 * @member {Number} minimum
 */
ActionDelayInputPropertiesInput.prototype['minimum'] = undefined;

/**
 * @member {String} type
 */
ActionDelayInputPropertiesInput.prototype['type'] = undefined;






export default ActionDelayInputPropertiesInput;

