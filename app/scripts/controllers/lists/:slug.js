'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsSlugCtrl
 * @description
 * # ListsSlugCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsSlugCtrl', ['$scope',function($scope){

 	$scope.posts = [
 		{title: 'Bread', piece: 2},
 		{title: 'Chips', piece: 3},
 		{title: 'Steak', piece: 2},
 	];

 	$scope.addPost = function(){
 	 	$scope.posts.push({title: $scope.title, piece: $scope.piece });
 		
 		$scope.title = '';
 		$scope.piece = '';
 	};

 }]);