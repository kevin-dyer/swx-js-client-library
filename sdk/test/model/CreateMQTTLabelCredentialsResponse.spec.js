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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SmartWorksSdk);
  }
}(this, function(expect, SmartWorksSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SmartWorksSdk.CreateMQTTLabelCredentialsResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateMQTTLabelCredentialsResponse', function() {
    it('should create an instance of CreateMQTTLabelCredentialsResponse', function() {
      // uncomment below and update the code to test CreateMQTTLabelCredentialsResponse
      //var instane = new SmartWorksSdk.CreateMQTTLabelCredentialsResponse();
      //expect(instance).to.be.a(SmartWorksSdk.CreateMQTTLabelCredentialsResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SmartWorksSdk.CreateMQTTLabelCredentialsResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new SmartWorksSdk.CreateMQTTLabelCredentialsResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new SmartWorksSdk.CreateMQTTLabelCredentialsResponse();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new SmartWorksSdk.CreateMQTTLabelCredentialsResponse();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new SmartWorksSdk.CreateMQTTLabelCredentialsResponse();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new SmartWorksSdk.CreateMQTTLabelCredentialsResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SmartWorksSdk.CreateMQTTLabelCredentialsResponse();
      //expect(instance).to.be();
    });

    it('should have the property expiredAt (base name: "expired_at")', function() {
      // uncomment below and update the code to test the property expiredAt
      //var instance = new SmartWorksSdk.CreateMQTTLabelCredentialsResponse();
      //expect(instance).to.be();
    });

    it('should have the property topics (base name: "topics")', function() {
      // uncomment below and update the code to test the property topics
      //var instance = new SmartWorksSdk.CreateMQTTLabelCredentialsResponse();
      //expect(instance).to.be();
    });

  });

}));
