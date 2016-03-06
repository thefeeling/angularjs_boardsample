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
<<<<<<< HEAD
	var modelList = [];

	var BoardModelSample = {
		boardNo          : "boardNo",
		boardTitle       : "boardTitle",
		boardContent     : "boardContent",
		boardInsertDate  : "boardInsertDate",
		boardModifyDate  : "boardModifyDate"		
	}
	this.getBoardModelSample = function(){
		return BoardModelSample;
	}

=======

	/*
	* @Comment BoardModel
	*/
>>>>>>> f5dfd677929c620de22edab6f896015dbe5fd9c3
	function BoardModel(){
		this.boardNo          = "";
		this.boardTitle       = "";
		this.boardContent     = "";
		this.boardInsertDate  = "";
		this.boardModifyDate  = "";
	};
<<<<<<< HEAD
	/* 
	 * @Comment BoardModel Return Method
	 */
=======

	/*
	* @Comment new BoardModel Return
	*/
>>>>>>> f5dfd677929c620de22edab6f896015dbe5fd9c3
	this.getBoardModel = function(){
		return new BoardModel();
	};

	this.getBoardList = function(callBack){
		RestfulSvc.get({
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