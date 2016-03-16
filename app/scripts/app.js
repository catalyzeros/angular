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
  'ngTouch',
  'ng-token-auth',
  'ngNotify'
  ])
 .config(function ($routeProvider,$authProvider) {

  $authProvider.configure({
    apiUrl: 'http://localhost:3000'
  });

  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main',
    resolve: {
      auth: function($auth,$location) {
        return $auth.validateUser().catch(function(){
          $location.path('/login');          
        });
      }
    }
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .when('/@:slug', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileCtrl',
    controllerAs: 'profile',
    resolve: {
      auth: function($auth,$location) {
        return $auth.validateUser().catch(function(){
          $location.path('/login');          
        });
      }
    }
  })
  .when('/lists', {
    templateUrl: 'views/lists.html',
    controller: 'ListsCtrl',
    controllerAs: 'lists',
    resolve: {
      auth: function($auth,$location) {
        return $auth.validateUser().catch(function(){
          $location.path('/login');          
        }); 
      }
    }
  })
  .when('/lists/new', {
    templateUrl: 'views/lists/new.html',
    controller: 'ListsNewCtrl',
    controllerAs: 'lists/new'
  })
  .when('/lists/:slug/items', {
    templateUrl: 'views/lists/show.html',
    controller: 'ListsShowCtrl',
    controllerAs: 'lists/show'
  })
  .when('/files', {
    templateUrl: 'views/files.html',
    controller: 'FilesCtrl',
    controllerAs: 'files',
    resolve: {
      auth: function($auth,$location) {
        return $auth.validateUser().catch(function(){
          $location.path('/login');          
        });
      }
    }
  })
  .when('/tags', {
    templateUrl: 'views/tags.html',
    controller: 'TagsCtrl',
    controllerAs: 'tags',
    resolve: {
      auth: function($auth,$location) {
        return $auth.validateUser().catch(function(){
          $location.path('/login');          
        });
      }
    }
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
 .run(function($rootScope , $location , ngNotify) {
  $rootScope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $rootScope.$on('auth:login-success', function(ev, user) {
    ngNotify.set('Welcome home!','info');
    $location.path('/');
  });

  $rootScope.$on('auth:login-error', function(ev, reason) {
    ngNotify.set(reason.errors[0],'error');
  });

  $rootScope.$on('auth:registration-email-error', function(ev, reason) {
    ngNotify.set(reason.errors.full_messages,'error');
    //console.log(reason);
  });

  $rootScope.$on('auth:registration-email-success', function(ev, message) {
   $location.path('/login');
   ngNotify.set('You can login now!','info');
 });


  


  
});