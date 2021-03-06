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
    instance = new MqttApiReference.FunctionsApi();
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

  describe('FunctionsApi', function() {
    describe('createFunction', function() {
      it('should call createFunction successfully', function(done) {
        //uncomment below and update the code to test createFunction
        //instance.createFunction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFunction', function() {
      it('should call deleteFunction successfully', function(done) {
        //uncomment below and update the code to test deleteFunction
        //instance.deleteFunction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFunction', function() {
      it('should call getFunction successfully', function(done) {
        //uncomment below and update the code to test getFunction
        //instance.getFunction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFunctionCode', function() {
      it('should call getFunctionCode successfully', function(done) {
        //uncomment below and update the code to test getFunctionCode
        //instance.getFunctionCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFunctionLogs', function() {
      it('should call getFunctionLogs successfully', function(done) {
        //uncomment below and update the code to test getFunctionLogs
        //instance.getFunctionLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invokeFunction', function() {
      it('should call invokeFunction successfully', function(done) {
        //uncomment below and update the code to test invokeFunction
        //instance.invokeFunction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invokeFunctionAsync', function() {
      it('should call invokeFunctionAsync successfully', function(done) {
        //uncomment below and update the code to test invokeFunctionAsync
        //instance.invokeFunctionAsync(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listFunctions', function() {
      it('should call listFunctions successfully', function(done) {
        //uncomment below and update the code to test listFunctions
        //instance.listFunctions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFunction', function() {
      it('should call updateFunction successfully', function(done) {
        //uncomment below and update the code to test updateFunction
        //instance.updateFunction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
