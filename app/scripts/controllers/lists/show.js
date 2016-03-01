'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsSlugCtrl
 * @description
 * # ListsSlugCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsShowCtrl', [
 	'$scope',
 	'List',
 	'$routeParams',
 	function($scope,List,$routeParams){

 	$scope.data = List.get({ id: $routeParams.slug });


 	//$scope.data = List.List[0];

 	
 	// $scope.data = lists.lists[$routeParams.slug];

 	//$scope.lists = lists.lists;
 	/*
 	$scope.addPost = function(){
 	 	$scope.lists.push({title: $scope.title, piece: $scope.piece });
 		
 		$scope.title = '';
 		$scope.piece = '';
 	};
 	*/

 }]);