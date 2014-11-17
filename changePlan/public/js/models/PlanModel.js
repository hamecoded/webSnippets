define(function(require) {
    "use strict";
    
    var PlanModel = Backbone.Model.extend({
    	defaults: {
            baseBillingFrequencyMonths: 3,
            baseBillingFrequencyStr: "Quarter",
            currencies: [],
            discountAppliesTo: [],
            discountPeriods: 1,
            includedUnits: 0,
            lastUpdatedDate: 0,
            productName: "LiveEngage",
            productRatePlanName: "30 / Quarterly",
            ratePlanCharges: {},
            recommended: false
    	}


    });
   
    return PlanModel; 
});