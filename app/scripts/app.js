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
      .when('/@:slug', {
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
        templateUrl: 'views/lists/show.html',
        controller: 'ListsShowCtrl',
        controllerAs: 'lists/show'
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
        templateUrl: 'views/tags/show.html',
        controller: 'TagsShowCtrl',
        controllerAs: 'tags/show'
      })
      .when('/files/:slug/new', {
        templateUrl: 'views/files/new.html',
        controller: 'FilesNewCtrl',
        controllerAs: 'files/new'
      })
      .when('/files/:slug', {
        templateUrl: 'views/files/show.html',
        controller: 'FilesShowCtrl',
        controllerAs: 'files/show'
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