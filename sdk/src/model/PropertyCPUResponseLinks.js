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

/**
 * The PropertyCPUResponseLinks model module.
 * @module model/PropertyCPUResponseLinks
 * @version 0.8.12
 */
class PropertyCPUResponseLinks {
    /**
     * Constructs a new <code>PropertyCPUResponseLinks</code>.
     * @alias module:model/PropertyCPUResponseLinks
     */
    constructor() { 
        
        PropertyCPUResponseLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PropertyCPUResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertyCPUResponseLinks} obj Optional instance to populate.
     * @return {module:model/PropertyCPUResponseLinks} The populated <code>PropertyCPUResponseLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertyCPUResponseLinks();

            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} href
 */
PropertyCPUResponseLinks.prototype['href'] = undefined;






export default PropertyCPUResponseLinks;

