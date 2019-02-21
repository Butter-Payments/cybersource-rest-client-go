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
    root.CyberSource.PtsV2PaymentsPost201ResponseErrorInformationDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseErrorInformationDetails model module.
   * @module model/PtsV2PaymentsPost201ResponseErrorInformationDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseErrorInformationDetails</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseErrorInformationDetails
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseErrorInformationDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseErrorInformationDetails} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseErrorInformationDetails} The populated <code>PtsV2PaymentsPost201ResponseErrorInformationDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
    }
    return obj;
  }

  /**
   * This is the flattened JSON object field name/path that is either missing or invalid.
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * Possible reasons for the error. 
   * @member {module:model/PtsV2PaymentsPost201ResponseErrorInformationDetails.ReasonEnum} reason
   */
  exports.prototype['reason'] = undefined;


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
    "INVALID_DATA": "INVALID_DATA"  };


  return exports;
}));


