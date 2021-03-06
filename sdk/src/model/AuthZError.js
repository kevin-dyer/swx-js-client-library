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
import AuthZErrorError from './AuthZErrorError';

/**
 * The AuthZError model module.
 * @module model/AuthZError
 * @version 1.0.0
 */
class AuthZError {
    /**
     * Constructs a new <code>AuthZError</code>.
     * @alias module:model/AuthZError
     */
    constructor() { 
        
        AuthZError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthZError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthZError} obj Optional instance to populate.
     * @return {module:model/AuthZError} The populated <code>AuthZError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthZError();

            if (data.hasOwnProperty('error')) {
                obj['error'] = AuthZErrorError.constructFromObject(data['error']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AuthZErrorError} error
 */
AuthZError.prototype['error'] = undefined;






export default AuthZError;

