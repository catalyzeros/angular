'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsCtrl', ['$scope','List','Cache',function ($scope,List,Cache) {

 	$scope.datas = List.all();
 	
 	$scope.deleteList = function( listId ){
 		$scope.datas.pop(List.delete(listId));
 		Cache.delete('lists');
 	};

 	$scope.addList = function(){

 		var data = { list: {
 			title: $scope.title,
 			mode:  $scope.mode
 		}}; 

 		$scope.datas.push(List.create(data));
 	};

 }]);