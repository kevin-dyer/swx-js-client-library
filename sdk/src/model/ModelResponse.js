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
 * The ModelResponse model module.
 * @module model/ModelResponse
 * @version 1.0.0
 */
class ModelResponse {
    /**
     * Constructs a new <code>ModelResponse</code>.
     * @alias module:model/ModelResponse
     * @extends Object
     */
    constructor() { 
        
        ModelResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelResponse} obj Optional instance to populate.
     * @return {module:model/ModelResponse} The populated <code>ModelResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelResponse();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('collection')) {
                obj['collection'] = ApiClient.convertToType(data['collection'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ModelResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ModelResponse.prototype['description'] = undefined;

/**
 * @member {String} collection
 */
ModelResponse.prototype['collection'] = undefined;






export default ModelResponse;

