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
import ActionDelayInput from './ActionDelayInput';

/**
 * The ActionDelay model module.
 * @module model/ActionDelay
 * @version 1.0.0
 */
class ActionDelay {
    /**
     * Constructs a new <code>ActionDelay</code>.
     * @alias module:model/ActionDelay
     */
    constructor() { 
        
        ActionDelay.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionDelay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDelay} obj Optional instance to populate.
     * @return {module:model/ActionDelay} The populated <code>ActionDelay</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionDelay();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('input')) {
                obj['input'] = ActionDelayInput.constructFromObject(data['input']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} title
 */
ActionDelay.prototype['title'] = undefined;

/**
 * @member {String} description
 */
ActionDelay.prototype['description'] = undefined;

/**
 * @member {module:model/ActionDelayInput} input
 */
ActionDelay.prototype['input'] = undefined;






export default ActionDelay;
