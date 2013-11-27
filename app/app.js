define([
    "angular",
    "common/directives"
], function(ng){
    "use strict";

    return ng.module("app", ['app.directives'])
        .controller(function($scope){
            $scope.angle1 = 60;
            $scope.angle2 = 60;
            $scope.angle3 = 60;
        });
});