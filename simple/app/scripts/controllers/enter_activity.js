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


        $scope.jie_shu = function firm() {
            //利用对话框返回的值 （true 或者 false）
            if (confirm("确认要结束本次报名吗？")) {
                  $scope.loginData="false"
            }

        }

      //  var message = json_message.messages[0].message.replace(/\s/g, "");
//        message.search(/bm/i) == 0


       function show_message(){

           var messages = JSON.parse(localStorage.getItem('messages'))||[];
           console.log(11111111111111111)
           for(var i=0; i<messages[0].activity.length;i++){

               if(messages[i].activity==messages){
                   $scope.show_render=true;
                   return;
               }

           }

       }


    });










