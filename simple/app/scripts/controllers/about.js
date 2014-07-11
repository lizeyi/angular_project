'use strict';

/**
 * @ngdoc function
 * @name simpleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpleApp
 */
angular.module('simpleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  });
