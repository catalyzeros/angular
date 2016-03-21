'use strict';

/**
 * @ngdoc service
 * @name homerunApp.builder
 * @description
 * # builder
 * Factory in the homerunApp.
 */
 angular.module('homerunApp')
 .factory('Builder', function (Resource,$rootScope,ngNotify,$location) {

 	var service = {};
 	var Data;
 	var type;

 	service.set = function (url) {
 		url = (typeof url === 'undefined') ? $location.url() : url;

 		Data = Resource($rootScope.server+url+'/:id');
 		// TODO: I need an idea for making this one cool.
 		type = url.split('/').splice(-1,1)[0].slice(0,-1);
 	};

 	service.find = function (slug) {
 		return Data.get({ id : slug });
 	};

 	service.all = function () {
 		return Data.query();
 	};

 	service.create = function (datas,list) {
 		return Data.save(list).$promise.then(
 			function(promise) { 
 				datas.push(promise.data); 
 				ngNotify.set(type+' created successfuly!','success');
 			},function(error) {
 				ngNotify.set('Title '+error.data.title,'error');
 			});
 	};

 	service.delete = function (datas,index,slug) {
 		return Data.delete({id : slug }).$promise.then(
 			function(promise) {
 				datas.splice(index,1)
 				ngNotify.set(type+' deleted successfuly!','success');
 			},function(error) { 
 				console.log(error);
 			});
 	};

 	return service;

 });