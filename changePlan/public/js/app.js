require(["js/require.config"], function (baseConfig) {
    "use strict";
    //debugger; //jshint ignore:line

    //common requires to be loaded now that the require paths have been set
    require(["require", "backbone", "marionette", "mustache", "bootstrap"], 
        function(require, backbone, marionette, mustache ){
        window.Mustache = mustache; //http://stackoverflow.com/questions/16556419/requirejs-not-loading-mustache-window-object
   
        /*
        We'll get here if using a selector for the template attribute. 
         */
        Marionette.ItemView.prototype.mixinTemplateHelpers = function (target) {
            target = target || {};
            var templateHelpers = this.templateHelpers;
            if (_.isFunction(templateHelpers)){
              templateHelpers = templateHelpers.call(this);
            }

            //// custom code
            target._i18n = function () {
                return function (text, renderer) {
                   
                    return renderer("fgd");
                };
            };
            //// custom code

            return _.extend(target, templateHelpers);            
        };


        /**
         * This function take a flat object and build upon it's keys, which contain dot seperators a nested json object
         * @param  {[type]} data [description]
         * @return {[type]}      returns the same data
         */
        Marionette.ItemView.prototype.i18n = function (data, i18n) {
            var _i18nArr = _.map(i18n, function(val, key, obj){
                var items = key.split('.');
                var o = {};
                var tmp = o;
                var i = 0;
                for(; i < items.length-1; i++){
                    if(items.length === 1){
                        tmp = tmp[key] = val;
                        return;
                    }
                    tmp = tmp[items[i]] = {};
                }
                tmp[items[i]] = val;
                return o;
            });
            var _i18n = {};
            _.each(_i18nArr, function(obj){
                $.extend(true, _i18n, obj);
            });
            data = _.extend(data, { _i18n: _i18n });
            return data;
        };

        //app specific require
        require(["controllers/AppController", "utils/SinonFakeServer"], function (AppController, SinonFakeServer) {
            var sfs = new SinonFakeServer();
            window.router = new AppController();
            
            Backbone.history.start({pushState: true});


            /**
             * incase the Browser supports pushState then disable anchors-inks default browser server-calls
             * so they'll be handled on the client side only.
             * http://artsy.github.io/blog/2012/06/25/replacing-hashbang-routes-with-pushstate/
             * https://gist.github.com/tbranyen/1142129
             * @param  {[type]} evt [description]
             * @return {[type]}     [description]
             */
            if (Backbone.history && Backbone.history._hasPushState) {
                $(document).on('click', 'a:not([data-bypass])', function (evt) {
                    var href = $(this).attr('href');
                    var protocol = this.protocol + '//';
                    //TODO: replace hash calls with absolute path
                    if (href.slice(protocol.length) !== protocol) {
                      evt.preventDefault();
                      router.navigate(href, true);
                    }
                });
            }    

        });
        
    });
});