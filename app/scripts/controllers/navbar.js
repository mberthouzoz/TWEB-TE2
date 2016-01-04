'use strict';

/**
 * @ngdoc function
 * @name anguGHApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the anguGHApp
 */
angular.module('anguGHApp')
  .controller('NavbarCtrl', ['$scope', '$location',  function($scope, $location) {
    $scope.search = function(term) {
      $location.path('/').search('q', term);
    };
  }]);
