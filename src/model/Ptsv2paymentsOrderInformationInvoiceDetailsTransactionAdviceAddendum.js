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
    root.CyberSource.Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum model module.
   * @module model/Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum</code>.
   * @alias module:model/Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum} The populated <code>Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'String');
      }
    }
    return obj;
  }

  /**
   * Four Transaction Advice Addendum (TAA) fields. These fields are used to display descriptive information about a transaction on the customer’s American Express card statement. When you send TAA fields, start with amexdata_taa1, then ...taa2, and so on. Skipping a TAA field causes subsequent TAA fields to be ignored.  To use these fields, contact CyberSource Customer Support to have your account enabled for this feature. 
   * @member {String} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


