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
 * The LabelRelationElement1 model module.
 * @module model/LabelRelationElement1
 * @version 1.0.0
 */
class LabelRelationElement1 {
    /**
     * Constructs a new <code>LabelRelationElement1</code>.
     * @alias module:model/LabelRelationElement1
     */
    constructor() { 
        
        LabelRelationElement1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LabelRelationElement1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelRelationElement1} obj Optional instance to populate.
     * @return {module:model/LabelRelationElement1} The populated <code>LabelRelationElement1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LabelRelationElement1();

            if (data.hasOwnProperty('collection_name')) {
                obj['collection_name'] = ApiClient.convertToType(data['collection_name'], 'String');
            }
            if (data.hasOwnProperty('entity_id')) {
                obj['entity_id'] = ApiClient.convertToType(data['entity_id'], 'String');
            }
            if (data.hasOwnProperty('entity_name')) {
                obj['entity_name'] = ApiClient.convertToType(data['entity_name'], 'String');
            }
            if (data.hasOwnProperty('entity_type')) {
                obj['entity_type'] = ApiClient.convertToType(data['entity_type'], 'String');
            }
            if (data.hasOwnProperty('label_id')) {
                obj['label_id'] = ApiClient.convertToType(data['label_id'], 'String');
            }
            if (data.hasOwnProperty('space')) {
                obj['space'] = ApiClient.convertToType(data['space'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} collection_name
 */
LabelRelationElement1.prototype['collection_name'] = undefined;

/**
 * @member {String} entity_id
 */
LabelRelationElement1.prototype['entity_id'] = undefined;

/**
 * @member {String} entity_name
 */
LabelRelationElement1.prototype['entity_name'] = undefined;

/**
 * @member {String} entity_type
 */
LabelRelationElement1.prototype['entity_type'] = undefined;

/**
 * @member {String} label_id
 */
LabelRelationElement1.prototype['label_id'] = undefined;

/**
 * @member {String} space
 */
LabelRelationElement1.prototype['space'] = undefined;






export default LabelRelationElement1;

