/**
 * 
 * Author: Oded Sagir
 * @param  Object require for adding dependencies
 * @return Object         Class Object
 */		
define(["require", "js/database",
    "vendor/sinon/index"
    ], function(require, database) {
    "use strict";

    var SinonFakeServer = Marionette.Controller.extend({
    	
    	initialize: function (options) {
            this.server= sinon.fakeServer.create();
            this.server.autoRespond = true;
            this.server.autoRespondAfter = 400;

            this.server.respondWith('GET', '/api/upgradeplans',
                [
                    200,
                    {'Content-Type': 'application/json'},
                    JSON.stringify(database.upgradePlans)
                ]
            );
            
    	}
    	
		

    });
   
    return SinonFakeServer; 
});