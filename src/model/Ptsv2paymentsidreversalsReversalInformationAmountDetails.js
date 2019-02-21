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
    root.CyberSource.Ptsv2paymentsidreversalsReversalInformationAmountDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsidreversalsReversalInformationAmountDetails model module.
   * @module model/Ptsv2paymentsidreversalsReversalInformationAmountDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidreversalsReversalInformationAmountDetails</code>.
   * @alias module:model/Ptsv2paymentsidreversalsReversalInformationAmountDetails
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Ptsv2paymentsidreversalsReversalInformationAmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidreversalsReversalInformationAmountDetails} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidreversalsReversalInformationAmountDetails} The populated <code>Ptsv2paymentsidreversalsReversalInformationAmountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
    }
    return obj;
  }

  /**
   * Grand total for the order. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  * CTV, FDCCompass, Paymentech (<= 12)  For processor-specific information, see the grand_total_amount field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Currency used for the order. Use the three-character ISO Standard Currency Codes.  For an authorization reversal or a capture, you must use the same currency that you used in your request for Payment API. 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;



  return exports;
}));


