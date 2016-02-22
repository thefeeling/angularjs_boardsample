'use strict';

describe('Controller: ListCtrl', function () {

	// load the controller's module
	beforeEach(module('boardSampleApp'));

	var ListCtrl,
			boardServiceMock,
			scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, boardService) {
		scope = $rootScope.$new();
		boardServiceMock = boardService;
		ListCtrl = $controller('ListCtrl', {
			$scope: scope,
			boardServiceMock : boardServiceMock
			// place here mocked dependencies
		});
	}));

	it('boardSampleApp.ListCtrl.testList', function () {
		expect(scope.testList.length).toBe(3);
	});

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

				expect(boardList).toBeNull();
				expect(totalItems).toEqual(0);
			}
		})


	});
});
