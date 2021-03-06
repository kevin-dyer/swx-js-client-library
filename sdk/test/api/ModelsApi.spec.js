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
    instance = new MqttApiReference.ModelsApi();
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

  describe('ModelsApi', function() {
    describe('addModel', function() {
      it('should call addModel successfully', function(done) {
        //uncomment below and update the code to test addModel
        //instance.addModel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteModel', function() {
      it('should call deleteModel successfully', function(done) {
        //uncomment below and update the code to test deleteModel
        //instance.deleteModel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listModels', function() {
      it('should call listModels successfully', function(done) {
        //uncomment below and update the code to test listModels
        //instance.listModels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showModel', function() {
      it('should call showModel successfully', function(done) {
        //uncomment below and update the code to test showModel
        //instance.showModel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateModel', function() {
      it('should call updateModel successfully', function(done) {
        //uncomment below and update the code to test updateModel
        //instance.updateModel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
