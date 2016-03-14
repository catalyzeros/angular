'use strict';

/**
 * @ngdoc service
 * @name homerunApp.builder
 * @description
 * # builder
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('Builder', function (Resource,Cache,$rootScope,ngNotify) {

 	var service = {};
 	var Data;
 	var type;

 	service.set = function (model) {
 		Data = Resource($rootScope.server+'/'+model+'/:id', { id: '@id' });
 	 	type = model;
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
 				ngNotify.set(type.slice(0,-1)+' created successfuly!','success');
 			},function(error) {
 				 ngNotify.set('Title '+error.data.title,'error');
 			});
 	};

 	service.delete = function (datas,index,slug) {
 		return Data.delete({id : slug }).$promise.then(
 			function(promise) {
 				datas.splice(index,1)
 				ngNotify.set(type.slice(0,-1)+' deleted successfuly!','success');
 			},function(error) { 
 				//console.log(error);
 			});
 	};

 	return service;

 });