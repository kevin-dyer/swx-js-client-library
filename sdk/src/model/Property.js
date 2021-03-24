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
 * The Property model module.
 * @module model/Property
 * @version 1.0.0
 */
class Property {
    /**
     * Constructs a new <code>Property</code>.
     * @alias module:model/Property
     */
    constructor() { 
        
        Property.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Property</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Property} obj Optional instance to populate.
     * @return {module:model/Property} The populated <code>Property</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Property();

            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} memory
 */
Property.prototype['memory'] = undefined;






export default Property;
