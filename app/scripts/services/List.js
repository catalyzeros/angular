'use strict';

/**
 * @ngdoc service
 * @name homerunApp.lists
 * @description
 * # lists
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('List', function (Resource , $cacheFactory ) {

 	var service = {};

  	var Data = Resource('http://192.168.1.8:3000/lists/:id', { id: '@id' });

 	service.get = function (slug) {
 		return Data.get({ id : slug });
 	};

 	service.all = function () {
 		return Data.query();
 	};

 	service.create = function ( list ) {
 		return Data.save(list);
 	};

 	service.delete = function ( slug ) {
 		return Data.delete({id : slug })
 	}

 	return service;

 });