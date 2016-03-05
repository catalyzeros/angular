'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsSlugCtrl
 * @description
 * # ListsSlugCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsShowCtrl', [
 	'$scope',
 	'List',
 	'Grocery',
 	'$routeParams',
 	function($scope,List,Grocery,$routeParams){

 		$scope.data = List.get({ id: $routeParams.slug });

 		$scope.addItem = function(){
 			var grocery = new Grocery({
 				grocery : {
 					list_id:   $scope.data.id,
 					item: 	$scope.item,
 					quantity: 	$scope.quantity
 				}
 			});

 			$scope.data.items.push(Grocery.save(grocery, function (){
 				$scope.item = '';
 				$scope.quantity = '';
 			}));

 		};


 	}]);