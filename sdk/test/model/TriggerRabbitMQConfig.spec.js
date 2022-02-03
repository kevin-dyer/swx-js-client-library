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
    instance = new MqttApiReference.TriggerRabbitMQConfig();
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

  describe('TriggerRabbitMQConfig', function() {
    it('should create an instance of TriggerRabbitMQConfig', function() {
      // uncomment below and update the code to test TriggerRabbitMQConfig
      //var instane = new MqttApiReference.TriggerRabbitMQConfig();
      //expect(instance).to.be.a(MqttApiReference.TriggerRabbitMQConfig);
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instance = new MqttApiReference.TriggerRabbitMQConfig();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instance = new MqttApiReference.TriggerRabbitMQConfig();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new MqttApiReference.TriggerRabbitMQConfig();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new MqttApiReference.TriggerRabbitMQConfig();
      //expect(instance).to.be();
    });

    it('should have the property exchange (base name: "exchange")', function() {
      // uncomment below and update the code to test the property exchange
      //var instance = new MqttApiReference.TriggerRabbitMQConfig();
      //expect(instance).to.be();
    });

    it('should have the property queue (base name: "queue")', function() {
      // uncomment below and update the code to test the property queue
      //var instance = new MqttApiReference.TriggerRabbitMQConfig();
      //expect(instance).to.be();
    });

    it('should have the property topics (base name: "topics")', function() {
      // uncomment below and update the code to test the property topics
      //var instance = new MqttApiReference.TriggerRabbitMQConfig();
      //expect(instance).to.be();
    });

  });

}));
