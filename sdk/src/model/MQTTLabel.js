/**
 * Users API reference
 * Users OpenAPI endpoints - OpenAPI 3.0
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
 * The MQTTLabel model module.
 * @module model/MQTTLabel
 * @version 1.0.0
 */
class MQTTLabel {
    /**
     * Constructs a new <code>MQTTLabel</code>.
     * @alias module:model/MQTTLabel
     */
    constructor() { 
        
        MQTTLabel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MQTTLabel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MQTTLabel} obj Optional instance to populate.
     * @return {module:model/MQTTLabel} The populated <code>MQTTLabel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MQTTLabel();

            if (data.hasOwnProperty('pattern_pub')) {
                obj['pattern_pub'] = ApiClient.convertToType(data['pattern_pub'], 'String');
            }
            if (data.hasOwnProperty('pattern_sub')) {
                obj['pattern_sub'] = ApiClient.convertToType(data['pattern_sub'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} pattern_pub
 */
MQTTLabel.prototype['pattern_pub'] = undefined;

/**
 * @member {String} pattern_sub
 */
MQTTLabel.prototype['pattern_sub'] = undefined;






export default MQTTLabel;

