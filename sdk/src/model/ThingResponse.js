/**
 * Digital Model API (WIP)
 * Digital Model API documentation
 *
 * The version of the OpenAPI document: 0.8.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ThingCreateResponseActions from './ThingCreateResponseActions';
import ThingCreateResponseEvents from './ThingCreateResponseEvents';
import ThingCreateResponseLinks from './ThingCreateResponseLinks';
import ThingCreateResponseProperties from './ThingCreateResponseProperties';

/**
 * The ThingResponse model module.
 * @module model/ThingResponse
 * @version 0.8.12
 */
class ThingResponse {
    /**
     * Constructs a new <code>ThingResponse</code>.
     * @alias module:model/ThingResponse
     */
    constructor() { 
        
        ThingResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingResponse} obj Optional instance to populate.
     * @return {module:model/ThingResponse} The populated <code>ThingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingResponse();

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
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ThingCreateResponseProperties.constructFromObject(data['properties']);
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ThingCreateResponseActions.constructFromObject(data['actions']);
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ThingCreateResponseEvents.constructFromObject(data['events']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [ThingCreateResponseLinks]);
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ThingResponse.prototype['id'] = undefined;

/**
 * @member {String} uid
 */
ThingResponse.prototype['uid'] = undefined;

/**
 * @member {String} title
 */
ThingResponse.prototype['title'] = undefined;

/**
 * @member {String} description
 */
ThingResponse.prototype['description'] = undefined;

/**
 * @member {String} space
 */
ThingResponse.prototype['space'] = undefined;

/**
 * @member {String} collection
 */
ThingResponse.prototype['collection'] = undefined;

/**
 * @member {String} model
 */
ThingResponse.prototype['model'] = undefined;

/**
 * @member {String} version
 */
ThingResponse.prototype['version'] = undefined;

/**
 * @member {module:model/ThingCreateResponseProperties} properties
 */
ThingResponse.prototype['properties'] = undefined;

/**
 * @member {module:model/ThingCreateResponseActions} actions
 */
ThingResponse.prototype['actions'] = undefined;

/**
 * @member {module:model/ThingCreateResponseEvents} events
 */
ThingResponse.prototype['events'] = undefined;

/**
 * @member {Array.<module:model/ThingCreateResponseLinks>} links
 */
ThingResponse.prototype['links'] = undefined;

/**
 * @member {String} href
 */
ThingResponse.prototype['href'] = undefined;






export default ThingResponse;

