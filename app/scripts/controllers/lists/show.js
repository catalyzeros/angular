'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsSlugCtrl
 * @description
 * # ListsSlugCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsShowCtrl', ['$scope','List','Item','Cache','$routeParams',
 	function($scope,List,Item,Cache,$routeParams){

 		$scope.data = List.get($routeParams.slug);

 		$scope.addItem = function(){
 			
 			var zum = { item : {
 				list_id:    $scope.data.id,
 				item: 		this.item
 			}};

 			$scope.data.items.push(Item.create(zum));

 			Cache.delete('lists/'+$routeParams.slug);
 		};

 		$scope.deleteItem = function( itemId ){
 			$scope.data.items.pop(Item.delete(itemId));
 			Cache.delete('lists/'+$routeParams.slug);
 		};

 	}]);