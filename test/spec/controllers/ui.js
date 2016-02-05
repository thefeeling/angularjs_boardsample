'use strict';

describe('Controller: UiCtrl', function () {

  // load the controller's module
  beforeEach(module('boardSampleApp'));

  var UiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UiCtrl = $controller('UiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(UiCtrl.awesomeThings.length).toBe(3);
  });
});
