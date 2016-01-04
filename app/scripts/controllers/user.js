'use strict';

/**
 * @ngdoc function
 * @name anguGHApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the anguGHApp
 */
angular.module('anguGHApp')
  .controller('UserCtrl', ['$scope', '$location', 'User', 'UserRepo', 'growl', function ($scope, $location, User, UserRepo, growl) {
  console.log($location);
    var username = $location.search()['q'];
    console.log(username);
    if (username) {
      User.get({user: username}, function (user) {
        $scope.user = user;

        // If the user exit, searches the repos
        UserRepo.query({user: username}, function (repos) {
          $scope.repos = repos;
        });
      }, function (response) {
        $scope.user = null;
        if (response.status === 404) {
          growl.error(username + ' does not exist !',  {ttl: 5000});
        }
      });
    }
  }]);
