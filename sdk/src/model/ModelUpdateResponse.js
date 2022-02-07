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
 * The ModelUpdateResponse model module.
 * @module model/ModelUpdateResponse
 * @version 1.0.0
 */
class ModelUpdateResponse {
    /**
     * Constructs a new <code>ModelUpdateResponse</code>.
     * @alias module:model/ModelUpdateResponse
     * @extends Object
     */
    constructor() { 
        
        ModelUpdateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelUpdateResponse} obj Optional instance to populate.
     * @return {module:model/ModelUpdateResponse} The populated <code>ModelUpdateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelUpdateResponse();

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
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ModelUpdateResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ModelUpdateResponse.prototype['description'] = undefined;

/**
 * @member {String} collection
 */
ModelUpdateResponse.prototype['collection'] = undefined;

/**
 * @member {String} title
 */
ModelUpdateResponse.prototype['title'] = undefined;






export default ModelUpdateResponse;

