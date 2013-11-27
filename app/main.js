require.config({

    paths: {
        "domReady": "../bower_components/requirejs-domready/domReady",
        "angular": "../bower_components/angular/angular",
        "angularRoute": "../bower_components/angular-route/angular-route"

    },

    shim: {
        "angular": {
            exports: "angular"
        }
    }
});

define([
    "require",
    "angular",
    "app"
], function(require, ng){
    "use strict";

    require(["domReady!"], function(document){
        ng.bootstrap(document, ["app"]);
    });
});

