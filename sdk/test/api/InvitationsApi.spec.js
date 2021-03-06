/**
 * Users API reference
 * Users OpenAPI endpoints - OpenAPI 3.0
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
    factory(root.expect, root.UsersApiReference);
  }
}(this, function(expect, UsersApiReference) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UsersApiReference.InvitationsApi();
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

  describe('InvitationsApi', function() {
    describe('deleteSentInvitation', function() {
      it('should call deleteSentInvitation successfully', function(done) {
        //uncomment below and update the code to test deleteSentInvitation
        //instance.deleteSentInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSentInvitation', function() {
      it('should call getSentInvitation successfully', function(done) {
        //uncomment below and update the code to test getSentInvitation
        //instance.getSentInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSentInvitations', function() {
      it('should call listSentInvitations successfully', function(done) {
        //uncomment below and update the code to test listSentInvitations
        //instance.listSentInvitations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSentInvitation', function() {
      it('should call updateSentInvitation successfully', function(done) {
        //uncomment below and update the code to test updateSentInvitation
        //instance.updateSentInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
