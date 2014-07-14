'use strict';

/**
 * @ngdoc function
 * @name simpleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleApp
 */
angular.module('simpleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


      $scope.create_activity=function() {
          var activities = JSON.parse(localStorage.getItem('activities')) || [];
//         getitem得到activities里的数据转化为数组存储到activitise里
          var activity = {}
          activity.name = $scope.name;
//          将文本框里的信息赋值给activity对象name属性
          activities.push(activity);
//          将存储的activity按顺序压入到activities里.
          localStorage.setItem("activities", JSON.stringify(activities));
//          将activities数组里的数据转换成字符串然给了activities.
      }


  });
