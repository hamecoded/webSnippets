/**
 * View
 * Author: Oded Sagir
 * @param  Object require for adding dependencies
 * @return Object         Class Object
 */		
define(["require", "i18n!nls/changePlan", "text!templates/plan.html"],function(require, i18n, template) {
    "use strict";

    var PlanView = Marionette.ItemView.extend({
    	template: template,
        className: "plan-container",
    	events: {
    	},
    	initialize: function (options) {
            this.listenTo(this.model, "change", this.render);
            this.model.fetch();

            
    	},
    	render: function() {
            var data = this.model.toJSON();
            var rendered = Mustache.to_html(this.template, this.i18n(data, i18n)); 
            this.$el.html(rendered); //detached DOM element
            return this;
        }
		

    });
   
    return PlanView; 
});