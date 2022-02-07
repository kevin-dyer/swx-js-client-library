"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _RelationError = _interopRequireDefault(require("../model/RelationError"));

var _ShowCredentialsThingResponse = _interopRequireDefault(require("../model/ShowCredentialsThingResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* MQTTThings service.
* @module api/MQTTThingsApi
* @version 1.0.0
*/
var MQTTThingsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MQTTThingsApi. 
  * @alias module:api/MQTTThingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MQTTThingsApi(apiClient) {
    _classCallCheck(this, MQTTThingsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * List Thing MQTT credentials
   * Shiw an specific MQTT credentials for a specific thing
   * @param {String} space 
   * @param {String} thingId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShowCredentialsThingResponse} and HTTP response
   */


  _createClass(MQTTThingsApi, [{
    key: "listThingMQTTcredentialsWithHttpInfo",
    value: function listThingMQTTcredentialsWithHttpInfo(space, thingId) {
      var postBody = null; // verify the required parameter 'space' is set

      if (space === undefined || space === null) {
        throw new Error("Missing the required parameter 'space' when calling listThingMQTTcredentials");
      } // verify the required parameter 'thingId' is set


      if (thingId === undefined || thingId === null) {
        throw new Error("Missing the required parameter 'thingId' when calling listThingMQTTcredentials");
      }

      var pathParams = {
        'space': space,
        'thing-id': thingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['AccessToken', 'OAuth2AuthorizationCode', 'OAuth2ClientCredentials', 'OAuth2Security', 'OAuth2Security', 'bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ShowCredentialsThingResponse["default"];
      return this.apiClient.callApi('/spaces/{space}/mqtt/things/{thing-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Thing MQTT credentials
     * Shiw an specific MQTT credentials for a specific thing
     * @param {String} space 
     * @param {String} thingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShowCredentialsThingResponse}
     */

  }, {
    key: "listThingMQTTcredentials",
    value: function listThingMQTTcredentials(space, thingId) {
      return this.listThingMQTTcredentialsWithHttpInfo(space, thingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MQTTThingsApi;
}();

exports["default"] = MQTTThingsApi;