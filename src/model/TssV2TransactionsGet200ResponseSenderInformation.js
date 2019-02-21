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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponseSenderInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseSenderInformation model module.
   * @module model/TssV2TransactionsGet200ResponseSenderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseSenderInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseSenderInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseSenderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseSenderInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseSenderInformation} The populated <code>TssV2TransactionsGet200ResponseSenderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('referenceNumber')) {
        obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reference number generated by you that uniquely identifies the sender.
   * @member {String} referenceNumber
   */
  exports.prototype['referenceNumber'] = undefined;



  return exports;
}));


