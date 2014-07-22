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
            console.log('1111111111111111')
            $location.path('activity_list')
        }


        $scope.loginData="false"
        $scope.kai_shi=function(){
            $scope.loginData="true"
//            var get_status=JSON.parse(localStorage.getItem('activities'))
//            console.log(get_status[i].status)
//            get_status[0].status="true"
//            localStorage.setItem("activities", JSON.stringify(get_status))
            var get_status =JSON.parse(localStorage.getItem('activities'))

            for(var i=0;i<get_status.length;i++){
                if(get_status[i].name==localStorage.curent_activity){
                 get_status[i].status='true'
                 localStorage.setItem("activities", JSON.stringify(get_status))
                }
            }

                }


        $scope.jie_shu = function firm() {
            //利用对话框返回的值 （true 或者 false）
            if (confirm("确认要结束本次报名吗？")) {
                  $scope.loginData="false"
            }

        }


        if()
        localStorage.setItem("final_messages", JSON.stringify(null))
      //  var message = json_message.messages[0].message.replace(/\s/g, "");
//        message.search(/bm/i) == 0
//       show_message()
//        localStorage.removeItem('final_messages')
        var final_messages=JSON.parse(localStorage.getItem('final_messages')) || [];
        localStorage.final_messages=null;
        show_message()
       function show_message(){
           var messages = JSON.parse(localStorage.getItem('messages'))||[];
       //    localStorage.final_messages=null

           for(var i=0; i<messages.length;i++){              //判断活动的名字是否一样
               console.log('55555555555')

               if(messages[i].activity==localStorage.curent_activity){

                   var final_message={};
                   final_message.name=messages[i].name;
                   final_message.phone=messages[i].phone;
                   final_messages.unshift(final_message);

                   localStorage.setItem("final_messages", JSON.stringify(final_messages))

               }

           }

       }
        $scope.enter_list= JSON.parse(localStorage.getItem('final_messages'))


    });










