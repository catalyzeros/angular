'use strict';

/**
 * @ngdoc service
 * @name homerunApp.posts
 * @description
 * # posts
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('posts', function () {

  var o = {
    posts: []
  };

  return o;


});
