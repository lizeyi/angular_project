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

            judge_repeat_activity();

        }

        function judge_repeat_activity() {
            var activities = JSON.parse(localStorage.getItem('activities' )) || []

            if (activities == '') {
                var activity = {}
                activity.name = $scope.name;
                activities.unshift(activity);
                localStorage.setItem("activities", JSON.stringify(activities));
                $location.path('/enter_activity')
            }
            else {
                for (var i = 0; i < activities.length; i++) {
                    if (activities[i].name == $scope.name) {
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
