/**
 * A Collection of Models
 * @param  Object require add dependencies
 * @return Object         Class Object
 */
define(function(require) {
    "use strict";

    var PlanModel = require("models/PlanModel");

    var PlanCollection = Backbone.Collection.extend({
    	model: PlanModel,
        url: '/api/upgradeplans',
        initialize: function(options){
            this.on("error", this.error, this);
            this.fetch({reset: true, parse: true});

        }, 
        parse: function(response, options){
            this.selectedPlan = response.selectedPlan;
            return response.plans;
        },
        error: function (model, response, options) {
            console.log(model);
            console.log(response);
            console.log(options);
        }

    	

    });
   
    return PlanCollection; 
});