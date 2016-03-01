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

 	return $resource('http://localhost:3000/api/lists/:id.json', { id: '@_id' }, {
 		update: {
      		method: 'PUT'
 		}
	});

 });

