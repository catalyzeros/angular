'use strict';

/**
 * @ngdoc function
 * @name homerunApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the homerunApp
 */
 angular.module('homerunApp')
 .controller('ListsCtrl',function (Builder) {

 	Builder.set();

 	this.datas = Builder.all();

 	this.delete = function(index,listId){
 		Builder.delete(this.datas,index,listId);
 	};

 	this.add = function(){

 		var data = { list: {
 			title: this.title,
 			mode:  this.mode
 		}}; 

 		this.title = '';
 		Builder.create(this.datas,data)
 	};

 });