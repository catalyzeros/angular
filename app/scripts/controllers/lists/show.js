'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsSlugCtrl
 * @description
 * # ListsSlugCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsShowCtrl', ['$scope','Builder','$routeParams',
 	
 	function($scope,Builder,$routeParams){

 		Builder.set();
 		$scope.data = Builder.all($routeParams.slug);

 		$scope.addItem = function(){
 			var data = { item : {
 				item: 	this.item
 			}};

 			Builder.create($scope.data,data);
 		};

 		$scope.deleteItem = function( index , itemId ){
 			Builder.delete($scope.data,index,itemId);
 		};

 	}]);