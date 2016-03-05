'use strict';

/**
 * @ngdoc service
 * @name homerunApp.lists
 * @description
 * # lists
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('List', function ($resource) {

 	return $resource('http://192.168.1.8:3000/lists/:id', { id: '@_id' }, {
 		update: {
      		method: 'PUT'
 		}
	});

 });