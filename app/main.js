require.config({
    paths: {
        "domReady": "/bower_components/requirejs-domready",
        "angular": "/bower_components/requirejs-domready",
        "angularRoute": "/bower_components/angular-route/angular-route"

    },

    shim: {
        "angular": {
            exports: "angular"
        }
    }
});

define([
    "require",
    "angular"
], function(require, ng){
    require(["domReady!"]), function(document){
        ng.bootstrap(document, )
    }
})

