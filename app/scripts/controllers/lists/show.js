'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsSlugCtrl
 * @description
 * # ListsSlugCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsShowCtrl', ['$scope','Builder','Cache','$routeParams',
 	
 	function($scope,Builder,Cache,$routeParams){

 		Builder.set('lists');
 		$scope.data = Builder.get($routeParams.slug);

 		Builder.set('items');
 		$scope.addItem = function(){
 			var data = { item : {
 				list_id:    $scope.data.id,
 				item: 		this.item
 			}};

 			Builder.create($scope.data.items,data);
 			Cache.delete('lists/'+$routeParams.slug);
 		};

 		$scope.deleteItem = function( index , itemId ){
 			Builder.delete($scope.data.items,index,itemId);
 			Cache.delete('lists/'+$routeParams.slug);
 		};

 	}]);