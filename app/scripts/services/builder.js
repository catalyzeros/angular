'use strict';

/**
 * @ngdoc service
 * @name homerunApp.builder
 * @description
 * # builder
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('Builder', function (Resource,Cache,$rootScope) {

 	var service = {};
 	var Data;

 	service.set = function (model) {
 		Data = Resource($rootScope.server+'/'+model+'/:id', { id: '@id' });
 	};

 	service.get = function (slug) {
 		return Data.get({ id : slug });
 	};

 	service.all = function () {
 		return Data.query();
 	};

 	service.create = function (datas,list) {
 		return Data.save(list).$promise.then(
 			function(promise) { 
 				datas.push(promise.data); 
 			},function(error) {
 				 console.log(error); 
 			});
 	};

 	service.delete = function (datas,index,slug) {
 		return Data.delete({id : slug }).$promise.then(
 			function(promise) {
 				datas.splice(index,1)
 			},function(error) { 
 				console.log(error); 
 			});
 	};

 	return service;

 });