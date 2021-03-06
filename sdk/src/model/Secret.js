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
 * The Secret model module.
 * @module model/Secret
 * @version 1.0.0
 */
class Secret {
    /**
     * Constructs a new <code>Secret</code>.
     * @alias module:model/Secret
     */
    constructor() { 
        
        Secret.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Secret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Secret} obj Optional instance to populate.
     * @return {module:model/Secret} The populated <code>Secret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Secret();

            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} client_secret
 */
Secret.prototype['client_secret'] = undefined;






export default Secret;

