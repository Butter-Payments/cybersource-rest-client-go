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
    root.CyberSource.Ptsv2paymentsOrderInformationAmountDetailsTaxDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsOrderInformationAmountDetailsTaxDetails model module.
   * @module model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsOrderInformationAmountDetailsTaxDetails</code>.
   * @alias module:model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Ptsv2paymentsOrderInformationAmountDetailsTaxDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails} The populated <code>Ptsv2paymentsOrderInformationAmountDetailsTaxDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('rate')) {
        obj['rate'] = ApiClient.convertToType(data['rate'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('taxId')) {
        obj['taxId'] = ApiClient.convertToType(data['taxId'], 'String');
      }
      if (data.hasOwnProperty('applied')) {
        obj['applied'] = ApiClient.convertToType(data['applied'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * This is used to determine what type of tax related data should be inclued under _taxDetails_ object. 
   * @member {module:model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Please see below table for related decription based on above _type_ field.  | type      | amount description | |-----------|--------------------| | alternate | Total amount of alternate tax for the order. | | local     | Sales tax for the order. | | national  | National tax for the order. | | vat       | Total amount of VAT or other tax included in the order. | 
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Rate of VAT or other tax for the order.  Example 0.040 (=4%)  Valid range: 0.01 to 0.99 (1% to 99%, with only whole percentage values accepted; values with additional decimal places will be truncated) 
   * @member {String} rate
   */
  exports.prototype['rate'] = undefined;
  /**
   * Type of tax being applied to the item. Possible values:  Below values are used by **RBS WorldPay Atlanta**, **FDC Nashville Global**, **Litle**   - 0000: unknown tax type  - 0001: federal/national sales tax  - 0002: state sales tax  - 0003: city sales tax  - 0004: local sales tax  - 0005: municipal sales tax  - 0006: other tax  - 0010: value-added tax  - 0011: goods and services tax  - 0012: provincial sales tax  - 0013: harmonized sales tax  - 0014: Quebec sales tax (QST)  - 0020: room tax  - 0021: occupancy tax  - 0022: energy tax  - Blank: Tax not supported on line item. 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Your tax ID number to use for the alternate tax amount. Required if you set alternate tax amount to any value, including zero. You may send this field without sending alternate tax amount. 
   * @member {String} taxId
   */
  exports.prototype['taxId'] = undefined;
  /**
   * The tax is applied. Valid value is `true` or `false`.
   * @member {Boolean} applied
   */
  exports.prototype['applied'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "alternate"
     * @const
     */
    "alternate": "alternate",
    /**
     * value: "local"
     * @const
     */
    "local": "local",
    /**
     * value: "national"
     * @const
     */
    "national": "national",
    /**
     * value: "vat"
     * @const
     */
    "vat": "vat"  };


  return exports;
}));


