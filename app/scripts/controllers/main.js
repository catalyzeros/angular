'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('MainCtrl', function ($scope,Builder) {

 	Builder.set('/feeds');

 	$scope.feeds = Builder.all();

 	$scope.addFeed = function(){

 		var data = { feed: { feed: this.feed } }; 

 		this.feed = '';
 		Builder.create($scope.feeds,data)
 	};


 });