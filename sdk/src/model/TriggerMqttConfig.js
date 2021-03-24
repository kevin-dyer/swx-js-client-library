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
 * The TriggerMqttConfig model module.
 * @module model/TriggerMqttConfig
 * @version 1.0.0
 */
class TriggerMqttConfig {
    /**
     * Constructs a new <code>TriggerMqttConfig</code>.
     * @alias module:model/TriggerMqttConfig
     */
    constructor() { 
        
        TriggerMqttConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TriggerMqttConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerMqttConfig} obj Optional instance to populate.
     * @return {module:model/TriggerMqttConfig} The populated <code>TriggerMqttConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TriggerMqttConfig();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('topics')) {
                obj['topics'] = ApiClient.convertToType(data['topics'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('qos')) {
                obj['qos'] = ApiClient.convertToType(data['qos'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Host of the MQTT broker. Do not set any scheme.
 * @member {String} host
 */
TriggerMqttConfig.prototype['host'] = undefined;

/**
 * Port of the MQTT broker. If not set, defaults to 1883.
 * @member {Number} port
 */
TriggerMqttConfig.prototype['port'] = undefined;

/**
 * @member {String} topics
 */
TriggerMqttConfig.prototype['topics'] = undefined;

/**
 * MQTT broker username.
 * @member {String} username
 */
TriggerMqttConfig.prototype['username'] = undefined;

/**
 * MQTT broker password.
 * @member {String} password
 */
TriggerMqttConfig.prototype['password'] = undefined;

/**
 * @member {Number} qos
 */
TriggerMqttConfig.prototype['qos'] = undefined;






export default TriggerMqttConfig;

