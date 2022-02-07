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
import BadFormedErrorError from './BadFormedErrorError';

/**
 * The BadFormedError model module.
 * @module model/BadFormedError
 * @version 1.0.0
 */
class BadFormedError {
    /**
     * Constructs a new <code>BadFormedError</code>.
     * @alias module:model/BadFormedError
     */
    constructor() { 
        
        BadFormedError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BadFormedError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BadFormedError} obj Optional instance to populate.
     * @return {module:model/BadFormedError} The populated <code>BadFormedError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BadFormedError();

            if (data.hasOwnProperty('error')) {
                obj['error'] = BadFormedErrorError.constructFromObject(data['error']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BadFormedErrorError} error
 */
BadFormedError.prototype['error'] = undefined;






export default BadFormedError;

