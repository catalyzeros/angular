'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('MainCtrl', function ($scope,Builder,$rootScope,$auth) {

 	Builder.set('/feeds');

 	$scope.feeds = Builder.all();
 	
 	$scope.addFeed = function(){

 		var data = { feed: { feed: this.feed } }; 

 		this.feed = '';
 		Builder.create($scope.feeds,data)
 	};

 	var channel = $rootScope.pusher.subscribe('feeds');

 	channel.bind('create', function(data) {
 		if(data.user_id !== $auth.user.id){
 			var element = Builder.find(data.feed);
 			$scope.feeds.push(element);
 		}
 	});


 });