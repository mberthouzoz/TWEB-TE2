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
      return $resource(APIConfig.URL_GITHUB_API + 'repos/:user/:repo/stats/:action', {},
        {
          'contributors': {
            method: 'GET',
            isArray: true,
            params: {
              action: 'contributors'
            }
          },
          'punchCards': {
            method: 'GET',
            isArray: true,
            params: {
              action: 'punch_card'
            }
          }
        });
    }
  ]);
