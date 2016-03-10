'use strict';

/**
 * @ngdoc service
 * @name homerunApp.Item
 * @description
 * # Item
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('Item', function (Resource , $cacheFactory , $rootScope ) {

 	var service = {};

  	var Data = Resource($rootScope.server+'/items/:id', { id: '@id' });

 	service.get = function (slug) {
 		return Data.get({ id : slug });
 	};

 	service.all = function () {
 		return Data.query();
 	};

 	service.create = function ( item ) {
 		return Data.save(item);
 	};

 	service.delete = function ( slug ) {
 		return Data.delete({id : slug })
 	}

 	return service;

});
