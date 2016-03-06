'use strict';

describe('Controller: ListCtrl', function () {

	var ListCtrl,
			boardServiceMock,
			scope,
			restFulSvc;


	// load the controller's module
	beforeEach(module('boardSampleApp'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, boardService) {
		scope            = $rootScope.$new();
		boardServiceMock = boardService;
		ListCtrl         = $controller('ListCtrl', {
			$scope: scope
			// place here mocked dependencies
		});
	}));

 	/*
	------------------------------------------------------------------------------------------------
	Comment  : ListCtrl 정의 유무
	------------------------------------------------------------------------------------------------
	*/
	it('boardSampleApp.ListCtrl // isDefined ?', function(){
    expect(ListCtrl).toBeDefined();
	});


	it('boardSampleApp.ListCtrl.testList', function () {
		expect(scope.testList.length).toBe(3);
	});
	


 	/*
	------------------------------------------------------------------------------------------------
	Comment  : getBoardList Test(local server)
	           => Failure(2016.02)
	------------------------------------------------------------------------------------------------
	*/
	it('boardSampleApp.ListCtrl.initBoardService', function () {
		var boardList = [],
			  totalItems;

		boardServiceMock.getBoardList({
			successHandler : function (response){
				boardList  = response.boardList;
				totalItems = response.boardList[0].totalCount;

				expect(boardList.length).toBe(10);
				expect(totalItems.length).toEqual(10);				
			},
			errorHandler : function (response){
				boardList = null;
				totalItems = 0;
				if(boardList){

				}else{
					fail("Http Connect Failure");
				}
				//expect(boardList).toBeNull().and.throwError("통신 에러");
				//expect(totalItems).toEqual(0);
			}
		})
	});
});
