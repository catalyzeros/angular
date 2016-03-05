'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsSlugCtrl
 * @description
 * # ListsSlugCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsShowCtrl', ['$scope','List','Grocery','Cache','$routeParams',
 	function($scope,List,Grocery,Cache,$routeParams){

 		$scope.data = List.get($routeParams.slug);

 		$scope.addItem = function(){
 			
 			var zum = { grocery : {
 				list_id:    $scope.data.id,
 				item: 		this.item,
 				quantity: 	this.quantity
 			}};

 			$scope.data.datas.push(Grocery.create(zum));

 			Cache.delete('lists/'+$routeParams.slug);
 		};

 		$scope.deleteItem = function( itemId ){
 			$scope.data.datas.pop(Grocery.delete(itemId));
 			Cache.delete('lists/'+$routeParams.slug);
 		};

 	}]);