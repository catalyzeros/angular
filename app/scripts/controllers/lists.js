'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsCtrl', ['$scope','Builder',function ($scope,Builder) {

 	Builder.set();

 	$scope.datas = Builder.all();

 	$scope.deleteList = function(index,listId){
 		Builder.delete($scope.datas,index,listId);
 	};

 	$scope.addList = function(){

 		var data = { list: {
 			title: $scope.title,
 			mode:  $scope.mode
 		}}; 

 		Builder.create($scope.datas,data)
 	};

 }]);