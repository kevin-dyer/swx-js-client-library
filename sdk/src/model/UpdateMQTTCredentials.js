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
 * The UpdateMQTTCredentials model module.
 * @module model/UpdateMQTTCredentials
 * @version 1.0.0
 */
class UpdateMQTTCredentials {
    /**
     * Constructs a new <code>UpdateMQTTCredentials</code>.
     * @alias module:model/UpdateMQTTCredentials
     */
    constructor() { 
        
        UpdateMQTTCredentials.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateMQTTCredentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMQTTCredentials} obj Optional instance to populate.
     * @return {module:model/UpdateMQTTCredentials} The populated <code>UpdateMQTTCredentials</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateMQTTCredentials();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('expired_at')) {
                obj['expired_at'] = ApiClient.convertToType(data['expired_at'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
UpdateMQTTCredentials.prototype['username'] = undefined;

/**
 * @member {String} password
 */
UpdateMQTTCredentials.prototype['password'] = undefined;

/**
 * @member {Boolean} enabled
 */
UpdateMQTTCredentials.prototype['enabled'] = undefined;

/**
 * @member {Number} expired_at
 */
UpdateMQTTCredentials.prototype['expired_at'] = undefined;

/**
 * @member {String} description
 */
UpdateMQTTCredentials.prototype['description'] = undefined;






export default UpdateMQTTCredentials;

