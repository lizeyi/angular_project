'use strict';

/**
 * @ngdoc overview
 * @name simpleApp
 * @description
 * # simpleApp
 *
 * Main module of the application.
 */
angular
  .module('simpleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/activity_list',{
            templateUrl:'views/activity_list.html',
            controller:'ActivityListCtrl'
        }

    )
        .when('/enter_activity',{
            templateUrl:'views/enter_activity.html',
            controller:'EnterActivityCtrl'
        }

    )
      .otherwise({
        redirectTo: '/'
      });
  });



