'use strict';

/**
 * @ngdoc function
 * @name anguGHApp.controller:ReposCtrl
 * @description
 * # ReposCtrl
 * Controller of the anguGHApp
 */
angular.module('anguGHApp')
  .controller('ReposCtrl', ['$scope', 'UserRepo', 'Repos', '$routeParams',
    function ($scope, UserRepo, Repos, $routeParams) {
    $scope.findRepos = function () {
      console.log($routeParams.user);
      if ($routeParams.user) {
        UserRepo.query({user: $routeParams.user}, function (repos) {
          $scope.repos = repos;
        });
      }
    };

    $scope.findRepo = function () {
      if ($routeParams.user && $routeParams.repo) {
        Repos.get({user: $routeParams.user, repo: $routeParams.repo}, function (repo) {
          console.log(repo);
          $scope.repo = repo;
        });
      }
    };
  }]);
