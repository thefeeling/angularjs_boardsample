'use strict';

/**
 * @ngdoc service
 * @name boardSampleApp.boardService
 * @description
 * # boardService
 * Service in the boardSampleApp.
 */
angular.module('boardSampleApp')
  .service('boardService', ['$http',function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
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

    this.getBoardList = function(){

    };

    this.getBoardDetail = function(){

    };

    this.deleteBoardDetail = function(){

    };

    this.updateBoardDeatil = function(){
        
    };
}]);