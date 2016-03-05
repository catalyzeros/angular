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

 		var list = new List({
 			list: {
 				title: $scope.title,
 				mode:  $scope.mode
 			}
 		}); 

 		$scope.datas.push(List.save( list , function() {
 			$scope.title = '';
 		}));
 	};

 }]);