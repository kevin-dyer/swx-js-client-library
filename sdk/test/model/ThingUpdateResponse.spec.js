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
    instance = new SmartWorksSdk.ThingUpdateResponse();
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

  describe('ThingUpdateResponse', function() {
    it('should create an instance of ThingUpdateResponse', function() {
      // uncomment below and update the code to test ThingUpdateResponse
      //var instane = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be.a(SmartWorksSdk.ThingUpdateResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property space (base name: "space")', function() {
      // uncomment below and update the code to test the property space
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property collection (base name: "collection")', function() {
      // uncomment below and update the code to test the property collection
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property actions (base name: "actions")', function() {
      // uncomment below and update the code to test the property actions
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property events (base name: "events")', function() {
      // uncomment below and update the code to test the property events
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property href (base name: "href")', function() {
      // uncomment below and update the code to test the property href
      //var instance = new SmartWorksSdk.ThingUpdateResponse();
      //expect(instance).to.be();
    });

  });

}));
