'use strict';

/**
 * @ngdoc service
 * @name homerunApp.Resource
 * @description
 * # Resource
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('Resource', function ($resource, $cacheFactory,$rootScope,$location) {

   $rootScope.server = 'http://localhost:3000/v1';
   var cache = $cacheFactory('resourceCache');

   var interceptor = {
    response: function (response) {
      cache.remove(response.config.url);
      //console.log('cache removed', response.config.url );
      
     /**
      * response does not have parent url. 
      * TODO : there must be a better way
      */
      cache.remove($rootScope.server+$location.url());
      //console.log('cache removed', $rootScope.server+$location.url() );

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
