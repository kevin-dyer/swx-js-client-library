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
import MQTTLabel from './MQTTLabel';

/**
 * The CreateMQTTLabelCredentialsResponse model module.
 * @module model/CreateMQTTLabelCredentialsResponse
 * @version 1.0.0
 */
class CreateMQTTLabelCredentialsResponse {
    /**
     * Constructs a new <code>CreateMQTTLabelCredentialsResponse</code>.
     * @alias module:model/CreateMQTTLabelCredentialsResponse
     */
    constructor() { 
        
        CreateMQTTLabelCredentialsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateMQTTLabelCredentialsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMQTTLabelCredentialsResponse} obj Optional instance to populate.
     * @return {module:model/CreateMQTTLabelCredentialsResponse} The populated <code>CreateMQTTLabelCredentialsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateMQTTLabelCredentialsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('expired_at')) {
                obj['expired_at'] = ApiClient.convertToType(data['expired_at'], 'Number');
            }
            if (data.hasOwnProperty('topics')) {
                obj['topics'] = ApiClient.convertToType(data['topics'], [MQTTLabel]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
CreateMQTTLabelCredentialsResponse.prototype['id'] = undefined;

/**
 * @member {String} description
 */
CreateMQTTLabelCredentialsResponse.prototype['description'] = undefined;

/**
 * @member {String} type
 */
CreateMQTTLabelCredentialsResponse.prototype['type'] = undefined;

/**
 * @member {String} username
 */
CreateMQTTLabelCredentialsResponse.prototype['username'] = undefined;

/**
 * @member {String} password
 */
CreateMQTTLabelCredentialsResponse.prototype['password'] = undefined;

/**
 * @member {Boolean} enabled
 */
CreateMQTTLabelCredentialsResponse.prototype['enabled'] = undefined;

/**
 * @member {Date} created_at
 */
CreateMQTTLabelCredentialsResponse.prototype['created_at'] = undefined;

/**
 * @member {Number} expired_at
 */
CreateMQTTLabelCredentialsResponse.prototype['expired_at'] = undefined;

/**
 * @member {Array.<module:model/MQTTLabel>} topics
 */
CreateMQTTLabelCredentialsResponse.prototype['topics'] = undefined;






export default CreateMQTTLabelCredentialsResponse;

