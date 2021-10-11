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
import MQTTAccountProperties from './MQTTAccountProperties';

/**
 * The UpdateMQTTCredentialsResponse model module.
 * @module model/UpdateMQTTCredentialsResponse
 * @version 1.0.0
 */
class UpdateMQTTCredentialsResponse {
    /**
     * Constructs a new <code>UpdateMQTTCredentialsResponse</code>.
     * @alias module:model/UpdateMQTTCredentialsResponse
     */
    constructor() { 
        
        UpdateMQTTCredentialsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateMQTTCredentialsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMQTTCredentialsResponse} obj Optional instance to populate.
     * @return {module:model/UpdateMQTTCredentialsResponse} The populated <code>UpdateMQTTCredentialsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateMQTTCredentialsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('expired_at')) {
                obj['expired_at'] = ApiClient.convertToType(data['expired_at'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('topics')) {
                obj['topics'] = ApiClient.convertToType(data['topics'], [MQTTAccountProperties]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
UpdateMQTTCredentialsResponse.prototype['id'] = undefined;

/**
 * @member {String} username
 */
UpdateMQTTCredentialsResponse.prototype['username'] = undefined;

/**
 * @member {String} password
 */
UpdateMQTTCredentialsResponse.prototype['password'] = undefined;

/**
 * @member {String} description
 */
UpdateMQTTCredentialsResponse.prototype['description'] = undefined;

/**
 * @member {Boolean} enabled
 */
UpdateMQTTCredentialsResponse.prototype['enabled'] = undefined;

/**
 * @member {String} type
 */
UpdateMQTTCredentialsResponse.prototype['type'] = undefined;

/**
 * @member {Number} expired_at
 */
UpdateMQTTCredentialsResponse.prototype['expired_at'] = undefined;

/**
 * @member {Date} created_at
 */
UpdateMQTTCredentialsResponse.prototype['created_at'] = undefined;

/**
 * @member {Array.<module:model/MQTTAccountProperties>} topics
 */
UpdateMQTTCredentialsResponse.prototype['topics'] = undefined;






export default UpdateMQTTCredentialsResponse;
