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
    root.CyberSource.Ptsv2paymentsidrefundsProcessingInformationRecurringOptions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsidrefundsProcessingInformationRecurringOptions model module.
   * @module model/Ptsv2paymentsidrefundsProcessingInformationRecurringOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidrefundsProcessingInformationRecurringOptions</code>.
   * @alias module:model/Ptsv2paymentsidrefundsProcessingInformationRecurringOptions
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv2paymentsidrefundsProcessingInformationRecurringOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidrefundsProcessingInformationRecurringOptions} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidrefundsProcessingInformationRecurringOptions} The populated <code>Ptsv2paymentsidrefundsProcessingInformationRecurringOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('loanPayment')) {
        obj['loanPayment'] = ApiClient.convertToType(data['loanPayment'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Flag that indicates whether this is a payment towards an existing contractual loan. 
   * @member {Boolean} loanPayment
   * @default false
   */
  exports.prototype['loanPayment'] = false;



  return exports;
}));


