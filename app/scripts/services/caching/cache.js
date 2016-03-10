'use strict';

/**
 * @ngdoc service
 * @name homerunApp.Cache
 * @description
 * # Cache
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('Cache', function ($cacheFactory,$rootScope) {

 	var services = {};
 	var cache = $rootScope.cache;

 	services.delete = function (url) {
 			cache.remove($rootScope.server+'/'+url);
 			console.log('cache removed',$rootScope.server+'/'+url);
 	};

 	return services;
 });
