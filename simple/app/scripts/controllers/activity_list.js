'use strict';

/**
 * @ngdoc function
 * @name simpleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleApp
 */
angular.module('simpleApp')
    .controller('ActivityListCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        $scope.list = JSON.parse(localStorage.getItem('activities'))




        $scope.creat_activity=function(){
            $location.path('/main')
        }

        if(!name){

        }

        choose_index()
        function choose_index(){
            var choose = JSON.parse(localStorage.getItem('activities')) || []
            if(choose.length==0){
                $location.path('/main')
            }
           else{

            }
        }

    });

