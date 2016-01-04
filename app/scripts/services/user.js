'use strict';

/**
 * @ngdoc service
 * @name anguGHApp.User
 * @description
 * # user
 * Factory in the anguGHApp.
 */
angular.module('anguGHApp')
  .factory('User', ['$resource', 'APIConfig',
    function ($resource, APIConfig) {
      return $resource(APIConfig.URL_GITHUB_API + 'users/:user', {user: '@user'});
    }
  ]);

angular.module('anguGHApp')
  .factory('UserRepo', ['$resource', 'APIConfig',
    function ($resource, APIConfig) {
      return $resource(APIConfig.URL_GITHUB_API + 'users/:user/repos', {user: '@user'});
    }
  ]);
