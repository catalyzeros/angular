'use strict';

/**
 * @ngdoc overview
 * @name homerunApp
 * @description
 * # homerunApp
 *
 * Main module of the application.
 */
angular
  .module('homerunApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/@:id', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/lists', {
        templateUrl: 'views/lists.html',
        controller: 'ListsCtrl',
        controllerAs: 'lists'
      })
      .when('/files', {
        templateUrl: 'views/files.html',
        controller: 'FilesCtrl',
        controllerAs: 'files'
      })
      .when('/tags', {
        templateUrl: 'views/tags.html',
        controller: 'TagsCtrl',
        controllerAs: 'tags'
      })
      .when('/tags/:slug', {
        templateUrl: 'views/tags/:slug.html',
        controller: 'TagsSlugCtrl',
        controllerAs: 'tags/:slug'
      })
      .when('/lists/:slug', {
        templateUrl: 'views/lists/:slug.html',
        controller: 'ListsSlugCtrl',
        controllerAs: 'lists/:slug'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope , $location) {
      $rootScope.isActive = function(viewLocation) {
          return viewLocation === $location.path();
      };
  });