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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DigitalModelApiWip);
  }
}(this, function(expect, DigitalModelApiWip) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DigitalModelApiWip.PropertyMemory();
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

  describe('PropertyMemory', function() {
    it('should create an instance of PropertyMemory', function() {
      // uncomment below and update the code to test PropertyMemory
      //var instane = new DigitalModelApiWip.PropertyMemory();
      //expect(instance).to.be.a(DigitalModelApiWip.PropertyMemory);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new DigitalModelApiWip.PropertyMemory();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new DigitalModelApiWip.PropertyMemory();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new DigitalModelApiWip.PropertyMemory();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instance = new DigitalModelApiWip.PropertyMemory();
      //expect(instance).to.be();
    });

    it('should have the property readOnly (base name: "readOnly")', function() {
      // uncomment below and update the code to test the property readOnly
      //var instance = new DigitalModelApiWip.PropertyMemory();
      //expect(instance).to.be();
    });

  });

}));
