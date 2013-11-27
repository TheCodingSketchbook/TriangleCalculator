define(["angular"], function(ng){
    "use strict";

    return ng.module("app.directives", [])
        .directive("triangleCalculator", function(){
            return {
                restrict: "E",
                templateUrl: "app/common/triangle-canvas.tmpl.html"
            }
        });
});