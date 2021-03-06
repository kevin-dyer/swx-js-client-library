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
 * The ErrorResponseError model module.
 * @module model/ErrorResponseError
 * @version 1.0.0
 */
class ErrorResponseError {
    /**
     * Constructs a new <code>ErrorResponseError</code>.
     * @alias module:model/ErrorResponseError
     */
    constructor() { 
        
        ErrorResponseError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorResponseError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorResponseError} obj Optional instance to populate.
     * @return {module:model/ErrorResponseError} The populated <code>ErrorResponseError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponseError();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} status
 */
ErrorResponseError.prototype['status'] = undefined;

/**
 * @member {String} message
 */
ErrorResponseError.prototype['message'] = undefined;

/**
 * Additional details about the error.
 * @member {Object} details
 */
ErrorResponseError.prototype['details'] = undefined;






export default ErrorResponseError;

