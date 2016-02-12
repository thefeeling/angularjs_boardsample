'use strict';

/**
 * @ngdoc service
 * @name boardSampleApp.boardService
 * @description
 * # boardService
 * Service in the boardSampleApp.
 */
 angular.module('boardSampleApp')
 .service('boardService', ['RestfulSvc', function (RestfulSvc) {


	var boardFactoryObj = {} || new Object();
	function BoardModel(){
		this.boardNo         = "";
		this.boardTitle      = "";
		this.boardContent    = "";
		this.boardInsertDate = "";
		this.boardModifyDate = "";
	};

	this.getBoardModel = function(){
		return new BoardModel();
	};

	this.getBoardList = function(callBack){
		console.dir(callBack);
		RestfulSvc.get(
			{
				domain : 'board',
				action : 'list',
				currentPage : callBack.currentPage
			},
			callBack.successHandler,
			callBack.errorHandler
		);
	};

	this.getBoardDetail = function(){
	};

	this.deleteBoardDetail = function(){

	};

	this.updateBoardDeatil = function(){

	};
}]);