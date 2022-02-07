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
 * The PropertyMemory model module.
 * @module model/PropertyMemory
 * @version 1.0.0
 */
class PropertyMemory {
    /**
     * Constructs a new <code>PropertyMemory</code>.
     * @alias module:model/PropertyMemory
     */
    constructor() { 
        
        PropertyMemory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PropertyMemory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertyMemory} obj Optional instance to populate.
     * @return {module:model/PropertyMemory} The populated <code>PropertyMemory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertyMemory();

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
        }
        return obj;
    }


}

/**
 * @member {String} title
 */
PropertyMemory.prototype['title'] = undefined;

/**
 * @member {String} description
 */
PropertyMemory.prototype['description'] = undefined;

/**
 * @member {String} type
 */
PropertyMemory.prototype['type'] = undefined;

/**
 * @member {String} unit
 */
PropertyMemory.prototype['unit'] = undefined;

/**
 * @member {Boolean} readOnly
 */
PropertyMemory.prototype['readOnly'] = undefined;






export default PropertyMemory;

