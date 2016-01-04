'use strict';

/**
 * @ngdoc service
 * @name anguGHApp.repos
 * @description
 * # repos
 * Factory in the anguGHApp.
 */
angular.module('anguGHApp')
  .factory('ReposCommit', ['$resource', 'APIConfig',
    function ($resource, APIConfig) {
      return $resource(APIConfig.URL_GITHUB_API + 'repos/:user/:repo/commits', {repo: '@repo', user: '@user'});
    }
  ]);

angular.module('anguGHApp')
  .factory('Repos', ['$resource', 'APIConfig',
    function ($resource, APIConfig) {
      return $resource(APIConfig.URL_GITHUB_API + 'repos/:user/:repo', {repo: '@repo', user: '@user'});
    }
  ]);
