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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseErrorInformationDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseErrorInformationDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PayoutsPost400Response = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseErrorInformationDetails);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseErrorInformationDetails) {
  'use strict';




  /**
   * The PtsV2PayoutsPost400Response model module.
   * @module model/PtsV2PayoutsPost400Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PayoutsPost400Response</code>.
   * @alias module:model/PtsV2PayoutsPost400Response
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>PtsV2PayoutsPost400Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PayoutsPost400Response} obj Optional instance to populate.
   * @return {module:model/PtsV2PayoutsPost400Response} The populated <code>PtsV2PayoutsPost400Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [PtsV2PaymentsPost201ResponseErrorInformationDetails]);
      }
    }
    return obj;
  }

  /**
   * Time of request in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * The status of the submitted transaction.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The reason of the status. 
   * @member {module:model/PtsV2PayoutsPost400Response.ReasonEnum} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * The detail message related to the status and reason listed above. Possible value is:    - Your aggregator or acquirer is not accepting transactions from you at this time.   - Your aggregator or acquirer is not accepting this transaction.   - CyberSource declined the request because the credit card has expired. You might also receive this value if     the expiration date you provided does not match the date the issuing bank has on file.   - The bank declined the transaction.   - The merchant reference number for this authorization request matches the merchant reference number of     another authorization request that you sent within the past 15 minutes. Resend the request with a unique     merchant reference number.   - The credit card number did not pass CyberSource basic checks.   - Data provided is not consistent with the request. For example, you requested a product with negative cost.   - The request is missing a required field. 
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Array.<module:model/PtsV2PaymentsPost201ResponseErrorInformationDetails>} details
   */
  exports.prototype['details'] = undefined;


  /**
   * Allowed values for the <code>reason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReasonEnum = {
    /**
     * value: "MISSING_FIELD"
     * @const
     */
    "MISSING_FIELD": "MISSING_FIELD",
    /**
     * value: "INVALID_DATA"
     * @const
     */
    "INVALID_DATA": "INVALID_DATA",
    /**
     * value: "DUPLICATE_REQUEST"
     * @const
     */
    "DUPLICATE_REQUEST": "DUPLICATE_REQUEST",
    /**
     * value: "INVALID_MERCHANT_CONFIGURATION"
     * @const
     */
    "INVALID_MERCHANT_CONFIGURATION": "INVALID_MERCHANT_CONFIGURATION",
    /**
     * value: "INVALID_AMOUNT"
     * @const
     */
    "INVALID_AMOUNT": "INVALID_AMOUNT",
    /**
     * value: "DEBIT_CARD_USEAGE_EXCEEDD_LIMIT"
     * @const
     */
    "DEBIT_CARD_USEAGE_EXCEEDD_LIMIT": "DEBIT_CARD_USEAGE_EXCEEDD_LIMIT"  };


  return exports;
}));


