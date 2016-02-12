'use strict';

describe('Service: RestfulSvc', function () {

  // load the service's module
  beforeEach(module('boardSampleApp'));

  // instantiate service
  var RestfulSvc;
  beforeEach(inject(function (_RestfulSvc_) {
    RestfulSvc = _RestfulSvc_;
  }));

  it('should do something', function () {
    //expect(!!RestfulSvc).toBe(true);
  });

});
