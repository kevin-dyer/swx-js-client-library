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
import PropertyCPU from './PropertyCPU';
import PropertyDisk from './PropertyDisk';
import PropertyMemory from './PropertyMemory';

/**
 * The ModelVersionRequestProperties model module.
 * @module model/ModelVersionRequestProperties
 * @version 1.0.0
 */
class ModelVersionRequestProperties {
    /**
     * Constructs a new <code>ModelVersionRequestProperties</code>.
     * @alias module:model/ModelVersionRequestProperties
     */
    constructor() { 
        
        ModelVersionRequestProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelVersionRequestProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelVersionRequestProperties} obj Optional instance to populate.
     * @return {module:model/ModelVersionRequestProperties} The populated <code>ModelVersionRequestProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelVersionRequestProperties();

            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = PropertyCPU.constructFromObject(data['cpu']);
            }
            if (data.hasOwnProperty('disk')) {
                obj['disk'] = PropertyDisk.constructFromObject(data['disk']);
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = PropertyMemory.constructFromObject(data['memory']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PropertyCPU} cpu
 */
ModelVersionRequestProperties.prototype['cpu'] = undefined;

/**
 * @member {module:model/PropertyDisk} disk
 */
ModelVersionRequestProperties.prototype['disk'] = undefined;

/**
 * @member {module:model/PropertyMemory} memory
 */
ModelVersionRequestProperties.prototype['memory'] = undefined;






export default ModelVersionRequestProperties;

