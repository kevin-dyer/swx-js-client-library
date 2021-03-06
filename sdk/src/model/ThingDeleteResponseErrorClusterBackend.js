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
 * The ThingDeleteResponseErrorClusterBackend model module.
 * @module model/ThingDeleteResponseErrorClusterBackend
 * @version 1.0.0
 */
class ThingDeleteResponseErrorClusterBackend {
    /**
     * Constructs a new <code>ThingDeleteResponseErrorClusterBackend</code>.
     * @alias module:model/ThingDeleteResponseErrorClusterBackend
     */
    constructor() { 
        
        ThingDeleteResponseErrorClusterBackend.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThingDeleteResponseErrorClusterBackend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingDeleteResponseErrorClusterBackend} obj Optional instance to populate.
     * @return {module:model/ThingDeleteResponseErrorClusterBackend} The populated <code>ThingDeleteResponseErrorClusterBackend</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingDeleteResponseErrorClusterBackend();

            if (data.hasOwnProperty('http_status_code')) {
                obj['http_status_code'] = ApiClient.convertToType(data['http_status_code'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} http_status_code
 */
ThingDeleteResponseErrorClusterBackend.prototype['http_status_code'] = undefined;






export default ThingDeleteResponseErrorClusterBackend;

