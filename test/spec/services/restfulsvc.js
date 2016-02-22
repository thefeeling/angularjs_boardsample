'use strict';

describe('Service: RestfulSvc', function () {
	// instantiate service
	var RestfulSvc,
		  $httpBackend;

	// load the service's module
	beforeEach(module('boardSampleApp'));

	beforeEach(
		inject(function($injector){
			$httpBackend = $injector.get('$httpBackend');
			RestfulSvc   = $injector.get('RestfulSvc');
		})
	);
	/*
		inject(function (_RestfulSvc_) {
			RestfulSvc = _RestfulSvc_;
		})
	*/



	it('Service : RestfulSvc isDefined?', function (RestfulSvc) {
		//expect(!!RestfulSvc).toBe(true);
		expect(RestfulSvc).toBeDefined();
	});

	/*
	------------------------------------------------------------------------------------------------
	$httpBackEnd
	------------------------------------------------------------------------------------------------
	: Fake HTTP backend implementation suitable for unit testing applications that use the $http service.
	*/

	it('test http.get', function (RestfulSvc) {
		//expect(!!RestfulSvc).toBe(true);
	});

	it('test http.post', function () {
		//expect(!!RestfulSvc).toBe(true);
	});




});
