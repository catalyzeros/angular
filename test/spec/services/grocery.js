'use strict';

describe('Service: Grocery', function () {

  // load the service's module
  beforeEach(module('homerunApp'));

  // instantiate service
  var Grocery;
  beforeEach(inject(function (_Grocery_) {
    Grocery = _Grocery_;
  }));

  it('should do something', function () {
    expect(!!Grocery).toBe(true);
  });

});
