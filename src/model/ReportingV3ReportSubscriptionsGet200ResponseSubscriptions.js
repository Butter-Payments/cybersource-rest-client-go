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
    define(['ApiClient', 'model/ReportingV3ReportSubscriptionsGet200ResponseReportPreferences'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportingV3ReportSubscriptionsGet200ResponseReportPreferences'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportingV3ReportSubscriptionsGet200ResponseSubscriptions = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3ReportSubscriptionsGet200ResponseReportPreferences);
  }
}(this, function(ApiClient, ReportingV3ReportSubscriptionsGet200ResponseReportPreferences) {
  'use strict';




  /**
   * The ReportingV3ReportSubscriptionsGet200ResponseSubscriptions model module.
   * @module model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3ReportSubscriptionsGet200ResponseSubscriptions</code>.
   * Subscription Details
   * @alias module:model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>ReportingV3ReportSubscriptionsGet200ResponseSubscriptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions} obj Optional instance to populate.
   * @return {module:model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions} The populated <code>ReportingV3ReportSubscriptionsGet200ResponseSubscriptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('reportDefinitionId')) {
        obj['reportDefinitionId'] = ApiClient.convertToType(data['reportDefinitionId'], 'String');
      }
      if (data.hasOwnProperty('reportDefinitionName')) {
        obj['reportDefinitionName'] = ApiClient.convertToType(data['reportDefinitionName'], 'String');
      }
      if (data.hasOwnProperty('reportMimeType')) {
        obj['reportMimeType'] = ApiClient.convertToType(data['reportMimeType'], 'String');
      }
      if (data.hasOwnProperty('reportFrequency')) {
        obj['reportFrequency'] = ApiClient.convertToType(data['reportFrequency'], 'String');
      }
      if (data.hasOwnProperty('reportName')) {
        obj['reportName'] = ApiClient.convertToType(data['reportName'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
      }
      if (data.hasOwnProperty('startDay')) {
        obj['startDay'] = ApiClient.convertToType(data['startDay'], 'Number');
      }
      if (data.hasOwnProperty('reportFields')) {
        obj['reportFields'] = ApiClient.convertToType(data['reportFields'], ['String']);
      }
      if (data.hasOwnProperty('reportFilters')) {
        obj['reportFilters'] = ApiClient.convertToType(data['reportFilters'], ['String']);
      }
      if (data.hasOwnProperty('reportPreferences')) {
        obj['reportPreferences'] = ReportingV3ReportSubscriptionsGet200ResponseReportPreferences.constructFromObject(data['reportPreferences']);
      }
      if (data.hasOwnProperty('selectedMerchantGroupName')) {
        obj['selectedMerchantGroupName'] = ApiClient.convertToType(data['selectedMerchantGroupName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Organization Id
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * Report Definition Id
   * @member {String} reportDefinitionId
   */
  exports.prototype['reportDefinitionId'] = undefined;
  /**
   * Report Definition
   * @member {String} reportDefinitionName
   */
  exports.prototype['reportDefinitionName'] = undefined;
  /**
   * Report Format
   * @member {module:model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions.ReportMimeTypeEnum} reportMimeType
   */
  exports.prototype['reportMimeType'] = undefined;
  /**
   * Report Frequency
   * @member {module:model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions.ReportFrequencyEnum} reportFrequency
   */
  exports.prototype['reportFrequency'] = undefined;
  /**
   * Report Name
   * @member {String} reportName
   */
  exports.prototype['reportName'] = undefined;
  /**
   * Time Zone
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * Start Time
   * @member {Date} startTime
   */
  exports.prototype['startTime'] = undefined;
  /**
   * Start Day
   * @member {Number} startDay
   */
  exports.prototype['startDay'] = undefined;
  /**
   * List of all fields String values
   * @member {Array.<String>} reportFields
   */
  exports.prototype['reportFields'] = undefined;
  /**
   * List of filters to apply
   * @member {Array.<String>} reportFilters
   */
  exports.prototype['reportFilters'] = undefined;
  /**
   * @member {module:model/ReportingV3ReportSubscriptionsGet200ResponseReportPreferences} reportPreferences
   */
  exports.prototype['reportPreferences'] = undefined;
  /**
   * Selected name of the group.
   * @member {String} selectedMerchantGroupName
   */
  exports.prototype['selectedMerchantGroupName'] = undefined;


  /**
   * Allowed values for the <code>reportMimeType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReportMimeTypeEnum = {
    /**
     * value: "application/xml"
     * @const
     */
    "application/xml": "application/xml",
    /**
     * value: "text/csv"
     * @const
     */
    "text/csv": "text/csv"  };

  /**
   * Allowed values for the <code>reportFrequency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReportFrequencyEnum = {
    /**
     * value: "DAILY"
     * @const
     */
    "DAILY": "DAILY",
    /**
     * value: "WEEKLY"
     * @const
     */
    "WEEKLY": "WEEKLY",
    /**
     * value: "MONTHLY"
     * @const
     */
    "MONTHLY": "MONTHLY"  };


  return exports;
}));


