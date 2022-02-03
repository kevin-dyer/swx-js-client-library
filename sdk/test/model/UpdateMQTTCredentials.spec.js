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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MqttApiReference);
  }
}(this, function(expect, MqttApiReference) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MqttApiReference.UpdateMQTTCredentials();
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

  describe('UpdateMQTTCredentials', function() {
    it('should create an instance of UpdateMQTTCredentials', function() {
      // uncomment below and update the code to test UpdateMQTTCredentials
      //var instane = new MqttApiReference.UpdateMQTTCredentials();
      //expect(instance).to.be.a(MqttApiReference.UpdateMQTTCredentials);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new MqttApiReference.UpdateMQTTCredentials();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new MqttApiReference.UpdateMQTTCredentials();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new MqttApiReference.UpdateMQTTCredentials();
      //expect(instance).to.be();
    });

    it('should have the property expiredAt (base name: "expired_at")', function() {
      // uncomment below and update the code to test the property expiredAt
      //var instance = new MqttApiReference.UpdateMQTTCredentials();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new MqttApiReference.UpdateMQTTCredentials();
      //expect(instance).to.be();
    });

  });

}));
