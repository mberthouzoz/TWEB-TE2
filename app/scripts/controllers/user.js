'use strict';

/**
 * @ngdoc function
 * @name anguGHApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the anguGHApp
 */
angular.module('anguGHApp')
  .controller('UserCtrl', ['$scope', 'User', 'UserRepo', 'growl', function ($scope, User, UserRepo, growl) {
    $scope.findUser = function () {
      User.get({user: $scope.username}, function (user) {
        $scope.user = user;

        // If the user exit, searches the repos
        UserRepo.query({user: $scope.username}, function (repos) {
          $scope.repos = repos;
        });
      }, function (response) {
        $scope.user = null;
        if (response.status === 404) {
          growl.error($scope.username + ' does not exist !',  {ttl: 5000});
        }
      });
    };
  }]);
