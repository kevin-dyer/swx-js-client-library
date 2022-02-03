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


import ApiClient from "../ApiClient";
import LabeledListResponse from '../model/LabeledListResponse';

/**
* LabeledEntities service.
* @module api/LabeledEntitiesApi
* @version 1.0.0
*/
export default class LabeledEntitiesApi {

    /**
    * Constructs a new LabeledEntitiesApi. 
    * @alias module:api/LabeledEntitiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Show entity_ids and their labels. At least one of the following parameters must be present **entity_id, entity_type, label_id, label_name**
     * @param {String} space 
     * @param {Array.<String>} entityId 
     * @param {Array.<String>} labelId 
     * @param {Array.<String>} labelName 
     * @param {module:model/String} entityType filter that shows only a certain type of entity
     * @param {Object} opts Optional parameters
     * @param {String} opts.collectionName filter that shows entities and their labels of a certain collection. **Only available for thing entity type**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LabeledListResponse} and HTTP response
     */
    spacesSpaceLabeledEntitiesGetWithHttpInfo(space, entityId, labelId, labelName, entityType, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'space' is set
      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling spacesSpaceLabeledEntitiesGet");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling spacesSpaceLabeledEntitiesGet");
      }
      // verify the required parameter 'labelId' is set
      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling spacesSpaceLabeledEntitiesGet");
      }
      // verify the required parameter 'labelName' is set
      if (labelName === undefined || labelName === null) {
        throw new Error("Missing the required parameter 'labelName' when calling spacesSpaceLabeledEntitiesGet");
      }
      // verify the required parameter 'entityType' is set
      if (entityType === undefined || entityType === null) {
        throw new Error("Missing the required parameter 'entityType' when calling spacesSpaceLabeledEntitiesGet");
      }

      let pathParams = {
        'space': space
      };
      let queryParams = {
        'entity_id': this.apiClient.buildCollectionParam(entityId, 'multi'),
        'label_id': this.apiClient.buildCollectionParam(labelId, 'multi'),
        'label_name': this.apiClient.buildCollectionParam(labelName, 'multi'),
        'entity_type': entityType,
        'collection_name': opts['collectionName']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LabeledListResponse;
      return this.apiClient.callApi(
        '/spaces/{space}/labeled-entities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Show entity_ids and their labels. At least one of the following parameters must be present **entity_id, entity_type, label_id, label_name**
     * @param {String} space 
     * @param {Array.<String>} entityId 
     * @param {Array.<String>} labelId 
     * @param {Array.<String>} labelName 
     * @param {module:model/String} entityType filter that shows only a certain type of entity
     * @param {Object} opts Optional parameters
     * @param {String} opts.collectionName filter that shows entities and their labels of a certain collection. **Only available for thing entity type**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LabeledListResponse}
     */
    spacesSpaceLabeledEntitiesGet(space, entityId, labelId, labelName, entityType, opts) {
      return this.spacesSpaceLabeledEntitiesGetWithHttpInfo(space, entityId, labelId, labelName, entityType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}