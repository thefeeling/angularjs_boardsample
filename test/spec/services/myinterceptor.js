'use strict';

describe('Service: MyInterceptor', function () {

  // load the service's module
  beforeEach(module('boardSampleApp'));

  // instantiate service
  var MyInterceptor;
  beforeEach(inject(function (_MyInterceptor_) {
    MyInterceptor = _MyInterceptor_;
  }));

  it('should do something', function () {
    //expect(!!MyInterceptor).toBe(true);
  });

});
