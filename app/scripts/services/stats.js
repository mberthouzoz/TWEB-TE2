'use strict';

/**
 * @ngdoc service
 * @name anguGHApp.stats
 * @description
 * # stats
 * Factory in the anguGHApp.
 */
angular.module('anguGHApp')
  .factory('StatsContributors', ['$resource', 'APIConfig',
    function ($resource, APIConfig) {
      return $resource(APIConfig.URL_GITHUB_API + 'repos/:user/:repo/stats/contributors', {repo: '@repo', user: '@user'});
    }
  ]);

angular.module('anguGHApp')
  .factory('StatsPunchCard', ['$resource', 'APIConfig',
    function ($resource, APIConfig) {
      return $resource(APIConfig.URL_GITHUB_API + 'repos/:user/:repo/stats/punch_card', {repo: '@repo', user: '@user'});
    }
  ]);
