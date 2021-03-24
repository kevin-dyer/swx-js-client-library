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
    instance = new SmartWorksSdk.ModelVersionsApi();
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

  describe('ModelVersionsApi', function() {
    describe('addVersion', function() {
      it('should call addVersion successfully', function(done) {
        //uncomment below and update the code to test addVersion
        //instance.addVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVersion', function() {
      it('should call deleteVersion successfully', function(done) {
        //uncomment below and update the code to test deleteVersion
        //instance.deleteVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listVersion', function() {
      it('should call listVersion successfully', function(done) {
        //uncomment below and update the code to test listVersion
        //instance.listVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showVersion', function() {
      it('should call showVersion successfully', function(done) {
        //uncomment below and update the code to test showVersion
        //instance.showVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVersion', function() {
      it('should call updateVersion successfully', function(done) {
        //uncomment below and update the code to test updateVersion
        //instance.updateVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));