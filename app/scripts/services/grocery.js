'use strict';

/**
 * @ngdoc service
 * @name homerunApp.Grocery
 * @description
 * # Grocery
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('Grocery', function ($resource) {

  return $resource('http://192.168.1.8:3000/groceries/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });

});
