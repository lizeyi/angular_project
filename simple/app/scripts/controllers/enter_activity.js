'use strict';

/**
 * @ngdoc function
 * @name simpleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleApp
 */
angular.module('simpleApp')
    .controller('EnterActivityCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.fan_hui = function () {
            $location.path('activity_list')
        }


$scope.loginData="false"
        $scope.kai_shi=function(){
            $scope.loginData="true"
        }
        $scope.jie_shu=function(){
            $scope.loginData="false"
        }
    });