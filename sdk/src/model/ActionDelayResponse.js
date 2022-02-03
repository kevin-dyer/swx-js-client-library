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
import ActionDelayInput from './ActionDelayInput';
import PropertyCPUResponseLinks from './PropertyCPUResponseLinks';

/**
 * The ActionDelayResponse model module.
 * @module model/ActionDelayResponse
 * @version 1.0.0
 */
class ActionDelayResponse {
    /**
     * Constructs a new <code>ActionDelayResponse</code>.
     * @alias module:model/ActionDelayResponse
     */
    constructor() { 
        
        ActionDelayResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionDelayResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionDelayResponse} obj Optional instance to populate.
     * @return {module:model/ActionDelayResponse} The populated <code>ActionDelayResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionDelayResponse();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('input')) {
                obj['input'] = ActionDelayInput.constructFromObject(data['input']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [PropertyCPUResponseLinks]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} title
 */
ActionDelayResponse.prototype['title'] = undefined;

/**
 * @member {String} description
 */
ActionDelayResponse.prototype['description'] = undefined;

/**
 * @member {module:model/ActionDelayInput} input
 */
ActionDelayResponse.prototype['input'] = undefined;

/**
 * @member {Array.<module:model/PropertyCPUResponseLinks>} links
 */
ActionDelayResponse.prototype['links'] = undefined;






export default ActionDelayResponse;

