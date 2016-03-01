'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsCtrl', ['$scope','List',function ($scope,List) {
 	$scope.datas = List.query();
 	
 	$scope.deleteList = function( listId ){
 		List.delete({ id: listId });
 		$scope.datas.pop({id: listId })
 	};

 	$scope.addList = function(){

 		$scope.data = new List(); 
 		$scope.data.title = $scope.title;
 		$scope.data.mode  = $scope.mode;

 		List.save($scope.data, function() {
 			$scope.title = '';
 			$scope.datas = List.query();
 		});
 	};

 }]);