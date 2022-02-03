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
    instance = new MqttApiReference.ThingCreateResponseCredentials();
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

  describe('ThingCreateResponseCredentials', function() {
    it('should create an instance of ThingCreateResponseCredentials', function() {
      // uncomment below and update the code to test ThingCreateResponseCredentials
      //var instane = new MqttApiReference.ThingCreateResponseCredentials();
      //expect(instance).to.be.a(MqttApiReference.ThingCreateResponseCredentials);
    });

    it('should have the property http (base name: "http")', function() {
      // uncomment below and update the code to test the property http
      //var instance = new MqttApiReference.ThingCreateResponseCredentials();
      //expect(instance).to.be();
    });

    it('should have the property mqtt (base name: "mqtt")', function() {
      // uncomment below and update the code to test the property mqtt
      //var instance = new MqttApiReference.ThingCreateResponseCredentials();
      //expect(instance).to.be();
    });

  });

}));
