'use strict';

/**
* @ngdoc function
* @name homerunApp.controller:LoginCtrl
* @description
* # LoginCtrl
* Controller of the homerunApp
*/
angular.module('homerunApp')
.controller('LoginCtrl', function($scope, $auth) {
	$scope.handleRegBtnClick = function() {

		$auth.submitRegistration($scope.registrationForm)
		.then(function(resp) {
		})
		.catch(function(resp) {
		});

		$location.path('/login');
	};

	$scope.handleLoginBtnClick = function() {
		$auth.submitLogin($scope.loginForm)
		.then(function(resp) {
		})
		.catch(function(resp) {
          // handle error response
      });
	};

	$scope.handleSignOutBtnClick = function() {
		$auth.signOut()
		.then(function(resp) {
          // handle success response
      })
		.catch(function(resp) {
          // handle error response
      });
	};

});