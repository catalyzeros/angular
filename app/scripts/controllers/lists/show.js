'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsSlugCtrl
 * @description
 * # ListsSlugCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsShowCtrl', ['$scope','Builder',
 	
 	function($scope,Builder){

 		Builder.set();
 		
 		$scope.data = Builder.find();	

 		$scope.addItem = function(){
 			var data = { item : {
 				item: 	this.item
 			}};

 			Builder.create($scope.data.items,data);
 			this.item = '';
 		};

 		$scope.deleteItem = function( index , itemId ){
 			Builder.delete($scope.data.items,index,itemId);
 		};

 	}]);