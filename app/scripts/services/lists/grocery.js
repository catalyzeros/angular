'use strict';

/**
 * @ngdoc service
 * @name homerunApp.Grocery
 * @description
 * # Grocery
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('Grocery', function (Resource , $cacheFactory ) {

 	var service = {};

  	var Data = Resource('http://192.168.1.8:3000/groceries/:id', { id: '@id' });

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
