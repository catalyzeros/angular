'use strict';

/**
 * @ngdoc service
 * @name homerunApp.Cache
 * @description
 * # Cache
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('Cache', function ($cacheFactory) {

 	var server = 'http://192.168.1.8:3000/'
 	var services = {};
 	var cache = $cacheFactory('itemCache');

 	services.delete = function (url) {
 			cache.remove(server+url);
 			console.log('cache removed',server+url);
 	};

 	return services;
 });
