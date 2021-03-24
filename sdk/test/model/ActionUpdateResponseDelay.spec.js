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
    instance = new SmartWorksSdk.ActionUpdateResponseDelay();
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

  describe('ActionUpdateResponseDelay', function() {
    it('should create an instance of ActionUpdateResponseDelay', function() {
      // uncomment below and update the code to test ActionUpdateResponseDelay
      //var instane = new SmartWorksSdk.ActionUpdateResponseDelay();
      //expect(instance).to.be.a(SmartWorksSdk.ActionUpdateResponseDelay);
    });

    it('should have the property input (base name: "input")', function() {
      // uncomment below and update the code to test the property input
      //var instance = new SmartWorksSdk.ActionUpdateResponseDelay();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new SmartWorksSdk.ActionUpdateResponseDelay();
      //expect(instance).to.be();
    });

    it('should have the property timeRequested (base name: "timeRequested")', function() {
      // uncomment below and update the code to test the property timeRequested
      //var instance = new SmartWorksSdk.ActionUpdateResponseDelay();
      //expect(instance).to.be();
    });

    it('should have the property timeCompleted (base name: "timeCompleted")', function() {
      // uncomment below and update the code to test the property timeCompleted
      //var instance = new SmartWorksSdk.ActionUpdateResponseDelay();
      //expect(instance).to.be();
    });

    it('should have the property href (base name: "href")', function() {
      // uncomment below and update the code to test the property href
      //var instance = new SmartWorksSdk.ActionUpdateResponseDelay();
      //expect(instance).to.be();
    });

  });

}));
