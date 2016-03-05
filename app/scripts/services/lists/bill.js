'use strict';

/**
 * @ngdoc service
 * @name homerunApp.bill
 * @description
 * # bill
 * Factory in the homerunApp.
 */
angular.module('homerunApp')
  .factory('bill', function () {
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
