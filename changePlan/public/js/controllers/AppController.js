/**
 * App Router
 * Author: Oded Sagir
 * @param  Object require for adding dependencies
 * @return Object         Class Object
 */		
define(["require",
    "collections/PlanCollection", "views/PlansView"], 
	function (require, 
        PlanCollection, PlansView) {
    "use strict";
	
    var AppController = Backbone.Router.extend({
    	routes: {
    		"": "showPlans"
    	},
    	initialize: function(){

    	},
		// Handlers
        showPlans: function () {
            console.log("AppController:showPlans");
            var planCollection= new PlanCollection();

            var plansView= new PlansView({
                el: ".plans-row-container",
                collection: planCollection
            });
        }

    });
			
   
    return AppController; 
});