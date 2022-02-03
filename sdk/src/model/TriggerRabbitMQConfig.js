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

/**
 * The TriggerRabbitMQConfig model module.
 * @module model/TriggerRabbitMQConfig
 * @version 1.0.0
 */
class TriggerRabbitMQConfig {
    /**
     * Constructs a new <code>TriggerRabbitMQConfig</code>.
     * @alias module:model/TriggerRabbitMQConfig
     */
    constructor() { 
        
        TriggerRabbitMQConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TriggerRabbitMQConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerRabbitMQConfig} obj Optional instance to populate.
     * @return {module:model/TriggerRabbitMQConfig} The populated <code>TriggerRabbitMQConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TriggerRabbitMQConfig();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
            }
            if (data.hasOwnProperty('topics')) {
                obj['topics'] = ApiClient.convertToType(data['topics'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} host
 */
TriggerRabbitMQConfig.prototype['host'] = undefined;

/**
 * @member {Number} port
 */
TriggerRabbitMQConfig.prototype['port'] = undefined;

/**
 * RabbitMQ username.
 * @member {String} username
 */
TriggerRabbitMQConfig.prototype['username'] = undefined;

/**
 * RabbitMQ password.
 * @member {String} password
 */
TriggerRabbitMQConfig.prototype['password'] = undefined;

/**
 * @member {String} exchange
 */
TriggerRabbitMQConfig.prototype['exchange'] = undefined;

/**
 * @member {String} queue
 */
TriggerRabbitMQConfig.prototype['queue'] = undefined;

/**
 * Comma-separated routing keys of the messages this trigger will listen to.
 * @member {String} topics
 */
TriggerRabbitMQConfig.prototype['topics'] = undefined;






export default TriggerRabbitMQConfig;

