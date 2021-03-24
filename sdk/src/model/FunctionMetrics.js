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
 * The FunctionMetrics model module.
 * @module model/FunctionMetrics
 * @version 1.0.0
 */
class FunctionMetrics {
    /**
     * Constructs a new <code>FunctionMetrics</code>.
     * Function metrics. Only present in responses.
     * @alias module:model/FunctionMetrics
     */
    constructor() { 
        
        FunctionMetrics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FunctionMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FunctionMetrics} obj Optional instance to populate.
     * @return {module:model/FunctionMetrics} The populated <code>FunctionMetrics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FunctionMetrics();

            if (data.hasOwnProperty('invocations')) {
                obj['invocations'] = ApiClient.convertToType(data['invocations'], 'Number');
            }
            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
            if (data.hasOwnProperty('available_replicas')) {
                obj['available_replicas'] = ApiClient.convertToType(data['available_replicas'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} invocations
 */
FunctionMetrics.prototype['invocations'] = undefined;

/**
 * @member {Number} replicas
 */
FunctionMetrics.prototype['replicas'] = undefined;

/**
 * @member {Number} available_replicas
 */
FunctionMetrics.prototype['available_replicas'] = undefined;






export default FunctionMetrics;

