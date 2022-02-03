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
 * The LabelDeleteResponse model module.
 * @module model/LabelDeleteResponse
 * @version 1.0.0
 */
class LabelDeleteResponse {
    /**
     * Constructs a new <code>LabelDeleteResponse</code>.
     * @alias module:model/LabelDeleteResponse
     */
    constructor() { 
        
        LabelDeleteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LabelDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelDeleteResponse} obj Optional instance to populate.
     * @return {module:model/LabelDeleteResponse} The populated <code>LabelDeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LabelDeleteResponse();

            if (data.hasOwnProperty('error_label_backend')) {
                obj['error_label_backend'] = ThingDeleteResponseErrorClusterBackend.constructFromObject(data['error_label_backend']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ThingDeleteResponseErrorClusterBackend} error_label_backend
 */
LabelDeleteResponse.prototype['error_label_backend'] = undefined;






export default LabelDeleteResponse;

