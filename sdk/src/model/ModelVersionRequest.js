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
import ModelVersionRequestProperties from './ModelVersionRequestProperties';

/**
 * The ModelVersionRequest model module.
 * @module model/ModelVersionRequest
 * @version 1.0.0
 */
class ModelVersionRequest {
    /**
     * Constructs a new <code>ModelVersionRequest</code>.
     * @alias module:model/ModelVersionRequest
     */
    constructor() { 
        
        ModelVersionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelVersionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelVersionRequest} obj Optional instance to populate.
     * @return {module:model/ModelVersionRequest} The populated <code>ModelVersionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelVersionRequest();

            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], Object);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ModelVersionRequestProperties.constructFromObject(data['properties']);
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], Object);
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} template
 */
ModelVersionRequest.prototype['template'] = undefined;

/**
 * @member {String} title
 */
ModelVersionRequest.prototype['title'] = undefined;

/**
 * @member {String} description
 */
ModelVersionRequest.prototype['description'] = undefined;

/**
 * @member {module:model/ModelVersionRequestProperties} properties
 */
ModelVersionRequest.prototype['properties'] = undefined;

/**
 * @member {Object} actions
 */
ModelVersionRequest.prototype['actions'] = undefined;

/**
 * @member {Object} events
 */
ModelVersionRequest.prototype['events'] = undefined;






export default ModelVersionRequest;

