'use strict';

/**
 * @ngdoc service
 * @name homerunApp.Resource
 * @description
 * # Resource
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('Resource', function ($resource, $cacheFactory,$rootScope) {

   $rootScope.server = 'http://192.168.1.8:3000';
   $rootScope.cache = $cacheFactory('resourceCache');

   var cache = $rootScope.cache;
   var interceptor = {
    response: function (response) {
      cache.remove(response.config.url);

      console.log('cache removed', response.config.url);
      return response;
    }
  };

  return function (url, paramDefaults, actions, options) {
    actions = angular.extend({}, actions, {
      'get':    { method: 'GET', cache: cache },
      'query':  { method: 'GET', cache: cache, isArray: true },
      'save':   { method: 'POST', interceptor: interceptor },
      'update': { method: 'PUT', interceptor: interceptor },
      'delete': { method: 'DELETE', interceptor: interceptor },
    });

    return $resource(url, paramDefaults, actions, options);
  };


});
