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

/**
 * The LabelListElement1 model module.
 * @module model/LabelListElement1
 * @version 1.0.0
 */
class LabelListElement1 {
    /**
     * Constructs a new <code>LabelListElement1</code>.
     * @alias module:model/LabelListElement1
     */
    constructor() { 
        
        LabelListElement1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LabelListElement1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelListElement1} obj Optional instance to populate.
     * @return {module:model/LabelListElement1} The populated <code>LabelListElement1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LabelListElement1();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('space')) {
                obj['space'] = ApiClient.convertToType(data['space'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('label_name')) {
                obj['label_name'] = ApiClient.convertToType(data['label_name'], 'String');
            }
            if (data.hasOwnProperty('label_description')) {
                obj['label_description'] = ApiClient.convertToType(data['label_description'], 'String');
            }
            if (data.hasOwnProperty('mqtt')) {
                obj['mqtt'] = ApiClient.convertToType(data['mqtt'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
LabelListElement1.prototype['id'] = undefined;

/**
 * @member {String} space
 */
LabelListElement1.prototype['space'] = undefined;

/**
 * @member {String} color
 */
LabelListElement1.prototype['color'] = undefined;

/**
 * @member {String} label_name
 */
LabelListElement1.prototype['label_name'] = undefined;

/**
 * @member {String} label_description
 */
LabelListElement1.prototype['label_description'] = undefined;

/**
 * @member {Boolean} mqtt
 */
LabelListElement1.prototype['mqtt'] = undefined;






export default LabelListElement1;
