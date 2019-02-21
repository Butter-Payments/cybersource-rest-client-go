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
    define(['ApiClient', 'model/PtsV2PaymentsPost502Response', 'model/TssV2TransactionsPost201Response', 'model/TssV2TransactionsPost400Response', 'model/TssV2TransactionsPostResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PtsV2PaymentsPost502Response'), require('../model/TssV2TransactionsPost201Response'), require('../model/TssV2TransactionsPost400Response'), require('../model/TssV2TransactionsPostResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.SearchTransactionsApi = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.TssV2TransactionsPost201Response, root.CyberSource.TssV2TransactionsPost400Response, root.CyberSource.TssV2TransactionsPostResponse);
  }
}(this, function(ApiClient, PtsV2PaymentsPost502Response, TssV2TransactionsPost201Response, TssV2TransactionsPost400Response, TssV2TransactionsPostResponse) {
  'use strict';

  /**
   * SearchTransactions service.
   * @module api/SearchTransactionsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new SearchTransactionsApi. 
   * @alias module:api/SearchTransactionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the createSearch operation.
     * @callback module:api/SearchTransactionsApi~createSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TssV2TransactionsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a search request
     * Create a search request. 
     * @param {module:model/TssV2TransactionsPostResponse} createSearchRequest 
     * @param {module:api/SearchTransactionsApi~createSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TssV2TransactionsPost201Response}
     */
    this.createSearch = function(createSearchRequest, callback) {
      var postBody = createSearchRequest;

      // verify the required parameter 'createSearchRequest' is set
      if (createSearchRequest === undefined || createSearchRequest === null) {
        throw new Error("Missing the required parameter 'createSearchRequest' when calling createSearch");
      }


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
      var accepts = ['*/*'];
      var returnType = TssV2TransactionsPost201Response;

      return this.apiClient.callApi(
        '/tss/v2/searches', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSearch operation.
     * @callback module:api/SearchTransactionsApi~getSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TssV2TransactionsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Search results
     * Include the Search ID in the GET request to retrieve the search results.
     * @param {String} id Search ID.
     * @param {module:api/SearchTransactionsApi~getSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TssV2TransactionsPost201Response}
     */
    this.getSearch = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSearch");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['*/*'];
      var returnType = TssV2TransactionsPost201Response;

      return this.apiClient.callApi(
        '/tss/v2/searches/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
