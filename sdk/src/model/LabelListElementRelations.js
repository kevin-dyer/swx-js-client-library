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
 * The LabelListElementRelations model module.
 * @module model/LabelListElementRelations
 * @version 1.0.0
 */
class LabelListElementRelations {
    /**
     * Constructs a new <code>LabelListElementRelations</code>.
     * @alias module:model/LabelListElementRelations
     */
    constructor() { 
        
        LabelListElementRelations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LabelListElementRelations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelListElementRelations} obj Optional instance to populate.
     * @return {module:model/LabelListElementRelations} The populated <code>LabelListElementRelations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LabelListElementRelations();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Array);
            }
            if (data.hasOwnProperty('paging')) {
                obj['paging'] = ApiClient.convertToType(data['paging'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array} data
 */
LabelListElementRelations.prototype['data'] = undefined;

/**
 * @member {Object} paging
 */
LabelListElementRelations.prototype['paging'] = undefined;






export default LabelListElementRelations;

