/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FlexV1KeysPost200Response', 'model/GeneratePublicKeyRequest', 'model/InlineResponseDefault'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FlexV1KeysPost200Response'), require('../model/GeneratePublicKeyRequest'), require('../model/InlineResponseDefault'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.KeyGenerationApi = factory(root.CyberSource.ApiClient, root.CyberSource.FlexV1KeysPost200Response, root.CyberSource.GeneratePublicKeyRequest, root.CyberSource.InlineResponseDefault);
  }
}(this, function(ApiClient, FlexV1KeysPost200Response, GeneratePublicKeyRequest, InlineResponseDefault) {
  'use strict';

  /**
   * KeyGeneration service.
   * @module api/KeyGenerationApi
   * @version 0.0.1
   */

  /**
   * Constructs a new KeyGenerationApi. 
   * @alias module:api/KeyGenerationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the generatePublicKey operation.
     * @callback module:api/KeyGenerationApi~generatePublicKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FlexV1KeysPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate Key
     * Generate a one-time use public key and key ID to encrypt the card number in the follow-on Tokenize Card request. The key used to encrypt the card number on the cardholder’s device or browser is valid for 15 minutes and must be used to verify the signature in the response message. CyberSource recommends creating a new key for each order. Generating a key is an authenticated request initiated from your servers, prior to requesting to tokenize the card data from your customer’s device or browser.
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneratePublicKeyRequest} opts.generatePublicKeyRequest 
     * @param {module:api/KeyGenerationApi~generatePublicKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FlexV1KeysPost200Response}
     */
    this.generatePublicKey = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['generatePublicKeyRequest'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = FlexV1KeysPost200Response;

      return this.apiClient.callApi(
        '/flex/v1/keys/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
