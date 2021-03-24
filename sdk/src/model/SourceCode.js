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
 * The SourceCode model module.
 * @module model/SourceCode
 * @version 1.0.0
 */
class SourceCode {
    /**
     * Constructs a new <code>SourceCode</code>.
     * Function source code information.
     * @alias module:model/SourceCode
     */
    constructor() { 
        
        SourceCode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SourceCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceCode} obj Optional instance to populate.
     * @return {module:model/SourceCode} The populated <code>SourceCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceCode();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Function's code encoded in Base64.
 * @member {String} code
 */
SourceCode.prototype['code'] = undefined;






export default SourceCode;

