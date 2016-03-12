'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsCtrl', ['$scope','Builder','Cache',function ($scope,Builder,Cache) {

 	Builder.set('lists');

 	$scope.datas = Builder.all();

 	$scope.deleteList = function(index,listId){
 		Builder.delete($scope.datas,index,listId);
 		Cache.delete('lists');
 	};

 	$scope.addList = function(){

 		var data = { list: {
 			title: $scope.title,
 			mode:  $scope.mode
 		}}; 

 		Builder.create($scope.datas,data)
 	};

 }]);