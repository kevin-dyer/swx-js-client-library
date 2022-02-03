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
import ActionRequestDelayInput from './ActionRequestDelayInput';

/**
 * The ActionUpdateResponseDelay model module.
 * @module model/ActionUpdateResponseDelay
 * @version 1.0.0
 */
class ActionUpdateResponseDelay {
    /**
     * Constructs a new <code>ActionUpdateResponseDelay</code>.
     * @alias module:model/ActionUpdateResponseDelay
     */
    constructor() { 
        
        ActionUpdateResponseDelay.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionUpdateResponseDelay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionUpdateResponseDelay} obj Optional instance to populate.
     * @return {module:model/ActionUpdateResponseDelay} The populated <code>ActionUpdateResponseDelay</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionUpdateResponseDelay();

            if (data.hasOwnProperty('input')) {
                obj['input'] = ActionRequestDelayInput.constructFromObject(data['input']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('timeRequested')) {
                obj['timeRequested'] = ApiClient.convertToType(data['timeRequested'], 'Date');
            }
            if (data.hasOwnProperty('timeCompleted')) {
                obj['timeCompleted'] = ApiClient.convertToType(data['timeCompleted'], 'Date');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ActionRequestDelayInput} input
 */
ActionUpdateResponseDelay.prototype['input'] = undefined;

/**
 * @member {String} status
 */
ActionUpdateResponseDelay.prototype['status'] = undefined;

/**
 * @member {Date} timeRequested
 */
ActionUpdateResponseDelay.prototype['timeRequested'] = undefined;

/**
 * @member {Date} timeCompleted
 */
ActionUpdateResponseDelay.prototype['timeCompleted'] = undefined;

/**
 * @member {String} href
 */
ActionUpdateResponseDelay.prototype['href'] = undefined;






export default ActionUpdateResponseDelay;

