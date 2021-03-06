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
import ThingCreateResponseCredentials from './ThingCreateResponseCredentials';
import ThingCreateResponseLinks from './ThingCreateResponseLinks';

/**
 * The ThingCreateResponse model module.
 * @module model/ThingCreateResponse
 * @version 1.0.0
 */
class ThingCreateResponse {
    /**
     * Constructs a new <code>ThingCreateResponse</code>.
     * @alias module:model/ThingCreateResponse
     */
    constructor() { 
        
        ThingCreateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThingCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingCreateResponse} obj Optional instance to populate.
     * @return {module:model/ThingCreateResponse} The populated <code>ThingCreateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingCreateResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('space')) {
                obj['space'] = ApiClient.convertToType(data['space'], 'String');
            }
            if (data.hasOwnProperty('collection')) {
                obj['collection'] = ApiClient.convertToType(data['collection'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = ThingCreateResponseCredentials.constructFromObject(data['credentials']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': Object});
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], {'String': Object});
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], {'String': Object});
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [ThingCreateResponseLinks]);
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ThingCreateResponse.prototype['id'] = undefined;

/**
 * @member {String} uid
 */
ThingCreateResponse.prototype['uid'] = undefined;

/**
 * @member {String} title
 */
ThingCreateResponse.prototype['title'] = undefined;

/**
 * @member {String} description
 */
ThingCreateResponse.prototype['description'] = undefined;

/**
 * @member {String} space
 */
ThingCreateResponse.prototype['space'] = undefined;

/**
 * @member {String} collection
 */
ThingCreateResponse.prototype['collection'] = undefined;

/**
 * @member {String} model
 */
ThingCreateResponse.prototype['model'] = undefined;

/**
 * @member {module:model/ThingCreateResponseCredentials} credentials
 */
ThingCreateResponse.prototype['credentials'] = undefined;

/**
 * @member {Object.<String, Object>} properties
 */
ThingCreateResponse.prototype['properties'] = undefined;

/**
 * @member {Object.<String, Object>} actions
 */
ThingCreateResponse.prototype['actions'] = undefined;

/**
 * @member {Object.<String, Object>} events
 */
ThingCreateResponse.prototype['events'] = undefined;

/**
 * @member {Array.<module:model/ThingCreateResponseLinks>} links
 */
ThingCreateResponse.prototype['links'] = undefined;

/**
 * @member {String} href
 */
ThingCreateResponse.prototype['href'] = undefined;

/**
 * @member {String} version
 */
ThingCreateResponse.prototype['version'] = undefined;






export default ThingCreateResponse;

