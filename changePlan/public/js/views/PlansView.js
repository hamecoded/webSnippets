/**
 * View
 * Author: Oded Sagir
 * @param  Object require for adding dependencies
 * @return Object         Class Object
 */		
define(function(require) {
    "use strict";

    var PlanView= require("views/PlanView");
    var PlanModel= require("models/PlanModel");


    var PlansView = Marionette.CollectionView.extend({
        childView: PlanView,
    	events: {
            'click .item': "showBase"
    	},
    	initialize: function (options) {
            this.listenTo( this.collection, "reset", this.render);
        }
		

    });
   
    return PlansView; 
});