/**
 * Digital Model API (WIP)
 * Digital Model API documentation
 *
 * The version of the OpenAPI document: 0.8.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ActionDelayResponse from './ActionDelayResponse';
import ActionRebootResponse from './ActionRebootResponse';

/**
 * The ThingCreateResponseActions model module.
 * @module model/ThingCreateResponseActions
 * @version 0.8.12
 */
class ThingCreateResponseActions {
    /**
     * Constructs a new <code>ThingCreateResponseActions</code>.
     * @alias module:model/ThingCreateResponseActions
     */
    constructor() { 
        
        ThingCreateResponseActions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThingCreateResponseActions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingCreateResponseActions} obj Optional instance to populate.
     * @return {module:model/ThingCreateResponseActions} The populated <code>ThingCreateResponseActions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingCreateResponseActions();

            if (data.hasOwnProperty('delay')) {
                obj['delay'] = ActionDelayResponse.constructFromObject(data['delay']);
            }
            if (data.hasOwnProperty('reboot')) {
                obj['reboot'] = ActionRebootResponse.constructFromObject(data['reboot']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ActionDelayResponse} delay
 */
ThingCreateResponseActions.prototype['delay'] = undefined;

/**
 * @member {module:model/ActionRebootResponse} reboot
 */
ThingCreateResponseActions.prototype['reboot'] = undefined;






export default ThingCreateResponseActions;

