'use strict';

/**
 * @ngdoc function
 * @name simpleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleApp
 */
angular.module('simpleApp')
    .controller('ActivityListCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        var activities = JSON.parse(localStorage.getItem('activities'))
        console.log(activities,'----------------------------')

    });

