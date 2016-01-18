'use strict';

/**
 * @ngdoc service
 * @name anguGHApp.stats
 * @description
 * # stats
 * Factory in the anguGHApp.
 */
angular.module('anguGHApp')
  .factory('Stats', ['$resource', 'APIConfig',
    function ($resource, APIConfig) {
      return $resource(APIConfig.URL_GITHUB_API + 'repos/:user/:repo/stats/:action', {user: '@user', repos:'@repos'},
        {
          'punchCards': {
            method: 'GET',
            isArray: true,
            params: {
              action: 'punch_card'
            }
          }
        });
    }
  ])
  .factory('Contributors', ['$http', 'APIConfig',
    function($http, APIConfig) {
      return function(user, repo) {
        return $http({
          method: 'GET',
          url: APIConfig.URL_GITHUB_API + 'repos/'+user+'/'+repo+'/stats/contributors',
        });
      };
    }]);
