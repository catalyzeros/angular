'use strict';

/**
 * @ngdoc service
 * @name homerunApp.person
 * @description
 * # person
 * Factory in the homerunApp.
 */
angular.module('homerunApp')
  .factory('person', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
