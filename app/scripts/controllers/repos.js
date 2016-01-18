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
      /**
       * Finds the repositories
       */
      $scope.findRepos = function () {
        $scope.username = $routeParams.user;
        if ($scope.username) {
          UserRepo.query({user: $scope.username}, function (repos) {
            $scope.repos = repos;
          });
        }
      };

      /**
       * Finds the repository
       */
      $scope.findRepo = function () {
        if ($routeParams.user && $routeParams.repo) {
          Repos.get({user: $routeParams.user, repo: $routeParams.repo}, function (repo) {
            $scope.repo = repo;
          });
        }
      };
    }]);
