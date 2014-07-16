'use strict';

/**
 * @ngdoc function
 * @name simpleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleApp
 */
angular.module('simpleApp')
    .controller('MainCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        var activities = JSON.parse(localStorage.getItem('activities'))||[];
        if (activities.length == 0) {
            $scope.fanhui = "false"
        }
        else {
            $scope.fanhui = "true"
        }


        $scope.fan_hui = function () {
            $location.path('/activity_list')
        }


        $scope.create_activity = function () {
            console.log('1111111111')
            judge_repeat_activity();

        }

        function judge_repeat_activity() {
            var activities = JSON.parse(localStorage.getItem('activities')) || []

            if (activities == '') {
                console.log('333333333333')
                var activity = {}
                activity.name = $scope.name;
                activities.unshift(activity);
                localStorage.setItem("activities", JSON.stringify(activities));
                $location.path('/enter_activity')
            }
            else {
                console.log('4444444444444')
                for (var i = 0; i < activities.length; i++) {
                    console.log('555555555555555')
                    if (activities[i].name == $scope.name) {
                        console.log('666666666666')
                        $scope.show_render = true;
                        return;
                    }
                }
                $scope.show_render = false;
                var activity = {}
                activity.name = $scope.name;
                activities.unshift(activity);
                localStorage.setItem("activities", JSON.stringify(activities));
                $location.path('/enter_activity')
            }
        }


    });
