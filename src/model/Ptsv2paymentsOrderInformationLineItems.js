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
    define(['ApiClient', 'model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsOrderInformationAmountDetailsTaxDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsOrderInformationLineItems = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsOrderInformationAmountDetailsTaxDetails);
  }
}(this, function(ApiClient, Ptsv2paymentsOrderInformationAmountDetailsTaxDetails) {
  'use strict';




  /**
   * The Ptsv2paymentsOrderInformationLineItems model module.
   * @module model/Ptsv2paymentsOrderInformationLineItems
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsOrderInformationLineItems</code>.
   * @alias module:model/Ptsv2paymentsOrderInformationLineItems
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>Ptsv2paymentsOrderInformationLineItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsOrderInformationLineItems} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsOrderInformationLineItems} The populated <code>Ptsv2paymentsOrderInformationLineItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('productCode')) {
        obj['productCode'] = ApiClient.convertToType(data['productCode'], 'String');
      }
      if (data.hasOwnProperty('productName')) {
        obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
      }
      if (data.hasOwnProperty('productSku')) {
        obj['productSku'] = ApiClient.convertToType(data['productSku'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('unitPrice')) {
        obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'String');
      }
      if (data.hasOwnProperty('unitOfMeasure')) {
        obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
      }
      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('taxAmount')) {
        obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'String');
      }
      if (data.hasOwnProperty('taxRate')) {
        obj['taxRate'] = ApiClient.convertToType(data['taxRate'], 'String');
      }
      if (data.hasOwnProperty('taxAppliedAfterDiscount')) {
        obj['taxAppliedAfterDiscount'] = ApiClient.convertToType(data['taxAppliedAfterDiscount'], 'String');
      }
      if (data.hasOwnProperty('taxStatusIndicator')) {
        obj['taxStatusIndicator'] = ApiClient.convertToType(data['taxStatusIndicator'], 'String');
      }
      if (data.hasOwnProperty('taxTypeCode')) {
        obj['taxTypeCode'] = ApiClient.convertToType(data['taxTypeCode'], 'String');
      }
      if (data.hasOwnProperty('amountIncludesTax')) {
        obj['amountIncludesTax'] = ApiClient.convertToType(data['amountIncludesTax'], 'Boolean');
      }
      if (data.hasOwnProperty('typeOfSupply')) {
        obj['typeOfSupply'] = ApiClient.convertToType(data['typeOfSupply'], 'String');
      }
      if (data.hasOwnProperty('commodityCode')) {
        obj['commodityCode'] = ApiClient.convertToType(data['commodityCode'], 'String');
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'String');
      }
      if (data.hasOwnProperty('discountApplied')) {
        obj['discountApplied'] = ApiClient.convertToType(data['discountApplied'], 'Boolean');
      }
      if (data.hasOwnProperty('discountRate')) {
        obj['discountRate'] = ApiClient.convertToType(data['discountRate'], 'String');
      }
      if (data.hasOwnProperty('invoiceNumber')) {
        obj['invoiceNumber'] = ApiClient.convertToType(data['invoiceNumber'], 'String');
      }
      if (data.hasOwnProperty('taxDetails')) {
        obj['taxDetails'] = ApiClient.convertToType(data['taxDetails'], [Ptsv2paymentsOrderInformationAmountDetailsTaxDetails]);
      }
      if (data.hasOwnProperty('fulfillmentType')) {
        obj['fulfillmentType'] = ApiClient.convertToType(data['fulfillmentType'], 'String');
      }
    }
    return obj;
  }

  /**
   * Type of product. This value is used to determine the category that the product is in: electronic, handling, physical, service, or shipping. The default value is **default**.  For a payment, when you set this field to a value other than default or any of the values related to shipping and handling, below fields _quantity_, _productName_, and _productSKU_ are required. 
   * @member {String} productCode
   */
  exports.prototype['productCode'] = undefined;
  /**
   * For PAYMENT and CAPTURE API, this field is required when above _productCode_ is not **default** or one of the values related to shipping and handling. 
   * @member {String} productName
   */
  exports.prototype['productName'] = undefined;
  /**
   * Identification code for the product. For PAYMENT and CAPTURE API, this field is required when above _productCode_ is not **default** or one of the values related to shipping and/or handling. 
   * @member {String} productSku
   */
  exports.prototype['productSku'] = undefined;
  /**
   * For a payment or capture, this field is required when _productCode_ is not **default** or one of the values related to shipping and handling. 
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * Per-item price of the product. This value cannot be negative. You can include a decimal point (.), but you cannot include any other special characters. CyberSource truncates the amount to the correct number of decimal places.  For processor-specific information, see the amount field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} unitPrice
   */
  exports.prototype['unitPrice'] = undefined;
  /**
   * Unit of measure, or unit of measure code, for the item. 
   * @member {String} unitOfMeasure
   */
  exports.prototype['unitOfMeasure'] = undefined;
  /**
   * Total amount for the item. Normally calculated as the unit price x quantity. 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Total tax to apply to the product. This value cannot be negative. The tax amount and the offer amount must be in the same currency. The tax amount field is additive.  The following example uses a two-exponent currency such as USD:   1. You include each line item in your request.  ..- 1st line item has amount=10.00, quantity=1, and taxAmount=0.80  ..- 2nd line item has amount=20.00, quantity=1, and taxAmount=1.60  2. The total amount authorized will be 32.40, not 30.00 with 2.40 of tax included.  This field is frequently used for Level II and Level III transactions. 
   * @member {String} taxAmount
   */
  exports.prototype['taxAmount'] = undefined;
  /**
   * Tax rate applied to the item. See \"Numbered Elements,\" page 14.  Visa: Valid range is 0.01 to 0.99 (1% to 99%, with only whole percentage values accepted; values with additional decimal places will be truncated).  Mastercard: Valid range is 0.00001 to 0.99999 (0.001% to 99.999%). 
   * @member {String} taxRate
   */
  exports.prototype['taxRate'] = undefined;
  /**
   * Flag to indicate how you handle discount at the line item level.   - 0: no line level discount provided  - 1: tax was calculated on the post-discount line item total  - 2: tax was calculated on the pre-discount line item total  `Note` Visa will inset 0 (zero) if an invalid value is included in this field.  This field relates to the value in the _lineItems[].discountAmount_ field. 
   * @member {String} taxAppliedAfterDiscount
   */
  exports.prototype['taxAppliedAfterDiscount'] = undefined;
  /**
   * Flag to indicate whether tax is exempted or not included.   - 0: tax not included  - 1: tax included  - 2: transaction is not subject to tax 
   * @member {String} taxStatusIndicator
   */
  exports.prototype['taxStatusIndicator'] = undefined;
  /**
   * Type of tax being applied to the item. Possible values:  Below values are used by **RBS WorldPay Atlanta**, **FDC Nashville Global**, **Litle**   - 0000: unknown tax type  - 0001: federal/national sales tax  - 0002: state sales tax  - 0003: city sales tax  - 0004: local sales tax  - 0005: municipal sales tax  - 0006: other tax  - 0010: value-added tax  - 0011: goods and services tax  - 0012: provincial sales tax  - 0013: harmonized sales tax  - 0014: Quebec sales tax (QST)  - 0020: room tax  - 0021: occupancy tax  - 0022: energy tax  - Blank: Tax not supported on line item. 
   * @member {String} taxTypeCode
   */
  exports.prototype['taxTypeCode'] = undefined;
  /**
   * Flag that indicates whether the tax amount is included in the Line Item Total. 
   * @member {Boolean} amountIncludesTax
   */
  exports.prototype['amountIncludesTax'] = undefined;
  /**
   * Flag to indicate whether the purchase is categorized as goods or services. Possible values:   - 00: goods  - 01: services 
   * @member {String} typeOfSupply
   */
  exports.prototype['typeOfSupply'] = undefined;
  /**
   * Commodity code or International description code used to classify the item. Contact your acquirer for a list of codes. 
   * @member {String} commodityCode
   */
  exports.prototype['commodityCode'] = undefined;
  /**
   * Discount applied to the item.
   * @member {String} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;
  /**
   * Flag that indicates whether the amount is discounted.  If you do not provide a value but you set Discount Amount to a value greater than zero, then CyberSource sets this field to **true**. 
   * @member {Boolean} discountApplied
   */
  exports.prototype['discountApplied'] = undefined;
  /**
   * Rate the item is discounted. Maximum of 2 decimal places.  Example 5.25 (=5.25%) 
   * @member {String} discountRate
   */
  exports.prototype['discountRate'] = undefined;
  /**
   * Field to support an invoice number for a transaction. You must specify the number of line items that will include an invoice number. By default, the first line item will include an invoice number field. The invoice number field can be included for up to 10 line items. 
   * @member {String} invoiceNumber
   */
  exports.prototype['invoiceNumber'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails>} taxDetails
   */
  exports.prototype['taxDetails'] = undefined;
  /**
   * TODO
   * @member {String} fulfillmentType
   */
  exports.prototype['fulfillmentType'] = undefined;



  return exports;
}));


