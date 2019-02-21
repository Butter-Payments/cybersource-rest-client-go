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
    root.CyberSource.Ptsv2paymentsidcapturesAggregatorInformationSubMerchant = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsidcapturesAggregatorInformationSubMerchant model module.
   * @module model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidcapturesAggregatorInformationSubMerchant</code>.
   * @alias module:model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Ptsv2paymentsidcapturesAggregatorInformationSubMerchant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant} The populated <code>Ptsv2paymentsidcapturesAggregatorInformationSubMerchant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * Sub-merchant’s business name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * First line of the sub-merchant’s street address.
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Sub-merchant’s city.
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * Sub-merchant’s state or province. Use the State, Province, and Territory Codes for the United States and Canada. 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Partial postal code for the sub-merchant’s address.
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * Sub-merchant’s country. Use the two-character ISO Standard Country Codes.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Sub-merchant’s email address.  **Maximum length for processors**   - American Express Direct: 40  - CyberSource through VisaNet: 40  - FDC Compass: 40  - FDC Nashville Global: 19 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Sub-merchant’s telephone number.  **Maximum length for procesors**   - American Express Direct: 20  - CyberSource through VisaNet: 20  - FDC Compass: 13  - FDC Nashville Global: 10 
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;



  return exports;
}));


