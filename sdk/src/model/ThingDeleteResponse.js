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
import ThingDeleteResponseErrorClusterBackend from './ThingDeleteResponseErrorClusterBackend';

/**
 * The ThingDeleteResponse model module.
 * @module model/ThingDeleteResponse
 * @version 1.0.0
 */
class ThingDeleteResponse {
    /**
     * Constructs a new <code>ThingDeleteResponse</code>.
     * @alias module:model/ThingDeleteResponse
     */
    constructor() { 
        
        ThingDeleteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThingDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingDeleteResponse} obj Optional instance to populate.
     * @return {module:model/ThingDeleteResponse} The populated <code>ThingDeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingDeleteResponse();

            if (data.hasOwnProperty('error_cluster_backend')) {
                obj['error_cluster_backend'] = ThingDeleteResponseErrorClusterBackend.constructFromObject(data['error_cluster_backend']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ThingDeleteResponseErrorClusterBackend} error_cluster_backend
 */
ThingDeleteResponse.prototype['error_cluster_backend'] = undefined;






export default ThingDeleteResponse;

