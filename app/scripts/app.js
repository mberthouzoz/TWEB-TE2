'use strict';

/**
 * @ngdoc overview
 * @name anguGHApp
 * @description
 * # anguGHApp
 *
 * Main module of the application.
 */
angular
  .module('anguGHApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js',
    'angular-growl'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/repos/:user', {
        templateUrl: 'views/repos.html',
        controller: 'ReposCtrl',
        controllerAs: 'repos'
      })
      .when('/repos/:user/:repo', {
        templateUrl: 'views/repo.html',
        controller: 'ReposCtrl',
        controllerAs: 'repos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('anguGHApp')
  // Optional configuration
  .config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
  }]);

angular.module('anguGHApp')
  .run(['$http', function ($http) {
    $http.defaults.headers.common['Authorization'] = 'Basic ' + 'bWJlcnRob3V6b3o6bWItLS0yNjky';
  }]);
