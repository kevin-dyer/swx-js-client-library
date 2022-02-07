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
import CollectionListResponsePaging from './CollectionListResponsePaging';
import ModelResponse from './ModelResponse';

/**
 * The ModelListResponse model module.
 * @module model/ModelListResponse
 * @version 1.0.0
 */
class ModelListResponse {
    /**
     * Constructs a new <code>ModelListResponse</code>.
     * @alias module:model/ModelListResponse
     */
    constructor() { 
        
        ModelListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelListResponse} obj Optional instance to populate.
     * @return {module:model/ModelListResponse} The populated <code>ModelListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelListResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ModelResponse]);
            }
            if (data.hasOwnProperty('paging')) {
                obj['paging'] = CollectionListResponsePaging.constructFromObject(data['paging']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ModelResponse>} data
 */
ModelListResponse.prototype['data'] = undefined;

/**
 * @member {module:model/CollectionListResponsePaging} paging
 */
ModelListResponse.prototype['paging'] = undefined;






export default ModelListResponse;

