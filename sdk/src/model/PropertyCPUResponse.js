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
import PropertyCPUResponseLinks from './PropertyCPUResponseLinks';

/**
 * The PropertyCPUResponse model module.
 * @module model/PropertyCPUResponse
 * @version 0.8.12
 */
class PropertyCPUResponse {
    /**
     * Constructs a new <code>PropertyCPUResponse</code>.
     * @alias module:model/PropertyCPUResponse
     */
    constructor() { 
        
        PropertyCPUResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PropertyCPUResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertyCPUResponse} obj Optional instance to populate.
     * @return {module:model/PropertyCPUResponse} The populated <code>PropertyCPUResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertyCPUResponse();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [PropertyCPUResponseLinks]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} title
 */
PropertyCPUResponse.prototype['title'] = undefined;

/**
 * @member {String} description
 */
PropertyCPUResponse.prototype['description'] = undefined;

/**
 * @member {String} type
 */
PropertyCPUResponse.prototype['type'] = undefined;

/**
 * @member {String} unit
 */
PropertyCPUResponse.prototype['unit'] = undefined;

/**
 * @member {Boolean} readOnly
 */
PropertyCPUResponse.prototype['readOnly'] = undefined;

/**
 * @member {Array.<module:model/PropertyCPUResponseLinks>} links
 */
PropertyCPUResponse.prototype['links'] = undefined;






export default PropertyCPUResponse;

