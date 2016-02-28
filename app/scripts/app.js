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
      .when('/lists/new', {
        templateUrl: 'views/lists/new.html',
        controller: 'ListsNewCtrl',
        controllerAs: 'lists/new'
      })
      .when('/lists/:slug', {
        templateUrl: 'views/lists/:slug.html',
        controller: 'ListsSlugCtrl',
        controllerAs: 'lists/:slug'
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
      .when('/files/:slug/new', {
        templateUrl: 'views/files/new.html',
        controller: 'FilesNewCtrl',
        controllerAs: 'files/new'
      })
      .when('/files/:slug', {
        templateUrl: 'views/files/:slug.html',
        controller: 'FilesSlugCtrl',
        controllerAs: 'files/:slug'
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